var nav;
var url;
var items=JSON.parse(localStorage.getItem("items"));
items?items=items:items=[];
var boxesArrey=JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey?boxesArrey=boxesArrey:boxesArrey=[];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc=JSON.parse(localStorage.getItem("papers"));
var idloc= localStorage.getItem("idLocation");
paperdesc?paperdesc=paperdesc:paperdesc=[];
$(function(){
    if(boxesArrey !=undefined||items!=undefined||paperdesc!=undefined)
        {
            lengthPapers=paperdesc.length;
            lengthBasket =boxesArrey.length;
            lengthItem=items.length;
            $("#numInbasket").html(lengthBasket+lengthItem+lengthPapers);

        }
    url = window.location.href;
    nav = url.split("=").pop(); 
    if(language=="ar"){
        $("#title_").html('تشكيلتنا');
        $("#showType").html(`     <h4 class="pt-15"> <strong>حدد نوع التشكيلة
        </strong> </h4>   
        <div class="col-sm-12" id="veg"> 
            <div class="card horizontal" >
                <div class="Content">
                    <div class="deal-text">
                        <h2 class="fsz-20 pr-15 pb-15"> <strong>خضروات </strong> </h2>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal.png"> </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12" id="fruit"> 
            <div  class="card horizontal">
                <div class="Content">
                    <div class="deal-text">
                        <h2 class="fsz-20 pr-15 pb-15">   <strong>فواكه</strong>  </h2>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-3.png"> </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12" id="vegAndFruit"> 
            <div  class="card horizontal">
                <div class="Content"> 
                    <div class="deal-text">    
                        <h2 class="fsz-20 pr-15 pb-15">  <strong>خضروات و فواكه</strong>  </h2>
                    </div>
                    <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
                </div>
            </div>
        </div>`)
    }
   else if(language=="en"){
    $("#title_").html('Our collection');
    $("#showType").html(`     <h4 class="pt-15"> Welcome in our collection ،، <strong> choose type</strong> </h4>   
    <div class="col-sm-12" id="veg"> 
        <div class="card horizontal" >
            <div class="Content">
                <div class="deal-text">
                    <h2 class="fsz-20 pr-15 pb-15"> Vegetables
                    </h2>
                </div>
                <div class="img"> <img alt="" src="assets/img/extra/deal.png"> </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12" id="fruit"> 
        <div  class="card horizontal">
            <div class="Content">
                <div class="deal-text">
                    <h2 class="fsz-20 pr-15 pb-15"> Fruits
                    </h2>
                </div>
                <div class="img"> <img alt="" src="assets/img/extra/deal-3.png"> </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12" id="vegAndFruit"> 
        <div  class="card horizontal">
            <div class="Content"> 
                <div class="deal-text">    
                    <h2 class="fsz-20 pr-15 pb-15"> Vegetables and fruits</h2>
                </div>
                <div class="img"> <img alt="" src="assets/img/extra/deal-4.png"> </div>
            </div>
        </div>
    </div>`)
    
        
    }
        $("#veg").click(function(){

                if(language=="ar"){
                    localStorage.setItem("Ourboxname","خضروات");
                }
                else if(language=="en"){
                    localStorage.setItem("Ourboxname","Vegetables");
                }
         
            localStorage.setItem("OurboxType","2");
            window.location.href="OurBoxSize.html?id="+nav;
        })
        $("#fruit").click(function(){
            if(language=="ar"){
                localStorage.setItem("Ourboxname","فواكه");
            }
            else if(language=="en"){
                localStorage.setItem("Ourboxname","Fruits");
            }
           
            localStorage.setItem("OurboxType","1");
            window.location.href="OurBoxSize.html?id="+nav;
        })
                
        $("#vegAndFruit").click(function(){
            if(language=="ar"){
                localStorage.setItem("Ourboxname","خضروات و فواكه");
            }
            else if(language=="en"){
                localStorage.setItem("Ourboxname","Vegetables and Fruits ");
            }
            
             localStorage.setItem("OurboxType","3");
            window.location.href="OurBoxSize.html?id="+nav;
        })
//     
//    })
})