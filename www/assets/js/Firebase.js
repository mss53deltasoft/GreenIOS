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
                    "deviceId": token
                };
                // http://192.168.1.126:8000/api/v1/getForgetPass/
                $.post(urlSer + "/api/v1/getForgetPass", data, function (allData) {

                    if (allData.success) {
                        // localStorage.setItem('token',allData.data.token);
                        // window.location.href="login.html"
                        var tokenPass = allData.token;
                        localStorage.setItem('tokenPass', tokenPass);
                        window.location.href = "confirmationcode.html?id=" + nav;

                    } else {
                        $("#warnCode").show().html("حدث خطأ في التسجيل");
                    }

                });

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
    // verify: function(verID, code,nav){
    //     // var code = document.getElementById('code').value.toString();

    //     $("#warnCode").hide()
    //     var signInCredential = firebase.auth.PhoneAuthProvider.credential(verID, code);
    //     firebase.auth().signInWithCredential(signInCredential).then(function(success) {
    //         console.log("success :"+ success);
    //         if (nav =="Register"){
    //             localStorage.removeItem("verificationId");
    //             var name = localStorage.getItem('name');
    //             var phone_number = localStorage.getItem('phone_number');
    //             var password = localStorage.getItem('password');
    //             var password_confirmation = localStorage.getItem('password_confirmation');
    //             var data={"name":name,"phone_number":phone_number,"password":password,"password_confirmation":password_confirmation};
    //             firebase.auth().signOut();
    //                     $.post(urlSer+"/api/v1/register",data,function(allData){

    //                     if(allData.success){
    //                         // localStorage.setItem('user_id',allData.data.token);
    //                         window.location.href="login.html"
    //                         }
    //                     else
    //                         {
    //                             if(allData.error.password)
    //                              $("#warnCode").show().html(allData.error.password);
    //                              else if(allData.error.phone_number)
    //                              $("#warnCode").show().html(allData.error.phone_number);
    //                             else
    //                              $("#warnCode").show().html("حدث خطأ في التسجيل");
    //                         }

    //                     })

    //         }else if (nav =="Forget"){

    //             window.location.href="new-password.html"

    //         }



    //         // console.log("user :"+firebase.auth().currentUser);
    //       }).catch(function(error) {
    //         console.log("error :"+error);
    //         $("#warnCode").show().html("لقد أدخلت كود غير صحيح برجاء التأكد من إدخال الكود بشكل صحيح");
    //         // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         // localStorage.removeItem("verificationId");
    //         // $("#warnCode").show().html("Wrong Code");

    //       });


    //     // console.log("user :"+ firebase.auth().currentUser);
    //     // ApiRegistration.register();
    //     // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //     //     // Send token to your backend via HTTPS
    //     //     // ...
    //     //     console.log("token :"+idToken);
    //     //     console.log("user :"+firebase.auth().currentUser);
    //     //   }).catch(function(error) {
    //     //     console.log("error :"+error);
    //     //   });

    // },



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