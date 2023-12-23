var parallaxBkImg = function() {
    $(window).on('load resize', function() {
        $(window).on('load scroll', function(){
            var $winTop = $(window).scrollTop();
            var $target = $('.cd-fixed-bg');
            var $winWidth = $(window).width();
            if($winWidth < 736) {
                $target.each(function(index){
                    var $position = $winTop - $target.eq(index).offset().top;
                    if($winTop > $target.eq(index).offset().top - 800) {
                        $target.eq(index).css({
                            'background-position-y': $position * .4
                        });
                    }
                });
            }
        });
    });
}();
