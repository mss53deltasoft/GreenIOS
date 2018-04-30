var sizeCartoon;
var userId=localStorage.getItem('user_id');
var joinSession=JSON.parse(localStorage.getItem('joinData'));
photoUrl=urlSer;
var nav ;
var url ;
boxesDetails=[];
var boxType=localStorage.getItem("OurboxType");
var lengthCheck;
var lengthBasket;
var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc=JSON.parse(localStorage.getItem("papers"));
paperdesc?paperdesc=paperdesc:paperdesc=[];
var incrKilo;
var decrKilo;
var totalPrice;
var language=localStorage.getItem("language");
$(function(){  
    

           if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
    {
        lengthPapers=paperdesc.length;
        lengthBasket =boxesArrey.length;
        lengthItem=items.length;
        $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);
     
    }
    
   loadData(function(){


   });
    
        
     url = window.location.href;
     nav = url.split("=").pop();
    
    
    
    var navback= localStorage.getItem("idBackbox");
    localStorage.setItem("navdetails",nav);

})
function loadData(cb){
   $.get(urlSer+'/api/v1/ourbox/'+language+'?token='+userId,function(data){
       $('.loadsimage').hide();
       if(language=="ar"){
        $("#title_").html("تشكيلتنا");
        // $("#footerText").css({"padding":"6px 33px"});
            }
        else if(language=="en")
        {   
        $("#title_").html("Our collection");    
      
   }
       $(data.boxes).each(function(i,v){
           
 
               
            var index = arrayObjectIndexOf(boxesArrey, v.id, "id");
                if(index == -1)
            {
                if(nav==v.size &&boxType==v.boxType)
                    { 
                        if(language=="ar"){
                            $("#title_").html("تشكيلتنا");
                            // $("#chooseBox").html('اختر الكرتون <b> من تشكيلتنا</b>');
                            
                            $("#getdata").append('<div class="col-sm-12" id='+v.id+' ><div class="deal-item list-view" ><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge  now-open" id="noOfKilo'+v.id+'" onclick="getDetails('+v.size+','+v.id+','+v.price+')"  style="direction: rtl;" > '+v.size+'كيلو </div><h2 class="fsz-20 pb-15"> <a onclick="getDetails('+v.size+','+v.id+','+v.price+')" ><span class="light-font">تشكيلة</span>  <strong class="nameOfDesc">'+v.title+' </strong> </a> </h2><div class="description"><p class="" onclick="getDetails('+v.size+','+v.id+','+v.price+')" >'+v.description+'...</p> </div><div class="price pt-15"><span>السعر</span>  <strong id="price'+v.id+'" class="pprice">'+v.price+'</strong><strong> ريال سعودي </strong></div></div><div class="img img2"> <img id="img_Src" alt="" src='+photoUrl+v.image+' onclick="getDetails('+v.size+','+v.id+','+v.price+')" > </div><div class="Cart" style="    top: 139px;" onclick="getSize('+v.size+','+v.id+','+v.price+')"><a   class="prod-tag tag-2 waves-effect waves-light" style="bottom: -16px;margin-top: -51px; padding: 10px  7px ; width: 43px;"><i id="cart'+v.id+'" class="material-icons" style="font-size: 19px;">اختر</i></a></div></div></div>');
         
                        }
            else if(language=="en")
            {   
                $("#title_").html("Our collection");    
                // $("#chooseBox").html(' Choose box from our boxes ');
                $("#getdata").append('<div class="col-sm-12" id='+v.id+' ><div class="deal-item list-view" ><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge  now-open" id="noOfKilo'+v.id+'" onclick="getDetails('+v.size+','+v.id+','+v.price+')"   > '+v.size+' Kilo </div><h2 class="fsz-20 pb-15"> <a onclick="getDetails('+v.size+','+v.id+','+v.price+')" >  <strong class="nameOfDesc">'+v.title+' </strong><span class="light-font">collection</span> </a> </h2><div class="description"><p class="" onclick="getDetails('+v.size+','+v.id+','+v.price+')" >'+v.description+'...</p> </div><div class="price pt-15"><strong>price</strong>  <strong id="price'+v.id+'" class="pprice">'+v.price+'</strong><strong> SAR  </strong></div></div><div class="img img2"> <img id="img_Src" alt="" src='+photoUrl+v.image+' onclick="getDetails('+v.size+','+v.id+','+v.price+')" > </div><div class="Cart" style="    top: 139px;" onclick="getSize('+v.size+','+v.id+','+v.price+')"><a   class="prod-tag tag-2 waves-effect waves-light" style="bottom: 0px;margin-top: -25px;padding: 10px 7px;width: 86px;position: absolute;right: 0;"><i id="cart'+v.id+'" >choose</i></a></div></div></div>');
        }
            if(nav=="12")
                $("#noOfKilo"+v.id).css({"background":"#319c57;"})
            else if(nav=="9")
                $("#noOfKilo"+v.id).css({"background":"#3db3c2"})
            else if(nav=="6")
                $("#noOfKilo"+v.id).css({"background":"#da5d79"})
           
        }

            }
           else{
               
               
                if(nav==v.size &&boxType==v.boxType)
                { 
                    $(boxesArrey).each(function(i,v){
                         if(language=="ar"){ $("#getdata").append('<div class="col-sm-12" id='+v.id+' ><div class="deal-item list-view" ><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge  now-open" id="noOfKilo'+v.id+'" onclick="getDetails('+v.size+','+v.id+','+v.price+')" style="direction: rtl;" > '+v.size+'كيلو  </div><h2 class="fsz-20 pb-15"> <a onclick="getDetails('+v.size+','+v.id+','+v.price+')" ><span class="light-font">تشكيلة</span>   <strong class="nameOfDesc">'+v.title+' </strong></a> </h2><div class="description"><p class="" onclick="getDetails('+v.size+','+v.id+','+v.price+')" >'+v.description+'...</p> </div><div class="price pt-15"><span>السعر</span><strong id="price'+v.id+'" class="pprice">'+v.priceoneItem+'</strong></div></div><div class="img img2"> <img id="img_Src" alt="" src='+v.image+' onclick="getDetails('+v.size+','+v.id+','+v.price+')" > </div><div class="Cart" style="    top: 139px;" onclick="getSize('+v.size+','+v.id+','+v.price+')"><a class="prod-tag tag-2 waves-effect waves-light" style="    bottom: -16px; margin-top: -40px; padding: 10px  7px ; width: 43px;"><i id="cart'+v.id+'" class="material-icons" style="font-size: 19px;">اختر</i></a></div></div></div>');
                        }
                        else if(language=="en"){
                            $("#getdata").append('<div class="col-sm-12" id='+v.id+' ><div class="deal-item list-view" ><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge  now-open" id="noOfKilo'+v.id+'" onclick="getDetails('+v.size+','+v.id+','+v.price+')"  > '+v.size+' kilo  </div><h2 class="fsz-20 pb-15"> <a onclick="getDetails('+v.size+','+v.id+','+v.price+')" >  <strong class="nameOfDesc">'+v.title+' </strong><span class="light-font">collection</span> </a> </h2><div class="description"><p class="" onclick="getDetails('+v.size+','+v.id+','+v.price+')" >'+v.description+'...</p> </div><div class="price pt-15"><strong>price</strong><strong id="price'+v.id+'" class="pprice">'+v.priceoneItem+'</strong></div></div><div class="img img2"> <img id="img_Src" alt="" src='+v.image+' onclick="getDetails('+v.size+','+v.id+','+v.price+')" > </div><div class="Cart" style="    top: 139px;" onclick="getSize('+v.size+','+v.id+','+v.price+')"><a class="prod-tag tag-2 waves-effect waves-light" style="    bottom: 0px;margin-top: -25px;padding: 10px 7px;width: 86px;position: absolute;right: 0;"><i id="cart'+v.id+'" >choose</i></a></div></div></div>');
                       
                        }
           
                       
                        parseInt($("#quantity"+v.id+'_'+v.priceoneItem).val())==v.amount;
                        $("#quantity"+v.id+'_'+v.priceoneItem).val(v.amount);
                        if(nav=="12")
                            $("#noOfKilo"+v.id).css({"background":"#319c57;"});
                        else if(nav=="9")
                            $("#noOfKilo"+v.id).css({"background":"#3db3c2"});
                        else if(nav=="6")
                            $("#noOfKilo"+v.id).css({"background":"#da5d79"});
                                })

           
                    }
           }

      });
       if(cb)
           cb();

 });
}


