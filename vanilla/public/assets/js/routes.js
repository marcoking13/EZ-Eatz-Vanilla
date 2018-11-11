
if(window.innerWidth <490 ){
  console.log(document.cookie);
$.ajax({
  url:"http://localhost:8000/api/currentFoodtruckSample",
  method:"GET"
}).done((response)=>{
response = response[0];
  var address  = {
    street:response.address.street,
    city:response.address.city,
    zip:response.address.zip,
    state:response.address.state
  }
  var newRoute = "";
  var routes = response.routes;
  var ul = "<ul className='list-group'";
  var counter = 0;
  var routeArray = [];
    $("<img>").addClass("loader").appendTo(".routesEE").attr("src","./assets/images/loader.gif");
    routes.map((route)=>{
      setTimeout(()=>{
        $(".routesEE").empty();
        var geokey = "AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM";
        var formatAddress = `${route.street} ${route.city} ${route.state}`;
        axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
          params:{
            address:formatAddress,
            key:geoKey
          }
        }).then((response)=>{
          var geolocation = response.data.results[0].geometry.location;
          var lat = geolocation.lat;
          var lng = geolocation.lng;
          var address  = response.data.results[0].formatted_address;
          address = address.replace(',USA','');
          $("<li>").click((event)=>{
            console.log( event.target.attributes.address.value)
            var newRoute = event.target.attributes.address.value;
            var lat = event.target.attributes.lat.value;
            var lng = event.target.attributes.lng.value;
            var geoData = {
              lat:lat,
              lng:lng
            };
            localStorage.setItem('lat', lat);
            localStorage.setItem('lng', lng);
            localStorage.setItem("flag",false);

          }).addClass("list-group-item mm3 llC full cb bbw sans btf2 llC"+counter).attr("lng",lng).attr("lat",lat).attr("address",address).appendTo(".routesEE");

          $("<p>").addClass("fll f12 l2").appendTo(".llC"+counter).text(`${address}`);

          $("<p>").addClass("fllr f12 t-right r2").appendTo(".llC"+counter).text(`12:00am-1:30pm`);
          counter++;

        });

},2000);
  });

  var geoKey = "AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM";
  var formatAddress = `${address.street} ${address.city} ${address.state}`;
  axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
    params:{
      address:formatAddress,
      key:geoKey
    }
  }).then((response)=>{
    var geolocation = response.data.results[0].geometry.location;
    var lat = geolocation.lat;
    var lng = geolocation.lng;
    var address  = response.data.results[0].formatted_address;
    var addressOutput = `<ul class="list-group">
      <li class="list-group-item m88">${address}</li>
    </ul>`
    var addressE = document.querySelector(".currentLocation").innerHTML=addressOutput;
    mapInit(lat,lng,address);
    });
  });
}else{
  $("body").text("Make Screen Smaller(490<)");
}
function mapInit(lat,lon){
  var mapE = document.querySelector(".mapE");
  var scope = {
    zoom:15,
    center:{
      lat:lat,
      lng:lon
    }
  }
  var map = new google.maps.Map(mapE,scope);
  var markerOptions = {
    position:new google.maps.LatLng(lat,lon)
  };
  var marker = new google.maps.Marker(markerOptions);
  marker.setMap(map);
  var infoWindowOptions = {
    content:address
  }
  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  google.maps.event.addListener(marker,"click",(event)=>{
    infoWindow.open(map,marker);
  });
}
