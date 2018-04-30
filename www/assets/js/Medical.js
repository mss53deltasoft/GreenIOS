
photoUrl=urlSer;
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
$(function(){

    if(language=="ar"){
        $("#title_").html('فوائد');
        $("#appendFooter").html(`                
        <div class="SpecialCol">
        <a href="Medical.html"  class="active">
            <div class="Fimage" id="healthy">
            <img alt="" src="assets/img/icons/salad (3).png" />
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
            <a href="profile.html">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/group.png" />
                <p>
                    صفحتي
                </p>
            </div>
                </a>
       
            </div>`);
            $("#text").html(`<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>  
             <strong> إهتم بصحتك  </strong>
            <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`);
        
    }
    else if(language=="en"){

        $("#title_").html('Health');
        $("#text").html(`<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>  
         <strong>Take care of your health </strong>
        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`);
        $("#appendFooter").html(`                
        <div class="SpecialCol">
            <a href="Medical.html" class="active">
            <div class="Fimage" id="healthy">
            <img alt="" src="assets/img/icons/salad (3).png" />
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
                    <a href="home.html" >Home</a>
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


    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }
    $.post(urlSer+'/api/v1/information/'+language+'?token='+userId,function(data){
        $('.loadsimage').hide();
        $(data.infrormation).each(function(i,v){
            $("#health").append(' <div class="col-md-3 col-sm-6 text-center"><div class="feature-wrap" style="    margin-bottom: 50px;"><img src='+photoUrl+v.image+' alt=""><h3 class="title-1 ptb-15"> <span class="light-font">'+v.name+' </span>  </h3><p>'+v.description+'</p></div></div>');
        })
    })
})