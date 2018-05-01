

var urlSer = "https://akhdar.azurewebsites.net";
var username = localStorage.getItem("user_name");
var userId = localStorage.getItem('user_id');
// var urlSer="http://192.168.1.126:8000";
var language = localStorage.getItem("language");
$(function () {




    $("#user_name").html(username).css({
        "font-size": "22px"
    });
    $(".loads").append('<i class="fa fa-spinner fa-spin"></i>');
    $(".loadsimage").append('<i class="fa fa-spinner fa-spin"style="font-size: 39px;color: rgb(35, 141, 150); margin-left: 45%;    margin-top: 44px;"></i>');

    $("#original").click(function () {
        window.location.href = "home.html";
    });
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;

    if (language == "en") {
        // headHTML    += '<link type="text/css" rel="stylesheet" href="assets/css/themeng.css">';
        // document.getElementsByTagName('head')[0].innerHTML = headHTML;

        $('link[href="assets/css/theme.css"]').attr('href', 'assets/css/themeng.css');
        $('link[href="assets/css/themeNumber.css"]').attr('href', 'assets/css/themeng.css');
        $('link[href="assets/css/style.css"]').attr('href', '');
        $('link[href="assets/css/theme.css"]').attr('href', '');
        $('link[href="assets/css/themeNumber.css"]').attr('href', '');

        $("body").delay(100).fadeIn("fast");

    }

    if (language == "ar") {

        $("body").delay(100).fadeIn("fast");
    }


    $("input").focus(function () {
        $("#FooterFixed").hide();
    });
    $("input").blur(function () {
        $("#FooterFixed").show();
    });
    $("#basket_").click(function () {
        window.location.href = "my-orders.html?id=5";
    });
});
var latitute;
var longitude;
var onSuccess;
var address;
var latConfirm;
var lngConfirm;
var clickLocation;
var addressClick;
var url;
var nav;
var aviableCity = [];
var citylocality;
var stateAdminstrative;
var adress;
var locality;
var adminstrative_area_level;
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    geolocation: function () {
        var onSuccess = function (position) {
            latConfirm = position.coords.latitude;
            lngConfirm = position.coords.longitude;

            //splitlat and long to use it later split
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            ////////////// map code starts here 
            var map;
            var div = document.getElementById("map_canvas");



            // Initialize the map view
            map = plugin.google.maps.Map.getMap(div);

            // Wait until the map is ready status.
            map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

            var geocoder = new google.maps.Geocoder;
            var latlng = new google.maps.LatLng(lat, long);
            geocoder.geocode({
                'latLng': latlng
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {

                    //we'll do cool crap here (we dont need other results)
                    var result = results[0];

                    ///// this is the  address to be displayed
                    adress = result.formatted_address;
                    //                    console.log("adress :"+adress);
                    $("#address").html(adress);
                    //look for locality(city) tag and administrative_area_level_1(state)
                    var city = "";
                    var state = "";
                    for (var i = 0, len = result.address_components.length; i < len; i++) {
                        var ac = result.address_components[i];
                        if (ac.types.indexOf("locality") >= 0) city = ac.long_name;
                        if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
                    }
                    //only report if we got Good Stuff (if city and state is found this works)
                    if (city != '' && state != '') {

                        ///add check condition here for locality and administrative_area_level_1

                        console.log("locality :" + city);
                        console.log("administrative_area_level_1 :" + state);
                        citylocality = city;
                        stateAdminstrative = state;
                        $(aviableCity).each(function (i, x) {
                            if (citylocality == x.locality && stateAdminstrative == x.stateAdminstrative) {
                                $("#notAvilable").css({
                                    "display": "none"
                                }).html("هذا المكان متاح");
                                document.getElementById('setlocation').style.pointerEvents = 'auto';

                                return false;
                            } else {
                                if (language == "ar") {
                                    $("#notAvilable").css({
                                        "display": "block"
                                    }).html("عذرا لم نصل بعد،،، سوف نخدمكم قريبا");
                                } else if (language == "en") {
                                    $("#notAvilable").css({
                                        "display": "block"
                                    }).html("Sorry we are not here yet,,, we will be soon");
                                }
                                document.getElementById('setlocation').style.pointerEvents = 'none';

                            }
                        })

                    } else if (city == '') {

                        if (language == "ar") {
                            $("#notAvilable").css({
                                "display": "block"
                            }).html("عذرا لم نصل بعد،،، سوف نخدمكم قريبا");
                        } else if (language == "en") {
                            $("#notAvilable").css({
                                "display": "block"
                            }).html("Sorry we are not here yet,,, we will be soon");
                        }
                        document.getElementById('setlocation').style.pointerEvents = 'none';

                    }

                }
            });


            function onMapReady() {

                map.setOptions({
                    'controls': {
                        'compass': true,
                        'myLocationButton': false,
                        'indoorPicker': false,
                        'zoom': false
                    },
                    'gestures': {
                        'scroll': true,
                        'tilt': false,
                        'rotate': false
                    }
                });


                map.animateCamera({
                    target: {
                        lat: lat,
                        lng: long
                    },
                    zoom: 17,
                    // tilt: 60,
                    // bearing: 140,
                    duration: 520
                }, function () {
                    // Add a maker
                    map.addMarker({
                        position: {
                            lat: lat,
                            lng: long
                        },

                        animation: plugin.google.maps.Animation.BOUNCE
                    }, function (marker) {

                        map.on(plugin.google.maps.event.MAP_CLICK, function (latLng) {

                            latConfirm = latLng.lat;
                            lngConfirm = latLng.lng;

                            app.geocodeLatLng(latLng);

                            marker.setPosition({
                                lat: latLng.lat,
                                lng: latLng.lng
                            });


                        });

                    });
                });

            }




        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            console.log('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },

    onDeviceReady: function () {
        if (language == "ar") {
            $("#title_").html('حدد موقعك');
            $("#setlocation").html('<a>تحديد الموقع</a>');
        } else if (language == "en") {
            $("#title_").html('Location');
            $("#setlocation").html('<a>Select a location</a>');
        }

        var navDecorBlocker = document.createElement("style");
        navDecorBlocker.setAttribute("type", "text/css");
        navDecorBlocker.innerText = [
            "html, body, ._gmaps_cdv_ {",
            "   background-image: url() !important;",
            "   background: rgba(0,0,0,0) url() !important;",
            "   background-color: rgba(0,0,0,0) !important;",
            "}",
            "._gmaps_cdv_ .nav-decor {",
            "   background-color: rgba(0,0,0,0) !important;",
            "   background: rgba(0,0,0,0) !important;",
            "   display:none !important;",
            "}"
        ].join("");
        document.head.appendChild(navDecorBlocker);
        $("#setlocation").attr("disabled", "disabled").off('click');

        $.post(urlSer + '/api/v1/cityParameter?token=' + userId, function (locationData) {
            $('.loadsimage').hide();
            app.geolocation();

            $(locationData.city).each(function (i, v) {
                locality = v.locality;
                adminstrative_area_level = v.adminstrative_area_level;
                aviableCity.push({
                    "locality": locality,
                    "stateAdminstrative": adminstrative_area_level
                })
            })
        })

        //geo with map 
        url = window.location.href;
        nav = url.split("=").pop();
        //            $("#backBtn").click(function(){
        //               window.location.href="my-orders.html?id="+nav;
        //              });


        $("#setlocation").click(function () {

            $(aviableCity).each(function (i, x) {
                if (citylocality == x.locality && stateAdminstrative == x.stateAdminstrative) {
                    localStorage.setItem("lat", latConfirm);
                    localStorage.setItem("lng", lngConfirm);
                    localStorage.setItem("address", adress);
                    window.location.href = "confirm.html";



                }

            })


        });



    },

    geocodeLatLng: function (latLng) {
        var geocoder = new google.maps.Geocoder;
        // var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
        var latlng = new google.maps.LatLng(latLng.lat, latLng.lng);

        geocoder.geocode({
            'latLng': latlng
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //we'll do cool crap here

                var result = results[0];
                //look for locality tag and administrative_area_level_1
                adress = result.formatted_address;

                $("#address").html(adress);
                var city = "";
                var state = "";
                for (var i = 0, len = result.address_components.length; i < len; i++) {
                    var ac = result.address_components[i];
                    if (ac.types.indexOf("locality") >= 0) city = ac.long_name;
                    if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
                }
                //only report if we got Good Stuff
                if (city != '' && state != '') {
                    // console.log("adress :"+adress);
                    console.log("locality :" + city);
                    console.log("administrative_area_level_1 :" + state);
                    citylocality = city;
                    stateAdminstrative = state;
                    $(aviableCity).each(function (i, x) {
                        if (citylocality == x.locality && stateAdminstrative == x.stateAdminstrative) {
                            $("#notAvilable").css({
                                "display": "none"
                            }).html("هذا المكان متاح");
                            document.getElementById('setlocation').style.pointerEvents = 'auto';

                            return false;
                        } else {
                            if (language == "ar") {
                                $("#notAvilable").css({
                                    "display": "block"
                                }).html("عذرا لم نصل بعد،،، سوف نخدمكم قريبا");
                            } else if (language == "en") {
                                $("#notAvilable").css({
                                    "display": "block"
                                }).html("Sorry we are not here yet,,, we will be soon");
                            }
                            document.getElementById('setlocation').style.pointerEvents = 'none';

                        }
                    })
                } else if (city == '') {
                    if (language == "ar") {
                        $("#notAvilable").css({
                            "display": "block"
                        }).html("عذرا لم نصل بعد،،، سوف نخدمكم قريبا");
                    } else if (language == "en") {
                        $("#notAvilable").css({
                            "display": "block"
                        }).html("Sorry we are not here yet,,, we will be soon");
                    }

                    document.getElementById('setlocation').style.pointerEvents = 'none';

                }

            }
        });

    }


};

app.initialize();