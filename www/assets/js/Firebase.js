var verificationId;
var firebaseImplement = {
    phoneAuth: function (number, nav) {
        // number = document.getElementById('phonenumber').value,
        timeOutDuration = 120;
        console.log(number);
        window.FirebasePlugin.verifyPhoneNumber(number, timeOutDuration, function (credential) {
            console.log(credential);
            verificationId = credential.verificationId;
            localStorage.setItem('verificationId', verificationId);
            console.log(verificationId);

            if (nav == "Forget") {
                var phone_number = localStorage.getItem('phone_number');
                var token = localStorage.getItem('token');
                var data = {
                    "phone_number": phone_number,
                    // "deviceId": token
                };
                // http://192.168.1.126:8000/api/v1/getForgetPass/


            } else if (nav == "Register") {
                window.location.href = "confirmationcode.html?id=" + nav;
            }
            // if (window.location.href=="confirmationcode.html"){
            // window.location.href="confirmationcode.html"
            // }

        });

    },

    notificition: function () {


        window.FirebasePlugin.getToken(function (token) {
            // save this server-side and use it to push notifications to this device

            console.log(token);
        }, function (error) {
            console.error(error);
        });
    },



    verify: function (code, nav) {

        var name = localStorage.getItem('name');
        var phone_number = localStorage.getItem('phone_number');
        var password = localStorage.getItem('password');
        var password_confirmation = localStorage.getItem('password_confirmation');

        window.FirebasePlugin.getToken(function (token) {
            // save this server-side and use it to push notifications to this device
            if (token == "" || token == undefined) {
                token = "token";
            }

            var verdata = {
                "name": name,
                "phone_number": phone_number,
                "password": password,
                "password_confirmation": password_confirmation,
                "token": code,
                "deviceId": token
            };

            $.post(urlSer + "/api/v1/verification_code", verdata, function (allData) {
                console.log(allData);
                if (allData.success) {
                    localStorage.setItem('user_id', allData.data.token);
                    localStorage.setItem('user_name', allData.data.name);
                    window.FirebasePlugin.subscribe("all");
                    window.location.href = "home.html?id=1";
                } else {
                    if (allData.error.password)
                        $("#warnPassword").show().html(allData.error.password);
                    else if (allData.error.phone_number)
                        $("#warnPhone").show().html(allData.error.phone_number);
                    else
                        $("#warnPhone").show().html("حدث خطأ حاول مرة اخرى");
                }

            });
            console.log(token);
        }, function (error) {
            console.error(error);

            if (token == "" || token == undefined) {
                token = "token";
            }

            var verdata = {
                "name": name,
                "phone_number": phone_number,
                "password": password,
                "password_confirmation": password_confirmation,
                "token": code,
                "deviceId": token
            };

            $.post(urlSer + "/api/v1/verification_code", verdata, function (allData) {
                console.log(allData);
                if (allData.success) {
                    localStorage.setItem('user_id', allData.data.token);
                    localStorage.setItem('user_name', allData.data.name);
                    window.location.href = "home.html?id=1";
                } else {
                    if (allData.error.password)
                        $("#warnPassword").show().html(allData.error.password);
                    else if (allData.error.phone_number)
                        $("#warnPhone").show().html(allData.error.phone_number);
                    else
                        $("#warnPhone").show().html("حدث خطأ حاول مرة اخرى");
                }

            });

        });



    },

    forgetPassword: function(code){
        var phone_number = localStorage.getItem('phone_number');
        var data ={	"code": code,	"phone_number": phone_number};

        $.post(urlSer+"/api/v1/change_code",data,function(allData){
            console.log(allData);
            if(allData.success){
                localStorage.setItem('tokenPass',allData.token);
                window.location.href ="new-password.html";

            }else{
                $("#warnConfirmPass").show().html(allData.errors.phone_number);
            }
        })


    },




    resendCode: function (number) {
        timeOutDuration = 120;
        console.log(number);
        window.FirebasePlugin.verifyPhoneNumber(number, timeOutDuration, function (credential) {
            console.log(credential);
            verificationId = credential.verificationId;
            localStorage.setItem('verificationId', verificationId);
            console.log(verificationId);
            // window.location.href="confirmationcode.html"

        });
    }

};