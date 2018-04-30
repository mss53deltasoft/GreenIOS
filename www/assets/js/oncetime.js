var typejoin;
var selectDay;
var typeTime;
var selectperiod;
var url ;
var nav ;
var day;
var date;
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
        // To disable:    
    document.getElementById('submit').style.pointerEvents = 'none';
    $('input:checked').prop('checked', false);
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
        $("#submit strong").html('التالي');
        $("#title_").html('طلب');
        $("#selectDayOrder").html('حدد يوم الطلب');
        $("#chooseTime").html('اختر وقت التسليم');
        $("#appendtime").html(`<div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test10" value="3">

        <label for="test10"><span>1 </span><span>مساء</span><span> - </span><span>3 </span><span>مساء</span></label>

    </div>
    <div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test11" value="7">

        <label for="test11"><span>4 </span><span>مساء</span><span> - </span><span>6 </span><span>مساء</span></label>

    </div>
      <div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test12" value="8">

             <label for="test12"><span>7 </span><span>مساء</span><span> - </span><span>9 </span><span>مساء</span></label>
    </div>
<div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test13" value="9">
   <label for="test13"><span>10 </span><span>مساء</span><span> - </span><span>12 </span><span>صباحا</span></label>

    </div>
`);

    }
    else if(language=="en"){
        $("#submit strong").html('Next');
        $("#title_").html('Order');
        $("#selectDayOrder").html('Select a day');
        $("#chooseTime").html('Choose delivery time');
        $("#appendtime").html(`<div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test10" value="3">

        <label for="test10"><span>1 </span><span>PM</span><span> - </span><span>3 </span><span>PM</span></label>

    </div>
    <div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test11" value="7">

        <label for="test11"><span>4 </span><span>PM</span><span> - </span><span>6 </span><span>PM</span></label>

    </div>
      <div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test12" value="8">

             <label for="test12"><span>7 </span><span>PM</span><span> - </span><span>9 </span><span>PM</span></label>
    </div>
<div class="col-xs-12">
        <input class="with-gap" name="group2" type="radio" id="test13" value="9">
   <label for="test13"><span>10 </span><span>PM</span><span> - </span><span>12 </span><span>AM</span></label>

    </div>
`);
    }
   
    $("#myForm2 div input").change(function(){
        selectperiod= $('input[name=group2]:checked', '#myForm2').val();
 
     });
    $.post(urlSer+'/api/v1/timeforOrder/'+language+'?token='+userId,function(data){
        $('.loadsimage').hide();

        var date_;
        var val;
        var id;
        var day_;
        var nameday;
        $(data.all).each(function(i,v){
if(language=="ar"){
            day_=v[0].split(" ")[1];
                if(day_=="الأحد"){
                 date_=v[0].split(" ")[0].split("-")[2]+"-"+v[0].split(" ")[0].split("-")[1]+"-"+v[0].split(" ")[0].split("-")[0];
                    val="3";
                    id="test8";
                    nameday="sunday";
                }
                else if(day_=="الأربعاء"){
                date_=v[0].split(" ")[0].split("-")[2]+"-"+v[0].split(" ")[0].split("-")[1]+"-"+v[0].split(" ")[0].split("-")[0];
                    val="2";
                    id="test9";
                     nameday="wednesday";
                }
                        $("#setDay").append('<div class="col-xs-12"> <input class="with-gap" name="group1" type="radio" id='+id+' value='+val+'><label for='+id+' id='+nameday+'>'+day_+" "+date_+'</label></div>');

           }   
        else if(language=="en"){
            day_=v[0].split(" ")[1];
            if(day_=="Sunday"){
                // date_=v[0].split(" ")[0];
              date_=v[0].split(" ")[0].split("-")[2]+"-"+v[0].split(" ")[0].split("-")[1]+"-"+v[0].split(" ")[0].split("-")[0];
                val="3";
                id="test8";
                nameday="sunday";
            }
            else if(day_=="Wednesday"){
                // date_=v[0].split(" ")[0];
             date_=v[0].split(" ")[0].split("-")[2]+"-"+v[0].split(" ")[0].split("-")[1]+"-"+v[0].split(" ")[0].split("-")[0];
                val="2";
                id="test9";
                 nameday="wednesday";
            }
                    $("#setDay").append('<div class="col-xs-12"> <input class="with-gap" name="group1" type="radio" id='+id+' value='+val+'><label for='+id+' id='+nameday+'>'+day_+" "+date_+'</label></div>');

       
        }

})
        

       
            $("#myForm div input").change(function(){
       selectDay = $('input[name=group1]:checked', '#myForm').val();

    });

        $(".bgButtom1_").css("background","#2fc83f");
        document.getElementById('submit').style.pointerEvents = 'auto';
        
    })
               
    $("#submit").click(function(){
   $(".loads").show();
         if(selectperiod==undefined){

           $("#period").show();
           if(language=="ar"){
            $("#period").html('لابد من تحديد الفترة');
           }
           else if(language=="en"){
            $("#period").html(' Select period');
           }
           
        }
        else  $("#period").hide();
         if(selectDay==undefined){
            $("#oneweek").show();
            if(language=="ar"){
                $("#oneweek").html('لابد من تحديد اليوم');
               }
               else if(language=="en"){
                $("#oneweek").html('Select Day');
               }
           
            
        }
         else  $("#oneweek").hide();

        if(selectDay=="3"){
            day=$("#sunday").text().split(" ")[2];
            date=$("#sunday").text().split(" ")[3];
            
            localStorage.setItem("orderDay",JSON.stringify({day:day,date:date}))
        }
        else if(selectDay=="2"){
            day=$("#wednesday").text().split(" ")[0];
            date=$("#wednesday").text().split(" ")[1];
            
            localStorage.setItem("orderDay",JSON.stringify({day:day,date:date}))
        }

               if(selectperiod=="3")
            {
              localStorage.setItem("orderdeliver","1pm-3pm");
            }
         else if(selectperiod=="7")
            {
              localStorage.setItem("orderdeliver","4pm-6pm");
            }
          else if(selectperiod=="8")
            {
              localStorage.setItem("orderdeliver","7pm-9pm ");
            }
          else if(selectperiod=="9")
            {
              localStorage.setItem("orderdeliver","10pm-12am ");
            }
        
        
        
        
        
               if(selectDay!=undefined&&selectperiod!=undefined&&nav=="1")
        {
            localStorage.setItem("joinData",JSON.stringify({day:selectDay,period:selectperiod}));

             window.location.href="ourBoxType.html?id=1";

        }
        
        
        
        
        
        else if(selectDay!=undefined&&selectperiod!=undefined&&nav=="2"){
             localStorage.setItem("joinData",JSON.stringify({day:selectDay,period:selectperiod}));

    //             $.post(urlSer+'/api/v1/numberOfitems?token='+userId,function(data){

    //         var vegAndfruits_id=data.number[2].itemtypes_id;
    //         var vegAndfruits_number=data.number[2].number;
    //         if(language=="ar"){
    //             localStorage.setItem("Ouritemsname","خضروات و فواكه");  localStorage.setItem("availableNumitems",JSON.stringify({"id":vegAndfruits_id,"item":vegAndfruits_number}))
          
    //         }
    //         else if(language=="en"){
    //             localStorage.setItem("Ouritemsname","vegetables and fruits");  localStorage.setItem("availableNumitems",JSON.stringify({"id":vegAndfruits_id,"item":vegAndfruits_number}))
          
    //         }
    //        window.location.href="ourgroup-once.html?id=1";

     
    // });
    window.location.href="ourgroup-once.html?id=1";
        }
    })
})