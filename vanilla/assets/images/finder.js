var innerWidth = window.innerWidth;
$.ajax({
  url:"http://localhost:8000/api/foodtruckSample"
}).done((response)=>{
  if(innerWidth > 700){
    slogan();
  }
  $(".FoodTruck").addClass("sampleFadeIn");
  $("body").removeClass("origin");
  $(".finderContainer").addClass("dbb w");
  var i =0;
  response.map((truck)=>{
    FoodTruckRoll(truck,i);
    i++;
  });
  $(".FoodTruck").on("click",(event)=>{
    var _id = event.target.attributes._id.value;
      response.map((truck)=>{
        if(truck.objectID == _id){
          $.ajax({
            url:"http://localhost:8000/api/currentFoodtruckSample",
            data:{code:truck.objectID},
            method:"POST"
          });
          window.location.assign("/menu")
        }
      });
  });
});
// var innerWidth = window.innerWidth;
// function sliderMenu(){
//   $.ajax({
//     url:"http://localhost:8000/api/foodTruckSample",
//     method:"GET"
//   }).done((response)=>{
//       var Catagories = [
//         {
//           name:"Nearest-You",
//           trucks:[],
//           counter:1
//         },
//         {
//           name:"Cheapest",
//           trucks:[],
//           counter:5
//         },
//         {
//           name:"Most-Popular",
//           trucks:[],
//           counter:11
//         },
//         {
//           name:"all-american",
//           trucks:[],
//           counter:5
//         },
//         {
//           name:"dessert",
//           trucks:[],
//           counter:3
//         },
//         {
//           name:"burgers",
//           trucks:[],
//           counter:9
//         }
//       ];
//   function capitalizeFirstLetter(string) {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   function catagoryConstruct(Catagories){
//     var l = 0;
//     Catagories.map((catagory)=>{
//       $("<div>").addClass("catt"+l).appendTo(".finderContainer");
//       var cap = capitalizeFirstLetter(catagory.name);
//       $("<h3>").addClass("cName").text(cap).appendTo(".catt"+l);
//       $("<div>").addClass("row cat"+l).appendTo(".catt"+l);
//         renderBox2(l,catagory.trucks[catagory.counter],catagory);
//         l++;
//     });
// }
// function renderBox2(l,truck){
//
//
// var catas = "$ ";
// for(var i =0; i<truck.type.length;i++){
//   catas+=`  ${truck.type[i]}`
// }
//   $("<div>").addClass("row brow"+l).appendTo(".cat"+l);
//   $("<div>").addClass("col-1 x re c col-1b"+l).appendTo(".brow"+l);
//   $("<div>").addClass("col-10 truckC col-10b"+l).appendTo(".brow"+l).attr("_id",truck.objectID).attr("catagory",catagory.name);
//   $("<img>").addClass("truckI truckmm").attr("src",truck.display).attr("_id",truck.objectID).appendTo(".col-10b"+l);
//   $("<h3>").addClass("nameT").text(truck.name).appendTo(".col-10b"+l);
//   $("<p>").addClass("p").text(catas).appendTo(".col-10b"+l);
//   $("<div>").addClass("col-1 x er c col-1b"+l).appendTo(".brow"+l);
//
//
// }
//   function renderBox(l,truck,catagory){
//     $("<div>").addClass("col-2 jumbotron re x re"+l).attr("catagory",catagory.name).appendTo(".cat"+l);
//     var address = `${truck.address.street}, ${truck.address.city}, ${truck.address.state}, ${truck.address.zip}`;
//     $("<div>").addClass("col-8 truck jumbotron j jcu"+l).attr("_id",truck.objectID).attr("catagory",catagory.name).appendTo(".cat"+l);
//     $("<div>").addClass("imageContainer truck im"+l).attr("_id",truck.objectID).appendTo(".jcu"+l);
//     $("<img>").attr("src",truck.display).addClass("truck truckI").attr("_id",truck.objectID).appendTo(".im"+l);
//     $("<div>").addClass("detailC truck dC"+l).attr("_id",truck.objectID).appendTo(".jcu"+l);
//     $("<div>").addClass("left truck l"+l).attr("_id",truck.objectID).appendTo(".dC"+l);
//     $("<h4>").addClass("name truck").attr("_id",truck.objectID).appendTo(".l"+l).text(truck.name);
//     $("<div>").addClass("middle truck m"+l).attr("_id",truck.objectID).appendTo(".dC"+l);
//     $("<h6>").addClass("address").text(address).appendTo(".m"+l);
//     for(var i =0; i<2;i++){
//       $("<div>").addClass("box "+truck.type[i]).text(truck.type[i]).appendTo(".m"+l);
//     }
//     $("<h6>").addClass("d").appendTo(".m"+l).text("$$$");
//     $("<div>").addClass("col-2 jumbotron er x er"+l).attr("catagory",catagory.name).appendTo(".cat"+l);
//   }
// function catagoryLoop(){
//     response.map((truck)=>{
//       Catagories.map((catagory)=>{
//         for(var i = 0; i<truck.type.length; i++){
//           return catagory.trucks.push(truck);
//         }
//       });
//     });
//   }
//
//   function counterReset(catagory){
//     if(catagory.counter < 0 || catagory.counter > catagory.trucks.length){
//       return true;
//     }else{
//       return false;
//     }
//   }
//
// function counterCheck(x,id,cat){
//   Catagories.map((catagory)=>{
//       if(catagory.name == cat){
//         catagory.counter = eval(catagory.counter + x);
//         var reset = counterReset(catagory);
//         if(reset){
//           catagory.counter = 0;
//         }
//       $(".cat"+id).empty();
//       return  renderBox2(id,catagory.trucks[catagory.counter],catagory);
//     }
//   });
// }
// function changer(event){
//   var catagoryCounter = event.target.attributes.catagory.value;
//   var trigger = event.target.classList[2];
//   var id = event.target.classList[4];
//   var counter = 0;
//   id = id.match(/\d+/);
//   id = id[0];
//   if(trigger == "re"){
//     counter --;
//   }
//   if(trigger == "er"){
//     counter ++;
//   }
//   counterCheck(counter,id,catagoryCounter);
// }
//
// //------------------------------------------------------
//   catagoryLoop();
//   catagoryConstruct(Catagories);
//   $(".x").on("click",(event)=>{
//       changer(event);
//     });
//     $(".truck").on("click",(event)=>{
//       var _id = event.target.attributes._id.value;
//         response.map((truck)=>{
//           if(truck.objectID == _id){
//             $.ajax({
//               url:"http://localhost:8000/api/currentFoodtruckSample",
//               data:{code:truck.objectID},
//               method:"POST"
//             });
//             window.location.assign("/menu")
//           }
//         })
//     });
// });
// }
// if(innerWidth < 500){
//  sliderMenu();
// }
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
