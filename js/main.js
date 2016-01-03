
$(function() {
    $(".slower .carousel").jCarouselLite({
        btnNext: ".slower .next",
        btnPrev: ".slower .prev",
        speed: 800
    });

    $('.prev_count').click(function(e) {
        if($('> .counter', $(this).parent('div')).val() > 0)
        {
            $('> .counter', $(this).parent('div')).val($('> .counter', $(this).parent('div')).val() - 1);
        }
        return false;
    });

    $('.next_count').click(function(e) {
        $('> .counter', $(this).parent('div')).val(parseInt($('> .counter', $(this).parent('div')).val()) + 1);
        return false;
    });

    $('.payment_page li').click(function(e) {
        $('.payment_page li').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

    $('.popup .close').click(function(e) {
        $('.fade').fadeOut('slow');
        $('.popup').fadeOut('fast');
    });

    $('.fade').click(function(e) {
        $('.fade').fadeOut('slow');
        $('.popup').fadeOut('fast');
    });

    $('.userpanel li:first').click(function(e) {
        $('.fade').fadeIn('slow');
        $('.popup').fadeIn('fast');
        return false;
    });

    $("a[rel=example_group]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition' 	: 'over',
        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
});