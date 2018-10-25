var innerWidth = window.innerWidth;
console.log(innerWidth);
$.ajax({
  url:"http://localhost:8000/api/foodtruckSample"
}).done((response)=>{
  if(innerWidth > 700){
    slogan();
  }
  console.log(response);
  $(".FoodTruck").addClass("sampleFadeIn");
  $("body").removeClass("origin");
  $(".finderContainer").addClass("dbb w");
  var i =0;

  response.map((truck)=>{
    console.log(truck.logo,truck.name)
    FoodTruckRoll(truck,i);
    i++;
  });
  $(".FoodTruck").on("click",(event)=>{
    console.log(event.target);
    var _id = event.target.attributes._id.value;

      response.map((truck)=>{
        if(truck.objectID == _id){
          console.log(truck);
          $.ajax({
            url:"http://localhost:8000/api/currentFoodtruckSample",
            data:{code:truck.objectID},
            method:"POST"
          });
          window.location.assign("/menu")
        }
      })

  });


});

// -----------------------------------------------------------------------

const FoodTruckRoll = (truck,i)=>{


  $("<div>").addClass(" FoodTruck sampleFadeIn FoodTruck"+i).attr("_id",truck.objectID).appendTo(".finderContainer");
  if(innerWidth > 480 && innerWidth <800){
    $(".FoodTruck").addClass("col-3");
  }
  if(innerWidth > 800){
    $(".FoodTruck").addClass("col-2");
  }
  $("<div>").addClass("TruckContainer TruckContainer"+i).appendTo(".FoodTruck"+i);
  $("<img>").addClass("TruckImage").appendTo(".TruckContainer"+i).attr("src",truck.display).attr("_id",truck.objectID);
  $("<div>").addClass("TruckDetailContainer TruckDetailContainer"+i).appendTo(".TruckContainer"+i);
  $("<span>").addClass("logoContainer logoContainer"+i).appendTo(".TruckDetailContainer"+i);
  $("<img>").addClass("companyLogo fh").appendTo(".logoContainer"+i).attr("src",truck.logo);
  $("<span>").addClass("infoContainer infoContainer"+i).appendTo(".TruckDetailContainer"+i);
  $("<p>").addClass("info companyName").text(truck.name).appendTo(".infoContainer"+i);
  // $("<h5>").addClass("type").text(truck.name).appendTo(".infoContainer"+i);
  $("<h6>").addClass("dollar").text("$$$").appendTo(".infoContainer"+i);


}
function slogan(){
  var out = ` <div class="right line"></div><div class="left line"></div>
<h4 class="subTitle">Find your favorite food trucks near you</h5>`;
  document.querySelector(".sloganContainer").innerHTML = out;
}
const SearchBarConstruct = ()=>{
  $("<div>").addClass("input-group searcher mb-3").appendTo(".finderContainer");
  $("<input>").addClass("form-control centerText").attr("placeholder"," Search for a food truck").appendTo(".input-group");
  $("<div>").addClass("input-group-append").appendTo(".input-group");
  $("<button>").addClass("btn btn-outline-secondary").text("Search").appendTo(".input-group-append");

}
