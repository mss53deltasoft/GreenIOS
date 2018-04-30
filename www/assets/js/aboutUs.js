var userId = localStorage.getItem('user_id');
var items = JSON.parse(localStorage.getItem("items"));
items ? items = items : items = [];
var boxesArrey = JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey ? boxesArrey = boxesArrey : boxesArrey = [];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc = JSON.parse(localStorage.getItem("papers"));
paperdesc ? paperdesc = paperdesc : paperdesc = [];
$(function () {
    if (boxesArrey != undefined || items != undefined || paperdesc != undefined) {
        lengthPapers = paperdesc.length;
        lengthBasket = boxesArrey.length;
        lengthItem = items.length;
        $("#numInbasket").html(lengthBasket + lengthItem + lengthPapers);

    }
    if (language == "ar") {
        $("#title_").html('من نحن ');
        $("#Contain").html(` 
          <div class="col-xs-12">
            <img src="assets/img/logo/logo-2.png" style="width: 150px; padding-top: 5px;" class="img-responsive center-block">
         </div>
         <div class="col-xs-12 text-right" >
             <h3>عن أخضر</h3>
    <p style="direction: rtl;"> مجموعة شباب سعوديين أسسوا أخضر حتى تكون الخضروات والفواكه ذات الجودة العالية بين يديك وبطريقة فريدة من نوعها ومختلفة عن الطرق الاعتيادية .</p>

         </div>
         <div class="col-xs-12 text-right green-info ">
             <h3> لماذا أخضر؟</h2>  


              <p>-نحن نتعامل مع أجود مزارع الخضروات المحلية وأفضل موردين الفواكه في المملكة لضمان جودة عالية.</p>
              <p>-تصلك خضرواتك في نفس يوم قطفتها.</p>
              <p>-يتيح لك أخضر ميزة الإشتراكات المتنوعة لتصلك إختياراتك بشكل مستمر إلى بيتك.</p>
                
         </div>`);



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
                     <a href="home.html">الرئيسية</a>
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
    } else if (language == "en") {
        $("#title_").html('About us:');

        $("#Contain").html(`   <div class="col-xs-12">
            <img src="assets/img/logo/logo-2.png" style="width: 150px; padding-top: 5px;" class="img-responsive center-block">
         </div>
         <div class="col-xs-12 text-right" >
             <h3>About Green </h3>
             <p>A Saudi group created Akdhar to provide you with an access to get high quality of vegetables and fruits in a unique way and different from the usual methods.</p>
         </div>
         <div class="col-xs-12 text-right">
             <h3>Why Akhdar? </h3>  
             <p>-We are dealing with local producers of high quality vegetables, while our fruit’s supplier is very known as the highest quality provider in the KSA.</p>
             <p>-Your vegetables will be delivered to you at the same day of picking.</p>
             <p>-With Akhar you can use the subscription feature to continuously receive your choices of fresh vegetables and fruits.</p>  
         </div>`);




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
                     <a>Home</a>
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

})