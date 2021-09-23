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

    window.addEventListener("DOMContentLoaded", function () {
        // get the form elements defined in your form HTML above
      
        var form = document.getElementById("my-form");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("status");
      
        // Success and Error functions for after the form is submitted
      
        function success() {
            console.log("works")
        }
      
        function error() {
            console.log("didn't work")
        }
      
        // handle the form submission event
      
        form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
      
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }
      
    
});
