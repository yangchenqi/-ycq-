$(function() {
    var k = $(window).height();
    var flag = false;
    //fullpage()方法里面接收json对象形式
    $("#fullpage").fullpage({
        //是否显示项目导航
        navigation: true,
        // 字符串，项目导航的位置，可选left或right
        navigationPosition: 'right',
        scrollingSpeed: 1200,
        //afterLoad:滚动到某一屏的回调函数,onchorLink是锚链接的名称，index是序号，从1开始计算
        afterLoad: function(onchorLink, index) {
            if (index == 2 && flag == false) {
                $(".search").show().animate({ "right": 370 }, 1500,
                    function() {
                        //沙发两个字显示出来
                        $(".search-wrods").animate({ "opacity": 1 }, 500, function() {
                            $(".search").hide();
                            //图片改变位置，并且变小
                            $(".search-02-1").show().animate({ "height": 30, "right": 250, }, 1000, function() {
                                flag = true; //flag=true说明所有的动画执行完毕
                            });
                            //同时沙发变大
                            $(".goods-02").show().animate({ "height": 218 }, 1000);
                            //同时白色文字显示出来
                            $(".words-02").show().animate({ "opacity": 1 }, 500);

                        });
                    });

            }
        },
        //刚开始滚动屏幕就触发的回调函数onLeave
        onLeave: function(index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 && flag == true) {
                $(".cover").show();
                //沙发显示并且往第三幕跑，白色盒子显示
                $(".shirt-02").show().animate({ "bottom": -(k - 200), "width": 207, "left": 310 }, 2000, function() {
                    $(".img-01-a").animate({ "opacity": 1 }, 500, function() {
                        $(".btn-01-a").animate({ "opacity": 1 });
                    })
                });

            };
            //第三屏幕到第四
            if (index == 3 && nextIndex == 4) {

                //沙发显示并且往第4幕跑， 
                $(".shirt-02").hide();
                // 沙发的距离=当前屏幕的高度-250+第三屏幕的50px,bottom向下的话是负值
                $(".t1f").show().animate({ "bottom": -((k - 250) + 50), "left": 280 }, 1000, function() {
                    $(this).hide(); //动画执行之后，自动隐藏
                    $(".car-img").show();
                    //easeInElastic是缓动动画，效果更好玩儿点
                    $(".car").animate({ "left": 3500 }, 4000, "easeInElastic", function() {
                        $(".note").show();
                        $(".note-img").animate({ "opacity": 1 }, 1000);
                    });
                });


            }

        }

    });



});