var username=localStorage.getItem("user_name");
var lang;
$(function(){
     if(username!=null)
         {
             window.location.href="home.html";
         }
    $("#arabic").click(function(){
        lang="ar";
        localStorage.setItem("language",lang);
        window.location.href="login.html";
    })
    $("#english").click(function(){
        lang="en";
        localStorage.setItem("language",lang);
        window.location.href="login.html";
    })
})