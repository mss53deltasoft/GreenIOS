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
            $("#title_").html('المقترحات و الشكاوي');
            $("#Contain").html(`<h5 class="text-right textContact">يمكنك إرسال رساله والتواصل معنا</h5>
            <div class="contact-form card Form-Contact">
                <!--                            <form class="contact-form row" id="contact-form">-->
                <div class="form-group col-sm-4">
                    <input class="form-control validate" placeholder="الاسم" name="name" id="name" type="text" required onkeydown="validateName(this);" onkeyup="validateName(this);">
                    <div class="warn" id="warnname" style="
                    color: red;
                "></div>
                <div class="warn" id="warnName" ></div>

                </div>
                <div class="form-group col-sm-4">
                    <input class="form-control validate" placeholder="البريد الالكتروني" name="email" id="email" type="email" required>
                    <div class="warn" id="warnmail" style="
                    color: red;
                "></div>
                    </div>
                <div class="form-group col-sm-4">
                    <input type="tel" class="form-control validate" placeholder="هاتف" name="phone_number" id="phone_number" required onkeydown="validatePhone(this);" onkeyup="validatePhone(this);">
                    <div class="warn" id="warntel" style="
                    color: red;
                "></div>
                <div class="warn" id="warnPhoneMin" ></div>
                <div class="warn" id="warnPhoneStarts" ></div>
                    </div>
                <div class="form-group col-sm-12">
                    <textarea class="form-control validate" placeholder="الرساله" name="message" id="message" cols="12" rows="4" required></textarea>
                    <div class="warn" id="warnmsg" style="
                    color: red;
                "></div>
                    </div>
                <div class=" col-sm-12 text-center pt-15">
                    <button id="submit" class="theme-btn">
                        <strong> أرسال </strong>
                        <span class="loads" style="display:none"></span>
                    </button>
                </div>
            </div>`);
            $("#note").html('تم إرسال الشكوي ');
            $("#close").html('أغلق');
        }
        else if(language=="en"){
            $("#title_").html('Suggestion and Complaints');
            $("#note").html('The complaint was sent');
            $("#close").html('close');
            $("#Contain").html(`<h5 class="text-right textContact">You can send a message and contact us</h5>
            <div class="contact-form card Form-Contact">
                <div class="form-group col-sm-4">
                    <input class="form-control validate" placeholder="Name" name="name" id="name" type="text" required onkeydown="validateName(this);" onkeyup="validateName(this);">
                    <div class="warn" id="warnname" style="
                    color: red;
                "></div> <div class="warn" id="warnName" ></div>
                    </div>
                <div class="form-group col-sm-4">
                    <input class="form-control validate" placeholder="Email" name="email" id="email" type="email" required>
                    <div class="warn" id="warnmail" style="
                    color: red;
                "></div>
                    </div>
                <div class="form-group col-sm-4">
                    <input type="tel" class="form-control validate" placeholder="Phone" name="phone_number" id="phone_number" required onkeydown="validatePhone(this);" onkeyup="validatePhone(this);">
                    <div class="warn" id="warntel" style="color: red;"></div>  
                    <div class="warn" id="warnPhoneMin" ></div>
                    <div class="warn" id="warnPhoneStarts" ></div>
                    </div>
                <div class="form-group col-sm-12">
                    <textarea class="form-control validate" placeholder="Message" name="message" id="message" cols="12" rows="4" required></textarea>
                    <div class="warn" id="warnmsg" style="
                    color: red;
                "></div>
                    </div>
                <div class=" col-sm-12 text-center pt-15">
                    <button id="submit" class="theme-btn">
                        <strong> Send </strong>
                        <span class="loads" style="display:none"></span>
                    </button>
                </div>
            </div>`);
        }
    $("#submit").click(function(){
        $(".loads").show();
         var name =$("#name").val();
         var email =$("#email").val();
         var phone_number =$("#phone_number").val();
         var message =$("#message").val();
         var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (!filter.test(email)) {
            if(language=="ar"){
               
                $("#warnmail").show().html("هذا الأيميل غير صحيح  ");
                }
                else if(language=="en"){
                    $("#warnmail").show().html("Invalid email");
                 
                }
           
            email.focus;
            // return false;
        }
 
         if(language=="ar"){
            if(name==""){
                $("#warnname").show().html("الأسم مطلوب");
             }
             else{
                $("#warnname").hide();
             }
             if(email==""){
                $("#warnmail").show().html("البريد الألكتروني مطلوب");
             }
             else{
                $("#warnmail").hide();
             }
             if(phone_number==""){
                $("#warntel").show().html("الجوال مطلوب");
             }
             else{
                $("#warntel").hide();
             }
             if(message==""){
                $("#warnmsg").show().html("الرساله مطلوب");
             }
             else{
                $("#warnmsg").hide();
             }
         }
         else if(language=="en"){
            if(name==""){
                $("#warnname").show().html("Name required ");
             }
             else{
                $("#warnname").hide();
             }
             if(email==""){
                $("#warnmail").show().html("Email required  ");
             }
             else{
                $("#warnmail").hide();
             }
             if(phone_number==""){
                $("#warntel").show().html("Phone required ");
             }
             else{
                $("#warntel").hide();
             }
             if(message==""){
                $("#warnmsg").show().html("Message required ");
             }
             else{
                $("#warnmsg").hide();
             }
         }
     
         var data={ 
                  "name" :name,
                  "email":email,
                  "phone_number":phone_number,
                  "message":message
         }
           $.post(urlSer+'/api/v1/contactUs/'+language+'?token='+userId,data,function(alldata){

               $("#myModal").modal('show');
           });
          

    })
})
function validateName(char){    
    var lastChar=char.value.charAt(char.value.length-1);

    // console.log( /\d/.test(char.value));
    if( /\d/.test(lastChar))
    {
        char.value = char.value.replace(/[0-9]/g, "");     
        if(language=="ar"){
            $("#warnName").show().html("لا يمكنك إدخال أرقام");
        }
        else if(language=="en"){
            $("#warnName").show().html("Enter letters");
        }
        

    }else{
        $("#warnName").hide();

        if(document.getElementById("name").value.startsWith(" ")){
            char.value = char.value.substring(0, char.value.length - 1);    
            }
    }

}



