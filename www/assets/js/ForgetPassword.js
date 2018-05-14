$(function(){
    if(language=="ar"){
        $("h3").html(" إسترجاع كلمة المرور ,");
        $("#appendContent").html(`<div class="input-field col s12">
        <i class="material-icons prefix">stay_current_portrait</i>
        <input name="phone_number" id="phone_number" type="number" class="validate" required>
        <div class="warn" id="warnPhone"></div>
        <label for="phone_number">رقم الجوال</label>
    </div>

    <div class=" col s12 text-center">
        <a id="sumbit" class="theme-btn waves-effect waves-light btn">
            <b> إرسال الكود </b>
        </a>
    </div>`);
    }
    else if(language=="en"){
        $("h3").html(" Recover password ,");
        $("#appendContent").html(`<div class="input-field col s12">
        <i class="material-icons prefix">stay_current_portrait</i>
        <input name="phone_number" id="phone_number" type="number" class="validate" required>
        <div class="warn" id="warnPhone"></div>
        <label for="phone_number">Phone</label>
    </div>

    <div class=" col s12 text-center">
        <a id="sumbit" class="theme-btn waves-effect waves-light btn">
            <b> Send code </b>
        </a>
    </div>`);
    }
    $("#sumbit").click(function(){
         $(".loads").show();
            // var name=$("#name").val();
            var phone_number=$("#phone_number").val();
            // var password=$("#password").val();
            // var password_confirmation=$("#password_confirmation").val();


            // localStorage.setItem('name',name);
            localStorage.setItem('phone_number',phone_number);
            // localStorage.setItem('password',password);
            // localStorage.setItem('password_confirmation',password_confirmation);


            var dataphone ={"phone_number":phone_number };
            // var data={ "name":name,"phone_number":phone_number,"password":password,"password_confirmation":password_confirmation};


            // $.post(urlSer+"/api/v1/checkPhoneNumber",dataphone,function(allData){
            //     console.log(allData);
            //     if(allData.success==="true"){
            //         var phone = "+966"+ phone_number;
            //             //  var phone = "+2"+ phone_number;

            //         window.FirebasePlugin.getToken(function(token) {
            //             // save this server-side and use it to push notifications to this device
            //         localStorage.setItem('token',token);
                        
            //             console.log(token);
            //         }, function(error) {
            //             console.error(error);
            //         });
            //         // localStorage.setItem("Phone",phone);
            //        firebaseImplement.phoneAuth(phone, "Forget");

            //     }else{
            //         if(language=="ar"){
            //             $("#warnPhone").show().html("الرقم الذي ادخلت غير صحيح");
            //         }
            //        else if(language=="en"){
            //             $("#warnPhone").show().html("Error number");
            //         }
                   
            //     }
            // });
             var nav = "Forget";
            $.post(urlSer + "/api/v1/getForgetPass", dataphone, function (allData) {

                if (allData.success) {
                    window.location.href = "confirmationcode.html?id=" + nav;

                } else {
                    $("#warnCode").show().html("حدث خطأ في التسجيل");
                }

            });


    });

});