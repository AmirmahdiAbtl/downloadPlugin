(function($){
    $.fn.slider = function(useroption){
        var option = $.extend({
            // default argument
            img : ["image/slider1.jpg","image/slider2.jpg","image/slider3.jpg"],
            arr : "image/arrow.png",
            arrowEnable : true,
            timerEnable : true,
            time : 2000
        },useroption)
        this.each(function (){
            let i = 0;
            var header = $(this);
            var slider = $(".slider");
            // let arrowHeight = $(".slider").height();
            // var arrowWidth = $(".slider").width();
            // var arrowRight = $("<img>").attr("src",option.arr).addClass("arrowRight").css({
            //     height : arrowHeight/8.75,
            //     width : arrowWidth/37.98
            // })
            // var arrowLeft = $("<img>").attr("src",option.arr).addClass("arrowLeft").css({
            //     height : arrowHeight/8.75,
            //     width : arrowWidth/37.98
            // })
            
            var arrowRight = $("<img>").attr("src",option.arr).addClass("arrowRight");
            var arrowLeft = $("<img>").attr("src",option.arr).addClass("arrowLeft");
            var img = $("<img>").attr("src",option.img[i]).addClass("sliderimg");
            var buttonPack = [];
            slider.append(img);
            if(option.arrowEnable === true){
                slider.append(arrowRight).append(arrowLeft);
            }
            header.append(slider);
            if(option.arrowEnable === true){
                arrowRight.click(function (){
                    i++;
                    var p = i;
                    if(i === option.img.length){
                        i = 0;
                    }
                    img.attr("src",option.img[i]);
                    slider.append(img).append(arrowRight).append(arrowLeft);
                    header.append(slider);
                });
                arrowLeft.click(function (){
                    i--;
                    var p = i;
                    if(i === -1){
                        i = option.img.length -1;
                    }
                    img.attr("src",option.img[i]);
                    slider.append(img).append(arrowRight).append(arrowLeft);
                    header.append(slider);
                });
            }
            if(option.timerEnable === true){
                setInterval(function (){
                    i++;
                    var p =i;
                    if(i === option.img.length){
                        i = 0;
                    }
                    img.attr("src",option.img[i]);
                    slider.append(img);
                    if(option.arrowEnable === true){
                        slider.append(arrowRight).append(arrowLeft);
                    }
                    header.append(slider);
                },option.time);
            }
        });
    }
})(jQuery)