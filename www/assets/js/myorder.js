var allBoxesID = JSON.parse(localStorage.getItem("onebox_id"));
allBoxesID ? allBoxesID = allBoxesID : allBoxesID = [];
var paperdesc = JSON.parse(localStorage.getItem("papers"));
paperdesc ? paperdesc = paperdesc : paperdesc = [];
var userId = localStorage.getItem('user_id');
var prices = [];
var paperPrice = JSON.parse(localStorage.getItem("pricesPapers"));
var total;
var pricetoRemove;
var items = JSON.parse(localStorage.getItem("items"));
items ? items = items : items = [];
var titleItemCollection = [];
var priceOneItems;
var pricesItems = [];
var indexForQuantity;
var price;
var quantity;
var onePrice;
var newprices = 0;
var serviceDeliveryTaxes;
var totaltaxes;
var totalpricetaxes;
var tax;
var sumboxes;
var sumItems;
var delivery;
var taxes;
var url;
var navs;
var sizenav = localStorage.getItem('backBtn');
var navdetails = localStorage.getItem("navdetails");
var msgType = localStorage.getItem("typeorder");
var idPaper;
var idBox;
var decrKilo_;
var boxesArrey = JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey ? boxesArrey = boxesArrey : boxesArrey = [];
var ForbackButton = localStorage.getItem("ForbackButton");
var vegAndfruits_id;
var vegAndfruits_number;
var priceNewPaper;
$(function () {
    if (paperdesc.length > 0) {
        $("#leafandpaper").show();
    } else {
        $("#leafandpaper").hide();
    }
    if (language == "ar") {

        $("#title_").html('تأكيدالطلب');
        $("#leafandpaper").append('ورقيات - أخرى').css({"margin-right":"30px","margin-top":"27px"});
        $("#addleaf").html('+ أضف  ورقيات - أخرى ').css({"color": "#a94442"});
        $("#msg").html(' يمكنك إلغاء الإشتراكات أو الطلبات قبل التوصيل ب 24 ساعة');
        $("#total_").append('الإجمالي');
        $("#cancel a").html('إلغاء الطلب');
        $("#continue ").html('إستكمال');
    } else if (language == "en") {
        $("#title_").html('Confirmation ');
        $("#leafandpaper").append('Greens - Others ').css({"margin-left":"23px","margin-top":"27px"});
        $("#addleaf").html('Add Greens - Others +').css({"color": "#a94442"});
        $("#msg").html('Subscriptions or orders can be canceled within 24 hours before the delivery');
        $("#total_").append('Total :');
        $("#cancel a").html('Cancel');
        $("#continue ").html('Continue');
    }

    // To disable:    
    document.getElementById('continue').style.pointerEvents = 'none';
    document.getElementById('cancel').style.pointerEvents = 'none';

    if (boxesArrey != undefined || items != undefined || paperdesc != undefined) {
        lengthPapers = paperdesc.length;
        lengthBasket = boxesArrey.length;
        lengthItem = items.length;
        $("#numInbasket").html(lengthBasket + lengthItem + lengthPapers);

    }
    if ($("#numInbasket").text() == "0") {
        $("#modal_1").modal('show');
        if (language == "ar") {
            $("#ADDInBasket").html('لم يتم اي اضافه في السله');
            $("#gotohome").html('إلغاء');

        } else if (language == "en") {
            $("#ADDInBasket").html('No add-on in the basket');
            $("#gotohome").html('Cancel');
        }

    }
    url = window.location.href;
    navs = url.split("=").pop();
    localStorage.setItem("idLocation", navs);
    var idloc = localStorage.getItem("idLocation");
    //increace aliaa
    $("#appendCart").on("click", ".incr-btn", function (e) {
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
    $("#appendCart_").on("click", ".incr-btn", function (e) {
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

    $("#continue").click(function () {
        if ($("#delivery").length > 0) {
            window.location.href = "Select-location.html?id=" + idloc;
        }

    });
    $("#gotohome").click(function () {
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
        window.location.href = "home.html?id=1";
    })
    $("#cancel").click(function () {
        $("#confirmCancel").modal('show');
        if (language == "ar") {
            $("#sureCancelorder").html('هل انت متأكد من الإلغاء؟');
            $("#closePOP").html('اغلاق');
            $("#okClear").html('تأكيد');
        } else if (language == "en") {
            $("#sureCancelorder").html('Are you sure to cancel order?');
            $("#closePOP").html('Close');
            $("#okClear").html('Done');
        }
    });


    $("#okClear").click(function () {

        if ($("#delivery").length > 0) {

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
            window.location.href = "home.html?id=1";
        }
    });


    $("#close").click(function () {
        $("#appenddetails").children().remove();
        $("#modal4").modal('hide');
        $('.loadsimage').show();
    })
    var navback = localStorage.getItem("idBackbox");
    $(".ourcartoon").click(function () {
        window.location.href = "ourBoxType.html?id=" + ForbackButton;

    });
    $(".yourCartoon").click(function () {
        // $.post(urlSer + '/api/v1/numberOfitems?token=' + userId, function (data) {
        //     vegAndfruits_id = data.number[2].itemtypes_id;
        //     vegAndfruits_number = data.number[2].number;
        //     if (language == "ar") {
    
        //         localStorage.setItem("Ouritemsname", "خضروات و فواكه");
        //     } else if (language == "en") {
    
        //         localStorage.setItem("Ouritemsname", " Vegetables and Fruits ");
        //     }
        //     localStorage.setItem("availableNumitems", JSON.stringify({
        //         "id": vegAndfruits_id,
        //         "item": vegAndfruits_number
        //     }));
        //     // window.location.href = "ourgroup-once.html?id=3";
        // });
        window.location.href = "ourgroup-once.html?id=3";
    });
    //finish increase
    loadData();
    $("#done").click(function () {
        decrKilo_ = parseInt($("#quantity" + idPaper + '_' + priceNewPaper).val());
        if (decrKilo_ == 0) {
            var removeIndexpaer_ = paperdesc.map(function (item) {
                return item.id;
            }).indexOf(idPaper);
            var y_ = paperdesc.splice(removeIndexpaer_, 1);
            $("#" + idPaper).remove();
        } else {
            //        newprices=0;
            paperdesc[indexForQuantity].size = $("#kiloItem" + paperdesc[indexForQuantity].id).text();
        }
        newprices = 0;
        $(paperdesc).each(function (i, v) {
            price = v.price;
            quantity = JSON.parse(v.size.split(" ")[1]);
            $("#change_size" + v.id).text(quantity);
            onePrice = price * quantity;
            newprices += onePrice;
            $("#pricePaperUpdate" + v.id).text(onePrice);

        })


        localStorage.setItem("papers", JSON.stringify(paperdesc));
        localStorage.setItem("pricesPapers", newprices);
        $("#modal3").modal('hide');



        totaltaxes = (sumboxes + newprices + sumItems) * tax;
        totalpricetaxes = (sumboxes + newprices + sumItems) + totaltaxes;
        total = totalpricetaxes + delivery;
        $("#total").html(total);
        localStorage.setItem("total", total);


    })

})

function loadData() {
    // $(".loadsimage").hide();
    // if($('.loadsimage:visible').length == 0)
   
    //     {
    //         $(".loadsimage").hide();
    //         $(".shop-wrap").show();
    //     }
  
   
    //boxes
    var sizeColor;
    $(allBoxesID).each(function (i, v) {

        sizeColor = v.size;
        updateformatprice = JSON.parse(v.price.split(' ', 1));
        //        updateformatprice=v.price;
        if (language == "ar") {
            $("#getdata").append('<div class="col-sm-12" id=' + v.id + ' ><div class="deal-item list-view"><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge now-open" id="noOfKilo' + v.size + '" style="direction: rtl;">' + v.size + ' كيلو</div><h2 class="fsz-20 "> <a><span class="light-font">تشكيلة</span> <strong id="nameOfDesc">' + v.title + ' </strong> </a> </h2><div id="description"><p id="">' + v.description.split("المزيد")[0] + '</p><a  onclick="getDetails(' + v.id + ')" style="color: red;font-size: 14px;" >المزيد</a></div><div><span>السعر:</span><strong id="price">' + v.priceoneItem + '</strong><strong> ريال سعودي </strong></div><div><strong id="price">' + v.amount + '</strong><span> : الكمية</span></div><div class="price "><span>الإجمالي:</span><strong id="price">' + v.price + '</strong><strong> ريال سعودي</strong></div>   </div><div class="img img2"> <img id="img_Src" alt="" src=' + v.image + '> </div><div class="Cart"><a  onclick="remove(' + v.id + ',' + updateformatprice + ')" class="prod-tag  waves-effect waves-light" id="" style="  bottom: -30px;background-color: #c23d5b;padding: 7px 10px;width: 44px;margin-top: 12px;"><i class="material-icons">delete</i></a></div></div></div></div>');
        //     var dtl = $("#text0").text().length;

        //     if(dtl>30){
        //         $("#sty_Btn").css({"bottom":"-12px"});
        //    } 
        //    else{
        //     $("#sty_Btn").css({"bottom":"24px"});
        //    }
        } else if (language == "en") {
            $("#getdata").append('<div class="col-sm-12" id=' + v.id + ' ><div class="deal-item list-view"><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge now-open" id="noOfKilo' + v.size + '">' + v.size + ' kilo</div><h2 class="fsz-20 "> <a>  <strong id="nameOfDesc">' + v.title + ' </strong><span class="light-font">collection</span> </a> </h2><div id="description"><p>' + v.description.split("more")[0] + '</p><a  onclick="getDetails(' + v.id + ')" style="color: red;font-size: 14px;"  >more</a></div><div><span> Price of cartoon  </span><strong id="price">' + v.priceoneItem + '</strong><strong>  SAR </strong></div><div><span> Amount: </span><strong id="price">' + v.amount + '</strong></div><div class="price "><strong>Total : </strong><strong id="price">' + v.price + '</strong><strong> SAR</strong></div>   </div><div class="img img2"> <img id="img_Src" alt="" src=' + v.image + '> </div></div><div class="Cart" style=""><a  onclick="remove(' + v.id + ',' + updateformatprice + ')" class="prod-tag  waves-effect waves-light removeEnglish"><i class="material-icons">delete</i></a></div></div></div>');
            $(".header").css({    "margin-left":" 30px","margin-top": "27px"});
            $("h4 img").removeClass("prod-img");

        }
        if (sizeColor == "6") {
            $("#noOfKilo" + v.size).css({
                "background": "#da5d79"
            })
        } else if (sizeColor == "9") {
            $("#noOfKilo" + v.size).css({
                "background": "#3db3c2"
            })
        } else if (sizeColor == "12") {
            $("#noOfKilo" + v.size).css({
                "background": "#319c57"
            })
        }

        if (items.length == 1 && allBoxesID.length == 0) {
            $(".Cart").hide();
        }
        if (allBoxesID.length == 1 && items.length == 0) {
            $(".Cart").hide();
        }
        prices.push(updateformatprice);

    });



    //items
    $(items).each(function (i, v) {

        $(v.arrayitem).each(function (i, x) {
            titleItemCollection.push(x.title);
            return;
        })

        priceOneItems = items[i].prices;
        pricesItems.push(priceOneItems)
        id = i;
        var sizeItems = v.size;
        if (language == "ar") {
            $("#getdata").append('<div class="col-sm-12" id=' + id + '><div class="deal-item list-view"><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge now-open" id="noOfKilo' + id + '"style="direction: rtl;">' + v.size + ' كيلو</div><h2 class="fsz-20 "> <a href="#"> <span class="light-font">تشكيلة</span> <strong id="nameOfDesc">' + v.descriptionBox + ' </strong> </a> </h2><div id="description"><p id="text0">' + titleItemCollection + '</p><div id="description_"><a  onclick="getDetailsforItem(' + id + ')"style="color: red;font-size:12px">المزيد</a></div></div><div class="price "><span>السعر:</span><strong id="price">' + v.prices + '</strong><strong> ريال سعودي</strong></div></div><div class="img img2"> <img alt="" src="assets/img/products/ourgroup.png"> </div><div class="Cart" ><a onclick="removeItems(' + id + ',' + v.prices + ')"   class="prod-tag  waves-effect waves-light" id="sty_Btn" style="background-color: #c23d5b;padding: 7px 10px;width: 44px;   "><i class="material-icons">delete</i></a></div></div></div></div>');
            var dtl = $("#text0").text().length;

            if(dtl>30){
                $("#sty_Btn").css({"bottom":"13px"});
           } 
           else{
            $("#sty_Btn").css({"bottom":"24px"});
           }

        } else if (language == "en") {
            $("#getdata").append('<div class="col-sm-12" id=' + id + '><div class="deal-item list-view"><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge now-open" id="noOfKilo' + id + '">' + v.size + ' kilo</div><h2 class="fsz-20 "> <a href="#"><strong id="nameOfDesc">' + v.descriptionBox + ' </strong> <span class="light-font">collection</span>  </a> </h2><div id="description"><p id="">' + titleItemCollection + '</p><div id="description_"><a  onclick="getDetailsforItem(' + id + ')" style="color: red;font-size:15px"  >more</a></div></div><div class="price"><span> Price</span><strong id="price">' + v.prices + '</strong><strong> SAR</strong></div></div><div class="img img2"> <img alt="" src="assets/img/products/ourgroup.png"> </div></div><div class="Cart" ><a onclick="removeItems(' + id + ',' + v.prices + ')"   class="prod-tag  waves-effect waves-light removeEnglish" ><i class="material-icons">delete</i></a></div></div></div>');

        }
        if (sizeItems == "6") {
            $("#noOfKilo" + id).css({
                "background": "#da5d79"
            })
        } else if (sizeItems == "9") {
            $("#noOfKilo" + id).css({
                "background": "#3db3c2"
            })
        } else if (sizeItems == "12") {
            $("#noOfKilo" + id).css({
                "background": "#319c57"
            })
        }


        titleItemCollection = [];


        if (items.length == 1 && allBoxesID.length == 0) {
            $(".Cart").hide();
        }
        if (allBoxesID.length == 1 && items.length == 0) {
            $(".Cart").hide();
        }

    })
    if (language == "ar") {
        if (msgType == "جربنا مرة واحدة") {
            $("#getdata").append('<a onclick="addboxes()" class="addnew" style="color: #a94442;">+  أضف كرتون آخر على نفس الطلب </a>');
        } else if (msgType == "إشتراك") {
            $("#getdata").append('<a onclick="addboxes()" class="addnew" style="color: #a94442;">+ أضف كرتون آخر على نفس الإشتراك</a>');
        }
    } else if (language == "en") {

        if (msgType == "Try it once") {
            $("#getdata").append('<a onclick="addboxes()" class="addnew" style="color: #a94442;">Add another box under the same order  + </a>');
        } else if (msgType == "Participation") {
            $("#getdata").append('<a onclick="addboxes()" class="addnew" style="color: #a94442;">Add another box under the same subscription +</a>');
        }
    }





    //papers

    $(paperdesc).each(function (i, v) {
        size_ = JSON.parse(v.size.split(' ')[1]);
        pariceonepaper = JSON.parse(v.price);

        if (language == "ar") {
            $("#getpaper").append('<div class="card horizontal card' + v.id + '" id=' + v.id + '><div class="listing-badge4 now-open" id=' + v.id + '><a onclick="removepaper(' + v.id + ',' + pariceonepaper + ',' + size_ + ')"><i class="material-icons">delete</i></a></div> <div class="card-image Papers"><img src=' + v.image + '></div><div class="card-stacked"><div class="card-content"><div class="textContent" ><h5 class="title">' + v.title + '</h5><a onclick="changeQualtity(' + v.id + ',' + size_ + ',' + pariceonepaper + ')" style="color: rgb(169, 68, 66);">يمكنك تغيير الكمية </a></div><div class="count-input space-bottom"><p class="textAmount"><strong>الكمية :</strong> <span id="change_size' + v.id + '">' + size_ + '</span></p><p  style="position:  absolute;top: 35px;left:  19px;font-size: 13px; "><strong>السعر :</strong> <span id="pricePaperUpdate' + v.id + '" >' + pariceonepaper * size_ + '</span></p></div></div></div></div>');

        } else if (language == "en") {
            $("#getpaper").append('<div class="card horizontal card' + v.id + '" id=' + v.id + '><div class="listing-badge4 now-open" id=' + v.id + '><a onclick="removepaper(' + v.id + ',' + pariceonepaper + ',' + size_ + ')"><i class="material-icons">delete</i></a></div> <div class="card-image Papers"><img src=' + v.image + '></div><div class="card-stacked"><div class="card-content"><div class="textContent" ><h5 class="title">' + v.title + '</h5><a onclick="changeQualtity(' + v.id + ',' + size_ + ',' + pariceonepaper + ')" style="color: rgb(169, 68, 66);"> Change quantity </a></div><div class="count-input space-bottom"><p class="textAmount"><strong>Amount</strong> <span id="change_size' + v.id + '">' + size_ + '</span></p><p  style="position:  absolute;top: 35px;left:  19px;font-size: 13px; "><strong> Price:</strong> <span id="pricePaperUpdate' + v.id + '">' + pariceonepaper * size_ + '</span></p></div></div></div></div>');

        }


    })

    $.post(urlSer + '/api/v1/taxes/' + language + '?token=' + userId, function (data) {
        $('.loadsimage').hide();
        delivery = data.price[1].price;
        localStorage.setItem("deliver", delivery);
        $(".bgButtom2").css("background", "#2fc83f");
        taxes = data.price[0].price + "%";
        localStorage.setItem("taxes", taxes);
        tax = data.price[0].price / 100;
        if (language == "ar") {
            $("#delivery").html('خدمة التوصيل ' + delivery + ' ريال ');
        } else if (language == "en") {
            $("#delivery").html('Delivery cost ' + delivery + ' SAR');
        }

        //summition total prices
        sumboxes = prices.reduce(add, 0);
        sumItems = pricesItems.reduce(add, 0);
         paperPrice = JSON.parse(localStorage.getItem("pricesPapers"));
        totaltaxes = (sumboxes + paperPrice + sumItems) * tax;
        totalpricetaxes = (sumboxes + paperPrice + sumItems) + totaltaxes;
        total = totalpricetaxes + delivery;
        $("#total").html(total);
        localStorage.setItem("total", total);
        // To re-enable:
        document.getElementById('continue').style.pointerEvents = 'auto';
        document.getElementById('cancel').style.pointerEvents = 'auto';
    });


}

function addboxes() {
    $("#modal2").modal('show');
    if (language == "ar") {
        $(".ourcartoon strong").html('تشكيلتنا');
        $("#yourColl").html('تشكيلة على كيفك');
        $("#close__").html('اغلاق');
    } else if (language == "en") {
        $(".ourcartoon strong").html('Our collection');
        $("#yourColl").html('Your collection');
        $("#close__").html('Close');
    }
}

function add(a, b) {
    return a + b;
}
//remove boxes
function remove(id, price) {

    var removeIndex = allBoxesID.map(function (item) {
        return item.id;
    }).indexOf(id);
    var x = allBoxesID.splice(removeIndex, 1);
    $("#" + id).remove();
    localStorage.setItem("onebox_id", JSON.stringify(allBoxesID));
     paperPrice = JSON.parse(localStorage.getItem("pricesPapers"));
    var removeBoxPrice = sumboxes + paperPrice + sumItems - price;
    sumboxes = sumboxes - price;
    totaltaxes = (removeBoxPrice) * tax;
    totalpricetaxes = (removeBoxPrice) + totaltaxes;
    total = totalpricetaxes + delivery;
    $("#total").html(total);
    localStorage.setItem("total", total);

    if (allBoxesID.length == 1 && items.length == 0) {
        $(".Cart").hide();
    }
    if (items.length == 1 && allBoxesID.length == 0) {
        $(".Cart").hide();
    }

}
//remove paper
function removepaper(id, pricepaper, sizepaper) {
    var newSize=$("#change_size"+id).text();
    var removeIndexpaer = paperdesc.map(function (item) {
        return item.id;
    }).indexOf(id);
    var y = paperdesc.splice(removeIndexpaer, 1);
    $(".card" + id).remove();

    localStorage.setItem("papers", JSON.stringify(paperdesc));
    if (paperdesc.length > 0) {
        $("#leafandpaper").show();
    } else {
        $("#leafandpaper").hide();
    } 
   
    pricetoRemove = pricepaper * newSize;
     paperPrice = JSON.parse(localStorage.getItem("pricesPapers"));
    var removePaperPrice = sumboxes + paperPrice + sumItems - pricetoRemove;

    totaltaxes = (removePaperPrice) * tax;
    totalpricetaxes = (removePaperPrice) + totaltaxes;
    total = totalpricetaxes + delivery;

    $("#total").html(total);

    localStorage.setItem("total", total);

    paperPrice = paperPrice - pricetoRemove
    localStorage.setItem("pricesPapers", paperPrice);

}
//remove items
function removeItems(id, price) {

    var removeIndex = id;
    var x = items.splice(removeIndex, 1);
    $("#" + id).remove();
    localStorage.setItem("items", JSON.stringify(items))
     paperPrice = JSON.parse(localStorage.getItem("pricesPapers"));
    var removeItemPrice = sumboxes + paperPrice + sumItems - price;
    sumItems = sumItems - price;
    totaltaxes = (removeItemPrice) * tax;
    totalpricetaxes = (removeItemPrice) + totaltaxes;
    total = totalpricetaxes + delivery;

    //   total=total-price;
    $("#total").html(total);
    localStorage.setItem("total", total);

    if (items.length == 1 && allBoxesID.length == 0) {
        $(".Cart").hide();
    }
    if (allBoxesID.length == 1 && items.length == 0) {
        $(".Cart").hide();
    }
}
//change Quantity papers
function changeQualtity(id, size, price) {
    $("#modal3").modal('show');
    if (language == "ar") {
        $("#closeModel3").html('إلغاء');
        $("#done").html('تم');
    } else if (language == "en") {
        $("#closeModel3").html('Cancel');
        $("#done").html('Done');
    }

    var image = $("#" + id + " img").attr("src");
    var title = $("#" + id + " .title").text();
    idPaper = id;
    priceNewPaper = price;
    if (language == "ar") {
        $("#appendCart").html('<div class="col-xs-12" id=' + id + '><div id=' + id + ' class="card"><div class="paperPrice" style="display:none">' + price + '</div><div id=' + id + ' class="card-image Order-img"><img   src=' + image + '><span class=" Black text-right">' + title + '</span><p class="resetKilo" id="kiloItem' + id + '">الكمية 0 </p></div></div><p><div id=' + id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + id + ',' + price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + id + '_' + price + '" class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + id + ',' + price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');

    } else if (language == "en") {
        $("#appendCart").html('<div class="col-xs-12" id=' + id + '><div id=' + id + ' class="card"><div class="paperPrice" style="display:none">' + price + '</div><div id=' + id + ' class="card-image Order-img"><img   src=' + image + '><span class=" Black text-right">' + title + '</span><p class="resetKilo" id="kiloItem' + id + '"> amount 0 </p></div></div><p><div id=' + id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + id + ',' + price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + id + '_' + price + '" class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + id + ',' + price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');

    }

    indexes = paperdesc.map(function (obj, index) {
        if (obj.id == id) {
            var oldsize = obj.size;
            $("#kiloItem" + id).html(oldsize);
            var oldQuaintity = JSON.parse(oldsize.split(" ")[1]);
            $("#quantity" + id + '_' + obj.price).val(oldQuaintity);
            indexForQuantity = index;
            return index;

        }

    })

}
//change Quantity box
function changeQualtity_(id, size, price, title) {
    $("#modal5").modal('show');
    if (language == "ar") {
        $("#closeModel5").html('إلغاء');
        $("#done_").html('تم');
    } else if (language == "en") {
        $("#closeModel5").html('Cancel');
        $("#done_").html('Done');
    }
    var image = $("#" + id + " img").attr("src");
    if (language == "ar") {

        $("#appendCart_").html('<div class="col-xs-12" id=' + id + '><div id=' + id + ' class="card"><div class="paperPrice" style="display:none">' + price + '</div><div id=' + id + ' class="card-image Order-img"><img   src=' + image + '><span class=" Black text-right">' + title + '</span><p class="resetKilo" id="kiloItem' + id + '">  الكمية 0</p></div></div><p><div id=' + id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + id + ',' + price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + id + '_' + price + '" class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + id + ',' + price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');

    } else if (language == "en") {

        $("#appendCart_").html('<div class="col-xs-12" id=' + id + '><div id=' + id + ' class="card"><div class="paperPrice" style="display:none">' + price + '</div><div id=' + id + ' class="card-image Order-img"><img   src=' + image + '><span class=" Black text-right">' + title + '</span><p class="resetKilo" id="kiloItem' + id + '"> amount 0  </p></div></div><p><div id=' + id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + id + ',' + price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + id + '_' + price + '" class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + id + ',' + price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');

    }

    indexes = allBoxesID.map(function (obj, index) {
        if (obj.id == id) {
            var oldsize = obj.size;
            var oldQuaintity = obj.amount;
            if (language == "ar") {

                $("#kiloItem" + id).html(oldQuaintity + "الكمية");
            } else if (language == "en") {

                $("#kiloItem" + id).html(oldQuaintity + "amount");
            }


            $("#quantity" + id + '_' + obj.priceoneItem).val(oldQuaintity);
            indexForQuantity = index;
            return index;

        }

    })

}

//increase Quantity papers
function increase(id, price) {
    incrKilo = parseInt($("#quantity" + id + '_' + price).val()) + 1;
    if (language == "ar") {

        $("#kiloItem" + id).html("الكمية " + incrKilo);
    } else if (language == "en") {

        $("#kiloItem" + id).html("amount " + incrKilo);
    }




}
//decrease Quantity papers
function decrease(id, price) {
    decrKilo = parseInt($("#quantity" + id + '_' + price).val()) - 1;

    if (decrKilo < 0) {

    } else {
        if (language == "ar") {

            $("#kiloItem" + id).html("الكمية " + decrKilo);
        } else if (language == "en") {

            $("#kiloItem" + id).html("amount " + decrKilo);
        }


    }

}

function getDetails(id) {
    $("#modal4").modal('show');
 
    $('.loadsimage').show();
    if (language == "ar") {
        $("#close").html('رجوع');
        $("#appenddetails").html('<div class="col-md-9 pt-15"><div class="product-single sec-space-bottom-2  clearfix"><div class="col-lg-6  col-sm-8 col-sm-offset-2 col-lg-offset-0"><div class="listing-badge now-open" id="size" style="z-index:2;    direction: rtl;"></div><section id="sec1"></section></div><div class="col-lg-6"> <div class="product-content block-inline"><div class="single-caption"> <h3 class="section-title"><a href="#">  <strong id="name"></strong></a></h3> <span class="divider-2"></span> <ul class="meta meta-2" id="items"><li><strong>السعر</strong><span class="clr-txt fsz-20" id="pricedetails" style="padding-right: 5px;"> </span></li></ul> </div></div></div> </div> </div>');


    } else if (language == "en") {
        $("#close").html('Back');
        $("#appenddetails").html('<div class="col-md-9 pt-15"><div class="product-single sec-space-bottom-2  clearfix"><div class="col-lg-6  col-sm-8 col-sm-offset-2 col-lg-offset-0"><div class="listing-badge now-open" id="size" style="z-index:2"></div><section id="sec1"></section></div><div class="col-lg-6"> <div class="product-content block-inline"><div class="single-caption"> <h3 class="section-title"><a href="#">  <strong id="name"></strong></a></h3> <span class="divider-2"></span> <ul class="meta meta-2" id="items"><li><strong>Price</strong><span class="clr-txt fsz-20" id="pricedetails" style="padding-right: 5px;"> </span></li></ul> </div></div></div> </div> </div>');


    }

    var x = '';
    photoUrl = urlSer;

    $.post(urlSer + '/api/v1/showpredefined/' + id + "/" + language + '?token=' + userId, function (data) {
        $('.loadsimage').hide();

        if (language == "ar") {
            $("#size").html(data.size + " كيلو");
        } else if (language == "en") {
            $("#size").html(data.size + " kilo");
        }
        size = data.size;
        image = data.imageOfbox;
        x += '<div class="item"><img src=' + photoUrl + data.imageOfbox + ' alt=""></div>';
        $(data.box).each(function (i, v) {

            if (language == "ar") {
                $("#items").append('<li><strong>' + v.name + '</strong> <span>: &nbsp; ' + v.kilo + ' كيلو</span> </li>');
                $("#name").html(data.boxName);
                $("#pricedetails").html(': &nbsp;' + data.price + ' ر.س');
            } else if (language == "en") {
                $("#items").append('<li><strong>' + v.name + '</strong> <span>: &nbsp; ' + v.kilo + ' kilo</span> </li>');
                $("#name").html(data.boxName);
                $("#pricedetails").html(': &nbsp;' + " LE " + data.price);
            }

        });
        $("#sec1").append(x);


    });
}

function getDetailsforItem(id) {
    $("#modal6").modal('show');
    $('.loadsimage').hide();
    if (language == "ar") {
        $("#closeModal6").html('رجوع');

        $("#appenddetails_").html('<div class="col-md-9 pt-15"><div class="product-single sec-space-bottom-2  clearfix"><div class="col-lg-6  col-sm-8 col-sm-offset-2 col-lg-offset-0"><div class="listing-badge now-open" id="size" style="z-index:2"></div><section id="sec1"></section></div><div class="col-lg-6"> <div class="product-content block-inline"><div class="single-caption"> <ul class="meta meta-2" id="items_"></ul> </div></div></div> </div> </div>')

    } else if (language == "en") {
        $("#closeModal6").html('Back');
        $("#appenddetails_").html('<div class="col-md-9 pt-15"><div class="product-single sec-space-bottom-2  clearfix"><div class="col-lg-6  col-sm-8 col-sm-offset-2 col-lg-offset-0"><div class="listing-badge now-open" id="size" style="z-index:2"></div><section id="sec1"></section></div><div class="col-lg-6"> <div class="product-content block-inline"><div class="single-caption"> <ul class="meta meta-2" id="items_"></ul> </div></div></div> </div> </div>')

    }
    $(items).each(function (i, v) {
        if (id == i) {
            $(v.arrayitem).each(function (i, x) {
    
                if (language == "ar") {

                    $("#items_").append('<li><strong>' + x.title + '</strong><br> <span>الوزن:' + x.size + '</span><br><span>' + x.price + '</span> </li><span class="divider-2"></span>');

                } else if (language == "en") {

                    $("#items_").append('<li><strong>' + x.title + '</strong><br> <span>Weight:' + x.size + '</span><br><span>' + x.price + '</span> </li><span class="divider-2"></span>');

                }

                return;
            })

        }
    })

}