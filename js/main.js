$('#view-work').on('click', function(){
    const portfolio = $("#portfolio").position().top;

    $('html,body').animate({
        scrollTop: portfolio
    }, 900);
});