var typejoin;
var typeTime;
var selectperiod;
var selectDay;
var day;
var date;
var items = JSON.parse(localStorage.getItem("items"));
items ? items = items : items = [];
var boxesArrey = JSON.parse(localStorage.getItem("onebox_id"));
boxesArrey ? boxesArrey = boxesArrey : boxesArrey = [];
var lengthBasket;
var lengthItem;
var lengthPapers;
var paperdesc = JSON.parse(localStorage.getItem("papers"));
paperdesc ? paperdesc = paperdesc : paperdesc = [];
// var vegAndfruits_id;
// var vegAndfruits_number;
$(function () {
    if(language=="ar"){
        $("#sumbit strong").html('إشترك');
        $("#title_").html('الإشتراكات');
        $("#SelectTypeJoin").html('حدد نوع الإشتراك ');
        $("#selected_time").html(`<div class="col-xs-12 ">
        <h5 class="text-right "> حدد مدة الإشتراك</h5>
        <div id="myForm2" class="col-xs-12 card " style="padding-bottom: 15px;    margin-bottom: 20px;">
            <form class="contact-form   Form-Contact" style="padding-bottom: 20px;">

                <div class=" col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="1" id="test8" />
                    <label id="week" for="test8">أسبوع</label>
                </div>

                <div class=" col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="2" id="test9" />
                    <label id="twoweeks" for="test9">أسبوعين</label>
                </div>
                <div class="col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="3" id="test7" />
                    <label for="test7">شهر</label>
                </div>
                <div class="col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="4" id="test10" />
                    <label for="test10">شهرين</label>
                </div>
                <div style="height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; " id="time"></div>
            </form>
        </div>

    </div>`);
        $("#myForm").html(`                            <div class=" col-xs-12">
        <input class="with-gap test4" name="group1" type="radio" value="2" id="test4" />
        <label for="test4" class="test4">مرتين في الأسبوع </label>
        <span class="MsgJoin" id="msgTwoDay" style="display:none">  سيتم التسليم في يومي الأحد و الأربعاء </span>
    </div>

    <div class="col-xs-12">
        <input class="with-gap test5" name="group1" type="radio" value="1" id="test3" />
        <label for="test3" class="test3">مرة في الأسبوع </label>
    </div>

    <div class="col-xs-12">
        <input class="with-gap test5" name="group1" type="radio" value="3" id="test5" />
        <label for="test5" class="test5">مرة كل أسبوعين </label>
    </div>


    <div id="oneweek" style="  height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; "></div>


    <div class="desc" id="daydeliver">
        <div class="input-field col s12">
            <h5>اختر يوم التسليم</h5>
            <select class="day">
                <option value="0" disabled selected>اختر اليوم</option>
                <option value="3">الأحد </option>
                <option value="2">الأربعاء </option>

            </select>
            <div style="height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; " id="day"></div>
        </div>
    </div>

    <div class="desc">
        <div class="input-field col s12">
            <h5>اختر وقت التسليم</h5>
            <select class="period">
                <option value="1" disabled selected>اختر الفترة</option>
                <option value="3"><label><span>1 </span><span>مساء</span><span> - </span><span> 3 </span><span>مساء</span></label>
                </option>
                <option value="7"><label><span>4 </span><span>مساء</span><span> - </span><span> 6 </span><span>مساء</span></label>
                </option>
                <option value="8"><label> <span>7 </span><span>مساء</span><span> - </span><span> 9 </span><span>مساء</span></label>
                </option>
                <option value="9"> <label> <span>10 </span><span>مساء</span><span> - </span><span> 12 </span><span>صباحا</span></label>
                </option>
            </select>
            <div style="height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; " id="period"></div>
        </div>
    </div>
`);
    }
    else if(language="en" ){
        $("#sumbit strong").html('Subscribe');
        $("#title_").html('subscription');
        $("#SelectTypeJoin").html('Select subscription type');
        $("#selected_time").html(`<div class="col-xs-12 ">
        <h5 class="text-right ">  Choose subscription duration</h5>
        <div id="myForm2" class="col-xs-12 card " style="padding-bottom: 15px;    margin-bottom: 20px;">
            <form class="contact-form   Form-Contact" style="padding-bottom: 20px;">

                <div class=" col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="1" id="test8" />
                    <label id="week" for="test8">Week</label>
                </div>

                <div class=" col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="2" id="test9" />
                    <label id="twoweeks" for="test9">Two week</label>
                </div>
                <div class="col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="3" id="test7" />
                    <label for="test7">Month</label>
                </div>
                <div class="col-xs-12">
                    <input class="with-gap" name="group1" type="radio" value="4" id="test10" />
                    <label for="test10">Two month</label>
                </div>
                <div style="height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; " id="time"></div>
            </form>
        </div>

    </div>`);
        $("#myForm").html(`                            <div class=" col-xs-12">
        <input class="with-gap test4" name="group1" type="radio" value="2" id="test4" />
        <label for="test4" class="test4">Twice a week </label>
        <span class="MsgJoin" id="msgTwoDay" style="display:none"> Will be delivered every Sunday and Wednesday </span>
    </div>

    <div class="col-xs-12">
        <input class="with-gap test5" name="group1" type="radio" value="1" id="test3" />
        <label for="test3" class="test3"> Once a week </label>
    </div>

    <div class="col-xs-12">
        <input class="with-gap test5" name="group1" type="radio" value="3" id="test5" />
        <label for="test5" class="test5"> Twice a month </label>
    </div>


    <div id="oneweek" style="  height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; "></div>


    <div class="desc" id="daydeliver">
        <div class="input-field col s12">
            <h5>Choose delivery day </h5>
            <select class="day">
                <option value="0" disabled selected>Select day </option>
                <option value="3">Sunday </option>
                <option value="2">Wednesday </option>

            </select>
            <div style="height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; " id="day"></div>
        </div>
    </div>

    <div class="desc">
        <div class="input-field col s12">
            <h5>Choose delivery time </h5>
            <select class="period">
                <option value="1" disabled selected> Select Period</option>
                <option value="3">
                    <label>
                        <span> 1 PM -3 PM </span> 
                    </label>
                </option>
                <option value="7">
                    <label>
                    <span> 4 PM -6 PM </span> 
                       
                    </label>
                </option>
                <option value="8">
                    <label>
                    <span> 7 PM -9 PM </span> 
                    </label>
                </option>
                <option value="9">
                    <label>
                    <span> 10 PM -12 AM </span> 
                    </label>
                </option>
            </select>
            <div style="height: 5px;color: red;margin-top: 0px;margin-bottom: 9px;font-size: 10px;display: none;float: left; " id="period"></div>
        </div>
    </div>
`);
    }

    $('input:checked').prop('checked', false);
    $('select').val("1").material_select();

    if (boxesArrey != undefined || items != undefined || paperdesc != undefined) {
        lengthPapers = paperdesc.length;
        lengthBasket = boxesArrey.length;
        lengthItem = items.length;
        $("#numInbasket").html(lengthBasket + lengthItem + lengthPapers);

    }
    url = window.location.href;
    nav = url.split("=").pop();
    $("#selected_time").hide();
    $("#daydeliver").hide();

    $("#myselect").hide();
    $('#myForm div input').on('change', function () {
        typejoin = $('input[name=group1]:checked', '#myForm').val();
        if (typejoin == "1" || typejoin == "3") {

            $("#week").hide();
            $("#daydeliver").show();
        } else
            $("#daydeliver").hide();


        if (typejoin == "2") {

            $("#msgTwoDay").show();
            if(language=="ar"){
                localStorage.setItem("typejoin", "مرتين في الأسبوع ");
                day = "الأحد و الأربعاء";
            }
            else if(language=="en"){
                localStorage.setItem("typejoin", "Twice a week");
                day = " Sunday and Wednesday";
            }
           
            localStorage.setItem("orderDay", JSON.stringify({
                day: day,
                date: date
            }))

            $("#week").show();
            $("#twoweeks").show();


        } else if (typejoin == "3") {
            if(language=="ar"){
                localStorage.setItem("typejoin", "مرة كل أسبوعين ");
               
            }
            else if(language=="en"){
                localStorage.setItem("typejoin", "Twice a month");
               
            }

          
            $("#msgTwoDay").hide();
            $("#twoweeks").hide();

        } else if (typejoin == "1") {
            if(language=="ar"){
                localStorage.setItem("typejoin", "مرة في الأسبوع ");
               
            }
            else if(language=="en"){
                localStorage.setItem("typejoin", " Once a week ");
               
            }
            
            $("#msgTwoDay").hide();
            $("#twoweeks").show();

        }


        $("#selected_time").show();
        $("#sumbit").show();
    });

    $("select.day").change(function () {
        selectDay = $(".day option:selected").val();

    });

    $("select.period").change(function () {
        selectperiod = $(".period option:selected").val();


    });
    $('#myForm2 div input').on('change', function () {
        typeTime = $('input[name=group1]:checked', '#myForm2').val();

        if (typeTime == "1") {
            if(language=="ar"){
                localStorage.setItem("typeTime", "أسبوع");
               
            }
            else if(language=="en"){
                localStorage.setItem("typeTime", "  week ");
               
            }
            
        } else if (typeTime == "2") {
            if(language=="ar"){
                localStorage.setItem("typeTime", "أسبوعين");
               
            }
            else if(language=="en"){
                localStorage.setItem("typeTime", " Two week ");
               
            }
            
        } else if (typeTime == "3") {
            if(language=="ar"){
                localStorage.setItem("typeTime", "شهر");
               
            }
            else if(language=="en"){
                localStorage.setItem("typeTime", "Month");
               
            }
            
        } else if (typeTime == "4") {
            if(language=="ar"){
                localStorage.setItem("typeTime", "شهرين");
               
            }
            else if(language=="en"){
                localStorage.setItem("typeTime", " Two month ");
               
            }
            
        }
    });


    // $.post(urlSer + '/api/v1/numberOfitems?token=' + userId, function (data) {


    //     vegAndfruits_id = data.number[2].itemtypes_id;
    //     vegAndfruits_number = data.number[2].number;



    // })

    $("#sumbit").click(function () {
        $(".loads").show();
        if (selectDay == "3") {
            if(language=="ar"){
                localStorage.setItem("orderDay", JSON.stringify({
                    day: "الأحد",
                    date: null
                }))
               
            }
            else if(language=="en"){
                localStorage.setItem("orderDay", JSON.stringify({
                    day: "Sunday",
                    date: null
                }))
               
            }

          
        } else if (selectDay == "2") {

            if(language=="ar"){
                localStorage.setItem("orderDay", JSON.stringify({
                    day: "الأربعاء",
                    date: null
                }))
               
            }
            else if(language=="en"){
                localStorage.setItem("orderDay", JSON.stringify({
                    day: "Wednesday",
                    date: null
                }))
               
            }
          
        }

        if (selectperiod == "3") {
            localStorage.setItem("orderdeliver", "1pm-3pm");
        } else if (selectperiod == "7") {
            localStorage.setItem("orderdeliver", "4pm-6pm");
        } else if (selectperiod == "8") {
            localStorage.setItem("orderdeliver", "7pm-9pm ");
        } else if (selectperiod == "9") {
            localStorage.setItem("orderdeliver", "10pm-12am ");
        }

        if (selectperiod == undefined) {

            $("#period").show();
            if(language=="ar"){
                
                $("#period").html('لابد من تحديد الفترة');
            }
            else if(language=="en"){
               
                $("#period").html(' Select Period  ');
            }
           
        } else $("#period").hide();
        if ((typejoin == "1" || typejoin == "3") && selectDay == undefined) {
            $("#day").show();
            if(language=="ar"){
                
                $("#day").html('لابد من تحديد اليوم ');
            }
            else if(language=="en"){
               
                $("#day").html('Select day');
            }
            
        } else
            $("#day").hide();

        if (typejoin == undefined) {
            $("#oneweek").show();
            if(language=="ar"){
                
                $("#oneweek").html('لابد من تحديد نوع الإشتراك ');
            }
            else if(language=="en"){
               
                $("#oneweek").html('Select subscription type');
            }
           

        } else $("#oneweek").hide();
        if (typeTime == undefined) {
            $("#time").show();
            if(language=="ar"){
                
                $("#time").html('لابد من تحديد مدة الإشتراك');
            }
            else if(language=="en"){
               
                $("#time").html('Select subscription duration');
            }
           
        } else $("#time").hide();


        if (nav == 1) {
            if (((typejoin != "2" && selectDay != undefined) || (typejoin == "2" && selectDay == undefined)) && (selectperiod != undefined && typeTime != undefined)) {
                localStorage.setItem("joinData", JSON.stringify({
                    type_join: typejoin,
                    day: selectDay,
                    period: selectperiod,
                    time: typeTime
                }))
      
                window.location.href = "ourBoxType.html?id=2";
                localStorage.setItem("ForbackButton", 1);
            } else if (typejoin == "2" && selectperiod != undefined && typeTime != undefined) {
                localStorage.setItem("joinData", JSON.stringify({
                    type_join: typejoin,
                    period: selectperiod,
                    time: typeTime
                }))

                window.location.href = "ourBoxType.html?id=2";

            }
        } else if (nav == 2) {

            if (((typejoin != "2" && selectDay != undefined) || (typejoin == "2" && selectDay == undefined)) && (selectperiod != undefined && typeTime != undefined)) {
                localStorage.setItem("joinData", JSON.stringify({
                    type_join: typejoin,
                    day: selectDay,
                    period: selectperiod,
                    time: typeTime
                }))

                // if(language=="ar"){
                
                //     localStorage.setItem("Ouritemsname", "خضروات و فواكه");
                // }
                // else if(language=="en"){
                   
                //     localStorage.setItem("Ouritemsname", " Vegetables and Fruits ");
                // }
               
                // localStorage.setItem("availableNumitems", JSON.stringify({
                //     "id": vegAndfruits_id,
                //     "item": vegAndfruits_number
                // }))

                window.location.href = "ourgroup-once.html?id=2";
               
                localStorage.setItem("ForbackButton", 2);
            } else if (typejoin == "2" && selectperiod != undefined && typeTime != undefined) {
                localStorage.setItem("joinData", JSON.stringify({
                    type_join: typejoin,
                    period: selectperiod,
                    time: typeTime
                }))
                // if(language=="ar"){
                
                //     localStorage.setItem("Ouritemsname", "خضروات و فواكه");
                // }
                // else if(language=="en"){
                   
                //     localStorage.setItem("Ouritemsname", " Vegetables and Fruits ");
                // }
                
                // localStorage.setItem("availableNumitems", JSON.stringify({
                //     "id": vegAndfruits_id,
                //     "item": vegAndfruits_number
                // }))
                window.location.href = "ourgroup-once.html?id=2";
               
                localStorage.setItem("ForbackButton", 2);
            }
        }


    });

})