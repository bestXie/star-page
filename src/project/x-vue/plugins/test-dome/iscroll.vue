<template>
<div class="scroll-info-wrap">
    <div class="scroll" ref="scroll">
        <div class="scroll-wrap">
            <slot></slot>
        </div>
    </div>
    <div class="top-info">
        <p v-show="status == 2" :style="{ padding: ((topDistance-20)/2) + 'px 0', opacity:  ((topDistance/60)>1?1:(topDistance/50)) }">
            <span>刷&nbsp;新</span> <i class="iconfont icon-shuaxin"></i>
        </p>
    </div>
    <div class="bottom-info">
        <p v-show="status == 4" :style="{ padding: ((botomDistance-20)/2) + 'px 0', opacity:  ((botomDistance/60)>1?1:(botomDistance/50)) }">
            加载更多 <span class="dot">····</span>
        </p>
    </div>
</div>
</template>
<script>
import iscroll from 'iscroll';

let myScroll = null;
let leave = [0, 20, 100];

export default {
    mounted() {
        myScroll = new iscroll(this.$refs.scroll, {
            probeType: 2,
            mouseWheel: true
        });
        myScroll.on('scroll', () => {
            let bottomDistance = myScroll.maxScrollY - myScroll.y;
            if (bottomDistance > 0) {
                this.botomDistance = bottomDistance;
            } else if (myScroll.y > 0) {
                this.topDistance = myScroll.y;
            }
            if ((myScroll.y > leave[0] && myScroll.y <= leave[1])) {
                if (this.status != 1) {
                    this.status = 1;
                }
            } else if (myScroll.y > leave[1]) {
                if (this.status != 2) {
                    this.status = 2;
                }
            } else if (bottomDistance > leave[0] && bottomDistance <= leave[1]) {
                if (this.status != 3) {
                    this.status = 3;
                }
            } else if (bottomDistance > leave[1]) {
                if (this.status != 4) {
                    this.status = 4;
                }
            }
        });
        myScroll.on('scrollEnd', () => {
            this.botomDistance = 0;
            this.topDistance = 0;
            if (this.status == 2 || this.status == 4) {
                this.$emit('reflash', this.status);
                this.status = 0;
            }
        });
    },
    data() {
        return {
            status: 0,
            botomDistance: 0,
            topDistance: 0,
            topStyle: {
                lineHeight: 0,
                transform: 'scale(0)'
            }
        }
    }
}
</script>
<style lang="scss">
@keyframes rotate {
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(-90deg);
    }
    50%{
        transform: rotate(-180deg);
    }
    750%{
        transform: rotate(-270deg);
    }
    100%{
        transform: rotate(-360deg);
    }
}
@keyframes dot {
	25% {
		text-indent: -2em;
	}
	50% {
		text-indent: -1em;
	}
	75% {
		text-indent: 0;
	}
}
.dot {
	font-family: Consolas, Monaco, monospace;
	display: inline-block;
	width: 4ch;
	text-indent: -3em;
	vertical-align: bottom;
	overflow: hidden;
	animation: dot 3s infinite step-start both;
}
.scroll-info-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    .bottom-info,
    .top-info {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 1;
        color: #999;
        text-align: center;
        font-size: 14px;
        span {
            display: inline-block;
        }
    }
    .top-info {
        top: 0;
        span,i{
            vertical-align: middle;
        }
        .icon-shuaxin{
            font-size: 24px;
            animation: rotate 1.4s linear infinite;
        }
    }
    .bottom-info {
        bottom: 0;
    }
    .scroll {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
        touch-action: none;
        z-index: 2;
        .scroll-wrap {
            position: absolute;
            transform: translateZ(0);
            width: 100%;
        }
    }
}
</style>
