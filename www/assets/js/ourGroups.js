var nav;
var url;
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
    url = window.location.href;
     nav = url.split("=").pop();
    
    // $.post(urlSer+'/api/v1/numberOfitems?token='+userId,function(data){
        

    //     var vegAndfruits_id=data.number[2].itemtypes_id;
    //     var vegAndfruits_number=data.number[2].number;
              

     
    // })
    $("#vegAndFruit").click(function(){


        //  if(language=="ar"){
            
        //     localStorage.setItem("Ouritemsname", "خضروات و فواكه");
        // }
        // else if(language=="en"){
           
        //     localStorage.setItem("Ouritemsname", " Vegetables and Fruits ");
        // }
        //   localStorage.setItem("availableNumitems",JSON.stringify({"id":vegAndfruits_id,"item":vegAndfruits_number}))
         window.location.href="ourgroup-once.html?id="+nav;
    })
})
