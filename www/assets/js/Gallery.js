var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc=JSON.parse(localStorage.getItem("papers"));
photoUrl=urlSer;
var image;
paperdesc?paperdesc=paperdesc:paperdesc=[];
var language=localStorage.getItem("language");
$(function(){
    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }
        if(language=="ar"){
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
            <a href="gallery.html"  class="active">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/gallery (1).png" />
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
                    <a href="home.html" >الرئيسية</a>
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
        }
        else if(language=="en"){

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
            <a href="gallery.html"  class="active">
            <div class="Fimage">
                <img alt="" src="assets/img/icons/gallery (1).png" />
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
  
        $.get(urlSer+'/api/v1/albums/'+language+'?token='+userId,function(data){
            if(language=="ar"){
                $("#title_").html("الصور");
            }
            else if(language="en"){
                $("#title_").html("Pictures");
            }
   
       $(data.albums).each(function(i,v){
               image=photoUrl+v.image;
           
    $("#getAlbum").append('<div class="col-xs-12" style="padding-right: 0;padding-left: 0; "><img src='+image+' class="img-responsive center-block "><p class="text-center">'+v.description+'</p></div>');

           
       })
       

       
   })
    
    
    
})