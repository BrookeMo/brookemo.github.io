$( document ).ready(function() {

    setTimeout(function(){

    $("#name").removeClass("tracking-in-expand");
    $("#profilepic").removeClass("scale-in-center");
    $("#tagline").removeClass("swing-in-top-fwd");
    $(".link").removeClass("rotate-in-center");
    $(".circle").removeClass("swirl-in-fwd");
    $("#location").removeClass("flip-in-hor-bottom");

    }, 1000);

    $(".circle").hover(function(){
        $(this).addClass("flip-vertical-left");
        }, function(){
        $(this).removeClass("flip-vertical-left");
    });
    $("#responsive").hover(function(){
        $(this).css("z-index", "3");
        $("#dynamic").css("z-index", "2")
        $("#clean").css("z-index", "1");
    }, function(){
        $(this).css("z-index", "3");
        $("#dynamic").css("z-index", "2")
        $("#clean").css("z-index", "1");
    });
    $("#dynamic").hover(function(){
        $(this).css("z-index", "3");
        $("#responsive").css("z-index", "2")
        $("#clean").css("z-index", "1");
    }, function(){
        $(this).css("z-index", "3");
        $("#responsive").css("z-index", "2")
        $("#clean").css("z-index", "1");
    });
    $("#clean").hover(function(){
        $(this).css("z-index", "3");
        $("#responsive").css("z-index", "2")
        $("#dynamic").css("z-index", "1");
    }, function(){
        $(this).css("z-index", "3");
        $("#responsive").css("z-index", "2")
        $("#dynamic").css("z-index", "1");
    });
});
