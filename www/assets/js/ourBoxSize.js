var url;  
var nav;
var boxname= localStorage.getItem("Ourboxname");
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
    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }
    if(language=="ar"){
        $("#appendSize").html(`      <h4 class="pt-15"> اختر حجم الكرتون </h4>
        <div class="col-sm-12" id="sizeKilo_12"> 
            <div class="card horizontal">
                <div class="Content">
                    <div id="twentyKilo" class="listing-badge now-open">12 كيلو</div>
                    <div class="deal-text">
                        <h4 class="fsz-20 pr-15 pb-15"> <span class="light-font">كرتون كبير </span></h4>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
                   
                </div>
            </div>
        </div>               
        <div class="col-sm-12" id="sizeKilo_9"> 
            <div class="card horizontal">
                <div class="Content">
                    <div id="nineKilo" class="listing-badge2 now-open">9 كيلو</div>
                    <div class="deal-text">
                        <h4 class="fsz-20 pr-15 pb-15">  <span class="light-font">كرتون وسط </span>  </h4>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12" id="sizeKilo_6"> 
            <div class="card horizontal">
                <div class="Content">     
                    <div id="sexKilo" class="listing-badge3 now-open">6 كيلو</div>
                    <div class="deal-text">
                        <h4 class="fsz-20 pr-15 pb-15">  <span class="light-font">كرتون صغير </span>  </h4>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
                </div>
            </div>
        </div>`)
    }
    else if(language=="en"){
        $("#appendSize").html(`      <h4 class="pt-15">Select the box's size </h4>
        <div class="col-sm-12" id="sizeKilo_12"> 
            <div class="card horizontal">
                <div class="Content">
                    <div id="twentyKilo" class="listing-badge now-open">12 kilo</div>
                    <div class="deal-text">
                        <h4 class="fsz-20 pr-15 pb-15"> <span class="light-font">Large Box</span></h4>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
                   
                </div>
            </div>
        </div>               
        <div class="col-sm-12" id="sizeKilo_9"> 
            <div class="card horizontal">
                <div class="Content">
                    <div id="nineKilo" class="listing-badge2 now-open">9 kilo</div>
                    <div class="deal-text">
                        <h4 class="fsz-20 pr-15 pb-15">  <span class="light-font">Medium Box </span>  </h4>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12" id="sizeKilo_6"> 
            <div class="card horizontal">
                <div class="Content">     
                    <div id="sexKilo" class="listing-badge3 now-open">6 kilo</div>
                    <div class="deal-text">
                        <h4 class="fsz-20 pr-15 pb-15">  <span class="light-font">Small Box </span>  </h4>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
                </div>
            </div>
        </div>`)
    }
    
    
    $("#titleType").html(boxname);

    $("#sizeKilo_12").click(function(){
   
        window.location.href="once-Addtocart.html?id=12";
                          
    })
    $("#sizeKilo_9").click(function(){
      
        window.location.href="once-Addtocart.html?id=9";
    })
    $("#sizeKilo_6").click(function(){
   
         window.location.href="once-Addtocart.html?id=6";
    })
         
          
          
                  
     url = window.location.href;
     nav = url.split("=").pop();

    
    localStorage.setItem("idBackbox",nav);

})