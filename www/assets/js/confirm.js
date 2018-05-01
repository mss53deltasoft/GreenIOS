$(function () {
    $("#msgNetwork").hide();
    var joinSession = JSON.parse(localStorage.getItem('joinData'));
    var allBoxesID = JSON.parse(localStorage.getItem("onebox_id"));
    allBoxesID ? allBoxesID = allBoxesID : allBoxesID = [];
    var address = localStorage.getItem("address");
    var payment;
    var total = JSON.parse(localStorage.getItem("total"));
    var allBoxes = [];
    var paperdesc = JSON.parse(localStorage.getItem("papers"));
    paperdesc ? paperdesc = paperdesc : paperdesc = [];
    var allpaper = [];
    var periods_id;
    var durations_id;
    var specifictimes_id;
    var day;
    var items = JSON.parse(localStorage.getItem("items"));
    var typeOfboxItem;
    var itemsBox = [];
    var itemdetails = [];
    var locLatitute = localStorage.getItem("lat");
    var locLongitude = localStorage.getItem("lng");
    var url;
    var nav;
    var deliver = JSON.parse(localStorage.getItem("deliver"));
    var taxes = JSON.parse(localStorage.getItem("taxes").split("%")[0]);
    url = window.location.href;
    nav = url.split("=").pop();


    document.getElementById('confirm').style.pointerEvents = 'none';
    document.getElementById('cancel').style.pointerEvents = 'none';

    $("#cancel").click(function () {
        $("#confirmCancel").modal('show');
        if (language == "ar") {
            $("#CAncelOrder").html('هل انت متأكد من الإلغاء؟ ');
            $("#close_").html('اغلاق');
            $("#done").html('تأكيد');

        } else if (language == "en") {
            $("#CAncelOrder").html('Are you sure you have canceled your order?');
            $("#close_").html('Close');
            $("#done").html('Done');
        }

    });
    $("#done").click(function () {

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
        localStorage.removeItem('position');
        window.location.href = "home.html?id=1";
    });
    if (language == "ar") {
        $("#title_").html('طريقة الدفع');
        $("#selectPayment").html('اختر طريقة الدفع ');
        $("#cash").html('كاش');
        $("#network").html('عن طريق الشبكه');
        $("#msgNetwork").html('(يتم الدفع عن طريق بطاقتك الائتمانيه عند الاستلام)');
        $("#cancel").html(' إلغاء الطلب');
        $("#confirm").html('تأكيد');

    } else if (language == "en") {
        $("#title_").html('Payment method');
        $("#selectPayment").html('How would you like to pay?');
        $("#cash").html('Cash');
        $("#network").html('Debt card ');
        $("#msgNetwork").html('(Payment is made by your credit card)');
        $("#cancel").html('Cancel');
        $("#confirm").html('Confirm');

    }


    $('#myForm div input').on('change', function () {
        payment = $('input[name=group1]:checked', '#myForm').val();
        if (payment === "0") {
            $("#msgNetwork").hide();
            payment = $("#cash").text();
        }


        if (payment === "1") {
            payment = $("#network").text();
            $("#msgNetwork").show();
        }
        $(".bgButtom2").css("background", "#2fc83f");
        document.getElementById('confirm').style.pointerEvents = 'auto';
        document.getElementById('cancel').style.pointerEvents = 'auto';

    });

    $(allBoxesID).each(function (i, v) {

        allBoxes.push({
            "id": v.id
        })
    })
    $(paperdesc).each(function (i, v) {
        allpaper.push({
            "id": v.id,
            "count": JSON.parse(v.size.split(" ")[1])
        })
    })
    $(items).each(function (i, v) {
        itemdetails = [];
        if (language == "ar") {
            if (v.descriptionBox == "فواكه")

                typeOfboxItem = 1;

            else if (v.descriptionBox == "خضروات")

                typeOfboxItem = 2;

            else if (v.descriptionBox == " على كيفك ")

                typeOfboxItem = 3;

        } else if (language == "en") {
            if (v.descriptionBox == "Fruits")

                typeOfboxItem = 1;

            else if (v.descriptionBox == "Vegetables")

                typeOfboxItem = 2;

            else if (v.descriptionBox == "Your")

                typeOfboxItem = 3;


        }

        $(v.arrayitem).each(function (i, x) {
            var id = x.id;
            if (language == "ar") {
                var sizeItem = JSON.parse(x.size.split("كيلو")[0]);
            } else if (language == "en") {

                // var sizeItem = JSON.parse(x.size.split("kilo")[1]);
                var sizeItem = JSON.parse(x.size.split("kilo")[0]);
            }
            itemdetails.push({
                "id": id,
                "count": sizeItem
            })

        })


        itemsBox.push({
            "totalOfbox": v.prices,
            "typeOfbox": typeOfboxItem,
            "size": JSON.parse(v.size),
            "items": itemdetails
        })
    })

    if (joinSession.type_join == undefined) {
        periods_id = 1;
    } else {
        periods_id = JSON.parse(joinSession.type_join);
    }

    if (joinSession.time == undefined)
        durations_id = 1;
    else {
        durations_id = JSON.parse(joinSession.time);
    }

    if (joinSession.day == undefined)
        day = 3;
    else {
        day = JSON.parse(joinSession.day);
    }

    if (joinSession.period == undefined) {

    } else {
        specifictimes_id = JSON.parse(joinSession.period);
    }


    $("#confirm").click(function () {
        var radios = document.formName.group1;

        for (var i = 0, iLen = radios.length; i < iLen; i++) {
            radios[i].disabled = true;
        }
        $(".loads").show();
        document.getElementById('confirm').style.pointerEvents = 'none';
        document.getElementById('cancel').style.pointerEvents = 'none';


        var data = {
            "payment_method": payment,
            "total": total,
            "taxes": taxes,
            "deliever": deliver,
            "lang": locLongitude,
            "lat": locLatitute,
            "specifictimes_id": specifictimes_id,
            "periods_id": periods_id,
            "durations_id": durations_id,
            "day": day,
            "address": address,
            "items-paper": allpaper,
            "box-items": itemsBox,
            "all_boxes_id": allBoxes
        }
        if (userId == unrealToken) {
            $("#modalUnrealtoken").modal('show');

            if (language == "ar") {
                $("#NoOrderSub").html(' يرجى التسجيل أولا');
                $("#close").html('موافق');
            
            } else if (language == "en") {
                $("#NoOrderSub").html('please login');
                $("#close").html('OK');
                
            }
        } else {
            $.post(urlSer + '/api/v1/allrequest?token=' + userId, data, function () {
                $('#myModalFinish').modal('show');
                if (language == "ar") {
                    $("#successProcess").html('تم إستلام طلبك');
                    $(".doneprocessHome").html('الرئيسية');
                    $(".doneprocessOrder").html('طلباتي');

                } else if (language == "en") {
                    $("#successProcess").html('Your order has been received');
                    $(".doneprocessHome").html('Home');
                    $(".doneprocessOrder").html('My orders');
                }

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
                localStorage.removeItem('position');
            });
        }
    });
    $("#close").click(function(){
        window.location.href="login.html";
    })

});