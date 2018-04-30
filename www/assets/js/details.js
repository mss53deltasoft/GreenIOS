var url;
var idBox;
var images=[];
var name=[];
var items=[];
photoUrl=urlSer;
boxesArrey=[];
var navdetails =localStorage.getItem("navdetails");
var size;
var id;
var boxDetails=JSON.parse(localStorage.getItem("onebox_Details"));
var allBoxesID=JSON.parse(localStorage.getItem("onebox_id"));
//var userId=JSON.parse(localStorage.getItem('user_id'));
allBoxesID?allBoxesID=allBoxesID:allBoxesID=[];
$(function(){
    if(language=="ar"){
        $("#title_").html('تفاصيل التشكيلة');
        $("#cancel").html(' رجوع');
        $("#purshase").html('إختيار ');
        $("#footerA").html(` <div class="col-xs-6 border"><a id="cancel">رجوع</a></div>  <div class="col-xs-6"><a id="purshase">إختيار</a><span class="loads" style="display:none"></span></div>   `);
    }
    else if(language=="en"){
        $("#title_").html('Cartoon Details ');
        $("#cancel").html(' Back');
        $("#purshase").html('Choose ');
        $("#footerA").html(`   <div class="col-xs-6" border><a id="purshase">Choose</a></div>  <div class="col-xs-6 "><a id="cancel">Back</a></div> `);
    
    }
    
    document.getElementById('purshase').style.pointerEvents = 'none';
    document.getElementById('cancel').style.pointerEvents = 'none';
    var x='';
    url=window.location.href;
    idBox=JSON.parse(url.split("=")[1]);
    $.post(urlSer+'/api/v1/showpredefined/'+idBox+"/"+language+"?token="+userId,function(data){
         $('.loadsimage').hide();
         if(language=="ar"){
            $("#size").html('<span>'+data.size+'</span><span>كيلو</span>');
        }
        else if(language=="en"){
            $("#size").html('<span>'+data.size+'</span><span>kilo</span>');
        }
      
        
        size=data.size;
        image=data.imageOfbox;
         x += '<div class="item"><img src='+photoUrl+data.imageOfbox+' alt=""></div>';
     
        $(data.box).each(function(i,v){
            if(language=="ar"){
                $("#items").append('<li><strong><img class="icon" src="assets/img/icons/vegetables-3.png">'+v.name+'</strong> <span>: &nbsp; '+v.kilo+' كيلو</span> </li>');
            }
            else if(language=="en"){
                $("#items").append('<li><strong><img class="icon" src="assets/img/icons/vegetables-3.png">'+v.name+'</strong> <span>: &nbsp; '+v.kilo+' kilo</span> </li>');
            }
            
      
    });
    $(".bgButtom2").css("background", "#2fc83f");
   document.getElementById('purshase').style.pointerEvents = 'auto';
    document.getElementById('cancel').style.pointerEvents = 'auto';
    if(language=="ar"){
        $("#items").append('<li> <strong><img class="icon" src="assets/img/icons/currency.png">السعر</strong><span class="clr-txt fsz-20" id="price"> </span></li>');
        $("#name").html(data.boxName);
        $("#price").html(': &nbsp;'+data.price+" ريال سعودي ");
    }
    else if(language=="en"){
        $("#items").append('<li> <strong><img class="icon" src="assets/img/icons/currency.png">Price</strong><span class="clr-txt fsz-20" id="price"> </span></li>');
        $("#name").html(data.boxName);
        $("#price").html(': &nbsp;'+" SAR"+data.price);
    }

       $("#sec1").append(x);


})

    
    $("#cancel").click(function(){
        window.history.back();
   
    })
    
    
    $("#purshase").click(function(){

    if(language=="ar"){
            $("#sizeCartonText").html(' الكرتون الان يحتوي على '  +  size  +' كيلو ');
            $(".modal-footer").html(' <a id="cancel" class="waves-effect waves-light btn FooterBtnModel " data-dismiss="modal">إلغاء</a><a id="GreenNext" onclick="greenPaper()" class="waves-effect waves-light btn FooterBtnModel2 ">ورقيات - أخرى</a><a id="Cont_" onclick="submit()"  class="waves-effect waves-light btn FooterBtnModel ">إستكمال </a>')  ;
 $("#successBox").html('تمام ');
        }
        else if(language=="en"){
            $("#sizeCartonText").html('The box now contains '  +size+' kilo ');
            $(".modal-footer").html(' <a id="Cont_" onclick="submit()"  class="waves-effect waves-light btn FooterBtnModel ">Continue </a><a id="GreenNext" onclick="greenPaper()" class="waves-effect waves-light btn FooterBtnModel2 ">Greens - Others </a><a id="cancel" class="waves-effect waves-light btn FooterBtnModel " data-dismiss="modal">Cancel</a>')  ;
            $("#successBox").html('Done');
        }
        $('#myModal').modal('show');
    })
    


    
});
function submit(){
    document.getElementById('GreenNext').style.pointerEvents = 'none';
    document.getElementById('Cont_').style.pointerEvents = 'none';
//    allBoxesID.push(boxDetails[0]);
    
        var indexId= allBoxesID.map(function(item) { return item.id; }).indexOf(idBox);
    if(indexId==-1){
    
//    boxesArrey.push({"id":id,"size":size,"title":$("#"+id+" .nameOfDesc").text(),"description":$("#"+id+" .description").text(),"price":$("#"+id+" .pprice").text(),"image":$("#"+id+" img").attr("src"),"amount":1,"priceoneItem":price});
        allBoxesID.push(boxDetails[0]);
    localStorage.setItem("onebox_id",JSON.stringify(boxesArrey));    
    }
    
    else{

        for (var i = 0; i < allBoxesID.length; i++) {
           if(idBox === allBoxesID[i].id){  //look for match with name
               allBoxesID[i].amount ++;  //add 
               allBoxesID[i].price = (allBoxesID[i].amount * allBoxesID[i].priceoneItem).toString();                  //update price
               break;  //exit loop since you found the person
           }
        }
 
    }
    
    localStorage.setItem("onebox_id",JSON.stringify(allBoxesID));
     window.location.href="my-orders.html?id=1";
}
function greenPaper(){
    document.getElementById('Cont_').style.pointerEvents = 'none';
    document.getElementById('GreenNext').style.pointerEvents = 'none';
    allBoxesID.push(boxDetails[0]);
    localStorage.setItem("onebox_id",JSON.stringify(allBoxesID));
    localStorage.setItem("boxID",idBox);
     window.location.href="paper.html?name=add,id="+idBox;
}