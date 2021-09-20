$(document).ready(function(){

    
    setInterval(changeActivePage,100);
    
    $('html').bind('mousewheel DOMMouseScroll', function (e) {
        $(".scroll-container").transition({x:"-200px",opacity:0})
    });
    
    
    $('.container').fullpage({
        licenseKey:'CE258BFD-BC7446BF-977D67B5-29578706',
        anchors: ['page-01', 'page-02', 'page-03', 'page-04'],
    });
    
    function getPageNumber(){
        var className = $("body").attr('class');
        return className.substr(className.length - 1);
    };
    
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
    
    function changeActivePage(){
        $("#p" + getPageNumber()).addClass('active');
        $("#p" + getPageNumber()).siblings().removeClass('active');
    };
    
    /* JS animations n IntersectionObserver*/
    
    // const sections = document.querySelectorAll("section")
    const titles = document.querySelectorAll("h1")
    const subTitles = document.querySelectorAll("h2")
    const numbers = document.querySelectorAll("h3")
    const buttons = document.querySelectorAll(".btn-container")
    const loads = document.querySelectorAll(".project-load")
    const images = document.querySelectorAll(".project-img")
    
    const options = {
        root:null,
        threshold:0,
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                entry.target.classList.remove("appear")
            }else{
                entry.target.classList.add("appear")
            }
        });
    }, options);
    
    titles.forEach(title =>{
        appearOnScroll.observe(title);
    })
    
    subTitles.forEach(subTitle =>{
        appearOnScroll.observe(subTitle);
    })
    
    buttons.forEach(button =>{
        appearOnScroll.observe(button);
    })
    
    numbers.forEach(number => {
        appearOnScroll.observe(number)
    })
    
    loads.forEach(load => {
        appearOnScroll.observe(load)
    })
    
    images.forEach(image =>{
        appearOnScroll.observe(image)
    })
    
});