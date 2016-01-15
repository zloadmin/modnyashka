
$j(function() {
    $j(".slower .carousel").jCarouselLite({
        btnNext: ".slower .next",
        btnPrev: ".slower .prev",
        speed: 800
    });

    $j('.prev_count').click(function(e) {

        if($j('> .counter', $j(this).parent('div')).val() > 0)
        {
            $j('> .counter', $j(this).parent('div')).val($j('> .counter', $j(this).parent('div')).val() - 1);
        }

        this.submit()
    });

    $j('.next_count').click(function(e) {

        $j('> .counter', $j(this).parent('div')).val(parseInt($j('> .counter', $j(this).parent('div')).val()) + 1);
        this.submit();
    });
    //
    //$('.payment_page li').click(function(e) {
    //    $('.payment_page li').removeClass('selected');
    //    $(this).addClass('selected');
    //    return false;
    //});
    //
    $j('.popup .close').click(function(e) {
        $j('.fade').fadeOut('slow');
        $j('.popup').fadeOut('fast');
    });

    $j('.fade').click(function(e) {
        $j('.fade').fadeOut('slow');
        $j('.popup').fadeOut('fast');
    });

    $j('#popsinglup').click(function(e) {
        $j('.fade').fadeIn('slow');
        $j('.popup').fadeIn('fast');
        return false;
    });

    $j("a[rel=fancybox]").fancybox();
});