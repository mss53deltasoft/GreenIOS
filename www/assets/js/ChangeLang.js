var headHTML = document.getElementsByTagName('head')[0].innerHTML;
var language=localStorage.getItem("language");
if(language=="en"){
    $('link[href="assets/css/theme.css"]').attr('href','assets/css/themeng.css');
    $('link[href="assets/css/themeNumber.css"]').attr('href','assets/css/themeng.css');
    $('link[href="assets/css/style.css"]').attr('href','');    
    $('link[href="assets/css/theme.css"]').attr('href',''); 
    $('link[href="assets/css/themeNumber.css"]').attr('href',''); 
}
