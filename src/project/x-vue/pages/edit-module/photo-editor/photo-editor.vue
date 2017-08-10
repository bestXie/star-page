<style scoped>
    .photo-editor-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #7F7F7F;
    }

    .canvas {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        overflow: hidden;
    }

    .cropper-container {
        font-size: 0;
        line-height: 0;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        direction: ltr;
        -ms-touch-action: none;
        touch-action: none;
        width: 100%;
        height: 100%;
    }

    .cropper-wrap-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .cropper-canvas {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .cropper-container img {
        display: block;
        min-width: 0 !important;
        max-width: none !important;
        min-height: 0 !important;
        max-height: none !important;
        width: 100%;
        height: 100%;
        image-orientation: 0deg;
    }

    .cropper-modal {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: .5;
        background-color: #000;
    }

    .cropper-drag-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .cropper-crop-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, .4);
    }

    .cropper-view-box {
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .cropper-move {
        opacity: 0;
        background-color: #fff;
        cursor: move;
    }
</style>

<template>
    <div class="photo-editor-wrapper">
        <div class="canvas" ref="canvas">
            <div class="cropper-container">
                <div class="cropper-wrap-box">
                    <div class="cropper-canvas" ref="cropperWrap">
                        <img :src="cropperImgSrc" ref="cropperWrapImg" :style="cropperImg"/>
                    </div>
                </div>
                <div class="cropper-drag-box cropper-modal"></div>
                <div class="cropper-crop-box" :style="cropStyle">
                    <div class="cropper-view-box">
                        <img :src="cropperImgSrc" ref="cropperViewImg" :style="cropperImg"/>
                    </div>
                </div>
                <div class="cropper-drag-box cropper-move"
                     @touchstart.prevent="start"
                     @touchmove.prevent="move"
                     @touchend.prevent="end"
                     ref="cropperMove"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    export default {
        components: {},
        data: function () {
            return {
                photo: {},
                editor: {},
                imgClient: {
                    width: '',
                    height: ''
                },
                cropStyle: {},
                transform: {},
                cropperImg: {},
                cropperImgTransform: {
                    x: 0,
                    y: 0
                },
                cropperImgSrc: '',
                imgData: '',
                cropWrapper: {
                    width: 0,
                    height: 0
                }
            }
        },
        props: {},
        computed: {},
        mounted: function () {
            this.init();
        },
        methods: {
            onMouseWheel(){
                let _this = this;
                let $cropperMove = this.$refs.cropperMove;
                addEvent($cropperMove, 'mousewheel', onMouseWheel);
                addEvent($cropperMove, 'DOMMouseScroll', onMouseWheel);
                function onMouseWheel(ev) {
                    ev = ev || window.event;
                    let down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
                    if (down) {
                        _this.setScaleStyle(_this.editor.scale - 0.1);
                    } else {
                        _this.setScaleStyle(_this.editor.scale + 0.1);
                    }
                    if (ev.preventDefault) {
                        ev.preventDefault();
                    }
                    return false;
                }

                function addEvent(obj, xEvent, fn) {
                    if (obj.attachEvent) {
                        obj.attachEvent('on' + xEvent, fn);
                    } else {
                        obj.addEventListener(xEvent, fn, false);
                    }
                }
            },
            init(){
                this.imgData = this.getImgData();
                if (!this.imgData.img_src) {
                    console.log('获取图片失败，请重试');
                    return false;
                }
                this.render();
                this.setPhotoParams();
                this.onMouseWheel();
            },
            render(){
                this.imgDataB = (this.imgData.crop_w / 750);
                this.imgData.crop_w = this.imgData.crop_w * this.imgDataB;
                this.imgData.crop_h = this.imgData.crop_h * this.imgDataB;
                this.cropperImgSrc = this.imgData.img_src;
            },
            getImgBase64(img){
                let _this = this;
                let image = new Image();
                image.src = result;
                image.onload = function () {
                    _this.imgOnload(this)
                };
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = img.img_w;
                canvas.height = img.img_h;
                ctx.drawImage(img, 0, 0, img.img_w, img.img_h);
                return canvas.toDataURL("image/jpeg", 0.8);
            },
            getImgData(){
                let imgData = getStore('photoEditor') || '';
                return imgData ? JSON.parse(imgData) : {};
            },
            getCropParams(crop_w, crop_h, width, height){
                let w, h;
                if (crop_w >= width) {
                    w = width;
                    h = crop_h * (width / crop_w);
                    if (h > height) {
                        w = w * (height / h);
                        h = height;
                    }
                } else {
                    w = crop_w;
                    h = crop_h;
                    if (h > height) {
                        w = w * (height / h);
                        h = height;
                    }
                }
                return {width: w, height: h}
            },

            setPhotoParams(){
                let $canvas = this.$refs.canvas;
                let $cropperViewImg = this.$refs.cropperViewImg;
                let $cropperWrapImg = this.$refs.cropperWrapImg;
                let $cropperWrap = this.$refs.cropperWrap;

                this.canvasClient = {
                    width: $canvas.clientWidth,
                    height: $canvas.clientHeight
                };

                this.cropWrapper = this.getCropParams(this.imgData.crop_w, this.imgData.crop_h, this.canvasClient.width, this.canvasClient.height);
                this.cropperImg = this.getCropParams(this.imgData.img_w, this.imgData.img_h, this.canvasClient.width, this.canvasClient.height);

                let transformX = this.cropperImg.width < this.canvasClient.width ? (this.canvasClient.width - this.cropperImg.width) / 2 : 0;
                let transformY = this.cropperImg.height < this.canvasClient.height ? (this.canvasClient.height - this.cropperImg.height) / 2 : 0;
                let cropStyleX = (this.canvasClient.width - this.cropWrapper.width) / 2;
                let cropStyleY = (this.canvasClient.height - this.cropWrapper.height) / 2;
                let cropperImgTransformX = transformX - cropStyleX;
                let cropperImgTransformY = transformY - cropStyleY;

                this.cropperImgTransform = {
                    x: cropperImgTransformX,
                    y: cropperImgTransformY,
                    cy: cropperImgTransformY,
                    cx: cropperImgTransformX,
                };

                $cropperWrapImg.style.height = $cropperViewImg.style.height = this.cropperImg.height + 'px';
                $cropperWrapImg.style.width = $cropperViewImg.style.width = this.cropperImg.width + 'px';

                this.cropStyle = {
                    'transform': 'translate(' + cropStyleX + 'px' + ',' + cropStyleY + 'px)',
                    height: this.cropWrapper.height + 'px',
                    width: this.cropWrapper.width + 'px',
                };


                $cropperWrap.style.webkitTransform = 'translate(' + transformX + 'px,' + transformY + 'px)';
                $cropperViewImg.style.webkitTransform = 'translate(' + (this.cropperImgTransform.x) + 'px,' + ( this.cropperImgTransform.y) + 'px)';

                this.transform = {
                    scale: 1,
                    x: transformX,
                    y: transformY
                };

                this.setEditorInit();

            },
            setEditorInit(){
                this.photo = {
                    startX: 0,
                    startY: 0,
                    endX: 0,
                    endY: 0,
                };

                this.editor = {
                    startX1: '',
                    startX2: '',
                    startY1: '',
                    startY2: '',
                    moveY1: '',
                    moveY2: '',
                    strtSqrt: '',
                    moveSqrt: '',
                    startX: '',
                    endX: '',
                    fingers: '',
                    transformX: 0,
                    transformY: 0,
                };
            },
            start (ev) {
                const touchstart1 = ev.touches[0];
                const touchstart2 = ev.touches[1];

                this.editor.startX2 = '';
                this.editor.startY2 = '';
                this.editor.strtSqrt = '';
                this.editor.transformX = 0;
                this.editor.transformY = 0;
                this.editor.cropperImgTransformX = 0;
                this.editor.cropperImgTransformY = 0;
                this.editor.startX1 = touchstart1.pageX || '';
                this.editor.startY1 = touchstart1.pageY || '';
                this.editor.fingers = 1;
                this.editor.scale = 1;
                if (ev.touches.length >= 2) {
                    this.editor.fingers = 2;
                    this.editor.startX2 = touchstart2.pageX || '';
                    this.editor.startY2 = touchstart2.pageY || '';
                    this.editor.strtSqrt = this.getSqrt(touchstart1.pageX, touchstart1.pageY, touchstart2.pageX, touchstart2.pageY);
                }
            },
            move (ev) {
                ev.stopPropagation();
                const touchstart1 = ev.touches[0];
                const touchstart2 = ev.touches[1];
                this.editor.moveX1 = touchstart1.pageX || '';
                this.editor.moveY1 = touchstart1.pageY || '';
                if (ev.touches.length >= 2) {
                    this.editor.fingers = 2;

                }

                if (this.editor.fingers === 2) {
                    if (touchstart2) {
                        if (this.editor.strtSqrt) {
                            this.editor.moveSqrt = this.getSqrt(touchstart1.pageX, touchstart1.pageY, touchstart2.pageX, touchstart2.pageY);
                            this.setScaleStyle(this.editor.moveSqrt / this.editor.strtSqrt)
                        } else {
                            this.editor.startX2 = touchstart2.pageX || '';
                            this.editor.startY2 = touchstart2.pageX || '';
                            this.editor.strtSqrt = this.getSqrt(touchstart1.pageX, touchstart1.pageY, touchstart2.pageX, touchstart2.pageY);
                        }
                    }
                } else {
                    this.setTranslateStyle(touchstart1.pageX - this.editor.startX1, touchstart1.pageY - this.editor.startY1)
                }

            },
            setScaleStyle(scale){
                this.editor.scale = scale;
                this.editor.cropperImgHeight = this.cropperImg.height * scale;
                this.editor.cropperImgwidth = this.cropperImg.width * scale;
                this.$refs.cropperWrapImg.style.height = this.$refs.cropperViewImg.style.height = this.editor.cropperImgHeight + 'px';
                this.$refs.cropperWrapImg.style.width = this.$refs.cropperViewImg.style.width = this.editor.cropperImgwidth + 'px';

            },
            setTranslateStyle(x, y){
                this.editor.transformX = this.transform.x + (x || 0);
                this.editor.transformY = this.transform.y + (y || 0);
                this.editor.cropperImgTransformX = this.cropperImgTransform.x + (x || 0);
                this.editor.cropperImgTransformY = this.cropperImgTransform.y + (y || 0);
                this.$refs.cropperWrap.style.webkitTransform = 'translateX(' + this.editor.transformX + 'px) translateY(' + this.editor.transformY + 'px)';
                this.$refs.cropperViewImg.style.webkitTransform = 'translateX(' + this.editor.cropperImgTransformX + 'px) translateY(' + this.editor.cropperImgTransformY + 'px)';
            },
            end () {
                this.transform.x = this.editor.transformX !== 0 ? this.editor.transformX : this.transform.x;
                this.transform.y = this.editor.transformY !== 0 ? this.editor.transformY : this.transform.y;

                this.cropperImgTransform.x = this.editor.cropperImgTransformX !== 0 ? this.editor.cropperImgTransformX : this.cropperImgTransform.x;
                this.cropperImgTransform.y = this.editor.cropperImgTransformY !== 0 ? this.editor.cropperImgTransformY : this.cropperImgTransform.y;
                console.log(this.editor.scale);
                if (this.editor.scale !== 1) {
                    this.cropperImg.height = this.editor.cropperImgHeight;
                    this.cropperImg.width = this.editor.cropperImgwidth;
                }
                this.saveCropperImg()
            },
            getSqrt: function (x1, y1, x2, y2) {
                let a = x1 - x2;
                let b = y1 - y2;
                return Math.sqrt(a * a + b * b);
            },
            saveCropperImg () {
                this.$store.commit('updateLoadingStatus', {show: true, tips: '图片裁剪中 请稍后'});
                let image = this.$refs.cropperViewImg;
                let b = this.imgDataB;
                let height = this.cropperImg.height;
                let width = this.cropperImg.width;
                let c_w = this.imgData.crop_w;
                let c_h = this.imgData.crop_h;
                let sx = this.cropperImgTransform.x;
                let sy = this.cropperImgTransform.y;
                let canvas = document.createElement('canvas');
                let b2 = this.imgData.crop_w / this.cropWrapper.width;
                canvas.width = c_w / b;
                canvas.height = c_h / b;
                console.log(width / b, height / b);
                let ctx = canvas.getContext('2d');
                ctx.drawImage(image, sx / b, sy / b, (width / b) * b2, (height / b) * b2);
                setStore('photoEditorEd', {
                    img_w: c_w / b,
                    img_h: c_h / b,
                    img_src: canvas.toDataURL()
                });
                this.$store.commit('updatePhotoEditorEd', true);
                this.$router.go(-1);
            },
        }
    }

</script>