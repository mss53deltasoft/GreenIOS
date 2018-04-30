var payment;
var allBoxes=[];
var allpaper=[];
var periods_id ;
var durations_id ;
var specifictimes_id;
var day ;
var items=JSON.parse(localStorage.getItem("items"));
var typeOfboxItem;
var itemsBox=[];
var itemdetails=[];
var locLatitute;
var locLongitude;
var url;
var nav;
var typeOrderRequset;    
var status;
var period;
var duration;
var typejoinRequst;
var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc=JSON.parse(localStorage.getItem("papers"));
paperdesc?paperdesc=paperdesc:paperdesc=[];
var pm;
var am;
var paymentmethod;
$(function(){
    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            $("#orderWaiting").show();
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }    
        if(language=="ar"){
            $("#title_").html('الطلبات و الإشتراكات ');
            $("#appendFooter").html(`<div class="SpecialCol">
            <a href="Medical.html">
            <div class="Fimage" id="healthy">
                <img alt="" src="assets/img/icons/heartbeat.png" />
                <p>
                    فوائد 
                </p>
            </div>
                </a>
        </div>
        <div class="SpecialCol">
            <a href="gallery.html">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/cereal .png" />
                <p>
                    الصور
                </p>
                
            </div>
                </a>
        </div>
        <div class="SpecialCol">
        <a href="home.html"  class="active">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/home.png" />
                <p>
                    <a href="home.html" >الرئيسية</a>
                </p>
            </div>
            </a>
        </div>
      <div class="SpecialCol">
            <a href="orderAndRequst.html" class="active">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/shopping-cart (1).png" />
                <p>
                    طلباتي
                </p>
            </div>
                </a>
        </div>
        <div class="SpecialCol">
            <a href="profile.html" >
            <div class="Fimage">
                <img alt="" src="assets/img/icons/group.png" />
                <p>
                    صفحتي
                </p>
            </div>
                </a>
        </div>`);
     
        }
    
        else if(language=="en"){
            $("#title_").html('Orders and Subsciption');
            $("#appendFooter").html(`   <div class="SpecialCol">
            <a href="Medical.html">
            <div class="Fimage" id="healthy">
                <img alt="" src="assets/img/icons/heartbeat.png" />
                <p>
                Health  
                </p>
            </div>
                </a>
        </div>
        <div class="SpecialCol">
            <a href="gallery.html">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/cereal .png" />
                <p>
                Pictures
                </p>
                
            </div>
                </a>
        </div>
        <div class="SpecialCol">
        <a href="home.html"  class="active">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/home.png" />
                <p>
                    <a href="home.html" >Home</a>
                </p>
            </div>
            </a>
        </div>
      <div class="SpecialCol">
            <a href="orderAndRequst.html" class="active">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/shopping-cart (1).png" />
                <p>
               My orders
                </p>
            </div>
                </a>
        </div>
        <div class="SpecialCol">
            <a href="profile.html" >
            <div class="Fimage">
                <img alt="" src="assets/img/icons/group.png" />
                <p>
                Profile
                </p>
            </div>
                </a>
        </div>`);
        }
    $.post(urlSer+'/api/v1/requestDetails/'+language+'?token='+userId,function(dataResquest){
        $('.loadsimage').hide();
            if(dataResquest.order.length==0){
                $("#modal_2").modal('show');
                if(language=="ar"){
                    $("#NoOrderSub").html('لا يوجد اي طلبات او إشتراكات ');
                    $("#close").html('إلغاء');
                }
                else if(language=="en"){
                    $("#NoOrderSub").html('There are no orders or subscriptions');
                    $("#close").html('Cancel');
                }
            }
        else{
            
            $(dataResquest.order).each(function(i,v){
        
        if(v.type==0)
            {
                if(language=="ar"){
                    typeOrderRequset="إشتراك";
                }
                else if(language=="en"){
                    typeOrderRequset="Subscriptions";
                }
                 
            }
        else if(v.duration_value==1&& v.periods_id==1)
            { 
                if(language=="ar"){
                    typeOrderRequset="طلب";
                }
                else if(language=="en"){
                    typeOrderRequset="Order";
                }
               
            }
        
        if(v.status=="0")
            {
                if(language=="ar"){
                    status="مؤكد";
                }
                else if(language=="en"){
                    status="Confirmed";
                }
                 

                $(".Done-1").css({"background":"#3fbb7a"});
            }
        else if(v.status=="2")
            {
                $(".Done-1").css({"background":"#3cb1d3"});
                if(language=="ar"){
                    status="تم التسليم";
                }
                else if(language=="en"){
                    status="Delivered";
                }
                

            }
            
            //*******************//
         //مدة الاشتراك 
        if(v.duration_value=="1"){
            if(language=="ar"){
                period="أسبوع";
            }
            else if(language=="en"){
                period="Week";
            }
            
        }
        else if(v.duration_value=="2"){
            if(language=="ar"){
                period="أسبوعين";
            }
            else if(language=="en"){
                period="two week";
            }
           
       
        }
        else if(v.duration_value=="3"){
            if(language=="ar"){
                period="شهر";
            }
            else if(language=="en"){
                period="Month";
            }
         
          
        }
        else if(v.duration_value=="4"){
            if(language=="ar"){
                period="شهرين";
            }
            else if(language=="en"){
                period="Two month";
            }
           
            
        }
            
            //*******************//
        //نوع الاشتراك
           if(v.periods_id=="1")
               {
                if(language=="ar"){
                    typejoinRequst= "مرة في الأسبوع ";
                }
                else if(language=="en"){
                    typejoinRequst= "Once a week";
                }
                 
               }
           else if(v.periods_id=="2")
               {
                if(language=="ar"){
                    typejoinRequst= "مرتين في الأسبوع ";
                }
                else if(language=="en"){
                    typejoinRequst= "Twice a week";
                }
                  
                   
               }
           else if(v.periods_id=="3")
               {
                if(language=="ar"){
                    typejoinRequst= "مرة كل أسبوعين ";
                }
                else if(language=="en"){
                    typejoinRequst= "Twice a month";
                }
                   
                
               }
            
           //***********************// 
           if(language=="ar"){
             pm="مساءا";
             am="صباحا";
        }
        else if(language=="en"){
             pm ="PM";
             am ="AM";
        }
            
                
        if(v.specifictimes_id=="3"){
//             duration="1pm-3pm";
            duration=" 1 " +pm+"-" + " 3 " + pm;

        }   
                 
        else if(v.specifictimes_id=="7"){
//            duration="4pm-6pm";
            duration=" 4 " +pm+"-" + " 6 " + pm;
        } 
                 
        else if(v.specifictimes_id=="8"){
//            duration="7pm-9pm";
            
            duration=" 7 " +pm+"-" + " 9 " + pm;
        } 
        else if(v.specifictimes_id=="9"){
//            duration="10pm-12am";
            duration=" 10 " +pm+"-" + " 12 " + am;
        } 
            
        if(language=="ar"){
            if(typeOrderRequset=="إشتراك")
            {
    
             $("#orderWaiting_").append('<div class="col-sm-12"><div id="card-alert" class="card "><div class="card-content white-text"><a ><img src="assets/img/products/1.png" class="notificationClass"><span>'+typeOrderRequset+'</span><span id='+v.id+' class="Done-1'+v.id+'"> '+status+'</span></a><table class="table table-1"><tr><td><p><strong> <i class="material-icons">date_range</i> تاريخ الطلب :</strong> <span> '+v.start_date.split(" ")[0].split("-")[2]+"-"+v.start_date.split("-")[1]+"-"+v.start_date.split("-")[0]+' </span></p></td><td><p><strong> <i class="material-icons">access_time</i> وقت الطلب :</strong> <span> '+v.start_date.split(" ")[1].split(":")[0]+":"+v.start_date.split(" ")[1].split(":")[1]+'</span> </p></td></tr> <tr><td colspan="2"><p><strong> <i class="material-icons">access_time</i> وقت التسليم :</strong> <span> '+duration+'</span></p></td></tr><tr><td><p><strong> <i class="material-icons">repeat</i> نوع الاشتراك :</strong> <span>'+typejoinRequst+' </span></p></td><td><p><strong> <i class="material-icons">history</i>  مدة الإشتراك :</strong> <span> '+period+' </span></p></td></tr><tr><td colspan="2"><p><strong><i class="material-icons">add_location</i> العنوان :</strong> <span> '+v.address+'</span></p></td> </tr><tr><td colspan="2"><p><strong><i class="material-icons">  </i> طريقة الدفع  :</strong> <span> '+v.payment_method+'</span></p></td> </tr><tr><td colspan="2"><a onclick="nextPage('+v.id+',\''+status+'\')"  class="abslout">التفاصيل <i class="material-icons">arrow_back</i></a></td></tr></table></div></div>');
            }
            if(typeOrderRequset=="طلب")
            {
                $("#orderWaiting_").append('<div class="col-sm-12"><div id="card-alert" class="card "><div class="card-content white-text"><a ><img src="assets/img/products/1.png" class="notificationClass"><span>'+typeOrderRequset+'</span><span id='+v.id+' class="Done-1'+v.id+'"> '+status+'</span></a><table class="table table-1"> <tr><td><p><strong> <i class="material-icons">date_range</i> تاريخ الطلب :</strong> <span> '+v.start_date.split(" ")[0].split("-")[2]+"-"+v.start_date.split(" ")[0].split("-")[1]+"-"+v.start_date.split(" ")[0].split("-")[0]+' </span></p></td><td><p><strong> <i class="material-icons">access_time</i> وقت الطلب :</strong> <span> '+v.start_date.split(" ")[1].split(":")[0]+":"+v.start_date.split(" ")[1].split(":")[1]+'</span></p></td></tr><tr><td><p><strong> <i class="material-icons">date_range</i> تاريخ التسليم :</strong> <span>'+v.deliever_time.split("-")[2]+"-"+v.deliever_time.split("-")[1]+"-"+v.deliever_time.split("-")[0]+'</span></p></td><td><p><strong> <i class="material-icons">access_time</i> وقت التسليم :</strong> <span> '+duration+'</span></p></td></tr><tr><td colspan="2"><p><strong><i class="material-icons">add_location</i> العنوان :</strong> <span> '+v.address+'</span></p></td> </tr><tr><td colspan="2"><p><strong><i class="material-icons">  </i> طريقة الدفع  :</strong> <span> '+v.payment_method+'</span></p></td> </tr><tr><td colspan="2"><a onclick="nextPage('+v.id+',\''+status+'\')"  class="abslout">التفاصيل <i class="material-icons">arrow_back</i></a> </td></tr></table></div></div>'); 
            }
        }
        else if(language=="en"){
            if(v.payment_method==" عن طريق الشبكه"){
                paymentmethod="Payment via network";
            }
            else if(v.payment_method=="كاش"){
                paymentmethod="Cash payment";

            }
            if(typeOrderRequset=="Subscriptions")
            {
    
             $("#orderWaiting_").append('<div class="col-sm-12"><div id="card-alert" class="card "><div class="card-content white-text"><a ><img src="assets/img/products/1.png" class="notificationClass"><span>'+typeOrderRequset+'</span><span id='+v.id+' class="Done-1'+v.id+'"> '+status+'</span></a><table class="table table-1"><tr><td><p><strong> <i class="material-icons">date_range</i>Request date:</strong> <span> '+v.start_date.split(" ")[0].split("-")[2]+"-"+v.start_date.split("-")[1]+"-"+v.start_date.split("-")[0]+' </span></p></td><td><p><strong> <i class="material-icons">access_time</i> Request time :</strong> <span> '+v.start_date.split(" ")[1].split(":")[0]+":"+v.start_date.split(" ")[1].split(":")[1]+'</span> </p></td></tr> <tr><td><p><strong> <i class="material-icons">date_range</i>Delivery date :</strong> <span>'+  v.deliever_time.split("-")[2]+"-"+v.deliever_time.split("-")[1]+"-"+v.deliever_time.split("-")[0]+'</span></p></td><td><p><strong> <i class="material-icons">access_time</i> Delivery time :</strong> <span> '+duration+'</span></p></td></tr><tr><td><p><strong> <i class="material-icons">repeat</i> Subtype :</strong> <span>'+typejoinRequst+' </span></p></td><td><p><strong> <i class="material-icons">history</i>  Subscription duration:</strong> <span> '+period+' </span></p></td></tr><tr><td colspan="2"><p><strong><i class="material-icons">add_location</i> Address :</strong> <span> '+v.address+'</span></p></td> </tr><tr><td colspan="2"><p><strong><i class="material-icons">credit_card</i> Payment method:</strong> <span> '+paymentmethod+'</span></p></td> </tr><tr><td colspan="2"><a onclick="nextPage('+v.id+',\''+status+'\')" class="abslout">Details <i class="material-icons">arrow_right</i></a></td></tr></table></div></div>');
            }
            if(typeOrderRequset=="Order")
            {
                $("#orderWaiting_").append('<div class="col-sm-12"><div id="card-alert" class="card "><div class="card-content white-text"><a ><img src="assets/img/products/1.png" class="notificationClass"><span>'+typeOrderRequset+'</span><span id='+v.id+' class="Done-1'+v.id+'"> '+status+'</span></a><table class="table table-1"> <tr><td><p><strong> <i class="material-icons">date_range</i> Request date:</strong> <span> '+v.start_date.split(" ")[0].split("-")[2]+"-"+v.start_date.split(" ")[0].split("-")[1]+"-"+v.start_date.split(" ")[0].split("-")[0]+' </span></p></td><td><p><strong> <i class="material-icons">access_time</i>Request time :</strong> <span> '+v.start_date.split(" ")[1].split(":")[0]+":"+v.start_date.split(" ")[1].split(":")[1]+'</span></p></td></tr><tr><td><p><strong> <i class="material-icons">date_range</i> Delivery date :</strong> <span>'+v.deliever_time.split("-")[2]+"-"+v.deliever_time.split("-")[1]+"-"+v.deliever_time.split("-")[0]+'</span></p></td><td><p><strong> <i class="material-icons">access_time</i> Delivery time:</strong> <span> '+duration+'</span></p></td></tr><tr><td colspan="2"><p><strong><i class="material-icons">add_location</i> Address :</strong> <span> '+v.address+'</span></p></td> </tr><tr><td colspan="2"><p><strong><i class="material-icons">credit_card</i> Payment method:</strong> <span> '+paymentmethod+'</span></p></td> </tr><tr><td colspan="2"><a onclick="nextPage('+v.id+',\''+status+'\')" class="abslout">Details <i class="material-icons">arrow_right</i></a> </td></tr></table></div></div>'); 
            }
        }


    
if(language=="ar"){
            
        if(v.status=="0")
            {

                $(".Done-1"+v.id).css({"background":"#3fbb7a","width":"89px","height":"39px","border-radius":"-6%","text-align":"center","line-height":"39px","color":"#fff",   "position":"absolute","left":"0px","top":"0"});
            }
        else if(v.status=="1")
            {
               $(" .Done-1"+v.id).css({"background":"#e2381a","width":"89px","height":"39px","border-radius":"-6%","text-align":"center","line-height":"39px","color":"#fff",   "position":"absolute","left":"0px","top":"0"});
              
            }
        else if(v.status=="2")
            {
                $(".Done-1"+v.id).css({"background":"#3cb1d3","width":"89px","height":"39px","border-radius":"-6%","text-align":"center","line-height":"39px","color":"#fff",   "position":"absolute","left":"0px","top":"0"});
            
            }
        }
        else if(language=="en"){
            if(v.status=="0")
            {

                $(".Done-1"+v.id).css({"background":"#3fbb7a","width":"89px","height":"39px","border-radius":"-6%","text-align":"center","line-height":"39px","color":"#fff",   "position":"absolute","right":"0px","top":"0"});
            }
        else if(v.status=="1")
            {
               $(" .Done-1"+v.id).css({"background":"#e2381a","width":"89px","height":"39px","border-radius":"-6%","text-align":"center","line-height":"39px","color":"#fff",   "position":"absolute","right":"0px","top":"0"});
              
            }
        else if(v.status=="2")
            {
                $(".Done-1"+v.id).css({"background":"#3cb1d3","width":"89px","height":"39px","border-radius":"-6%","text-align":"center","line-height":"39px","color":"#fff",   "position":"absolute","right":"0px","top":"0"});
            
            }
        }
        });
        
        }
    });
});
function nextPage(id,status){
    localStorage.setItem("statusOrder",status);
    window.location.href="orderDetails.html?id="+id;
}