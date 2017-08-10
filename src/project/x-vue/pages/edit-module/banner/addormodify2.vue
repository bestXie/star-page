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
    .input-file-img{
        /*width: 100%;*/
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
                        <div class="input-file-img-box" v-if="inputFileImg" >
                            <img class="input-file-img"  :src="inputFileImg" alt="">
                        </div>
                        <input class="input-file-uoload" type="file" @change="inputFileUpload($event)"
                               accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"/>
                    </div>
                </section>
            </scroller>
        </section>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    export default {
        name: 'page_banner_index',
        components: {},
        data () {
            return {
                moduleList: [],
                toastData: {
                    show: true,
                    content: '点击查看快照预览',
                    type: 'snapshot'
                },
                inputFileImg: ''
            }
        },
        mounted () {
        },
        computed: {},
        methods: {
            toastCLick(){

            },
            inputFileUpload(event){
                alert(event)
                let files = event.target.files || event.dataTransfer.files;
                if (!files.length) return;
                this.onFileChange(files)
            },
            onFileChange (file) {

                let _this = this;
                let reader = null;
                let leng = file.length;
                if (typeof FileReader === 'undefined') {
                    alert('您的浏览器不支持图片上传，请升级您的浏览器');
                    return false;
                }

                for (let i = 0; i < leng; i++) {
                    if (file[i].size > 5 * 1024 * 1024) {
                        alert("你上传的文件太大了！");
                        return false
                    }
                    reader = new window.FileReader();
                    reader.readAsDataURL(file[i]);
                    reader.onload = function (e) {
                        _this.createImage(e.target.result)
//                        console.log(e.target.result)
                    }
                }
            },
            createImage (result) {
                    let _this=this;
                    let image = new Image();
                    image.src = result;
                    image.onload = function() {
                        let expectWidth = this.naturalWidth;
                        let expectHeight = this.naturalHeight;
                        if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                            expectWidth = 800;
                            expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                        } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                            expectHeight = 1200;
                            expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                        }
                        let canvas = document.createElement("canvas");
                        let ctx = canvas.getContext("2d");
                        canvas.width = expectWidth;
                        canvas.height = expectHeight;
                        ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                        let base64 = null;
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
                        base64 = canvas.toDataURL("image/jpeg", 0.8);
                        _this.inputFileImg=base64
                        console.log(base64);
                    };
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
            }
        }
    }
</script>

