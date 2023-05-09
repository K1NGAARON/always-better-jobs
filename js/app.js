// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const headerLogo = $('.header .logo');
    const darkHeader = document.querySelector('.header.dark');

    if (darkHeader) {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        }
    } else {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/logo-white.png")
        }
    }
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

$('.small-menu-content .nav').click(closeMenu);

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});