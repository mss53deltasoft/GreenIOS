var nav;
var url;
$(function () {

  if (language == "ar") {
    $(".rowx").html(`<h3 class="text-center">أدخل الكود</h3>  
        <form class="col s12 gray-control ">
         <div class="row">
           <div class="input-field col s12">
             <i class="material-icons prefix">supervisor_account</i>
             <input name="code" id="code" type="number" class="validate">
             <div class="warn" id="warnCode" ></div>
             <label for="icon_prefix">الكود</label>
           </div>
           
         
           
           <div class=" col s12 text-center">
               <a id="sumbit" class="theme-btn waves-effect waves-light btn"> <b> تسجيل </b><span class="loads" style="display:none"></span> </a>                                            
           </div>
                          

         </div>
         
       </form>
       

       
       <div class="pt-15 col-sm-12 text-center">                                               
       </div>`);
  } else if (language == "en") {
    $(".rowx").html(`<h3 class="text-center">Enter Code</h3>  
        <form class="col s12 gray-control ">
         <div class="row">
           <div class="input-field col s12">
             <i class="material-icons prefix">supervisor_account</i>
             <input name="code" id="code" type="number" class="validate">
             <div class="warn" id="warnCode" ></div>
             <label for="icon_prefix">Code</label>
           </div>
           
         
           
           <div class=" col s12 text-center">
               <a id="sumbit" class="theme-btn waves-effect waves-light btn"> <b> Login </b> <span class="loads" style="display:none"></span></a>                                            
           </div>
                          

         </div>
         
       </form>
       

       
       <div class="pt-15 col-sm-12 text-center">                                               
       </div>`);
  }

  url = window.location.href;
  nav = url.split("=").pop();
  $(".loads").append('<i class="fa fa-spinner fa-spin"></i>');


  $("#sumbit").click(function () {
    $(".loads").show();
    var code = $("#code").val();
    if (nav == "Forget"){
      firebaseImplement.forgetPassword(code);

    }else{
      firebaseImplement.verify(code, nav);
    }
    // var verID = localStorage.getItem('verificationId');
    // firebaseImplement.verify(verID, code, nav);
  });

  $("#Resend").click(function () {

    var phone = "+2" + localStorage.getItem('phone_number');
    firebaseImplement.phoneAuth(phone);

  })



})