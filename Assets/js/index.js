$( document ).ready(function() {

    setTimeout(function(){

    $("#name").removeClass("tracking-in-expand");
    $("#profilepic").removeClass("scale-in-center");
    $("#tagline").removeClass("swing-in-top-fwd");
    $(".link").removeClass("rotate-in-center");
    $(".circle").removeClass("swirl-in-fwd");
    $("#location").removeClass("flip-in-hor-bottom");
    $(".portfoliodiv").removeClass("swing-in-top-fwd");

    }, 1000);

    $(".circle").hover(function(){
        $(this).addClass("flip-vertical-left");
        $(this).css("z-index", "3");
        }, function(){
        $(this).removeClass("flip-vertical-left");
        $(this).css("z-index", "3");
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
    $("#firstproject").hover(function(){
        $("#starwarsdescription").css("display", "block");
        $("#starwarsdescription").addClass("fade-in-fwrd");
    }, function(){
        $("#starwarsdescription").removeClass("fade-in-fwrd");
        $("#starwarsdescription").css("display", "none");
    });
    $("#secondproject").hover(function(){
        $("#weddingdescription").css("display", "block");
        $("#weddingdescription").addClass("fade-in-fwrd");
    }, function(){
        $("#weddingdescription").removeClass("fade-in-fwrd");
        $("#weddingdescription").css("display", "none");
    });
    $("#thirdproject").hover(function(){
        $("#accessibledescription").css("display", "block");
        $("#accessibledescription").addClass("fade-in-fwrd");
    }, function(){
        $("#accessbiledescription").removeClass("fade-in-fwrd");
        $("#accessibledescription").css("display", "none");
    });
    $("#fourthproject").hover(function(){
        $("#memorydescription").css("display", "block");
        $("#memorydescription").addClass("fade-in-fwrd");
    }, function(){
        $("#memorydescription").removeClass("fade-in-fwrd");
        $("#memorydescription").css("display", "none");
    });
});
