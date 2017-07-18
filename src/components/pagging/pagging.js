const topRefreshText = `
    <div class='topRefreshPanel'>
        <p>拉开立即刷新</p>
        <p>最后更新:今天${new Date().format('HH:ss')}</p>
    </div>`

const topRefreshingText = `
    <div class='topRefreshPanel'>
        <p>正在刷新数据中...</p>
        <p>最后更新:今天${new Date().format('HH:ss')}</p>
    </div>`


const bottomRefreshText = `
    <div class='bottomRefreshPanel'>
        <p>松开立即加载更多</p>
    </div>`


const bottomRefreshingText = `
    <div class='bottomRefreshPanel'>
        <p>正在加载更多的数据...</p>
    </div>`

sprWeb.prototype.directive('spr-scroll', {
    inserted: function (el, binding) {
        $('body').on('touchmove', function(event){
            event.preventDefault();
        });

        var startMovingTop = 0;
        var prevMovingTop = 0;
        var movingPx = 0;
        var lastTwoPoint = [0, 0];
        var isShowTopRefresh = false;
        var isShowBottomRefresh = false;
        var startMoving = false;

        //dom参数
        var topRefreshTextPanel = null;
        var bottomRefreshTextPanel = null;

        $('body').on('touchmove', function (event) {
            event.preventDefault();
        });

        $(el).on('touchstart', function(event){
            startMovingTop = event.targetTouches[0].pageY;
            console.log(startMovingTop);

            $(el).css({
                transition: "none",
                webkitTransition: "none"
            });
        });

        $(el).on('touchmove', function(event){
            var touchTop = event.targetTouches[0].pageY;
            movingPx = touchTop - startMovingTop + prevMovingTop;
            startMoving = true;

            $(el).css({
                'transform': "translateY(" + movingPx + "px)"
            });

            /*
             * 下拉刷新过程
             * */
            if(movingPx > 0){
                //添加dom
                if(isShowTopRefresh == false){
                    $(el).before(topRefreshText);
                    topRefreshTextPanel = $('.topRefreshPanel');
                }

                isShowTopRefresh = true;
                if(movingPx < 40){
                    topRefreshTextPanel.css({
                        transform: "translateY(" + (movingPx - 40) + "px)",
                        webkitTransform: "translateY(" + (movingPx - 40) + "px)"
                    });
                };
            };

            /*
             * 上拉分页刷新过程
             * */
            if(-movingPx > ele.height() - ele.parent().height() + ele.parent().offset().top && (isShowTopRefresh == false)){
                //添加dom
                if(isShowBottomRefresh == false){
                    ele.after(bottomRefreshText);
                    bottomRefreshTextPanel = $('.bottomRefreshPanel');
                }
                isShowBottomRefresh = true;
                if(-movingPx - (ele.height() - ele.parent().height() + ele.parent().offset().top) < 40){
                    bottomRefreshTextPanel.css({
                        transform: "translateY(" + (movingPx + 10) + "px)",
                        webkitTransform: "translateY(" + (movingPx + 10) + "px)"
                    });
                }
            }

            lastTwoPoint.shift();
            lastTwoPoint.push(event.originalEvent.targetTouches[0].pageY);
        });
    }
})
