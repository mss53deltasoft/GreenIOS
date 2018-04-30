var incrKilo;
var decrKilo;
var noOfKilo=0;
var paper=[];
var array=[]; 
var results;
var getdata;
var prices=0;
var priceOnePaper;
var userId=localStorage.getItem('user_id');
var arraypaper=[];
var paperdesc=JSON.parse(localStorage.getItem("papers"));
paperdesc?paperdesc=paperdesc:paperdesc=[];
photoUrl=urlSer ;
var nav;
var navs;
var url;
var price ;
var quantity;
var onePrice;
var sizenav=localStorage.getItem('backBtn');
var navdetails= localStorage.getItem("navdetails");
var boxId= localStorage.getItem("boxID");
var allBoxesID=JSON.parse(localStorage.getItem("onebox_id"));
var items=JSON.parse(localStorage.getItem("items"));
$(function(){
    document.getElementById('FooterFixed2').style.pointerEvents = 'none';
    
    if((allBoxesID!=null && allBoxesID.length>0)||(items!=null && items.length>0)){
         document.getElementById('FooterFixed2').style.pointerEvents = 'auto';
            $(".bgButtom2").css("background","#2fc83f");
    }
    if(language=="ar"){
        $("#title_").html('ورقيات - أخرى');
        $("#tags").attr("placeholder", "إبحث");
        $("#donePro").html('تم');
    }
    else if(language=="en"){
        $("#title_").html('Greens - Others');
        $("#tags").attr("placeholder", "Search");
        $("#donePro").html('Done');
    }
    loadData();
    //increace aliaa
    $( "#appendCart" ).on( "click", ".incr-btn",function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });
    //finish increase

    $("#finish").click(function(){
        document.getElementById('finish').style.pointerEvents = 'none';
        $("#appendCart .quantity").each(function(i,v){
             price =$(v).attr("id").split("_").pop();
             quantity =$(v).val();
             onePrice = price * quantity;                           
             prices+=onePrice;

             var id=JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);
             if(language=="ar"){
                if($("#"+id+" .resetKilo").text()!="الكمية 0 " && $("#"+id+" .resetKilo").text()!="الكمية 0" )
                {
                    paperdesc.push({"id":id,"size":$("#"+id+" .resetKilo").text(),"title":$("#"+id+" .Black ").text(),"image":$("#"+id+" img ").attr("src"),"price":$("#"+id+" .paperPrice").text()});
              }
             }
             else if(language=="en"){
                if($("#"+id+" .resetKilo").text()!="Quantity 0 " &&$("#"+id+" .resetKilo").text()!="Quantity 0")
                {
                    paperdesc.push({"id":id,"size":$("#"+id+" .resetKilo").text(),"title":$("#"+id+" .Black ").text(),"image":$("#"+id+" img ").attr("src"),"price":$("#"+id+" .paperPrice").text()});
              }
             }
        
          });
        
          localStorage.setItem("papers",JSON.stringify(paperdesc));
          var pricesAdd=JSON.parse(localStorage.getItem("pricesPapers"));
          var total=prices+pricesAdd;
          localStorage.setItem("pricesPapers",total);
          window.location.href="my-orders.html?id=2";
    });
     url = window.location.href;
     navs = url.split("id=").pop();
    
    if(navs==navdetails)
        {
            $("#back").click(function(){
            allBoxesID.pop();
            localStorage.setItem("onebox_id", JSON.stringify(allBoxesID));
            window.history.back();

    });
        }
        if(navs==boxId){
            $("#back").click(function(){
                window.history.back();
                    // window.location.href="details.html?id="+boxId;
            });
        }

    if(navs=="2")
        {
             $("#back").click(function(){
                window.location.href="my-orders.html?id=2";
            });
        }

       if(navs=="4")
        {
             $("#back").click(function(){

                    var currentPage = window.location.href;
                    window.sessionStorage.setItem("page",currentPage.split("www/")[1]); 
                      window.history.back();
            });
        }
    
    
});
function loadData(){
        
   $.post(urlSer+'/api/v1/paper/'+language+'?token='+userId,function(data){
        $('.loadsimage').hide();
        getdata=data;
   $(data.$all_papers).each(function(i,v){
       if(language=="ar"){
        $("#appendCart").append('<div class="col-xs-6" id='+v.id+'><div id='+v.id+' class="card"><div class="paperPrice" style="display:none">'+v.price+'</div><div id='+v.id+' class="card-image Order-img"><img   src='+photoUrl+v.image+'><span class=" Black text-right">'+v.title+'</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">السعر:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> ر.س  </span></p><p class="resetKilo" id="kiloItem'+v.id+'">الكمية 0 </p></div></div><p><div id='+v.id+' class="count-input2 space-bottom"><a  onclick="decrease('+v.id+','+v.price+')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity'+v.id+'_'+v.price+'" class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase('+v.id+','+v.price+')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');

       }
       else if(language=="en"){
        $("#appendCart").append('<div class="col-xs-6" id='+v.id+'><div id='+v.id+' class="card"><div class="paperPrice" style="display:none">'+v.price+'</div><div id='+v.id+' class="card-image Order-img"><img   src='+photoUrl+v.image+'><span class=" Black text-right">'+v.title+'</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">Price:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> SAR </span></p><p class="resetKilo" id="kiloItem'+v.id+'">Quantity 0 </p></div></div><p><div id='+v.id+' class="count-input2 space-bottom"><a  onclick="decrease('+v.id+','+v.price+')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity'+v.id+'_'+v.price+'" class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase('+v.id+','+v.price+')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');

       }
      
           array.push(v.title);
        //    $( "#tags" ).autocomplete({
        //       source: array,
        //     messages: {
        //         noResults: '',
        //         results: function() {
        //             $(".ui-helper-hidden-accessible").css({"display":"none"});
        //         }
        //     }

        //     });

            $("#tags").autocomplete({
                source: array,
                select: function(e, ui) {
                    myFunction(ui.item.value);
                },
                messages: {
                    noResults: '',
                    results: function () {
                        $(".ui-helper-hidden-accessible").css({
                            "display": "none"
                        });
                    }
                }

            });

       
                          //change Quantity
    url = window.location.href;
    nav =url.split("=");
        
    if(nav.length>1){
        nav =url.split("?name=")[1].split(",")[0];
        if(nav=="add"){
            
        $(paperdesc).each(function(i,v){
        var id=v.id;
        $('#appendCart #'+id+'').hide();
       
          });
        
        }
    }
    });
   });
   

   
}
function increase(id,price){
     incrKilo=parseInt($("#quantity"+id+'_'+price).val())+1; 
     
     if(language=="ar"){
        $("#kiloItem"+id).html("الكمية "+incrKilo);
      }
    else if(language=="en"){
        $("#kiloItem"+id).html("Quantity "+incrKilo);
    }

     noOfKilo++;
     $("#priceKiloItem"+id).html(incrKilo*price);
    

}
function decrease(id,price){
    decrKilo=parseInt($("#quantity"+id+'_'+price).val())-1;
      if(decrKilo<0){

      }
      else{
          if(language=="ar"){
            $("#kiloItem"+id).html("الكمية "+decrKilo);
          }
        else if(language=="en"){
            $("#kiloItem"+id).html("Quantity "+decrKilo);
        }
         
          $("#priceKiloItem"+id).html(decrKilo*price);
          noOfKilo--;

      }
      //to decrease item
      if(decrKilo==0){
       var id=paper.indexOf(id);

      } 
}
// for search item
function myFunction(val) {
    if(val != undefined || val != ""){
       var papers = getdata.$all_papers.filter(paper =>paper.title.toLowerCase().match(val.toLowerCase()) );
         if(getdata.$all_papers.length>0){

            $('#appendCart').children().hide();
            
            
                    $(papers).each(function(i,v){
                
                if(v.title.charAt(0) === val)
                     $('#appendCart #'+v.id+'').show();

                        else
                          $('#appendCart #'+papers[0].id+'').show();     
            });

        }
        if(val==""){
            $('#appendCart').children().show();
    }
    
    }
    
    
}