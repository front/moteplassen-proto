jQuery(document).ready(function($) {
    $('html').addClass('js');

    // Toggle program day.
    var $programNav = $('.program--nav');
    $('a', $programNav).click(function(e) {
        if (!$(this).hasClass('active')) {
            var dayId = $(this).attr('href');

            $('a.active', $programNav).removeClass('active');
            $('.program--day.active').removeClass('active');

            $(this).addClass('active');
            $(dayId).addClass('active');
        };
        e.preventDefault();
    });
});
