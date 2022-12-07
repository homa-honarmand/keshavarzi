(function($)
{
    $.fn.uNav = function(options)
    {
        return this.each(function(){
            var navbar = $(this);
            var nav = navbar.find('nav');
            var burger = navbar.find('> button');
            var items = nav.find('> a, > div');

            navbar.addClass('unav');
            burger.addClass('unav-burger');
            items.addClass('unav-item');
            $('div.unav-item').addClass('unav-dropdown');
            $('.unav-dropdown > div').addClass('unav-dropdown-menu');

            burger.on('click', function(){
                $('nav').toggleClass('unav-sidebar-show');
                $('.unav-burger').toggleClass('unav-burger-open');
            });

            $('.unav-dropdown').on('click', function(e){
                e.preventDefault();
                $(this).toggleClass('is-active');
                $(this).find('.unav-dropdown-menu').toggleClass('is-active')
                                                   .on('click', function(e){
                                                        e.stopPropagation();
                                                   });
            });
        });
    }

})(jQuery);
