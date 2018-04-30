var incrKilo;
var decrKilo;
var noOfKilo = 0.5;
var item = [];
var array = [];
var arrayFruit = [];
var results;
var url;
var nav;
var getdata;
var prices = 0;
var priceOneItem;
photoUrl = urlSer;
var numberItem = JSON.parse(localStorage.getItem("availableNumitems"));
var reset;
var arrayitem = [];
var descriptionBox;
var navback = localStorage.getItem("idBack");
var items = JSON.parse(localStorage.getItem("items"));
items ? items = items : items = [];
var boxesArrey = JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey ? boxesArrey = boxesArrey : boxesArrey = [];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc = JSON.parse(localStorage.getItem("papers"));
paperdesc ? paperdesc = paperdesc : paperdesc = [];
var previouspage = window.sessionStorage.getItem("page");
var sizeCartoonItem = localStorage.getItem("sizeCartoonItem");
$(function () {
    if(language=="ar"){
        $("#title_").html('تشكيلة على كيفك');
        $("#tags").attr("placeholder", "إبحث في الخضروات");
        $("#tags_").attr("placeholder", "إبحث في الفواكه");
        $("#fruitTitle").html('الفواكه');
        $("#vegtitle").html('الخضروات');
     
        
        
    }
    else if(language=="en"){
        $("#title_").html('Your collection ');
        $("#tags").attr("placeholder", "Search in vegetables");
        $("#tags_").attr("placeholder", "Search in fruits");
        $("#fruitTitle").html('Fruit');
        $("#vegtitle").html('Vegetables');
        $("#tabs-swipe-demo").css({"height":"100px"});
        $("#fruitswipe").css({"height":"100px"});
        $("#vegSwipe").css({"height":"100px"});
    }


    if (boxesArrey != undefined || items != undefined || paperdesc != undefined) {
        lengthPapers = paperdesc.length;
        lengthBasket = boxesArrey.length;
        lengthItem = items.length;
        $("#numInbasket").html(lengthBasket + lengthItem + lengthPapers);

    }

        $("#back").click(function(){
            sessionStorage.removeItem("page");
            javascript:history.back();
        });

    $("#backBtn").click(function () {

        window.location.href = "ourgroups.html?id=" + navback;
    })

    url = window.location.href;
    nav = url.split("=").pop();

    localStorage.setItem('backBtn', nav);

    loadData();
    //increace aliaa
    $("#appendCart1").on("click", ".incr-btn", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            //var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 0.5;
            } else {
                newVal = 0;
                $button.addClass('inactive');
            }
        }
        //$button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });
    $("#appendCart2").on("click", ".incr-btn", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            //var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 0.5;
            } else {
                newVal = 0;
                $button.addClass('inactive');
            }
        }
        //$button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });

    //finish increase


   
    $("#fruitswipe").click(function () {
        $("#searchfruit").show();
        $("#searchVeg").hide();
    })
    $("#vegSwipe").click(function () {
        $("#searchfruit").hide();
        $("#searchVeg").show();
    })

})
function loadData() {
    $.get(urlSer + '/api/v1/items/' + language + '?token=' + userId, function (data) {
        $('.loadsimage').hide();
        getdata = data;
        if (numberItem.id == 3) {
            if (previouspage == "paper.html?name=add,id=4") {
                $(items[items.length - 1].arrayitem).each(function (i, value) {
                    item.push(value.id);
                });
            }
            $(data.items).each(function (i, v) {

                if (previouspage != "paper.html?name=add,id=4") {
                    if (v.types_id == "1") {
                        if(language=="ar"){
                            $("#appendCart1").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">السعر:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> ر.س</span> </p><p class="resetKilo" id="kiloItem' + v.id + '">0كيلو </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                      
                        }
                        else if(language=="en"){
                            $("#appendCart1").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">Price:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> SAR</span> </p><p class="resetKilo" id="kiloItem' + v.id + '">kilo0 </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                      
                        }


                        arrayFruit.push(v.title);
                        $("#tags_").autocomplete({
                            source: arrayFruit,
                            select: function(e, ui) {
                                Search(ui.item.value);
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
                    } else if (v.types_id == "2") {
                        // v.price
                        if(language=="ar"){
                            $("#appendCart2").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">السعر:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> ر.س  </span></p><p class="resetKilo" id="kiloItem' + v.id + '">0كيلو </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                       
                        }
                        else if(language=="en"){
                            $("#appendCart2").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">Price:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> SAR </span></p><p class="resetKilo" id="kiloItem' + v.id + '">kilo0 </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                       
                        }
                       
                        array.push(v.title);
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
                    }
                } else {

                   
                    if (v.types_id == "1") {

                        if(language=="ar"){
                            $("#appendCart1").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">السعر:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> ر.س</span> </p><p class="resetKilo" id="kiloItem' + v.id + '">0كيلو </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                       
                        }
                        else if(language=="en"){
                            $("#appendCart1").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">Price:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> SAR</span> </p><p class="resetKilo" id="kiloItem' + v.id + '">kilo0 </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                          
                        } 
                         arrayFruit.push(v.title);

                        

                        $(items[items.length - 1].arrayitem).each(function (i, value) {
                            $("#" + value.id + " #priceKiloItem" + value.id).html(value.price.split(" ")[0].split(":")[1]);
                            $("#" + value.id + " #kiloItem" + value.id).html(value.size);
                            $("#quantity" + value.id + '_' + v.price).val(value.size.split("كيلو")[0]);
                        });
                        if(language=="ar"){
                            $(".FixedTop").html(`
                            <p  style="display:none" class="text-center fullCarton">لقد أضفت<strong style="color: green" class="allowKilo"> </strong></p>
                          `);
                          $(".allowKilo").html(sizeCartoonItem + "/" + (nav));
                        }
                        else if(language=="en"){
                           $(".FixedTop").html(`
                              <p  style="display:none" class="text-center fullCarton"> Added <strong style="color: green" class="allowKilo"> </strong></p>
                            `);
                            $(".allowKilo").html((nav) + "/" + sizeCartoonItem);
                        } 
                        $(".fullCarton").show();
                        


        


                        $("#tags_").autocomplete({
                            source: arrayFruit,
                            select: function(e, ui) {
                                Search(ui.item.value);
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
                    } else if (v.types_id == "2") {

                        if(language=="ar"){
                            $("#appendCart2").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">السعر:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> ر.س  </span></p><p class="resetKilo" id="kiloItem' + v.id + '">0كيلو </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                       
                        }
                        else if(language=="en"){
                            $("#appendCart2").append('<div class="col-xs-6" id=' + v.id + '><div id=' + v.id + ' class="card"><div id=' + v.id + ' class="card-image Order-img"><img    src=' + photoUrl + v.image + ' ><span class=" Black text-right">' + v.title + '</span><p class=" Black_ text-right" id="priceItemg"><span style="color: #2fc83f;">Price:</span><span id="priceKiloItem' + v.id + '"> 0</span> <span> SAR </span></p><p class="resetKilo" id="kiloItem' + v.id + '">kilo0 </p></div></div><p><div id=' + v.id + ' class="count-input2 space-bottom"><a  onclick="decrease(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="decrease" href="#">–</a><input id="quantity' + v.id + '_' + v.price + '"  class="quantity" type="text" name="quantity" value="0" disabled><a  onclick="increase(' + v.id + ',' + v.price + ')"   class="incr-btn" data-action="increase" href="#">+</a></div></p></div>');
                       
                        }
                         array.push(v.title);


                        $(items[items.length - 1].arrayitem).each(function (i, value) {
                            $("#" + value.id + " #priceKiloItem" + value.id).html(value.price.split(" ")[0].split(":")[1]);
                            $("#" + value.id + " #kiloItem" + value.id).html(value.size);
                            if(language=="ar"){
                                $("#quantity" + value.id + '_' + v.price).val(value.size.split("كيلو")[0]);
                             
                            }
                            else if(language=="en"){
                                $("#quantity" + value.id + '_' + v.price).val(value.size.split("kilo")[0]);
                             
                            }
                      
                        });
                        if(language=="ar"){
                            $(".FixedTop").html(`
                            <p  style="display:none" class="text-center fullCarton">لقد أضفت<strong style="color: green" class="allowKilo"> </strong></p>
                          `);
                          $(".allowKilo").html(sizeCartoonItem + "/" + (nav));
                        }
                        else if(language=="en"){
                            $(".FixedTop").html(`
                            <p  style="display:none" class="text-center fullCarton"> Added <strong style="color: green" class="allowKilo"> </strong></p>
                          `);
                          $(".allowKilo").html((nav) + "/" + sizeCartoonItem);
                        } 
                        $(".fullCarton").show();
                        



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
                        
                    }
                }
            })
        }
    })
}
function submit(){
    document.getElementById('GreenNext').style.pointerEvents = 'none';
    document.getElementById('Cont_').style.pointerEvents = 'none';
    if (previouspage == "paper.html?name=add,id=4") {
        items.pop();
    }
    if (previouspage != "paper.html?name=add,id=4") {
        $("#appendCart1 .quantity").each(function (i, v) {
            var price = $(v).attr("id").split("_").pop();
            if(language=="ar"){
                var quantity = $(v).val();
            }
            else if(language=="en"){
                var quantity =   $(v).val().split("kilo")[0];
            }
            var onePrice = price * quantity;
            prices += onePrice;

            var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

            $(item).each(function (i, v) {
                if (id == v) {

                    if(language=="ar"){
                        if ($("#" + id + " .resetKilo ").text() != "0كيلو ") {
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                        } 
                    }
                    else if(language=="en"){
                        if ($("#" + id + " .resetKilo ").text() != "kilo0"&&$("#" + id + " .resetKilo ").text() != "kilo0 ") {
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                        }
                    }
           
                }
            })

        });
        $("#appendCart2 .quantity").each(function (i, v) {
            var price = $(v).attr("id").split("_").pop();
            if(language=="ar"){
                var quantity = $(v).val();
            }
            else if(language=="en"){
                var quantity =   $(v).val().split("kilo")[0];
            }
            var onePrice = price * quantity;
            prices += onePrice;

            var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

            $(item).each(function (i, v) {
                if (id == v) {

                    if(language=="ar"){
                        if ($("#" + id + " .resetKilo ").text() != "0كيلو ") {
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                        }
                    }
                    else if(language=="en"){
                        if ($("#" + id + " .resetKilo ").text() != "kilo0"&&$("#" + id + " .resetKilo ").text() != "kilo0 ") {
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                        }
                    }

          
                }
            })

        });

        if (numberItem.id == 3) {
            if(language=="ar"){
                descriptionBox =" على كيفك "  ;  
            }
            else if(language=="en"){
                descriptionBox = "Your";
            }
        }


        items.push({
            arrayitem,
            "prices": prices,
            "size": nav,
            "descriptionBox": descriptionBox
        })
        localStorage.setItem("items", JSON.stringify(items));
        window.location.href = "my-orders.html?id=4";



        lengthPapers = paperdesc.length;
        lengthBasket = boxesArrey.length;
        lengthItem = items.length;
        $("#numInbasket").html(lengthBasket + lengthItem + lengthPapers);

    } 
    else {
        $("#appendCart1 .quantity").each(function (i, v) {
            var price = $(v).attr("id").split("_").pop();
            if(language=="ar"){
                var quantity = $(v).val();
            }
            else if(language=="en"){
                var quantity =   $(v).val().split("kilo")[0];
            }
            var onePrice = price * quantity;
            prices += onePrice;

            var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

            $(item).each(function (i, v) {
                if (id == v) {
                    if(language=="ar"){
                        if ($("#" + id + " .resetKilo ").text() != "0كيلو ") {
                      
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                       
                       
                        }
                    }
                    else if(language=="en"){
                        if ($("#" + id + " .resetKilo ").text() != "kilo0"&&$("#" + id + " .resetKilo ").text() != "kilo0 ") {
                      
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                       
                       
                        }
                    }
                 
                }
            });

        });
        $("#appendCart2 .quantity").each(function (i, v) {
            var price = $(v).attr("id").split("_").pop();
            if(language=="ar"){
                var quantity = $(v).val();
            }
            else if(language=="en"){
                var quantity =   $(v).val().split("kilo")[0];
            }
            var onePrice = price * quantity;
            prices += onePrice;

            var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

            $(item).each(function (i, v) {
                if (id == v) {
                    if(language=="ar"){
                        if ($("#" + id + " .resetKilo ").text() != "0كيلو ") {
                        
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                        }
                    }
                    else if(language=="en"){
                        if ($("#" + id + " .resetKilo ").text() != "kilo0"&&$("#" + id + " .resetKilo ").text() != "kilo0 ") {
                        
                            arrayitem.push({
                                "id": id,
                                "title": $("#" + id + " .Black ").text(),
                                "price": $("#" + id + " .Black_ ").text(),
                                "size": $("#" + id + " .resetKilo ").text()
                            });
                            return;
                        }
                    }
                 
                }
            })

        })

        if (numberItem.id == 3) {
            if(language=="ar"){
                descriptionBox = " على كيفك ";     
            }
            else if(language=="en"){
                descriptionBox = " Your";
            }
        }
        
        items.push({
            arrayitem,
            "prices": prices,
            "size": nav,
            "descriptionBox": descriptionBox
        })
        if (items[items.length - 1].arrayitem.length == 0) {
            items.splice(-1, 1);
        }
        localStorage.setItem("items", JSON.stringify(items));
        sessionStorage.removeItem("page");
        window.location.href = "my-orders.html?id=4";



        lengthPapers = paperdesc.length;
        lengthBasket = boxesArrey.length;
        lengthItem = items.length;
        $("#numInbasket").html(lengthBasket + lengthItem + lengthPapers);
    }
}
function greenPaper(){
    document.getElementById('GreenNext').style.pointerEvents = 'none';
    document.getElementById('Cont_').style.pointerEvents = 'none';
    if (previouspage == "paper.html?name=add,id=4") {
        items.pop();
    }
    if (previouspage != "paper.html?name=add,id=4") {
    $("#appendCart1 .quantity").each(function (i, v) {
        var price = $(v).attr("id").split("_").pop();
        if(language=="ar"){
            var quantity = $(v).val();
        }
        else if(language=="en"){
            var quantity =   $(v).val().split("kilo")[0];
        }
        var onePrice = price * quantity;
        prices += onePrice;

        var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

        $(item).each(function (i, v) {
            if (id == v) {
                arrayitem.push({
                    "id": id,
                    "title": $("#" + id + " .Black ").text(),
                    "price": $("#" + id + " .Black_ ").text(),
                    "size": $("#" + id + " .resetKilo ").text()
                });
                return;
            }
        })

    })

    $("#appendCart2 .quantity").each(function (i, v) {
        var price = $(v).attr("id").split("_").pop();
        if(language=="ar"){
            var quantity = $(v).val();
        }
        else if(language=="en"){
            var quantity =   $(v).val().split("kilo")[0];
        }
        var onePrice = price * quantity;
        prices += onePrice;

        var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

        $(item).each(function (i, v) {
            if (id == v) {
                arrayitem.push({
                    "id": id,
                    "title": $("#" + id + " .Black ").text(),
                    "price": $("#" + id + " .Black_ ").text(),
                    "size": $("#" + id + " .resetKilo ").text()
                });
                return;
            }
        })

    })
    if (numberItem.id == 3) {
        if(language=="ar"){
            descriptionBox = " على كيفك ";     
        }
        else if(language=="en"){
            descriptionBox = "Your";
        }
      

    }


    items.push({
        arrayitem,
        "prices": prices,
        "size": nav,
        "descriptionBox": descriptionBox
    })
    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "paper.html?name=add,id=4";
}
else{
    $("#appendCart1 .quantity").each(function (i, v) {
        var price = $(v).attr("id").split("_").pop();
        if(language=="ar"){
            var quantity = $(v).val();
        }
        else if(language=="en"){
            var quantity =   $(v).val().split("kilo")[0];
        }
        var onePrice = price * quantity;
        prices += onePrice;

        var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

        $(item).each(function (i, v) {
            if (id == v) {
                if(language=="ar"){
         
                    if ($("#" + id + " .resetKilo ").text() != "0كيلو ") {
                    
                        arrayitem.push({
                            "id": id,
                            "title": $("#" + id + " .Black ").text(),
                            "price": $("#" + id + " .Black_ ").text(),
                            "size": $("#" + id + " .resetKilo ").text()
                        });
                        return;
                    }
                    
                    
                }
                else if(language=="en"){
                    if ($("#" + id + " .resetKilo ").text() != "kilo0"&&$("#" + id + " .resetKilo ").text() != "kilo0 ") {
                    
                        arrayitem.push({
                            "id": id,
                            "title": $("#" + id + " .Black ").text(),
                            "price": $("#" + id + " .Black_ ").text(),
                            "size": $("#" + id + " .resetKilo ").text()
                        });
                        return;
                    }
                }
        
            }
        })

    })
    $("#appendCart2 .quantity").each(function (i, v) {
        var price = $(v).attr("id").split("_").pop();
        if(language=="ar"){
            var quantity = $(v).val();
        }
        else if(language=="en"){
            var quantity =   $(v).val().split("kilo")[0];
        }
        var onePrice = price * quantity;
        prices += onePrice;

        var id = JSON.parse($(v).attr("id").split("y").pop().split("_")[0]);

        $(item).each(function (i, v) {
            if (id == v) {

                if(language=="ar"){
         
            
                    if ($("#" + id + " .resetKilo ").text() != "0كيلو ") {
                  
                        arrayitem.push({
                            "id": id,
                            "title": $("#" + id + " .Black ").text(),
                            "price": $("#" + id + " .Black_ ").text(),
                            "size": $("#" + id + " .resetKilo ").text()
                        });
                        return;
                    }
                    
                    
                }
                else if(language=="en"){
               
                    if ($("#" + id + " .resetKilo ").text() != "kilo0"&&$("#" + id + " .resetKilo ").text() != "kilo0 ") {
                  
                        arrayitem.push({
                            "id": id,
                            "title": $("#" + id + " .Black ").text(),
                            "price": $("#" + id + " .Black_ ").text(),
                            "size": $("#" + id + " .resetKilo ").text()
                        });
                        return;
                    }
                }

            }
        })

    })
    if (numberItem.id == 3) {
        if(language=="ar"){
            descriptionBox = " على كيفك ";     
        }
        else if(language=="en"){
            descriptionBox = "Your";
        }
       
    }
    
    items.push({
        arrayitem,
        "prices": prices,
        "size": nav,
        "descriptionBox": descriptionBox
    })
    if (items[items.length - 1].arrayitem.length == 0) {
        items.splice(-1, 1);
    }
    localStorage.setItem("items", JSON.stringify(items));
    sessionStorage.removeItem("page");
    window.location.href = "paper.html?name=add,id=4";
}
}
function increase(id, price) {
    if (previouspage != "paper.html?name=add,id=4") {
        //to increase item
        if (item.indexOf(id) == -1) {

            if (item.length >= numberItem.item) {
               
                if(language=="ar"){
                    $("#msgWarn").html('لا يمكنك اضافه اكتر من ' + numberItem.item + ' عنصر');
                    $("#close").html('رجوع');
                }
                else if(language=="en"){
                    $("#msgWarn").html('you can not add more than ' + numberItem.item + ' item');
                    $("#close").html('Back');
                }
                $("#warn").modal('show');
                return;

            }
            item.push(id);
        }

        if (noOfKilo > nav) {
            if(language=="ar"){
                $("#textModal").html(' الكرتون الان يحتوي على ' +  nav  + ' كيلو ');
                $("#successBox").html('تمام ');
                $("#footerText").html(`    
                <a class="cancel waves-effect waves-light btn  FooterBtnModel" data-dismiss="modal">إلغاء</a>
              <a id="GreenNext"   onclick="greenPaper()" class="waves-effect waves-light btn FooterBtnModel2 "  style="    padding: 5px 3px !important;">ورقيات - أخرى</a>
              <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn FooterBtnModel ">إستكمال </a>
              `)  ;
           
            }
            else if(language=="en"){
                $("#textModal").html('The box now contains '  +nav+' kilo ');
                $("#successBox").html('Done');
                $("#footerText").html(`    <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn FooterBtnModel">Continue </a>
                <a id="GreenNext"  onclick="greenPaper()" class="waves-effect waves-light btn FooterBtnModel2 "  style="    padding: 5px 3px !important;">Greens - Others </a>
                <a class="cancel waves-effect waves-light btn FooterBtnModel " data-dismiss="modal">Cancel</a>

              `)  ;
            }
            $('#modal2_').modal('show');
            return;

        } else if (noOfKilo == nav) {
            if(language=="ar"){
                $("#textModal").html(' الكرتون الان يحتوي على ' +  nav  + ' كيلو ');
                $("#successBox").html('تمام ');
                $("#footerText").html(`    
                <a class="cancel waves-effect waves-light btn  FooterBtnModel" data-dismiss="modal">إلغاء</a>
              <a id="GreenNext"  onclick="greenPaper()"  class="waves-effect waves-light btn  FooterBtnModel2 "  style="    padding: 5px 3px !important;">ورقيات - أخرى</a>
              <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn FooterBtnModel">إستكمال </a>
              `)  ;
           
            }
            else if(language=="en"){
                $("#textModal").html('The box now contains '  +nav+' kilo ');
                $("#successBox").html('Done');
                $("#footerText").html(`    <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn FooterBtnModel ">Continue </a>
                <a  id="GreenNext"  onclick="greenPaper()"  class="waves-effect waves-light btn  FooterBtnModel2" style="    padding: 5px 3px !important;">Greens - Others  </a>
                <a class="cancel waves-effect waves-light btn  FooterBtnModel" data-dismiss="modal">Cancel</a>
              `)  ;
            }
            $('#modal2_').modal('show');
            incrKilo = parseFloat($("#quantity" + id + '_' + price).val()) + 0.5;
            if(language=="ar"){
                $("#kiloItem" + id).html(incrKilo + "كيلو");
            }
            else if(language=="en"){
                $("#kiloItem" + id).html(incrKilo + "kilo");
            }
       
            $("#priceKiloItem" + id).html(incrKilo * price);
            $("#quantity" + id + '_' + price).val(incrKilo);


        } else {
            incrKilo = parseFloat($("#quantity" + id + '_' + price).val()) + 0.5;
            if(language=="ar"){
                $("#kiloItem" + id).html(incrKilo + "كيلو");
            }
            else if(language=="en"){
                $("#kiloItem" + id).html(incrKilo + "kilo");
            }
            $("#quantity" + id + '_' + price).val(incrKilo);
            $("#priceKiloItem" + id).html(incrKilo * price);
        }

        noOfKilo += 0.5;
        if (nav == "12" || nav == "9" || nav == "6")
        if(language=="ar"){
            $(".FixedTop").html(`
            <p  style="display:none" class="text-center fullCarton">لقد أضفت<strong style="color: green" class="allowKilo"> </strong></p>
          `);
          $(".allowKilo").html(sizeCartoonItem + "/" + (noOfKilo - 0.5));
        }
        else if(language=="en"){
            $(".FixedTop").html(`
            <p  style="display:none" class="text-center fullCarton"> Added <strong style="color: green" class="allowKilo"> </strong></p>
          `);
          $(".allowKilo").html( (noOfKilo - 0.5) + "/" +sizeCartoonItem);
        } 
            $(".fullCarton").show();
        


    }
     else {
        if (item.indexOf(id) == -1) {

            if (item.length >= numberItem.item) {
                if(language=="ar"){
                    $("#msgWarn").html('لا يمكنك اضافه اكتر من ' + numberItem.item + ' عنصر');
                    $("#close").html('رجوع');
                }
                else if(language=="en"){
                    $("#msgWarn").html('you can not add more than ' + numberItem.item + ' item');
                    $("#close").html('Back');
                }
                
                $("#warn").modal('show');
                return;

            }
            item.push(id);
        }
        if (nav == sizeCartoonItem) {
            if(language=="ar"){
                $("#textModal").html(' الكرتون الان يحتوي على ' +  nav  + ' كيلو ');
                $("#successBox").html('تمام ');
                $("#footerText").html(`   
                <a class="cancel waves-effect waves-light btn  " data-dismiss="modal">إلغاء</a>
              <a id="GreenNext"  onclick="greenPaper()"  class="waves-effect waves-light btn  ">ورقيات - أخرى</a>
              <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn ">إستكمال </a>
              `)  ;
           
            }
            else if(language=="en"){
                $("#textModal").html('The box now contains '  +nav+' kilo ');
                $("#successBox").html('Done');
                $("#footerText").html(`    <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn ">Continue </a>
                <a id="GreenNext"  onclick="greenPaper()"  class="waves-effect waves-light btn  ">Greens - Others</a>
             
                <a class="cancel waves-effect waves-light btn  " data-dismiss="modal">Cancel</a>
              `)  ;
            }
            $('#modal2_').modal('show');
        } else {

            incrKilo = parseFloat($("#quantity" + id + '_' + price).val()) + 0.5;
            if(language=="ar"){
                $("#kiloItem" + id).html(incrKilo + "كيلو");
            }
            else if(language=="en"){
                $("#kiloItem" + id).html(incrKilo + "kilo");
            }
           
            $("#priceKiloItem" + id).html(incrKilo * price);
            $("#quantity" + id + '_' + price).val(incrKilo);
            var x = nav + 0.5;
            $(".allowKilo").html(sizeCartoonItem + "/" + (x));
            nav = x;
            if (nav == sizeCartoonItem) {
                if(language=="ar"){
                    $("#textModal").html(' الكرتون الان يحتوي على ' +  nav  + ' كيلو ');
                    $("#successBox").html('تمام ');
                    $("#footerText").html(`   
                    <a class="cancel waves-effect waves-light btn " data-dismiss="modal">إلغاء</a>
                  <a id="GreenNext"  onclick="greenPaper()" class="waves-effect waves-light btn  ">ورقيات - أخرى</a> <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn ">إستكمال</a>
                  `)  ;
               
                }
                else if(language=="en"){
                    $("#textModal").html('The box now contains '  +nav+' kilo ');
                    $("#successBox").html('Done');
                    $("#footerText").html(`
                    <a id="Cont_"  onclick="submit()" class="waves-effect waves-light btn ">Continue </a>
                    <a id="GreenNext"  class=" waves-effect waves-light btn ">Greens - Others </a><a class="cancel waves-effect waves-light btn " data-dismiss="modal">Cancel</a> 
                    `)  ;
                }
                $('#modal2_').modal('show');
            }
        }


    }
}
function decrease(id, price) {
    if (previouspage != "paper.html?name=add,id=4") {
        oldValue = parseFloat($("#quantity" + id + '_' + price).val());

        if (oldValue > 0) {
            decrKilo = oldValue - 0.5;
            if(language=="ar"){
                $("#kiloItem" + id).html(decrKilo + "كيلو");
            }
            else if(language=="en"){
                $("#kiloItem" + id).html(decrKilo + "kilo");
            }
           
            $("#priceKiloItem" + id).html(decrKilo * price);
            $("#quantity" + id + '_' + price).val(decrKilo);
            noOfKilo -= 0.5;
            if (nav == "12" || nav == "9" || nav == "6") {
                if(language=="ar"){
                  $(".FixedTop").html('<p  style="display:none" class="text-center fullCarton">لقد أضفت<strong style="color: green" class="allowKilo"> </strong></p>');
                  $(".allowKilo").html(sizeCartoonItem + "/" + (noOfKilo - 0.5));
                }
                else if(language=="en"){

                  $(".FixedTop").html('<p  style="display:none" class="text-center fullCarton"> Added <strong style="color: green" class="allowKilo"> </strong></p>');
                  $(".allowKilo").html( (noOfKilo - 0.5) + "/" +sizeCartoonItem);
                } 
                $(".fullCarton").show();
                
            }
        } else {
            decrKilo = 0;
        }
        if (decrKilo == 0) {
            var index = item.indexOf(id);
            if (index > -1)
                item.splice(index, 1);
        }
    } else {
        oldValue = parseFloat($("#quantity" + id + '_' + price).val());

        if (oldValue > 0) {
            decrKilo = oldValue - 0.5;
            if(language=="ar"){
                $("#kiloItem" + id).html(decrKilo + "كيلو");
            }
            else if(language=="en"){
                $("#kiloItem" + id).html(decrKilo + "kilo");
            }
            $("#priceKiloItem" + id).html(decrKilo * price);
            $("#quantity" + id + '_' + price).val(decrKilo);

            var x = nav - 0.5;
            $(".allowKilo").html(sizeCartoonItem + "/" + (x));
            nav = x;
        } else {
            decrKilo = 0;
        }
        if (decrKilo == 0) {
            item.splice(item.indexOf(id),1);
    }
    }
}
// for search item
function myFunction(val) {
    if (val != undefined || val != "") {
        var items = getdata.items.filter(item => item.title.toLowerCase().match(val.toLowerCase()));
        if (getdata.items.length > 0) {

            $('#appendCart2').children().hide();


            $(items).each(function (i, v) {

                if (v.title.charAt(0) === val)
                    $('#appendCart2 #' + v.id + '').show();

                else
                    $('#appendCart2 #' + items[0].id + '').show();
            })

        }
        if (val == "") {
            $('#appendCart2').children().show();
        }

    }
    $("#FooterFixed").show();

}
// for search item
function Search(val) {
    if (val != undefined || val != "") {
        var items = getdata.items.filter(item => item.title.toLowerCase().match(val.toLowerCase()));
        if (getdata.items.length > 0) {

            $('#appendCart1').children().hide();


            $(items).each(function (i, v) {

                if (v.title.charAt(0) === val)
                    $('#appendCart1 #' + v.id + '').show();

                else
                    $('#appendCart1 #' + items[0].id + '').show();
            })

        }
        if (val == "") {
            $('#appendCart1').children().show();
        }

    }
    $("#FooterFixed").show();

}