$(function () {
        document.addEventListener("deviceready", onDeviceReady, false);
    $("#done").click(function(){
            localStorage.removeItem('total'); 
            localStorage.removeItem('taxes');  
            localStorage.removeItem('onebox_id');
            localStorage.removeItem('navdetails');
            localStorage.removeItem('joinData');
            localStorage.removeItem('items');
            localStorage.removeItem('idLocation');
            localStorage.removeItem('idBack');
            localStorage.removeItem('deliver');
            localStorage.removeItem('availableNumitems');
            localStorage.removeItem('papers');
            localStorage.removeItem('pricesPapers');
            localStorage.removeItem('position');
            localStorage.removeItem('ForbackButton');
            localStorage.removeItem('OurboxType');
            localStorage.removeItem('Ourboxname');
            localStorage.removeItem('Ouritemsname');
            localStorage.removeItem('backBtn');
            localStorage.removeItem('idBackbox');
            localStorage.removeItem('onebox_Details');
            localStorage.removeItem('orderDay');
            localStorage.removeItem('orderdeliver'); 
            localStorage.removeItem('typeTime');   
            localStorage.removeItem('typejoin');  
            localStorage.removeItem('typeorder');
            window.location.href="home.html?id=1";
        
    })
});
function onBackKeyDown() {
      $("#modalBack").modal('show');
      if(language=="ar"){
          $("#backMessage").html("سوف يتم إلغاء الطلب");
          $("#backClose").html("اغلاق");
          $(".backDone").html("تأكيد");
        }
      else if(language=="en"){
        $("#backMessage").html("Order will cancel");
        $("#backClose").html("Close");
        $(".backDone").html("Done");
      }
      
}

  function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    }