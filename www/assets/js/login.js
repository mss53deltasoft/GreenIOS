// var oldPhoneval =document.getElementById("phone_number").value;

function validatePhone(char) {

    $('#phone_number').on("paste",function(e) {
        e.preventDefault();
        $("#warnPhone").show().html("لا يمكنك لصق القيمة هنا");

     });

     
    // console.log( /\d/.test(char.value));
    if (/^\d+$/.test(char.value)) {
        if (document.getElementById("phone_number").value.length <= 10) {

            if (language == "ar") {
                $("#warnPhone").show().html("لا بد من إدخال 10 أرقام");
            } else if (language == "en") {
                $("#warnPhone").show().html("  Enter 10 number ");
            }

            $("#warnPhone").hide();
            $("#warnPhone").hide();
            if (!document.getElementById("phone_number").value.startsWith("0")) {
                char.value = char.value.replace(/[0-9]/g, "");
                if (language == "ar") {
                    $("#warnPhone").show().html(" لا بد أن يبدأ الرقم بصفر");
                } else if (language == "en") {
                    $("#warnPhone").show().html(" Start 0 ");
                }

            }
            oldPhoneval = char.value;
            phoneLONG = false;
            if (char.value.length == 10) {
                phoneLONG = true;
                $("#warnPhone").hide();
            }

        } else {
            // oldPhoneval =char.value;
            char.value = oldPhoneval;
            phoneLONG = true;
            if (language == "ar") {
                $("#warnPhone").show().html("لا يمكنك إدخال أكثر من 10 أرقام");
            } else if (language == "en") {
                $("#warnPhone").show().html(" Don't enter more than 10 ");
            }

        }


    } else {
        // char.value = char.value.substring(0, char.value.length - 1);    

        char.value = char.value.replace(/[^\d]/g, '');
        oldPhoneval = char.value;

        if (language == "ar") {
            $("#warnPhone").show().html("الرجاء إستخدام ارقام اللغة الإنجليزية");
        } else if (language == "en") {
            $("#warnPhone").show().html("Don't Enter letters");
        }

    }
}

