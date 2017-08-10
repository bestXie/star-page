<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .banner-addormodify-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .banner-addormodify-box {
        padding-top: .2rem;

    }

    .bar-add-img-wrapper {
        width: 100%;
        height: 1.8rem;
        background: #fff;
    }

    .bar-add-img-tips-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bar-add-img-tips-box {
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        flex-direction: column;
    }

    .bar-add-img-tips-icon {
        width: .74rem;
        height: .74rem;
        background: url("../../../images/common/icon_common_addImage_white.png") center no-repeat;
        background-size: 100%;
    }

    .bar-add-img-tips {
        margin-top: .15rem;
        font-size: .24rem;
        color: #8f8e94;
    }

    .input-file-uoload-box {
        position: relative;
    }

    .input-file-uoload {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .input-file-img-box {
        width: 100%;
        height: 100%;
        background: #F92467;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .input-file-img {
        max-width: 100%;
        max-height: 100%;
        font-size: 0;
    }

</style>

<template>
    <div class="wrapper">
        <section class="banner-addormodify-wrapper">
            <scroller>
                <section class="banner-addormodify-box">
                    <div class="h-30"></div>
                    <div class="bar-container-wrapper">

                        <div class="bar-container-item-box x-border-1px-bottom">
                            <div class="bar-container-item-l">
                                <div class="input-label">图片标题</div>
                            </div>
                            <div class="bar-container-item-r">
                                <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off"
                                       spellcheck="false"
                                       type="text" placeholder="选填 （15个以内）" maxlength="15">
                            </div>
                        </div>
                        <div class="bar-container-item-box x-border-1px-bottom">
                            <div class="bar-container-item-l">
                                <div class="input-label">图片链接</div>
                            </div>
                            <div class="bar-container-item-r">
                                <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off"
                                       spellcheck="false"
                                       type="text" placeholder="请填写链接地址" maxlength="100">
                            </div>
                        </div>
                    </div>
                    <div class="h-20"></div>
                    <div class="bar-add-img-wrapper input-file-uoload-box">

                        <div class="bar-add-img-tips-wrapper x-flex-center" v-if="!inputFileImg">
                            <div class="bar-add-img-tips-box">
                                <div class="bar-add-img-tips-icon"></div>
                                <div class="bar-add-img-tips">上传图图片　宽375高90的模块</div>
                            </div>
                        </div>
                        <div class="input-file-img-box" v-if="inputFileImg">
                            <img class="input-file-img" :src="inputFileImg" alt="">
                        </div>
                        <input class="input-file-uoload" type="file" ref="inputFile" @change="inputFileUpload($event)"
                               accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"/>
                    </div>
                </section>
            </scroller>
        </section>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    import {mapGetters} from 'vuex';
    export default {
        name: 'page_banner_index',
        components: {},
        data () {
            return {
                moduleList: [],
                inputFileImg: '',
                crop: {},
            }
        },
        mounted () {
            if (this.photoEditorEd) {
                let imgData = this.getImgData();
                this.inputFileImg = imgData.img_src
            }
            this.crop = {
                w: 750,
                h: 180
            }
        },
        computed: {
            ...mapGetters([
                'photoEditorEd',
            ])
        },
        methods: {
            inputFileUpload(event){
                let files = event.target.files || event.dataTransfer.files;

                if (!files.length) {
                    return;
                }
                let file = files[0];
                if (file.size > 5 * 1024 * 1024) {
                    this.$store.commit('tostError', {content: '你上传的文件太大了'});
                    this.clearInputFile();
                    return false
                }
                if (!/image\/\w+/.test(file.type)) {
                    this.$store.commit('tostError', {content: '文件格式错误'});
                    this.clearInputFile();
                    return false;
                }
                this.onFileChange(file)
            },
            getImgData(){
                let imgData = getStore('photoEditorEd') || '';
                return imgData ? JSON.parse(imgData) : {};
            },
            clearInputFile(){
                this.$refs.inputFile.value = ''
            },
            onFileChange (file) {
                let _this = this, fr = null;
                if (typeof FileReader === 'undefined') {
                    this.$store.commit('tostError', {content: '您的浏览器不支持图片上传，请升级您的浏览器'});
                    this.clearInputFile();
                    return false;
                }
                this.$store.commit('updateLoadingStatus', {show: true, tips: '图片加载中 请稍后'});
                fr = new window.FileReader();
                fr.readAsDataURL(file);
                fr.onload = function (e) {
                    _this.createImage(e.target.result)
                };
                fr.onerror = function (e) {
                    this.$store.commit('tostError', {content: '图片读取失败'});
                    this.clearInputFile();
                    this.$store.commit('updateLoadingStatus');
                    return false;
                }
            },
            createImage (result) {
                let _this = this;
                let image = new Image();
                image.src = result;
                image.onload = function () {
                    _this.imgOnload(this)
                };
            },
            imgOnload(img){
                let img_w = img.width;
                let img_h = img.height;
                if (img_w < this.crop.w || img_h < this.crop.h) {
                    this.$store.commit('tostError', {content: '请上传宽度大于' + this.crop.w + '高度大于' + this.crop.h + '的图片'});
                    this.clearInputFile();
                    this.$store.commit('updateLoadingStatus', {show: false});
                    return false;
                }
                setStore('photoEditor', {
                    img_w: img_w,
                    img_h: img_h,
                    img_src: img.src,
                    crop_w: this.crop.w,
                    crop_h: this.crop.h,
                });
                this.$router.push('editmodule_photo_editor')
            },
            imgScale: function (imgUrl, quality) {
                let img = new Image();
                let _this = this;
                let canvas = document.createElement('canvas');
                let cxt = canvas.getContext('2d');
                img.src = imgUrl;
                img.onload = function () {
                    let width = img.naturalWidth / quality;
                    let height = img.naturalHeight / quality;
                    canvas.width = width;
                    canvas.height = height;
                    cxt.drawImage(this, 0, 0, width, height);
                    _this.imgArr.push({"src": canvas.toDataURL('image/jpeg')});
                }
            },
            rotateImg: function (img, direction, canvas) {
                let min_step = 0;
                let max_step = 3;
                if (img == null)return;
                let height = img.height;
                let width = img.width;
                let step = 2;
                if (step == null) {
                    step = min_step;
                }
                if (direction == 'right') {
                    step++;
                    step > max_step && (step = min_step);
                } else {
                    step--;
                    step < min_step && (step = max_step);
                }
                let degree = step * 90 * Math.PI / 180;
                let ctx = canvas.getContext('2d');
                switch (step) {
                    case 0:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0);
                        break;
                    case 1:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, 0, -height);
                        break;
                    case 2:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, -height);
                        break;
                    case 3:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, 0);
                        break;
                }

                //修复ios上传图片的时候 被旋转的问题
                /*if(Orientation != "" && Orientation != 1){
                 switch(Orientation){
                 case 6://需要顺时针（向左）90度旋转
                 _this.rotateImg(this,'left',canvas);
                 break;
                 case 8://需要逆时针（向右）90度旋转
                 _this.rotateImg(this,'right',canvas);
                 break;
                 case 3://需要180度旋转
                 _this.rotateImg(this,'right',canvas);//转两次
                 _this.rotateImg(this,'right',canvas);
                 break;
                 }
                 }*/
            }
        }
    }
</script>

