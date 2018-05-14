$(function(){
    if(language=="ar"){
        $("#appendRow").html(`         <h3>كلمة مرور جديده,</h3>
        <form class="col s12 gray-control ">
            <div class="row">

                <div class="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input id="password" type="password" class="validate">
                    <label for="icon_telephone"> كلمة المرور</label>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input id="password_confirmation" type="password" class="validate">
                    <div class="warn" id="warnConfirmPass"></div>
                    <label for="icon_telephone"> أعاده كلمة المرور</label>
                </div>
                <div class=" col s12 text-center">
                    <a id="sumbit" class="theme-btn waves-effect waves-light btn">
                        <b> تأكيدكلمة المرور </b>
                    </a>
                </div>

            </div>

        </form>



        <div class="pt-15 col-sm-12 text-center">
        </div>`);
    }
    else if(language=="en"){
        $("#appendRow").html(`         <h3>New password</h3>
        <form class="col s12 gray-control ">
            <div class="row">

                <div class="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input id="password" type="password" class="validate">
                    <label for="icon_telephone"> Password </label>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input id="password_confirmation" type="password" class="validate">
                    <div class="warn" id="warnConfirmPass"></div>
                    <label for="icon_telephone"> Repeat password</label>
                </div>
                <div class=" col s12 text-center">
                    <a id="sumbit" class="theme-btn waves-effect waves-light btn">
                        <b> Confirm Password </b>
                    </a>
                </div>

            </div>

        </form>



        <div class="pt-15 col-sm-12 text-center">
        </div>`);
    }
    $("#sumbit").click(function(){
         $(".loads").show();
            // var name=$("#name").val();
            // var phone_number=$("#phone_number").val();
            var password=$("#password").val();
            var password_confirmation=$("#password_confirmation").val();
            if( password !== "" && password === password_confirmation ){
                var code = localStorage.getItem("tokenPass");
                var phone_number = localStorage.getItem('phone_number');
                password =$("#password").val();
                var data ={ "phone_number": phone_number,	"code": code,	"password": password};

                $.post(urlSer+"/api/v1/changeForgetPass",data,function(allData){
                    console.log(allData);
                    if(allData.success){
                        
                    window.location.href ="login.html";

                    }else{
                        $("#warnConfirmPass").show().html(allData.errors.phone_number);
                    }
                })

            }else{
                $("#warnConfirmPass").show().html(allData.errors.phone_number);
            }

           
    })

})