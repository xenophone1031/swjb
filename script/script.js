$(".open-modal").click(function(){
    $(".modal").css("display","block")
    $(".modal").show();
})

$(".close-modal").click(function(){
    $(".modal").css("display","none")
    $(".modal").hide();
})

$(".btn-notice").click(function(){
    $(".notice").show()
    $(".gal").hide()

    $(".btn-notice").css("background-color", "brown")
    $(".btn-gal").css("background-color", "#cccccc")

})

$(".btn-gal").click(function(){
    $(".gal").show()
    $(".notice").hide()

    $(".btn-gal").css("background-color", "brown")
    $(".btn-notice").css("background-color", "#cccccc")

})

$(".gnb>li").mouseenter(function(){
    $(this).children(".sub").slideDown();
})

$(".gnb>li").mouseenter(function(){
    $(this).children(".sub").slideUp();
})