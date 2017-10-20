// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
var longitude;
var latitude;
//document.addEventListener("deviceready", onDeviceReady, false);


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
  onMapSuccess();
    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onMapSuccess() {

   
    //latitude = position.coords.latitude;
    //longitude= position.coords.longitude;
        

        var latLng = new google.maps.LatLng(5.77745, -0.2458778);

        var mapDesc = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // create the map here
        map = new google.maps.Map(document.getElementById("map"), mapDesc);
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert("Location Off: Please turn it on");
}


function addMarker(){

navigator.geolocation.getCurrentPosition(onSuccess, onError);

 // Add marker to the map
 var latLng = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({
              position: latLng,
              map: map,
              title: 'My Current Location',
              animation: google.maps.Animation.DROP
          });
}

function onSuccess(position) {

   
    latitude = position.coords.latitude;
    longitude= position.coords.longitude;
  }