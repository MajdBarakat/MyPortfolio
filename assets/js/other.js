$(document).ready(function () {
  var copyText = document.getElementById("textCopy");

  $(window).scroll(function () {
    var scrollBarLocation = $(window).scrollTop();
    if (scrollBarLocation > 100) {
      $(".navbar-container").addClass("active");
      console.log(scrollBarLocation);
    } else {
      console.log("should delete");
      $(".navbar-container").removeClass("active");
    }
  });

  $(".my-email").click(function () {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    window.alert("Copied to Clipboard!");
  });

  $(".light-dark-modes").click(function () {
    console.log("clicked");
    if ($("#dark-btn").hasClass("active") == true) {
      $("html").removeClass("dark");
      $("html").addClass("light");
      $("#light-btn").addClass("active");
      $("#dark-btn").removeClass("active");
    } else {
      $("html").removeClass("light");
      $("html").addClass("dark");
      $("#dark-btn").addClass("active");
      $("#light-btn").removeClass("active");
    }
  });
});
