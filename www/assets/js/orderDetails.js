var orderId;
var url;
photoUrl = urlSer;
var typeOrderRequset;
var image;
var size;
var statusORder;
var splitStatus;
var statusOrder = localStorage.getItem("statusOrder");
$(function () {
    if (statusOrder == "مؤكد") {
        $("#FooterFixed2").show();
        $("#FooterFixed1").hide();
    } else if (statusOrder == "تم التسليم") {
        $("#FooterFixed1").show();
        $("#FooterFixed2").hide();
    }
    if (statusOrder == "Confirmed") {
        $("#FooterFixed2").show();
        $("#FooterFixed1").hide();
    } else if (statusOrder == "Delivered") {
        $("#FooterFixed1").show();
        $("#FooterFixed2").hide();
    }
    
    if (language == "ar") {
        $("#title_").html(' التفاصيل ');
        $("#pepperAndLeaf").append('ورقيات - أخرى').css({"margin-right":"30px","margin-top":"27px"});
        $("#delivery").append(' يمكنك إلغاء الإشتراكات أو الطلبات قبل التوصيل ب 24 ساعة');
        $("#joinOrder").append(' جدول التوصيل');
        $("#oneOrder strong").append(' جدول التوصيل');
        $("#FooterFixed2").html(`     <div class="container-fluid">
        <div class="row text-center">
            <div class="col-xs-12">
                <div class="col-xs-6 border" id="cancel"> إلغاء </div>
                <div class="col-xs-6" id="continue">رجوع</div>
            </div>

        </div>
    </div>`);
        $("#FooterFixed1").html(`     <div class="container-fluid">
    <div class="row text-center">
        <div class="col-xs-12" id="continue_">
          
            <div class="col-xs-12" >رجوع</div>
        </div>

    </div>
</div>`);
    } else if (language == "en") {
        $("#title_").html('Details');
        $("#pepperAndLeaf").append('Greens - Others').css({"margin-left":"23px","margin-top":"27px"});
        $("#delivery").append('Subscriptions or orders can be canceled within 24 hours before the delivery');
        $("#joinOrder").append('Delivery Schedule');
        $("#oneOrder strong").append('Delivery Schedule');
        $("#FooterFixed2").html(`     <div class="container-fluid">
        <div class="row text-center">
            <div class="col-xs-12">
            <div class="col-xs-6 border" id="continue">Back</div>
                <div class="col-xs-6 " id="cancel">Cancel order</div>
               
            </div>

        </div>
    </div>`);
        $("#FooterFixed1").html(`     <div class="container-fluid">
    <div class="row text-center">
        <div class="col-xs-12">
        <div class="col-xs-12 " id="continue_">Back</div>
            
           
        </div>

    </div>
</div>`);
    }
    $("#addPaPers").hide();
    $("hr").hide();
    $("#warnMsg").hide();
    $("#cancel").click(function () {
        $("#modalCancelation").modal('show');
        if (language == "ar") {
            $("#sureCAncel").html('هل انت متأكد من الإلغاء ؟');
            $("#cancelModal_").html('إلغاء');
            $("#done").html('موافق');
        } else if (language == "en") {
            $("#sureCAncel").html('Are you sure from cancel?');
            $("#cancelModal_").html('Cancel');
            $("#done").html('Done');
        }
    });
    $("#done").click(function () {
        $("#modalCancelation").modal('hide');
        $(".loads").show();
        $.post(urlSer + '/api/v1/requestSpecificDetails/' + orderId + '?token=' + userId, function (getDetails) {
            $(getDetails.data).each(function (i, v) {
                if (v.type == "0") {
                    $.post(urlSer + '/api/v1/cancelRequest/' + orderId +"/"+language+ '?token=' + userId, function (data_) {
                        $(".loads").hide();
                        $("#modal_").modal('show');
                        if (language == "ar") {
                            $("#closePOP").html('اغلق');
                        } else if (language == "en") {
                            $("#closePOP").html('Close');
                        }
                        if (data_.error)
                            $("#cancelOrderOrRequest").html(data_.error);
                        if (data_.success)
                            $("#cancelOrderOrRequest").html(data_.success);

                    });
                }
                if (v.type == "1") {
                    $.post(urlSer + '/api/v1/cancelOrder/' + orderId +"/"+language+ '?token=' + userId, function (data) {
                        $(".loads").hide();
                        $("#modal_").modal('show');
                        if (language == "ar") {
                            $("#closePOP").html('اغلق');
                        } else if (language == "en") {
                            $("#closePOP").html('Close');
                        }
                        if (data.error)
                            $("#cancelOrderOrRequest").html(data.error);
                        if (data.success)
                            $("#cancelOrderOrRequest").html(data.success);
                    });
                }
            })
        })
    });
    $("#closePOP").click(function () {
        window.location.href = "orderAndRequst.html";
    })
    $("#continue").click(function () {

        window.location.href = "orderAndRequst.html";
    })
    $("#continue_").click(function () {

        window.location.href = "orderAndRequst.html";
    })
    url = window.location.href;
    orderId = url.split("=").pop();

    $.post(urlSer + '/api/v1/requestSpecificDetails/' + orderId + '?token=' + userId, function (getDetails) {

        $('.loadsimage').hide();
        $("#warnMsg").show();
        $("hr").show();
        $(getDetails.boxes).each(function (i, v) {

            if (v.image == null)
            image = "assets/img/products/ourgroup.png";

            else
                image = "assets/img/products/ourgroup.png";

            size = v.size;
         
            if (language == "ar") {
                $("#getdata").append('<div class="col-sm-12" id=' + v.id + ' ><div class="deal-item list-view"><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge now-open noOfKilo' + v.size + '" id="noOfKilo' + v.size + '" style="background: rgb(218, 93, 121);direction: rtl;"><span>' + v.size + '</span><span> كيلو </span> </div><h2 class="fsz-20 "> <a href="#"> <span class="light-font">تشكيلة</span> <strong id="nameOfDesc">' + v.name + ' </strong> </a> </h2><div id="description"><p class="">' + v.description.replace(/,\s*$/, "").split("المزيد")[0] + '</p><a  onclick="getDetails(' + v.id + ')" style="color: red;font-size:12px" >المزيد</a></div><div id="amount_'+ v.id+'"><span> الكمية : </span><strong>  ' + v.amount + '   </strong></div><div class="price"><span> سعر الكرتونة الواحدة  :</span><strong id="price">  ' + v.total + '  ريال سعودي</strong></div></div><div class="img img2"> <img id="img_Src" alt="" src=' + image + '> </div></div></div></div>');

            } else if (language == "en") {
                $("#getdata").append('<div class="col-sm-12" id=' + v.id + ' ><div class="deal-item list-view"><div class="deal-content"><div class="deal-text deal-text2"><div class="listing-badge now-open noOfKilo' + v.size + '" id="noOfKilo' + v.size + '" style="background: rgb(218, 93, 121);direction:ltr;"><span>' + v.size + '</span><span> kilo </span> </div><h2 class="fsz-20 "> <a href="#"> <span class="light-font">Collection</span> <strong id="nameOfDesc">' + v.name_en + ' </strong> </a> </h2><div id="description"><p class="">' + v.description_en.replace(/,\s*$/, "").split("more")[0] + '</p><a  onclick="getDetails(' + v.id + ')" style="color: red;font-size:15px">more</a></div><div id="amount_'+ v.id+'"><span> Amount  :</span><strong>  ' + v.amount + '   </strong></div><div class="price "><strong> Price of Box:</strong><strong id="price">  ' + v.total + ' SAR </strong></div></div><div class="img img2"> <img id="img_Src" alt="" src=' + image + '> </div></div></div></div>');

            }
            if(v.amount==null){
                $("#amount_"+ v.id).hide();
            }
            else if(v.amount!=null||v.amount!=undefined)
            {
                $("#amount_"+ v.id).show();
            }

            if (size == "6") {
                $(".noOfKilo" + v.size).css({
                    "background": "#da5d79"
                });
            } else if (size == "9") {
                $(".noOfKilo" + v.size).css({
                    "background": "#3db3c2"
                });
            } else if (size == "12") {
                $(".noOfKilo" + v.size).css({
                    "background": "#319c57"
                });
            }






        });

        if (getDetails.papers.length == 0) {
            //            $("#addPaPers").hide();
            $(".Papers2").css({
                "padding-top": "0px"
            });
        } else {

            $("#addPaPers").show();
            $(getDetails.papers).each(function (i, v) {

                var imagePaper = photoUrl + /img/ + v.image;
                if (language == "ar") {
                    $("#getpaper").append('<div class="card horizontal card' + v.id + '" id=' + v.id + '> <div class="card-image Papers"><img src=' + imagePaper + '></div><div class="card-stacked"><div class="card-content"><div class="textContent" ><h5 class="title">' + v.name + '</h5></div><div class="count-input space-bottom"><p class="textAmount"><strong>الكمية :</strong> <span id="change_size' + v.id + '">' + v.number + '</span></p><p  style="position:  absolute;top: 35px;left:  19px;font-size: 13px; "><strong>السعر :</strong> <span>' + v.price * v.number + '</span></p></div></div></div></div>');

                } else if (language == "en") {
                    $("#getpaper").append('<div class="card horizontal card' + v.id + '" id=' + v.id + '> <div class="card-image Papers"><img src=' + imagePaper + '></div><div class="card-stacked"><div class="card-content"><div class="textContent" ><h5 class="title">' + v.name_en + '</h5></div><div class="count-input space-bottom"><p class="textAmount"><strong>Amount</strong> <span id="change_size' + v.id + '">' + v.number + '</span></p><p  style="position:  absolute;top: 35px;left:  19px;font-size: 13px; "><strong>Price:</strong> <span>' + v.price * v.number + '</span></p></div></div></div></div>');

                }


            })

        }
        if (language == "ar") {
            $("#joins").append('<table  class="table-border table-responsive"> <tr  class="HeaderTable"><td><h4>الحالة</h4></td> <td><h4>تاريخ التسليم </h4></td></tr></table>');

        } else if (language == "en") {
            $("#joins").append('<table  class="table-border table-responsive"> <tr  class="HeaderTable"><td><h4>status</h4></td> <td><h4> Delivery date </h4></td></tr></table>');

        }
        $(getDetails.order).each(function (i, v) {

            if (v.status == "0") {
                if (language == "ar") {
                    status = "مؤكد";
                } else if (language == "en") {
                    status = "Confirmed";
                }

                var splitStatus = status;
            } else if (v.status == "2") {
                if (language == "ar") {
                    status = "تم التسليم";
                } else if (language == "en") {
                    status = "delivered";
                }


                var splitStatus = status.split(" ")[1];
            }

            if (language == "ar") {
                $("#joindetails").html('<h4>سعر التوصيل <span  id="Delivery" class="pull-left orderDetails" >' + v.deliever + '</span></h4><h4>الإجمالي<span  id="totalPrice" class="pull-left orderDetails" >' + v.total + ' </span></h4> ');
                $("table").append('<tr> <tr class="text-center"> <td><i class="material-icons Check' + splitStatus + '">check_circle</i> <span  id="status" class="pull-left orderDetails" >' + status + ' </span></td> <td> <i class="material-icons Calender">date_range</i> <span  id="deliever_time" class="pull-left orderDetails" >' + v.deliever_time + ' </span></td></tr>');

            } else if (language == "en") {
                $("#joindetails").html('<h4> Delivery price: <span  id="Delivery" class="pull-left orderDetails" >' + v.deliever + '</span></h4><h4>Total:   <span  id="totalPrice" class="pull-left orderDetails" >' + v.total + ' </span></h4> ');
                $("table").append('<tr> <tr class="text-center"> <td><i class="material-icons Check' + splitStatus + '">check_circle</i> <span  id="status" class="pull-left orderDetails" >' + status + ' </span></td> <td> <i class="material-icons Calender">date_range</i> <span  id="deliever_time" class="pull-left orderDetails" >' + v.deliever_time + ' </span></td></tr>');

            }


            if (v.status == "0") {

                $(".Check" + splitStatus).css({
                    "color": "#bdd020"
                });
            } else if (v.status == "2") {
                $(".Check" + splitStatus).css({
                    "color": "green"
                });

            }

        })


        $(getDetails.data).each(function (i, v) {

            if (v.duration_value != 1) {
                $("#joinOrder").show();
                $("#oneOrder").hide();



                //*******************//
                //مدة الاشتراك 
                if (v.duration_value == "1") {

                    if (language == "ar") {
                        period = "أسبوع";
                    } else if (language == "en") {
                        period = "Week";
                    }

                } else if (v.duration_value == "2") {
                    if (language == "ar") {
                        period = "أسبوعين";
                    } else if (language == "en") {
                        period = "Two week";
                    }


                } else if (v.duration_value == "3") {
                    if (language == "ar") {
                        period = "شهر";
                    } else if (language == "en") {
                        period = "Month";
                    }


                } else if (v.duration_value == "4") {
                    if (language == "ar") {
                        period = "شهرين";
                    } else if (language == "en") {
                        period = "Two month";
                    }


                }
                if (language == "ar") {
                    $("#duration_value").html('مدة الإشتراك <span id="durationTime" class="pull-left orderDetails" > </span>');

                } else if (language == "en") {
                    $("#duration_value").html('Subscription duration:  <span id="durationTime" class="pull-left orderDetails" > </span>');

                }

                $("#durationTime").html(period);

                //*******************//
                // نوع الاشتراك
                if (v.periods_id == "1") {
                    if (language == "ar") {
                        typejoinRequst = "مرة في الأسبوع ";
                    } else if (language == "en") {
                        typejoinRequst = "Once a week";
                    }

                } else if (v.periods_id == "2") {
                    if (language == "ar") {
                        typejoinRequst = "مرتين في الأسبوع ";
                    } else if (language == "en") {
                        typejoinRequst = "Twice a week";
                    }
                } else if (v.periods_id == "3") {
                    if (language == "ar") {
                        typejoinRequst = "مرة كل أسبوعين ";
                    } else if (language == "en") {
                        typejoinRequst = "Twice a month";
                    }
                }
                if (language == "ar") {
                    $("#periods_id").html('نوع الإشتراك <span id="periodTime" class="pull-left orderDetails" > </span>');

                } else if (language == "en") {
                    $("#periods_id").html(' Subtype : <span id="periodTime" class="pull-left orderDetails" > </span>');

                }

                $("#periodTime").html(typejoinRequst);
                $("#joinOrder").show().css({
                    "padding-right": "10px",
                    "color": "rgb(62, 184, 162)",
                    "text-align": "center",
                    "display": "block"
                });

                //***********************// 



            } else if (v.type == "1") {
                $("#joinOrder").hide();
                $("#oneOrder").show().css({
                    "padding-right": "10px",
                    "color": "rgb(62, 184, 162)",
                    "text-align": "center",
                    "display": "block"
                });
                if (language == "ar") {
                    $("#nameOrder").html(' نوع الطلب <span id="typeOrderRequset" class="pull-left orderDetails" > </span>');
                    typeOrderRequset = "مرة واحدة";
                } else if (language == "en") {
                    $("#nameOrder").html(' Type of Request <span id="typeOrderRequset" class="pull-left orderDetails" > </span>');
                    typeOrderRequset = "Once";
                }

                $("#cancel").click(function () {
                    // $.post(urlSer+'/api/v1/cancelOrder/'+orderId+'?token='+userId,function(data){

                    //              if(data.error)
                    //         $("#cancelOrderOrRequest").html(data.error);
                    //          if(data.success)
                    //         $("#cancelOrderOrRequest").html(data.success);
                    //     });

                });
            }
            $("#typeOrderRequset").html(typeOrderRequset);

        });
    });
});

