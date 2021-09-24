$(document).ready(function(){
    
    $(".light-dark-modes").click(function(){
        console.log("clicked")
        if($("#dark-btn").hasClass("active") == true){
            $("html").removeClass("dark")
            $("html").addClass("light")
            $("#light-btn").addClass("active");
            $("#dark-btn").removeClass("active")
        }else{
            $("html").removeClass("light")
            $("html").addClass("dark")
            $("#dark-btn").addClass("active");
            $("#light-btn").removeClass("active")
        }
    });
  
    
});