$(function () {
  
    $("#phone_number").blur(function () {
        if ($("#phone_number").val().length == 10) {
            $("#warnPhone").hide();
        }
    });
    if (language == "ar") {
        $("#appendLogin").html(`   <h3>مرحبا بكــــ ,</h3>  
    <form class="col s12 gray-control ">
         <div class="row">
           <div class="input-field col s12">
             <i class="material-icons prefix">stay_current_portrait</i>
             <input  name="phone_number" id="phone_number" type="tel" class="validate" required onkeydown="validatePhone(this);" onkeyup="validatePhone(this);">
             <div class="warn" id="warnPhone" ></div>
             <div class="warn" id="warnPhoneMin" ></div>
             <div class="warn" id="warnPhoneStarts" ></div>
             <label for="usr_Mobile">رقم الجوال</label>
           </div>
           <div class="input-field col s12">
             <i class="material-icons prefix">lock</i>
             <input name="password" id="password" type="password" class="validate" required>
             <div class="warn" id="warnPass" style="
             padding-bottom: 32px;"></div>
             <label for="usr_password"> كلمة المرور</label>
           </div>
            <div class="warn" id="warning" ></div>
           <div class="col s12 text-right pb-15 ">
             <a href="forget-password.html" href="#" >نسيت كلمة المرور ؟</a>

           </div>
           <div class=" col s12 text-center">
               <div type="submit" id="login" class="theme-btn waves-effect waves-light btn"> <b> دخول </b><span class="loads" style="display:none"></span></a>                                            
           </div>
           <div class=" col s12 text-center  " style="padding-top: 25px;">
               <a href="registration.html"  > لا يوجد لديك حساب؟ <span class="red-text">حساب جديد</span></a>                                          
           </div>
         </div>
       </form>
   <div class="pt-15 col-sm-12 text-center">                                               
   </div>`)
    } else if (language == "en") {
        $("#appendLogin").html(`   <h3> Welcome ,</h3>  
        <form class="col s12 gray-control ">
             <div class="row">
               <div class="input-field col s12">
                 <i class="material-icons prefix">stay_current_portrait</i>
                 <input  name="phone_number" id="phone_number" type="tel" class="validate" required onkeydown="validatePhone(this);" onkeyup="validatePhone(this);">
                 <div class="warn" id="warnPhone" ></div>
                 <div class="warn" id="warnPhoneMin" ></div>
                 <div class="warn" id="warnPhoneStarts" ></div>
                 <label for="usr_Mobile"> Phone number</label>
               </div>
               <div class="input-field col s12">
                 <i class="material-icons prefix">lock</i>
                 <input name="password" id="password" type="password" class="validate" required>
                 <div class="warn" id="warnPass" style="
                 padding-bottom: 32px;"></div>
                 <label for="usr_password"> Password </label>
               </div>
                <div class="warn" id="warning" ></div>
               <div class="col s12 text-right pb-15 " style="    margin-top: 18px;">
                 <a href="forget-password.html" href="#"  >Forget password ?</a>
    
               </div>
               <div class=" col s12 text-center">
                   <div type="submit" id="login" class="theme-btn waves-effect waves-light btn"> <b> login </b>    <span class="loads" style="display:none"></span></a>                                            
               </div>
               <div class=" col s12 text-center  " style="padding-top: 25px;">
                   <a href="registration.html"  > don't have an account   ? <span class="red-text"> New account</span></a>                                          
               </div>
             </div>
    
           </form>
       
    
       
       <div class="pt-15 col-sm-12 text-center">                                               
       </div>`)
    }
    $(".loads").append('<i class="fa fa-spinner fa-spin"></i>');
    var oldPhoneval = document.getElementById("phone_number").value;
    /// Validation For Passowrd;
    $("#password").on("keydown", function (event) {
        var $input = document.getElementById("password");
        var last$inputValue = $input.value;
        var token_;

        setInterval(function () {
            var newValue = $input.value;

            if (last$inputValue != newValue) {
                last$inputValue = newValue;
            }

            if (newValue.length <= 5) {
                if (language == "ar") {
                    $("#warnPass").show().html("لا يمكن أن تقل كلمة المرور عن 6 أحرف");
                } else if (language == "en") {
                    $("#warnPass").show().html("Password can not be stopped for 6 characters");
                }

                passwordLONG = false;
            } else {
                $("#warnPass").hide();
                passwordLONG = true;
            }
        }, 50); // 20 times/second

    });


    $("#login").click(function () {
        var phone_number = $("#phone_number").val();
        var password = $("#password").val();
        if((phone_number!="") && (password!="")){
            $("#warning").hide();
        if (phoneLONG && passwordLONG) {

            $(".loads").show();



            window.FirebasePlugin.getToken(function (token) {
                // save this server-side and use it to push notifications to this device


                console.log(token);
                if (token == undefined  || token == "")  {
                    token_ = "undefined";
                } else {
                    token_ = token;
                }

                var data = {
                    "phone_number": phone_number,
                    "password": password,
                    "deviceId": token_
                };

                $.ajax({
                    url: urlSer + '/api/v1/login',
                    type: "post",
                    data: data,
                    success: function (response) {
                        if(response.success==false){
                            if(language=="ar"){
                                $("#warning").show().html("هذا المستخدم موقوف ");
                            }
                            else if(language=="en"){
                                $("#warning").show().html("This user is Suspended");
                            }
                        }
                        else{
                            localStorage.setItem('user_name', response.name);
                            localStorage.setItem('user_id', response.data.token);
                            window.FirebasePlugin.subscribe("all");
                            window.location.href = "home.html?id=1";
                        }
                        
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $(".loads").hide();
                        console.log(textStatus, errorThrown);
                        if (jqXHR.status == "500") {
                            if(language=="ar"){
                                $("#warning").show().html("لا يمكنك الأتصال بالخادم");
                            }
                            else if(language=="en"){
                                $("#warning").show().html("Server is not working");
                            }
                           

                        } else if (jqXHR.status == "401") {
                            if(language=="ar"){
                                $("#warning").show().html("رقم الجوال أو كلمة المرور غير صحيحة");
                      
                            }
                            else if(language=="en"){
                                $("#warning").show().html("We cant find an account with this credentials.");
                      
                            }
                           
                        }
                    }
                });

                deviceId = localStorage.getItem('deviceId');

            }, function (error) {
                console.error(error);
                var data = {
                    "phone_number": phone_number,
                    "password": password,
                    "deviceId": "token"
                };

                $.ajax({
                    url: urlSer + '/api/v1/login',
                    type: "post",
                    data: data,
                    success: function (response) {
                        localStorage.setItem('user_name', response.name);
                        localStorage.setItem('user_id', response.data.token);
                        window.FirebasePlugin.subscribe("all");
                        window.location.href = "home.html?id=1";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $(".loads").hide();
                        console.log(textStatus, errorThrown);
                        if (jqXHR.status == "500") {
                            $("#warning").show().html("Server is not working");

                        } else if (jqXHR.status == "401") {
                            $("#warning").show().html("We cant find an account with this credentials.");
                        }
                    }
                });
     
                deviceId = localStorage.getItem('deviceId');

            });


        } else {
            if (phone_number == "" && !$("#warnPhone").is(":visible")) {
                if (language == "ar") {
                    $("#warnPhone").show().html("رقم الجوال مطلوب");
                } else if (language == "en") {
                    $("#warnPhone").show().html(" Mobile number required");
                }

            }
            if (password == "" && !$("#warnPass").is(":visible")) {


                if (language == "ar") {
                    $("#warnPass").show().html("كلمة المرور ملطوبة");
                } else if (language == "en") {
                    $("#warnPass").show().html("Password required");
                }

            }
        }
    }
    else{
        if(language=="ar"){
            $("#warning").show().html("إملاء الحقول الفارغة").css({"color":"red"});
        }
        else if(language=="en"){
            $("#warning").show().html("Enter empty field").css({"color":"red"});
        }
       
    }
    });
});