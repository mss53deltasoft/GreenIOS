var canReg = false;
var nameLONG = false;
var phoneLONG = false;
var passwordLONG = false;
var cpasswordLONG = false;

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
                $("#warnPhoneMin").show().html("لا بد من ادخال 10 ارقام");
            }
            else if(language=="en"){
                $("#warnPhoneMin").show().html(" Enter 10 number");
            }
        
            $("#warnPhone").hide();
            $("#warnPhoneStarts").hide();
            if(!document.getElementById("phone_number").value.startsWith("0")){
            char.value = char.value.replace(/[0-9]/g, "");     
            if(language=="ar"){
                $("#warnPhoneStarts").show().html(" لا بد ان يبدا الرقم بصفر");
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
                $("#warnPhoneMin").show().html("لا يمكنك ادخال اكثر من 10 ارقام");
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

$( "#phone_number" ).blur(function() {
    if($ ( "#phone_number" ).val().length == 10){
        $("#warnPhoneMin").hide();
    }
  });




$(function () {

    if(language=="ar"){
       $("#appendRegister").html(`         <h3 class="text-center">حساب جديد</h3>  
       <form class="col s12 gray-control ">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">supervisor_account</i>
            <input name="name" id="name" type="text" class="validate"  required onkeydown="validateName(this);" onkeyup="validateName(this);" >
            <div class="warn" id="warnName" ></div>
            <div class="warn" id="warnNameMin" ></div>
            <label for="name">الاسم</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">stay_current_portrait</i>
            <input  name="phone_number" id="phone_number" type="tel" class="validate" required onkeydown="validatePhone(this);" onkeyup="validatePhone(this);">
            <div class="warn" id="warnPhone" ></div>
            <div class="warn" id="warnPhoneMin" ></div>
            <div class="warn" id="warnPhoneStarts" ></div>
            <label for="phone_number">رقم الجوال</label>
          </div>
          <div id="recaptcha-container"></div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input name="password" id="password" type="password" class="validate" required >
              <div class="warn" id="warnPass" ></div>
            <label for="password"> كلمة المرور</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input name="password_confirmation"  id="password_confirmation" type="password" class="validate"  required>
              <div class="warn" id="warnConfirmPass" ></div>
            <label for="password_confirmation">تأكيد كلمة المرور </label>
          </div>
         
          
          <div class=" col s12 text-center">
              <!-- <buttom  id="sign-in-button" class="theme-btn waves-effect waves-light btn"> <b> تسجيل </b> <span class="loads" style="display:none"></span> </buttom>                                             -->
              <buttom  id="sumbit" class="theme-btn waves-effect waves-light btn"> <b> تسجيل </b> <span class="loads" style="display:none"></span> </buttom>                                            
          </div>
          <div class=" col s12 text-center  " style="padding-top: 25px;">
              <a href="login.html"  >لديك حساب بالفعل؟<span class="red-text">تسجيل الدخول</span></a>                                          
          </div>
        </div>
        
      </form>
      

      
      <div class="pt-15 col-sm-12 text-center">                                               
      </div>`);
    }
    else if(language=="en"){
        $("#appendRegister").html(`<h3 class="text-center">New Account </h3>  
        <form class="col s12 gray-control ">
         <div class="row">
           <div class="input-field col s12">
             <i class="material-icons prefix">supervisor_account</i>
             <input name="name" id="name" type="text" class="validate"  required onkeydown="validateName(this);" onkeyup="validateName(this);" >
             <div class="warn" id="warnName" ></div>
             <div class="warn" id="warnNameMin" ></div>
             <label for="name">Name</label>
           </div>
           <div class="input-field col s12">
             <i class="material-icons prefix">stay_current_portrait</i>
             <input  name="phone_number" id="phone_number" type="tel" class="validate" required onkeydown="validatePhone(this);" onkeyup="validatePhone(this);">
             <div class="warn" id="warnPhone" ></div>
             <div class="warn" id="warnPhoneMin" ></div>
             <div class="warn" id="warnPhoneStarts" ></div>
             <label for="phone_number"> Phone number</label>
           </div>
           <div id="recaptcha-container"></div>
           <div class="input-field col s12">
             <i class="material-icons prefix">lock</i>
             <input name="password" id="password" type="password" class="validate" required >
               <div class="warn" id="warnPass" ></div>
             <label for="password"> Password</label>
           </div>
           <div class="input-field col s12">
             <i class="material-icons prefix">lock</i>
             <input name="password_confirmation"  id="password_confirmation" type="password" class="validate"  required>
               <div class="warn" id="warnConfirmPass" ></div>
             <label for="password_confirmation">Confirm Password</label>
           </div>
          
           
           <div class=" col s12 text-center">
               <!-- <buttom  id="sign-in-button" class="theme-btn waves-effect waves-light btn"> <b> تسجيل </b> <span class="loads" style="display:none"></span> </buttom>                                             -->
               <buttom  id="sumbit" class="theme-btn waves-effect waves-light btn"> <b> Register </b> <span class="loads" style="display:none"></span> </buttom>                                            
           </div>
           <div class=" col s12 text-center  " style="padding-top: 25px;">
               <a href="login.html"  > have account? <span class="red-text">Login </span></a>                                          
           </div>
         </div>
         
       </form>
       

       
       <div class="pt-15 col-sm-12 text-center">                                               
       </div>`);
    }
    var oldPhoneval =document.getElementById("phone_number").value;
    /// Validation For Name;
    $("#name").on("keydown keyup", function (event) {  
        var $input = document.getElementById("name");
        var last$inputValue = $input.value;
            var newValue = $input.value;
            if (last$inputValue != newValue) {
                last$inputValue = newValue;
            }
            if (newValue.length <= 2) {
                if(language=="ar"){
                    $("#warnNameMin").show().html("لا بد أن يحتوي الاسم على 3 حروف على الأقل");
                }
                else if(language=="en"){
                    $("#warnNameMin").show().html("The name must contain at least 3 characters");
            
                }
                
                nameLONG = false;
            } else {
                $("#warnNameMin").hide();
                nameLONG = true;
            }
    });


    /// Validation For Passowrd;
    $("#password").on("keydown", function (event) {
        var $input = document.getElementById("password");
        var last$inputValue = $input.value;

        setInterval(function () {
            var newValue = $input.value;

            if (last$inputValue != newValue) {
                last$inputValue = newValue;
            }

            if (newValue.length <= 5) {
                if(language=="ar"){
                    $("#warnPass").show().html("لا يمكن ان تقل كلمة المرور عن 6 احرف");
                }
                else if(language=="en"){
                    $("#warnPass").show().html("Password can not be less than 6 letters");
            
                }
                
                passwordLONG = false;
            } else {
                $("#warnPass").hide();
                passwordLONG = true;
            }
        }, 50); // 20 times/second

    });


    /// Validation For ConfirmPassowrd;
    $("#password_confirmation").on("keydown", function (event) {
        var $input = document.getElementById("password");
        var last$inputValue = $input.value;

        setInterval(function () {
            var newValue = $input.value;

            if (last$inputValue != newValue) {
                last$inputValue = newValue;
            }

            if (document.getElementById("password").value !== document.getElementById("password_confirmation").value) {
              
                if(language=="ar"){
                    $("#warnConfirmPass").show().html("لا بد من متطابقة كلمة المرور");
                }
                else if(language=="en"){
                    $("#warnConfirmPass").show().html("The password must be identical");
            
                }
              
                cpasswordLONG = false;
            } else {
                $("#warnConfirmPass").hide();
                cpasswordLONG = true;
            }
        }, 50); // 20 times/second

    });

    $(".loads").append('<i class="fa fa-spinner fa-spin"></i>');



    $("#sumbit").click(function () {
        var name = $("#name").val();
        var phone_number = $("#phone_number").val();
        var password = $("#password").val();
        var password_confirmation = $("#password_confirmation").val();
        
        if (nameLONG && phoneLONG && passwordLONG && cpasswordLONG ) {
            $(".loads").show();




            localStorage.setItem('name', name);
            localStorage.setItem('phone_number', phone_number);
            localStorage.setItem('password', password);
            localStorage.setItem('password_confirmation', password_confirmation);


            // var dataphone = {
            //     "phone_number": phone_number
            // };

            var data={"name":name,"phone_number":phone_number,"password":password,"password_confirmation":password_confirmation};
            // localStorage.setItem('regData', Json.parse(data));




            $.post(urlSer+"/api/v1/register",data,function(allData){
                            
                if(allData.success){
                    // localStorage.setItem('user_id',allData.data.token);
                    window.location.href="confirmationcode.html?id=Register";
                    
                    }
                else
                    {
                        if(allData.error.password)
                         $("#warnPassword").show().html(allData.error.password);
                         else if(allData.error.phone_number)
                         $("#warnPhone").show().html(allData.error.phone_number);
                        else
                         $("#warnPhone").show().html("حدث خطأ في التسجيل حاول مرة اخرى");
                    }

                });





            // $.post(urlSer + "/api/v1/checkPhoneNumber", dataphone, function (allData) {
            //     console.log(allData);
            //     if (allData.success === 1) {
            //         phone_number = phone_number.substr(1);

            //          var phone = "+966"+ phone_number;




            //         // var phone = "+20" + phone_number;




            //         // localStorage.setItem("Phone",phone);
            //         // firebaseImplement.phoneAuth(phone, "Register");

            //     } else {
            //         $("#warnPhone").show().html(allData.errors.phone_number);
            //     }
            // });
        } else {
            if(name == "" &&  !$("#warnNameMin").is(":visible") ) {


                if(language=="ar"){
                    $("#warnNameMin").show().html("حقل مطلوب");
                }
                else if(language=="en"){
                    $("#warnNameMin").show().html("Field required");
            
                }
               
               
            }
            if(phone_number == "" && !$("#warnPhone").is(":visible") ) {
                if(language=="ar"){
                    $("#warnPhone").show().html("حقل مطلوب");
                }
                else if(language=="en"){
                    $("#warnPhone").show().html("Field required");
            
                }
               
               
            }
            if(password == "" && !$("#warnPass").is(":visible") ) {
                if(language=="ar"){
                    $("#warnPass").show().html("حقل مطلوب");
                }
                else if(language=="en"){
                    
                    $("#warnPass").show().html("Field required");
            
                }
               
                
            }
            if(password_confirmation == "" && !$("#warnConfirmPass").is(":visible") ) {
                if(language=="ar"){
                    $("#warnConfirmPass").show().html("حقل مطلوب");
                }
                else if(language=="en"){
                    
                    $("#warnConfirmPass").show().html("Field required");
            
                }
               
            }

        }


    });

});