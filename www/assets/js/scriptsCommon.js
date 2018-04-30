var language=localStorage.getItem("language");
$(function(){
    checkConnection() ;

    if(language=="ar"){
        $("#Reload").html('اعاده التحميل') ;  
        $("#Exit").html('خروج');
    }
    else if(language=="en"){
        $("#Reload").html('Reload ') ;  
        $("#Exit").html('Exit');
    }
    $("#Reload").click(function(){
  
        checkConnection();     
    })
    $("#Exit").click(function(){
        navigator.app.exitApp();
    })
})
function checkConnection() {
        // if(device.platform == "Android"){


        //     var networkState = navigator.connection.type;
        //     if(language=="ar"){
        //         $("#msgWrongInternet").html('<span class="light-font">حدث خطاء - </span> <strong>انقطاع الانترنت</strong>');
        //     }
        //     else if(language=="en"){
        //         $("#msgWrongInternet").html('Lost conection ');
        //     }
        //     if(networkState=="none")

        //         $("#modal2").modal('show');
        //     else{
        //         $("#modal2").modal('hide');
        //     }
        // }

        console.log("HelloCheckConnection");




}
