$(function(){

    $('.header_burger').click(function(){
        $('.header_burger,.menu').toggleClass('activ')
        $('body').toggleClass('scroll')
    })
})