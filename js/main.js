
jQuery(function() {
    jQuery(".slower .carousel").jCarouselLite({
        btnNext: ".slower .next",
        btnPrev: ".slower .prev",
        speed: 800
    });

    jQuery('.prev_count').click(function(e) {
        if(jQuery('> .counter', jQuery(this).parent('div')).val() > 0)
        {
            jQuery('> .counter', jQuery(this).parent('div')).val(jQuery('> .counter', jQuery(this).parent('div')).val() - 1);
        }
        return false;
    });

    jQuery('.next_count').click(function(e) {
        jQuery('> .counter', jQuery(this).parent('div')).val(parseInt(jQuery('> .counter', jQuery(this).parent('div')).val()) + 1);
        return false;
    });
    //
    //$('.payment_page li').click(function(e) {
    //    $('.payment_page li').removeClass('selected');
    //    $(this).addClass('selected');
    //    return false;
    //});
    //
    //$('.popup .close').click(function(e) {
    //    $('.fade').fadeOut('slow');
    //    $('.popup').fadeOut('fast');
    //});
    //
    //$('.fade').click(function(e) {
    //    $('.fade').fadeOut('slow');
    //    $('.popup').fadeOut('fast');
    //});
    //
    //$('.userpanel li:first').click(function(e) {
    //    $('.fade').fadeIn('slow');
    //    $('.popup').fadeIn('fast');
    //    return false;
    //});
    //
    jQuery("a[rel=fancybox]").fancybox();
});