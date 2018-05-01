var userId = localStorage.getItem('user_id');
var name;
var phone;
var mail;
var adrevar;
var typeupdated;
var items = JSON.parse(localStorage.getItem("items"));
items ? items = items : items = [];
var boxesArrey = JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey ? boxesArrey = boxesArrey : boxesArrey = [];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc = JSON.parse(localStorage.getItem("papers"));
paperdesc ? paperdesc = paperdesc : paperdesc = [];
var address = localStorage.getItem("address");
var lang;
// $(window).on('load', function() {
//     $("#cover").hide();
//  });
$(function () {
    if (language == "ar") {
        $("#title_").html('الصفحة الشخصية');
        $("#appendFooter").html(`                
        <div class="SpecialCol">
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
                    الرئيسية
                </p>
            </div>
            </a>
        </div>
        
        <div class="SpecialCol">
            <a href="orderAndRequst.html">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/commerce(1).png" />
                <p>
                    طلباتي
                </p>
            </div>
                </a>
        </div>
        <div class="SpecialCol">
        <a href="profile.html"   class="active">
        <div class="Fimage">
            <img alt="" src="assets/img/icons/active.png" />
            <p>
                صفحتي
            </p>
        </div>
            </a>
    </div>`);
        $(".hovercard").html(`
        <form>
            <div class="avatar">
                <span class="loadsimage" style="margin-right: 34%;"></span>
                <img alt="" src="assets/img/extra/testi-1.jpg">

                <div class="title Title-2">
                    <span id="name" name="name"> </span>

                    <div class="" style="padding-bottom: 0px;">
                        <p class="EditProfile-1 EditProfileInput">
                            <i id="first_name" class="fa fa-user EditProfile-1" aria-hidden="true" style="display:none">
                            </i>
                            <strong style="display:none" id="strongName"> الأسم: </strong>

                            <span id="name" name="name"></span>

                            <input name="fullname" id="nameTxt" type="text" class="form-control edit-input Edit_profile" style="display:none" required>
                        </p>
                    </div>


                </div>


                <div class="Address-1" id="mailPersonmailPerson" style="">
                    <p class="EditProfile-1 EditProfileInput" >
                        <i class="fa fa-envelope ">
                        </i>
                        <strong id="EmailEditSt" class="">البريد الالكتروني:</strong>

                        <span id="mail" name="email"> </span>
                        <input id="mailTxt" type="text" class="form-control edit-input Edit_profile" style="display:none" name="email" />

                    </p>

                </div>

                <div id="phoneuser" class="desc" style="padding-bottom: 0px;    margin-top: -30px; ">
                    </strong>
                    <span id="phone">
                    </span>

                    <div id="Ph" style="padding-bottom: 0px;">
                        <p class="EditProfile-1 EditProfileInput">
                            <i id="phoneNum" class="fa fa-phone EditProfile-1" aria-hidden="true" style="display:none">
                            </i>
                            <strong style="display:none" id="strongphone"> رقم الجوال : </strong>

                            <!--                                        <span id="phone">-->

                            <input disabled id="phoneTxt" type="text" class="form-control edit-input Edit_profile" style="display:none" />
                        </p>
                    </div>

                </div>
     

            </div>
            <div class="text-center Btons">
                <!--                        <input type="submit" id="submit" style="display:none;" value="عدل">-->
                <button type="submit" id="submit" style="display:none;" class=" theme-btn waves-effect waves-light btn">عدل</button>
            </div>
        </form>


        <div  id="Edit" class="Edit-1">
            <a>
                <img src="assets/img/icons/settings.png">إعدادات الملف الشخصي</a>
                <span class="loads" style="display:none"></span>


        </div>

        <div id="hidethis">

            <div class="Edit-1 Edit-2">
                <div class="Edit-3">
                    <a href="contct-us.html">
                        <img src="assets/img/icons/email-1.png"> تواصل معنا</a>
                    <hr>
                    <a href="aboutus.html">
                        <img src="assets/img/icons/questions-circular-button.png">من نحن</a>
                    <hr>
                        <a id="changeLanguageToEnglish">
                        <img src="assets/img/icons/questions-circular-button.png">English
                        </a>
                    <hr>

                    <a id="logout" style="display:none">
                        <img src="assets/img/icons/exit.png">تسجيل الخروج</a>
                </div>

            </div>


        </div>
`);
    } else if (language == "en") {

        $("#title_").html('Profile');
        $(".hovercard").html(`
        <form>
            <div class="avatar">
                <span class="loadsimage" style="margin-right: 34%;"></span>
                <img alt="" src="assets/img/extra/testi-1.jpg">

                <div class="title Title-2">
                    <span id="name" name="name"> </span>

                    <div class="" style="padding-bottom: 0px;">
                        <p class="EditProfile-1">
                            <i id="first_name" class="fa fa-user EditProfile-1" aria-hidden="true" style="display:none">
                            </i>
                            <strong style="display:none" id="strongName"> Name </strong>

                            <span id="name" name="name"></span>

                            <input name="fullname" id="nameTxt" type="text" class="form-control edit-input Edit_profile" style="display:none" required>
                        </p>
                    </div>


                </div>


                <div class="Address-1" id="mailPersonmailPerson" style="">
                    <p class="EditProfile-1">
                        <i class="fa fa-envelope ">
                        </i>
                        <strong id="EmailEditSt" class=""> Email:</strong>

                        <span id="mail" name="email"> </span>
                        <input id="mailTxt" type="text" class="form-control edit-input Edit_profile" style="display:none" name="email" />

                    </p>

                </div>

                <div id="phoneuser" class="desc" style="padding-bottom: 0px;    margin-top: -20px; ">
                    </strong>
                    <span id="phone">
                    </span>

                    <div id="Ph" style="padding-bottom: 0px;">
                        <p class="EditProfile-1">
                            <i id="phoneNum" class="fa fa-user EditProfile-1" aria-hidden="true" style="display:none">
                            </i>
                            <strong style="display:none" id="strongphone"> Phone number: </strong>
                            <input disabled id="phoneTxt" type="text" class="form-control edit-input Edit_profile" style="display:none" />
                        </p>
                    </div>

                </div>
      

            </div>
            <div class="text-center">
               <button type="submit" id="submit" style="display:none;" class=" theme-btn waves-effect waves-light btn">Edit</button>
            </div>
        </form>


        <div id="Edit" class="Edit-1">
            <a >
                <img src="assets/img/icons/settings.png">Profile settings</a>
                <span class="loads" style="display:none"></span>


        </div>

        <div id="hidethis">

            <div class="Edit-1 Edit-2">
                <div class="Edit-3">
                    <a href="contct-us.html">
                        <img src="assets/img/icons/email-1.png">Contact us</a>
                    <hr>
                    <a href="aboutus.html">
                        <img src="assets/img/icons/questions-circular-button.png">About us</a>
                    <hr>
                    <a id="changeLanguageToArabic">
                        <img src="assets/img/icons/questions-circular-button.png">العربية</a>
                    <hr>

                    <a id="logout" style="display:none">
                        <img src="assets/img/icons/exit.png">Logout</a>
                </div>

            </div>


        </div>
`);

        $("#appendFooter").html(`                
        <div class="SpecialCol">
            <a href="Medical.html" >
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
                 Home
                </p>
            </div>
            </a>
        </div>
        
        <div class="SpecialCol">
            <a href="orderAndRequst.html">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/commerce(1).png" />
                <p>
                   My orders
                </p>
            </div>
                </a>
        </div>
                <div class="SpecialCol">
                    <a href="profile.html"   class="active">
                    <div class="Fimage">
                        <img alt="" src="assets/img/icons/active.png" />
                        <p>
                            Profile
                        </p>
                    </div>
                        </a>
                </div>`);
    }
    $(".loads").append('<i class="fa fa-spinner fa-spin"></i>');
    $(".loadsimage").append('<i class="fa fa-spinner fa-spin"style="font-size: 39px;color: rgb(35, 141, 150); margin-left: 45%;    margin-top: 44px;"></i>');

    $("#changeLanguageToEnglish").click(function () {
        lang = "en";
        localStorage.setItem("language", lang);
        window.location.href = "profile.html";
    });
    $("#changeLanguageToArabic").click(function () {
        lang = "ar";
        localStorage.setItem("language", lang);
        window.location.href = "profile.html";
    });
    // $("#addressCity").hide();
    $("#mailPersonmailPerson").hide();
    if (boxesArrey != undefined || items != undefined || paperdesc != undefined) {
        lengthPapers = paperdesc.length;
        lengthBasket = boxesArrey.length;
        lengthItem = items.length;
        $("#numInbasket").html(lengthBasket + lengthItem + lengthPapers);

    }

    $("#logout").click(function () {
        token = null;
        localStorage.clear();
        window.location.replace("index.html");

        // window.location.href = 'index.html';

    });


    $("#Edit").click(function () {
        if (language == "ar") {
            $(".EditProfile-1 strong").css({
                "padding-left": "36px"
            });
        }

        $(".loads").show();
        $.post(urlSer + '/api/v1/profile?token=' + userId, function (profileData) {
            $(".avatar img").hide();
            $(".loads").hide();
            name = profileData.name;
            phone = profileData.phone_number;
            mail = profileData.email;
            // if (address == null) {
            //     if(language=="ar"){
            //     $("#address").val("لم يتم اضافه عنوان");
            //     }
            //     else if(language=="en"){
            //         $("#address").val("The address is not added");
            //     }
            // } else {
            //     $("#address").val(address);
            // }
            $(".theme-btn waves-effect waves-light btn waves-input-wrapper").show();
            $("#Ph").show();
            $("#phoneTxt").val(phone);
            $("#hidethis").hide();
            $("#submit").show();
            $(".Edit-1").hide();
            $("#Edit").hide();
            $("#phoneuser").show();
            $("#phoneTxt").show();
            // $("#addressCity").show();
            $("#phoneNum").show();
            $("#first_name").show();
            $("#strongName").show();
            $("#strongphone").show();
            $("#name").hide();
            $("#phone").hide();
            $("#nameTxt").show();
            $("#nameTxt").val(name);
            $("#mail").hide();
            $("#mailTxt").show();
            $("#mailTxt").val(mail);
            $("#mailPerson").show();
            $("#EmailEditSt").addClass('Emails');
            $("#mailPersonmailPerson").show();

        });
    });

    $.post(urlSer + '/api/v1/profile?token=' + userId, function (profileData) {
        $('.loadsimage').hide();
        name = profileData.name;
        phone = profileData.phone_number;
        mail = profileData.email;
        if (mail == "")
            $("#mailPerson").hide();
        $("#name").text(name);
        $("#phone").text(phone);
        $("#mail").text(mail);

        if (userId == unrealToken) {
            $("#Edit").hide();
     
            if (language == "ar") {
                $("#name").html("زائر");
                $("#phone").html(" لا يوجد رقم جوال");
                $("#logout").html('<img src="assets/img/icons/exit.png">تسجيل دخول');
                
            } else if (language == "en") {
                $("#name").html("guest");
                $("#phone").html("Phone invalid ");
                $("#logout").html('<img src="assets/img/icons/exit.png">Login');
                $("#logout").html("Login");
            }
            $("#logout").show();
        }
        else  $("#logout").show();
        // $("#addressCity").hide();
        $("#mailPersonmailPerson").hide();
    })

    $("#submit").click(function () {
        $(".avatar img").show();
        var email = document.getElementById('mailTxt');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($("#nameTxt").val() == "") {} else if ($("#mailTxt").val() == "") {
            $("#Ph").hide();
            $("#hidethis").show();
            $("#Edit").show();
            $(".Edit-1").show();
            $("#submit").hide();
            $("#first_name").hide();
            $("#strongName").hide();
            $("#name").show();
            $("#nameTxt").hide();
            $("#phone").show();
            $("#first_name").hide();
            $("#strongName").hide();
            // $("#address").show();
            $("#addressTxt").hide();
            $("#type").show();
            $("#typeTxt").hide();
            $("#mail").show();
            $("#mailTxt").hide();
            $("#phoneuser").show();
            // $("#addressCity").show();
            $("#EmailEditSt").removeClass('Emails');
            $("#mailPersonmailPerson").hide();
            // $("#addressCity").hide();


            var nameupdated = $("#nameTxt").val();
            var mailupdated = $("#mailTxt").val();


            $("#name").html(nameupdated);
            $("#type").html(typeupdated);
            $("#mail").html(mailupdated);

            var data = {
                "name": nameupdated,
                "email": mailupdated,
                "Gender": typeupdated,
            }


            $.post(urlSer + '/api/v1/changeProfile?token=' + userId, data);
        } else if (!filter.test(email.value)) {
            if (language == "ar") {
                $("#mailTxt").val('هذا الأيميل غير صحيح');
            } else if (language == "en") {
                $("#mailTxt").val('Invalid email');
            }

            email.focus;
            return false;
        } else {
            $("#Ph").hide();
            $("#hidethis").show();
            $("#Edit").show();
            $(".Edit-1").show();
            $("#submit").hide();
            $("#first_name").hide();
            $("#strongName").hide();
            $("#name").show();
            $("#nameTxt").hide();
            $("#phone").show();
            $("#first_name").hide();
            $("#strongName").hide();
            // $("#address").show();
            $("#addressTxt").hide();
            $("#type").show();
            $("#typeTxt").hide();
            $("#mail").show();
            $("#mailTxt").hide();
            $("#phoneuser").show();
            // $("#addressCity").show();
            $("#EmailEditSt").removeClass('Emails');
            $("#mailPersonmailPerson").hide();
            // $("#addressCity").hide();


            var nameupdated = $("#nameTxt").val();
            var mailupdated = $("#mailTxt").val();


            $("#name").html(nameupdated);
            $("#type").html(typeupdated);
            $("#mail").html(mailupdated);

            var data = {
                "name": nameupdated,
                "email": mailupdated,
                "Gender": typeupdated,
            }


            $.post(urlSer + '/api/v1/changeProfile?token=' + userId, data)

        }



    })


})