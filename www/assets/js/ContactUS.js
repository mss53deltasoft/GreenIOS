var userId=localStorage.getItem('user_id');
var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc=JSON.parse(localStorage.getItem("papers"));
paperdesc?paperdesc=paperdesc:paperdesc=[];
$(function(){
    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }
        if(language=="ar"){
            $("#title_").html(' تواصل معنا ');

$("#addReview").html('المقترحات و الشكاوي');
        }
        else if(language=="en"){
            $("#addReview").html('Suggestion and Complaints');
            $("#title_").html('Contact us');


        }

})
