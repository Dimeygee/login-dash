$(function(){
    // sidebar display
    $(".left_icons a .fa-bars").click(function(){
        $(".sidebar").css({"left": "0"})
    })
    $(".sidebar .close_bar .fa-times").click(function(){
        $(".sidebar").css({"left": "-400px"})
    })
})