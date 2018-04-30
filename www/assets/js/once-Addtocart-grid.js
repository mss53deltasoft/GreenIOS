var incrKilo;
var decrKilo;
var noOfKilo=1;
var item=[];
var array=[]; 
var results;
var url;
var nav;
var getdata;
var prices=0;
var priceOneItem;
photoUrl=urlSer;
var numberItem=JSON.parse(localStorage.getItem("availableNumitems"));
var reset;
var arrayitem=[];
var descriptionBox;
var bigArrayItems=[];
var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var navback= localStorage.getItem("idBack");
var paperdesc=JSON.parse(localStorage.getItem("papers"));
paperdesc?paperdesc=paperdesc:paperdesc=[];
var userId=localStorage.getItem('user_id');


var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;

$(function(){
    
    
           if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
    {
        lengthPapers=paperdesc.length;
        lengthBasket =boxesArrey.length;
        lengthItem=items.length;
        $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);
     
    }
    
    
//    $("#backBtn").click(function(){
//
//             window.location.href="ourgroups.html?id="+navback;
//    })
    
    url = window.location.href;
    nav = url.split("=").pop();
    
    localStorage.setItem('backBtn',nav)
         
    loadData();
    //increace aliaa
    $( "#appendCart" ).on( "click", ".incr-btn",function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            //var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
                $button.addClass('inactive');
            }
        }
        //$button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });
    //finish increase


    $("#greenPaper").click(function(){
        
        $("#appendCart .quantity").each(function(i,v){
            var price =$(v).attr("id").split("_").pop();
            var quantity =$(v).val();
            var onePrice = price * quantity;                           
            prices+=onePrice;

              var id=JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

               $(item).each(function(i,v){
                  if(id==v)
                      {
                        arrayitem.push({"id":id,"title":$("#"+id+" .Black ").text(),"size":$("#"+id+" .resetKilo ").text()});
                        return;
                      }
            })
            
 })
        
        if(language=="ar"){
            if(numberItem.id==1)
            {
                descriptionBox="فواكه";

            }
        else if(numberItem.id==2)
            { descriptionBox="خضروات";

            }
        }
        else if(language=="en"){
            if(numberItem.id==1)
            {
                descriptionBox="Fruits";

            }
        else if(numberItem.id==2)
            { descriptionBox="Vegetables";

            }
        }
          
    bigArrayItems.push({arrayitem,"prices":prices,"size":nav,"descriptionBox":descriptionBox})
    
    items.push({arrayitem,"prices":prices,"size":nav,"descriptionBox":descriptionBox})
    localStorage.setItem("items",JSON.stringify(items));        
        window.location.href="paper.html?name=add,id=3"
    })
    

    
    $("#submit").click(function(){
        
        $("#appendCart .quantity").each(function(i,v){
            var price =$(v).attr("id").split("_").pop();
            var quantity =$(v).val();
            var onePrice = price * quantity;                           
            prices+=onePrice;

              var id=JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

               $(item).each(function(i,v){
                  if(id==v)
                      {
                        arrayitem.push({"id":id,"title":$("#"+id+" .Black ").text(),"size":$("#"+id+" .resetKilo ").text()});
                        return;
                      }
            })
            
 })
        
        if(numberItem.id==1)
        {
            descriptionBox="فواكه";

        }
      else if(numberItem.id==2)
        { descriptionBox="خضروات";

        }
    bigArrayItems.push({arrayitem,"prices":prices,"size":nav,"descriptionBox":descriptionBox});
    
    items.push({arrayitem,"prices":prices,"size":nav,"descriptionBox":descriptionBox});
    localStorage.setItem("items",JSON.stringify(items));
        
         lengthPapers=paperdesc.length;
        lengthBasket =boxesArrey.length;
        lengthItem=items.length;
        $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);
        window.location.href="my-orders.html?id=3";
        
        
   
    
  
});
})
function loadData(){
   $.get(urlSer+'/api/v1/items/'+language+'?token='+userId,function(data){
       $('.loadsimage').hide();
        getdata=data;
   $(data.items).each(function(i,v){
       if(v.types_id==numberItem.id)
       {
            $("#appendCart").append('<div class="col-xs-6" id='+v.id+'><div id='+v.id+' class="card"><div id='+v.id+' class="card-image Order-img"><img    src='+photoUrl+v.image+' ><span class=" Black text-right">'+v.title+'</span><p class="resetKilo" id="kiloItem'+v.id+'">0كيلو </p></div></div><p><div id='+v.id+' class="count-input2 space-bottom"><a  onclick="decrease('+v.id+','+v.price+')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity'+v.id+'_'+v.price+'"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase('+v.id+','+v.price+')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                      array.push(v.title);
           $( "#tags" ).autocomplete({
              source: array,
            messages: {
                noResults: '',
                results: function() {
                    $(".ui-helper-hidden-accessible").css({"display":"none"})
                }
            }

            });
       }

    })
   })
}
function increase(id,price){
         //to increase item
    if(item.indexOf(id)==-1)
    {

        if(item.length >= numberItem.item)
        { 
            $("#msgWarn").html('لا يمكنك اضافه اكتر من '+numberItem.item+' عنصر');
            $("#warn").modal('show');
            return;

        }
        item.push(id);

    }
    
    
  
    if(noOfKilo > nav){
        
            $("#textModal").html(' الكرتون الان يحتوي على ' +  nav  +' كيلو ');
            $('#modal2').modal('show');
        
        return;

        }
   else if(noOfKilo == nav){
        $("#textModal").html(' الكرتون الان يحتوي على ' +nav+' كيلو ');
            $('#modal2').modal('show');
         incrKilo=parseInt($("#quantity"+id+'_'+price).val())+1;
                    $("#kiloItem"+id).html(incrKilo+"كيلو");
                    $("#quantity"+id+'_'+price).val(incrKilo);
        
        
    }
    else{  incrKilo=parseInt($("#quantity"+id+'_'+price).val())+1;
                    $("#kiloItem"+id).html(incrKilo+"كيلو");
                    $("#quantity"+id+'_'+price).val(incrKilo);
    }
                

                     noOfKilo++;

                    if(nav=="12"||nav=="9"||nav=="6")
                        $("#fullCarton").show();
                        $("#allowKilo").html(nav+"/"+noOfKilo-1);
 
}

function decrease(id,price){
    oldValue=parseInt($("#quantity"+id+'_'+price).val());
   
    if (oldValue > 0) {
         decrKilo=oldValue-1;
        $("#kiloItem"+id).html(decrKilo+"كيلو");
          $("#quantity"+id+'_'+price).val(decrKilo);
          noOfKilo--;
               if(nav=="12"||nav=="9"||nav=="6"){
                       $("#fullCarton").show();
                       $("#allowKilo").html(nav+"/"+noOfKilo-1);
                    }
    }else {
        decrKilo = 0;
    }
      if(decrKilo==0){
    var index = item.indexOf(id);
          if(index>-1)
item.splice(index, 1);}

}
// for search item
function myFunction(val) {
    if(val != undefined){
        var items = getdata.items.filter(item =>item.title.toLowerCase().match(val.toLowerCase()) );
        if(getdata.items.length>0){

            $('#appendCart').children().hide();
            
            
                    $(items).each(function(i,v){
                
                if(v.title.charAt(0) === val)
                     $('#appendCart #'+v.id+'').show();

                        else
                          $('#appendCart #'+items[0].id+'').show();     
            })
            
        }
        if(val==""){
            $('#appendCart').children().show();
    }
    
    }
    
    
}

//function focusInput(){
//    $("#FooterFixed").hide();
//}

//function myFunction(val,index) {
//    if(val != undefined){
//        var items = getdata.items.filter(item =>item.title.toLowerCase().match(val.toLowerCase()) );
//        if(getdata.items.length>0){
//
//            $('#appendCart').children().hide();
//            
////             var filteredNames = items.filter(function(word) {
////       return word.charAt(index) === val;
////    });
////   return filteredNames;
//            
//            $(items).each(function(i,v){
//                
//                if(v.title.charAt(index) === val)
//                     $('#appendCart #'+v.id+'').show();
//                else if(v.title=== val)
//                    $('#appendCart #'+v.id+'').show();
//            })
//        
//
//        }
//        if(val==""){
//            $('#appendCart').children().show();
//    }
//    
//    }
//    
//    
//}