function getDetails(size,id,price){
       boxesDetails.push({"id":id,"size":size,"title":$("#"+id+" .nameOfDesc").text(),"description":$("#"+id+" .description").text(),"price":$("#"+id+" .pprice").text(),"image":$("#"+id+" img").attr("src"),"amount":1,"priceoneItem":price});

    localStorage.setItem("onebox_Details",JSON.stringify(boxesDetails));

     window.location.href="details.html?id="+id;
}
function getSize(size,id,price){
        $('#myModal').modal('show');
        if(language=="ar"){
            $("#sizeCartonText").html(' الكرتون الان يحتوي على '  +  size  +' كيلو ');
            $(".modal-footer").html(' <a id="cancel" class="waves-effect waves-light btn  FooterBtnModel">إلغاء</a><a id="GreenNext"  onclick="greenPaper('+size+','+id+','+price+')" class="waves-effect waves-light btn FooterBtnModel2 ">ورقيات - أخرى</a><a id="Cont_" onclick="submit('+size+','+id+','+price+')"  class="waves-effect waves-light btn FooterBtnModel">إستكمال </a>') ; 
            $("#successBox").html('تمام ');
        }
        else if(language=="en"){
            $("#sizeCartonText").html('The box now contains '  +size+' kilo ');
            $(".modal-footer").html(' <a id="Cont_" onclick="submit('+size+','+id+','+price+')"  class="waves-effect waves-light btn FooterBtnModel ">Continue </a><a id="GreenNext"onclick="greenPaper('+size+','+id+','+price+')" class="waves-effect waves-light btn FooterBtnModel2 ">Greens - Others </a><a id="cancel" class="waves-effect waves-light btn FooterBtnModel">Cancel</a>');  
            $("#successBox").html('Done');
        }
  
                  $("#cancel").click(function(){

        $('#myModal').modal('hide');
    })

}
function submit(size,id,price){
    
    document.getElementById('GreenNext').style.pointerEvents = 'none';
    document.getElementById('Cont_').style.pointerEvents = 'none';
        var indexId= boxesArrey.map(function(item) { return item.id; }).indexOf(id);
    if(indexId==-1){
    
    boxesArrey.push({"id":id,"size":size,"title":$("#"+id+" .nameOfDesc").text(),"description":$("#"+id+" .description").text(),"price":$("#"+id+" .pprice").text(),"image":$("#"+id+" img").attr("src"),"amount":1,"priceoneItem":price});
    
    localStorage.setItem("onebox_id",JSON.stringify(boxesArrey));    
    }
    
    else{

        for (var i = 0; i < boxesArrey.length; i++) {
           if(id === boxesArrey[i].id){  //look for match with name
               boxesArrey[i].amount ++;  //add 
               boxesArrey[i].price = (boxesArrey[i].amount * boxesArrey[i].priceoneItem).toString();                  //update price
               break;  //exit loop since you found the person
           }
        }
        localStorage.setItem("onebox_id",JSON.stringify(boxesArrey));  //put the object back

    
    }
     window.location.href="my-orders.html?id=1";
}
function greenPaper(size,id,price){
    document.getElementById('GreenNext').style.pointerEvents = 'none';
    document.getElementById('Cont_').style.pointerEvents = 'none';
        var indexId= boxesArrey.map(function(item) { return item.id; }).indexOf(id);
    if(indexId==-1){
    
    boxesArrey.push({"id":id,"size":size,"title":$("#"+id+" .nameOfDesc").text(),"description":$("#"+id+" .description").text(),"price":$("#"+id+" .pprice").text(),"image":$("#"+id+" img").attr("src"),"amount":1,"priceoneItem":price});
    
    localStorage.setItem("onebox_id",JSON.stringify(boxesArrey));    
    }
    
    else{

        for (var i = 0; i < boxesArrey.length; i++) {
           if(id === boxesArrey[i].id){  //look for match with name
               boxesArrey[i].amount ++;  //add 
               boxesArrey[i].price = (boxesArrey[i].amount * boxesArrey[i].priceoneItem).toString();                  //update price
               break;  //exit loop since you found the person
           }
        }
        localStorage.setItem("onebox_id",JSON.stringify(boxesArrey));  //put the object back

    
    }
     window.location.href="paper.html?name=add,id="+nav;
}
function arrayObjectIndexOf(myArray, searchTerm, property) {
    if(myArray){
       for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
        }
        return -1; 
    }
    else{
        return -1;
    }
}
