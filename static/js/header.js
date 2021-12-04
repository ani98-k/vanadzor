$(".nav-menu-button").on("click", function(){
    if($(this).hasClass('clicked')){
        $('.nav-menu-button').removeClass('clicked')
        $('#nav_mobile').removeClass('nav-mobile-show')
        $("body").css({"overflow-y":"auto"});
        return 
    }
    $('.nav-menu-button').addClass('clicked')
    $('#nav_mobile').addClass('nav-mobile-show')
    $("body").css({"overflow-y":"hidden"});
});