function validatePhone(char){    
    // console.log( /\d/.test(char.value));
    if( /^\d+$/.test(char.value))
    {
        if (document.getElementById("phone_number").value.length <= 10 ){
            if(language=="ar"){
                $("#warnPhoneMin").show().html("لا بد من إدخال 10 أرقام");
            }
            else if(language=="en"){
                $("#warnPhoneMin").show().html(" Enter 10 number");
            }
        
            $("#warnPhone").hide();
            $("#warnPhoneStarts").hide();
            if(!document.getElementById("phone_number").value.startsWith("0")){
            char.value = char.value.replace(/[0-9]/g, "");     
            if(language=="ar"){
                $("#warnPhoneStarts").show().html(" لا بد أن يبدأ الرقم بصفر");
            }
            else if(language=="en"){
                $("#warnPhoneStarts").show().html(" Start 0");
        
            }
         
            }
            oldPhoneval =char.value;
            phoneLONG = false;
            if(char.value.length == 10){
            phoneLONG = true;
            $("#warnPhoneMin").hide();
            }

        }else{
            // oldPhoneval =char.value;
            char.value = oldPhoneval;   
            phoneLONG = true; 
            if(language=="ar"){
                $("#warnPhoneMin").show().html("لا يمكنك إدخال أكثر من 10 أرقام");
            }
            else if(language=="en"){
                $("#warnPhoneMin").show().html("Don't enter more than 10 ");
        
            }
           
        }


    }else{
        // char.value = char.value.substring(0, char.value.length - 1);    

        char.value = char.value.replace(/[^\d]/g, '');
        oldPhoneval =char.value;
        if(language=="ar"){
            $("#warnPhone").show().html("الرجاء إستخدام ارقام اللغة الإنجليزية");
        }
        else if(language=="en"){
            $("#warnPhone").show().html( "Don't Enter letters");
    
        }
        
    }
}