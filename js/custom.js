$(document).ready(function () {

    // when scroll body .. sticky navbar
    $(window).scroll( function () 
    {
        var sc = $(this).scrollTop();
        if (sc > 50) {
            $('header').addClass('sticky');
        }
        else
        {
            $('header').removeClass('sticky');
        }
    });

    // Scroll To Header
    $('.nav-list .homee, .logo-home ').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.home').offset().top
        },1200);
    });

    // Scroll To About US  Section
    $('.nav-list .about, .home-scroll').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.about-us').offset().top
        },1200);
    });
    // Scroll To Our Work Section
    $('.nav-list .our, .btn-our').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top
        },1200);
    });

    // Scroll To Expertise Section
    $('.nav-list .expert').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.Expertise').offset().top
        },1200);
    });

   // Scroll To Pricing Section
    $('.nav-list .pricee').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.price').offset().top
        },1200);
    });

    // Scroll To Contact US Section
    $('.nav-list .contactt').click(function () 
    {
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        },1200);
    });
});