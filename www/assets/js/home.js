var userId=localStorage.getItem('user_id');
var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc=JSON.parse(localStorage.getItem("papers"));
paperdesc?paperdesc=paperdesc:paperdesc=[];
var username=localStorage.getItem("user_name");
var nav;
var url;

$(function(){

    url=window.location.href;
    nav= url.split("=").pop();
    if(nav=="1"){
        onLoad();
    }
    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }

    
        if(userId==null)
     {
         window.location.href="index.html";
     }

    
    $("#healthy").click(function(){
        window.location.href="Medical.html";
    })
if(language=="ar"){
    $("#newOrderText").html('طلب ');
    $("#newJoinText").html('إشتراك  ');
    $("#title_").html('الرئيسية');
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
        <div class="Fimage" id="original">
            <img alt="" src="assets/img/icons/home-2.png" />

            <p>
                <a class="active">الرئيسية</a>
            </p>
        </div>
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
        <a href="profile.html">
        <div class="Fimage">
            <img alt="" src="assets/img/icons/group.png" />
            <p>
                صفحتي
            </p>
        </div>
            </a>
   
        </div>`);
}
else if(language=="en"){
    $("#newOrderText").html('Order one time ');
    $("#newJoinText").html('Subscription ');
    $("#title_").html('Home');
    $("#appendFooter").html(`                
    <div class="SpecialCol">
        <a href="Medical.html">
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
                pictures
            </p>
            
        </div>
            </a>
    </div>
    <div class="SpecialCol"> 
        <div class="Fimage" id="original">
            <img alt="" src="assets/img/icons/home-2.png" />

            <p>
                <a class="active">Home</a>
            </p>
        </div>
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
        <a href="profile.html">
        <div class="Fimage">
            <img alt="" src="assets/img/icons/group.png" />
            <p>
                Profile
            </p>
        </div>
            </a>
   
        </div>`);
}
    
        //load Image
    var x='';
    $.get(urlSer+'/api/v1/home?token='+userId,function(getImages){
         $('.loadsimage').hide();
        $(getImages.albums).each(function(i,v){
            
            if(language=="ar"){
               
                x += '<div class="item"><img alt=".." src='+urlSer+''+v.image+'></div>';

            }
     else if(language=="en"){
       
        x += '<div class="item"><img alt=".." src='+urlSer+''+v.image+'></div>';

     }

        });
        
        if(getImages.error)
        if(language=="ar"){   x += '<div class="item"><img alt=".." src="assets/img/slider/slide-1.jpg"></div>';
    }
        else if(language=="en"){
            x += '<div class="item"><img alt=".." src="assets/img/slider/slide-1.jpg"></div>';
       
        }
        $("#sec1").append('<div id="naturix-slider" class="owl-carousel nav-1">'+x+'</div>');
           $(".owl-carousel").owlCarousel({
                dots: true,
                loop: true,
                autoplay: true,    
                autoplayHoverPause: true,
                smartSpeed: 100,
                nav: false,
                margin: 0,
                responsive: {
                    0: {items: 1},
                    1200: {items: 4},
                    992: {items: 3},
                    600: {items: 2}
                }
                
    });

    var widthSilder = $(".owl-item").css("width");
    widthSilder=parseInt(widthSilder);

    if (widthSilder <= 100){
        location.reload();
    }
    })
    
    $("#newOrder").click(function(){
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
            localStorage.removeItem('OurboxType');
            localStorage.removeItem('Ourboxname');
            localStorage.removeItem('');
            localStorage.removeItem('address');
            localStorage.removeItem('idBackbox');
            localStorage.removeItem('orderDay');    
            localStorage.removeItem('orderdeliver'); 
            localStorage.removeItem('typeorder');     
    })
    
      $("#newJoin").click(function(){
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
            localStorage.removeItem('OurboxType');
            localStorage.removeItem('Ourboxname');
            localStorage.removeItem('Ouritemsname');
            localStorage.removeItem('address');
            localStorage.removeItem('idBackbox');
            localStorage.removeItem('orderDay');    
            localStorage.removeItem('orderdeliver'); 
            localStorage.removeItem('typeorder'); 
    })
    

})
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {
        navigator.app.exitApp();
    }