function getDetails(id) {
    $("#modal4").modal('show');
    if (language == "ar") {
        $("#close").html('رجوع');
    } else if (language == "en") {
        $("#close").html('Back');
    }

    $('.loadsimage').show().css({
        "margin-left": "27%"
    });
    if(language=="ar"){
    $("#appenddetails").html('<div class=""><div class="product-single sec-space-bottom-2  clearfix"><div class="col-lg-6  col-sm-8 col-sm-offset-2 col-lg-offset-0"><div class="listing-badge now-open" id="size" style="z-index:2;direction: rtl;"></div><section id="sec1"></section></div><div class="col-lg-6"> <div class="product-content block-inline"><div class="single-caption"> <h3 class="section-title" style="margin-top: 9px;"><a href="#">  <strong id="name"></strong></a></h3> <span class="divider-2"></span> <ul class="meta meta-2" id="items"></ul> </div></div></div> </div> </div>');
    }
    else if(language=="en"){
        $("#appenddetails").html('<div class=" "><div class="product-single sec-space-bottom-2  clearfix"><div class="col-lg-6  col-sm-8 col-sm-offset-2 col-lg-offset-0"><div class="listing-badge now-open" id="size" style="z-index:2;direction: ltr;"></div><section id="sec1"></section></div><div class="col-lg-6"> <div class="product-content block-inline"><div class="single-caption"> <h3 class="section-title" style="margin-top: 9px;"><a href="#">  <strong id="name"></strong></a></h3> <span class="divider-2"></span> <ul class="meta meta-2" id="items"></ul> </div></div></div> </div> </div>');
    }
    var x = '';
    photoUrl = urlSer;
    $.post(urlSer + '/api/v1/requestSpecificDetails/' + orderId + '?token=' + userId, function (data) {
        $('.loadsimage').hide();
        $(data.items).each(function (i, v) {
            if (v.box_id == id){
                if (language == "ar") {
                    $("#items").append('<li><strong>' + v.name + '</strong> <span>: &nbsp; ' + v.kilo + ' كيلو</span> </li>');

                }
            else if (language == "en") {
                $("#items").append('<li><strong>' + v.name_en + '</strong> <span>: &nbsp; ' + v.kilo + ' kilo</span> </li>');

            }}
            // return false
        });


        $(data.boxes).each(function (i, v) {

            if (v.boxes_id == id) {
                var imageOrder = photoUrl + /img/ + v.image;
                if (language == "ar") {
                    $("#size").html(v.size + " كيلو");
                } else if (language == "en") {
                    $("#size").html(v.size + " kilo");
                }

                x += '<div class="item"><img src=' + imageOrder + ' alt=""></div>';
                $("#sec1").append(x);
                if (language == "ar") {
                    $("#name").html(v.name);
                } else if (language == "en") {
                    $("#name").html(v.name_en);
                }
              

            }

        });



    });



}