var url;  
var nav;
var boxname=  localStorage.getItem("Ouritemsname");
var numberItem=JSON.parse(localStorage.getItem("availableNumitems"));

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
        $("#appendSize").hide();

        $.post(urlSer + '/api/v1/numberOfitems?token=' + userId, function (data) {
           $('.loadsimage').hide();
           $("#appendSize").show();
            vegAndfruits_id = data.number[2].itemtypes_id;
            vegAndfruits_number = data.number[2].number;
            
            if (language == "ar") {
    
                localStorage.setItem("Ouritemsname", "خضروات و فواكه");
                boxname = "خضروات و فواكه";
            } else if (language == "en") {
    
                localStorage.setItem("Ouritemsname", " Vegetables and Fruits ");
                boxname = " Vegetables and Fruits ";
            }
          
            localStorage.setItem("availableNumitems", JSON.stringify({
                "id": vegAndfruits_id,
                "item": vegAndfruits_number
            }));
            numberItem={
                "id": vegAndfruits_id,
                "item": vegAndfruits_number
            };
            loadData();
        });

       
   

});
function loadData(){
    if(language=="ar"){
        $("#selectSize").html('اختر حجم الكرتون ');
        $("#appendSize").html(`    <div class="col-sm-12" id="sizeKilo_12"> 
        <div class="card horizontal">
            <div class="Content">
            
                <div id="twentyKilo" class="listing-badge now-open">12 كيلو</div>
                <div class="deal-text">
                    <h4 class="fsz-20 pr-15 pb-15"> <span class="light-font">كرتون كبير </span>   </h4>
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
    </div> `);
    }
    else if(language=="en"){
        $("#selectSize").html("Select the box's size");
        $("#appendSize").html(`<div class="col-sm-12" id="sizeKilo_12"> 
        <div class="card horizontal">
            <div class="Content">
            
                <div id="twentyKilo" class="listing-badge now-open">12 kilo</div>
                <div class="deal-text">
                    <h4 class="fsz-20 pr-15 pb-15"> <span class="light-font"> Large Box  </span>   </h4>
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
    </div> `);
    }

$("#titleType").html(boxname);
    if(numberItem.id==3){
    
        $("#sizeKilo_12").click(function(){

            window.location.href="Vegetable-and-fruits.html?id=12";
            localStorage.setItem("sizeCartoonItem","12");

        })
           $("#sizeKilo_9").click(function(){

            window.location.href="Vegetable-and-fruits.html?id=9";
            localStorage.setItem("sizeCartoonItem","9");
        })
              $("#sizeKilo_6").click(function(){

             window.location.href="Vegetable-and-fruits.html?id=6";
             localStorage.setItem("sizeCartoonItem","6");
        })
          
    }
         else{
                 $("#sizeKilo_12").click(function(){

                    window.location.href="once-Addtocart-grid.html?id=12";
                    localStorage.setItem("sizeCartoonItem","12");

                })
                   $("#sizeKilo_9").click(function(){

                    window.location.href="once-Addtocart-grid.html?id=9";
                    localStorage.setItem("sizeCartoonItem","9");
                })
                      $("#sizeKilo_6").click(function(){

                     window.location.href="once-Addtocart-grid.html?id=6";
                     localStorage.setItem("sizeCartoonItem","6");
                })



           
         }
          
          
                  
     url = window.location.href;
     nav = url.split("=").pop();
    localStorage.setItem("idBack",nav);
}