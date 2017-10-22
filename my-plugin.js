/**
 * Created by "zhangHeng" on 2017/10/21 0021.
 */
(function ($) {
    $.fn.extend({
        choice: function (options) {
            var defaults = {  //初始化defaults对象
                speed: 2000
            };
            var opt = $.extend({}, defaults, options);
            return this.each(function(){ //这个表示的是只要这个元素匹配我就让他执行这个函数
                var $this = $(this);
                // console.log($this)
                var Id=$this.attr('id');
                // console.log(Id)
                var $oChs = $('#'+Id+' .first_box');
                var $oLis = $oChs.children();
                var $oDiv = $('#'+Id+' .second_box');
                console.log($oDiv)
                // var boxW = parseFloat($oDiv.outerWidth()); //这个是div总的宽度
                // var disTan = $oDiv.css('left');  //这个是定位的left的值
                // console.log(disTan)
                var $oPs = $oDiv.children();
                var disTan = parseFloat($oPs.css('width'));
                // console.log(disTan);
                // var index = $oPs.index();
                // console.log(index);
                $oLis.each(function () {
                    // console.log('22222222');
                   var  _this = $(this);
                    $(this).click(function () {
                        $oPs.each(function(){
                            var index = $(this).index();
                            console.log(index);
                           if(_this.index()===$(this).index()){
                               $oDiv.animate({left:-disTan * index }, options.speed);
                               // console.log($oDiv.css('left'))
                           }
                        })


                    })

                });
            })


        }

    })


})(jQuery);