
$.ajax({
  url:"http://localhost:8000/api/foodtruckSample"
}).done((response)=>{
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

  $("<div>").addClass("col-3 FoodTruck sampleFadeIn FoodTruck"+i).attr("_id",truck.objectID).appendTo(".finderContainer");
  $("<div>").addClass("TruckContainer TruckContainer"+i).appendTo(".FoodTruck"+i);
  $("<img>").addClass("TruckImage").appendTo(".TruckContainer"+i).attr("src",truck.display).attr("_id",truck.objectID);
  $("<div>").addClass("TruckDetailContainer TruckDetailContainer"+i).appendTo(".TruckContainer"+i);
  $("<span>").addClass("logoContainer logoContainer"+i).appendTo(".TruckDetailContainer"+i);
  $("<img>").addClass("companyLogo fh").appendTo(".logoContainer"+i).attr("src",truck.logo);
  $("<span>").addClass("infoContainer infoContainer"+i).appendTo(".TruckDetailContainer"+i);
  $("<h6>").addClass("info companyName").text(truck.name).appendTo(".infoContainer"+i);
  // $("<h5>").addClass("type").text(truck.name).appendTo(".infoContainer"+i);
  $("<h6>").addClass("dollar").text("$$$").appendTo(".infoContainer"+i);


}
const SearchBarConstruct = ()=>{
  $("<div>").addClass("input-group searcher mb-3").appendTo(".finderContainer");
  $("<input>").addClass("form-control centerText").attr("placeholder"," Search for a food truck").appendTo(".input-group");
  $("<div>").addClass("input-group-append").appendTo(".input-group");
  $("<button>").addClass("btn btn-outline-secondary").text("Search").appendTo(".input-group-append");

}
