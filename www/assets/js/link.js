// window.onerror = function (msg, url, line) {

//     var idx = url.lastIndexOf("/");

//     if (idx > -1) {
//         url = url.substring(idx + 1);
//     }

//     alert("ERROR in " + url + " (line #" + line + "): " + msg);

//     return false; //suppress Error Alert;

// };


var urlSer = "https://akhdar.azurewebsites.net";
var username = localStorage.getItem("user_name");
var userId = localStorage.getItem('user_id');
// var urlSer="http://192.168.1.126:8000";
var unrealToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjIxNDc0ODM2NDcsInN1YiI6NTcsImlzcyI6Imh0dHBzOi8vYWtoZGFyLmF6dXJld2Vic2l0ZXMubmV0L2FwaS92MS9sb2dpbiIsImlhdCI6MTUyNDI1MjE0OCwibmJmIjoxNTI0MjUyMTQ4LCJqdGkiOiI0WkNBelhaelM3cVFJb3FCIn0.2EmwPnUsC8BBRFtSDbmhEOgDDaxrAwL3RuRYUPKZx7w";
var language = localStorage.getItem("language");
$(function () {




    $("#user_name").html(username).css({
        "font-size": "22px"
    });
    $(".loads").append('<i class="fa fa-spinner fa-spin"></i>');
    $(".loadsimage").append('<i class="fa fa-spinner fa-spin"style="font-size: 39px;color: rgb(35, 141, 150); margin-left: 45%;    margin-top: 44px;"></i>');

    $("#original").click(function () {
        window.location.href = "home.html";
    });
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;

    if (language == "en") {
        // headHTML    += '<link type="text/css" rel="stylesheet" href="assets/css/themeng.css">';
        // document.getElementsByTagName('head')[0].innerHTML = headHTML;

        $('link[href="assets/css/theme.css"]').attr('href', 'assets/css/themeng.css');
        $('link[href="assets/css/themeNumber.css"]').attr('href', 'assets/css/themeng.css');
        $('link[href="assets/css/style.css"]').attr('href', '');
        $('link[href="assets/css/theme.css"]').attr('href', '');
        $('link[href="assets/css/themeNumber.css"]').attr('href', '');

        $("body").delay(100).fadeIn("fast");

    }

    if (language == "ar") {

        $("body").delay(100).fadeIn("fast");
    }


    $("input").focus(function () {
        $("#FooterFixed").hide();
    });
    $("input").blur(function () {
        $("#FooterFixed").show();
    });
    $("#basket_").click(function () {
        window.location.href = "my-orders.html?id=5";
    });
});