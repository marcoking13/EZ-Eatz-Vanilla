
$("document").ready(()=>{
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
  var routes = response.routes;
  console.log(routes);
  var ul = "<ul className='list-group'";
    routes.map((route)=>{
        var geokey = "AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM";
        var formatAddress = `${route.street} ${route.city} ${route.state}`;
        axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
          params:{
            address:formatAddress,
            key:geoKey
          }
        }).then((response)=>{
          console.log(response);
          // var geolocation = response.data.results[0].geometry.location;
          // var lat = geolocation.lat;
          // var lng = geolocation.lng;
          // var address  = response.data.results[0].formatted_address;
          var addressOutput = `<ul list-group>
          <li class="list-group-item llC">
          <strong class="aS" >${formatAddress}</strong>
            <strong class="aR RR">8:30am - 12:00pm</strong>
          </li>
          <li class="list-group-item llC">
          <strong class="aS">${formatAddress}</strong>
            <strong class="aR GG">8:30am - 12:00pm</strong>
          </li>
          <li class="list-group-item llC">
          <strong class="aS">${formatAddress}</strong>
            <strong class="aR">8:30am - 12:00pm</strong>
          </li>
          <li class="list-group-item llC">
          <strong class="aS">${formatAddress}</strong>
            <strong class="aR">8:30am - 12:00pm</strong>
          </li>
          <li class="list-group-item llC">
          <strong class="aS">${formatAddress}</strong>
            <strong class="aR">8:30am - 12:00pm</strong>
          </li>
          <li class="list-group-item llC">
          <strong class="aS">${formatAddress}</strong>
            <strong class="aR">8:30am - 12:00pm</strong>
          </li>
          </ul>`;
          var addressE = document.querySelector(".routesEE").innerHTML=addressOutput;


        });
    });
  console.log(address);
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
console.log(lat,lng);
var addressOutput = `<ul card-block list-group>
<li class="list-group-item"><strong>Current Address: </strong>${address}</li>
</ul>`
var addressE = document.querySelector(".currentLocation").innerHTML=addressOutput;
    mapInit(lat,lng,address);
  });

});
});
function mapInit(lat,lon,address){
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
