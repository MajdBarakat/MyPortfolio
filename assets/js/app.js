$(document).ready(function(){
    
    var burger = $(".burger");
    var line1 = $(".line1");
    var line2 = $(".line2");
    var line3 = $(".line3");
    var mb1 = $("#mb1");
    var mb2 = $("#mb2");
    var mb3 = $("#mb3");
    var navMenu = $(".nav-menu");
    var menuBtns = $(".nav-menu li a");

    $(window).resize(function(){location.reload();});

    function slideIn(v1,v2,v3){
        v1.transition({x:'0vw'});
        v2.transition({x:'0vw',delay: 200});
        v3.transition({x:'0vw',delay: 400});
    };
    
    function slideOut(v1,v2,v3){
        v1.transition({x:'100vw',delay: 600});
        v2.transition({x:'100vw',delay: 400});
        v3.transition({x:'100vw',delay: 200});
    };
    
    burger.click(function(){
        if(burger.attr("id") == "OFF"){
            burger.attr("id","ON");
            line1.transition({rotate:'45', y:"1.3rem"});
            line2.transition({x:"-50px",opacity:0});
            line3.transition({rotate:'-45deg' , y:"-1.3rem"});
            slideIn(mb1,mb2,mb3);
            navMenu.transition({x:'0vw',delay: 600});
            menuBtns.transition({y:"0px",delay:700});
        }
        else{
            burger.attr("id","OFF")
            line1.transition({rotate:'-0', y:"0"})
            line2.transition({x:"0",opacity:1})
            line3.transition({rotate:'0' , y:"0"})
            slideOut(mb1,mb2,mb3);
            navMenu.transition({x:'100vw'});
        }
    });

    $('#ContactMe').click(function(){
        burger.trigger("click");
        window.navigate("contact-me.html");
    })
    
});

// var scrollLink = $(".page-selector a");
// var pageHeight = $(window).height();
// var lastScrollTop = 0;

// $(".burger").click(function(){
    //     var burger = $(".burger");
    //     var line1 = $(".line1");
    //     var line2 = $(".line2");
    //     var line3 = $(".line3");
    
    //     if(burger.attr("id") == "OFF"){
        //         burger.attr("id","ON")
        //         line1.transition({rotate:'45', y:"21px"})
        //         line2.transition({x:"-50px",opacity:0})
//         line3.transition({rotate:'-45deg' , y:"-21px"})
//         $(".nav-menu").transition({x:'0vw'});
//     }
//     else{
//         burger.attr("id","OFF")
//         $(".nav-menu").transition({x:'100vw'});
//         line1.transition({rotate:'-0', y:"0"})
//         line2.transition({x:"0",opacity:1})
//         line3.transition({rotate:'0' , y:"0"})
//     }
// });


    // fadeOut("#p1", ".scroll-container")
    // setInterval(fadeOut("#p1", ".scroll-container"));

    // function fadeOut(pageSelector, elementSelector ){
    //     console.log($(pageSelector).attr("class"))
    //     if($(pageSelector).attr("class") == "active"){
    //         $(elementSelector).transition({x:"0vw",delay:0})
    //     }else{
    //         $(elementSelector).transition({x:"100vw",delay:0})
    //     }
    // };

    // function animationsOut(){
    //     if(getPageNumber() != 1){
    //         $("section#page-01 .title-container h1").css({x : "-50vw"});
    //         $("section#page-01 .title-container h2").css({y : "-50vh"});
    //         $("section#page-01 .btn-container").css({y : "-50vh"});
    //         $(".scroll-container").transition({opacity:0},300);
    //     }else if(getPageNumber() == 1){
    //         $("section#page-01 .title-container h1").transition({x : "0"},600);
    //         $("section#page-01 .title-container h2").transition({y : "0", delay: 200},500);
    //         $("section#page-01 .btn-container").transition({y : "0", delay: 200},500);

        // }else if($("#p3").attr("class") == ""){
        // }else if($("#p4").attr("class") == ""){
    //     }
    // }

    // function animationsIn(){
    //     if($("#p1").attr("class") == "active"){
    //         $("section#page-01 .title-container h1").transition({x:"0"});
    //     }else if($("#p2").attr("class") == "active"){
    //         console.log("page2")
    //     }else if($("#p3").attr("class") == "active"){
    //         console.log("page3")
    //     }else if($("#p4").attr("class") == "active"){
    //         console.log("page4")
    //     }
    // }

    // scrollLink.click(function(e){
    //     e.preventDefault();
    //     $('.container').animate({
    //         scrollTop: $(this.hash).offset().top 
    //     },700);
    // });
    
    // $(window).scroll(function() {
        //     // console.log(getScrollBarLocation())
        //     // console.log($('section#page-01 h1').offset());
        //     // console.log(getScrollDirection())
        // });
        // scrollToPage( getScrollDirection() , getPageNumber() , 4)
        
        // $(window).on("mousewheel DOMMouseScroll", function(event) {
            //     // console.log(getScrollDirection());
            // });
            
            
            // function getScrollDirection(event){
            //     var st = $(this).scrollTop();
            //     var direction = null;
            //     if (st > lastScrollTop && isScrolling == false){
            //         direction = "down"
            //     } else if (st < lastScrollTop && isScrolling == false) {
            //         direction = "up"
            //     lastScrollTop = st;
            //     return direction;
            //     }
    
            // window.onscroll = () => {
            //     const direction = this.oldScroll > this.scrollY ? 'up': 'down'
            //     console.log(direction)
            //     this.oldScroll = this.scrollY;
            // }
    
            // function scrollToPage(ScrollDirection,pageNumber,maxPages){
            //     if(ScrollDirection == "down" && pageNumber < maxPages){
            //         $("#p" + (getPageNumber() + 1)).trigger('click'); 
            //         console.log(ScrollDirection);
            //         isScrolling = true;
            //     }
            //     else if(ScrollDirection == "up" && pageNumber > 1){
            //         $("#p" + (getPageNumber() - 1)).trigger('click');
            //         console.log(ScrollDirection)
            //         isScrolling = true;
            //     }
            //     setTimeout(function(){isScrolling = false}, 750);
            // }

    // console.log(scrollbarLocation + "---" + pageHeight)
    
    // scrollLink.each(function(){

    // var sectionOffset = $(this.hash).offset().top

    // if(sectionOffset <= scrollbarLocation){
    //     $(this).addClass('active');
    //     $(this).siblings().removeClass('active');
    // } 
    // })
