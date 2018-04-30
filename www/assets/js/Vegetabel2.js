var userId=localStorage.getItem('user_id');
var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc=JSON.parse(localStorage.getItem("papers"));
var nav;
var url;
paperdesc?paperdesc=paperdesc:paperdesc=[];
$(function(){
    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }
    
    url = window.location.href;
    nav = url.split("=").pop();
    if(language=="ar"){
        $("#title_").html('حدد');
        $("#ourSelector").html('تشكيلتنا');
        $("#yourSelector").html('تشكيلة على كيفك');
    }
    else if(language=="en"){
        $("#title_").html('Choose');
        $("#ourSelector").html('Pre-packaged');
        $("#yourSelector").html('Create your own');
       
    }
    $(".ourSelector").click(function(){
        if(nav==1)
        {  
            if(language=="ar"){
                localStorage.setItem("typeorder","جربنا مرة واحدة");
            }
            else if(language=="en"){
                localStorage.setItem("typeorder","Try it once");
            }
            
             window.location.href="Once-time.html?id=1";
        }
        else if(nav==2)
        {

            if(language=="ar"){
                localStorage.setItem("typeorder","إشتراك");
            }
            else if(language=="en"){
                localStorage.setItem("typeorder","Participation");
            }
       
            window.location.href="Join-2.html?id=1";
        }
    })
        $(".yourSelector").click(function(){
        if(nav==1)
        {  
            if(language=="ar"){
                localStorage.setItem("typeorder","جربنا مرة واحدة");
            }
            else if(language=="en"){
                localStorage.setItem("typeorder","Try it once");
            }
             window.location.href="Once-time.html?id=2";
        }
        else if(nav==2)
        {
            if(language=="ar"){
                localStorage.setItem("typeorder","إشتراك");
            }
            else if(language=="en"){
                localStorage.setItem("typeorder","Participation");
            }
            window.location.href="Join-2.html?id=2";
        }
    })
    
    
    
})