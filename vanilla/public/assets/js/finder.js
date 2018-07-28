
$.ajax({
  url:"http://localhost:8000/api/foodtruckSample"
}).done((response)=>{
  console.log(response);
})
  $(".search").on("click",(event)=>{

    $(".FoodTruck").addClass("sampleFadeIn");
    $("body").removeClass("origin");
    $(".finderContainer").addClass("dbb");
    // SearchBarConstruct();
    for(var i =0; i<7;i++){
      FoodTruckRoll(i);
    }
    $(".FoodTruck").on("click",()=>{
      console.log("Clk")
        window.location.assign("/menu");
    })
  });


// -----------------------------------------------------------------------

const FoodTruckRoll = (i)=>{

  $("<div>").addClass("col-2 FoodTruck sampleFadeIn FoodTruck"+i).attr("_id","319ei310328eu30ejsnm0i32ds320dj230d").appendTo(".finderContainer");
  $("<div>").addClass("TruckContainer TruckContainer"+i).appendTo(".FoodTruck"+i);
  $("<img>").addClass("TruckImage").appendTo(".TruckContainer"+i).attr("src","assets/images/sampletruck.jpg");
  $("<div>").addClass("TruckDetailContainer TruckDetailContainer"+i).appendTo(".TruckContainer"+i);
  $("<span>").addClass("logoContainer logoContainer"+i).appendTo(".TruckDetailContainer"+i);
  $("<img>").addClass("companyLogo").appendTo(".logoContainer"+i).attr("src","assets/images/smoothie.png");
  $("<span>").addClass("infoContainer infoContainer"+i).appendTo(".TruckDetailContainer"+i);
  $("<h5>").addClass("info companyName").text("Smoothie King").appendTo(".infoContainer"+i);
  $("<h5>").addClass("type").text("Sorbet and Dessert").appendTo(".infoContainer"+i);
  $("<h6>").addClass("dollar").text("$$$").appendTo(".infoContainer"+i);


}
const SearchBarConstruct = ()=>{
  $("<div>").addClass("input-group searcher mb-3").appendTo(".finderContainer");
  $("<input>").addClass("form-control centerText").attr("placeholder"," Search for a food truck").appendTo(".input-group");
  $("<div>").addClass("input-group-append").appendTo(".input-group");
  $("<button>").addClass("btn btn-outline-secondary").text("Search").appendTo(".input-group-append");

}
