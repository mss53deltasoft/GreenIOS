$('body').css('opacity', 0);

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
        setTimeout(function(){ $('body').css('opacity', 1);    }, 1000);

}