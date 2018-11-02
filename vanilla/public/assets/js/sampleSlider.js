function renderFinder(){
$.ajax({
  url:"http://localhost:8000/api/foodTruckSample",
  method:"GET"
}).done((response)=>{
  $(".loader").remove();
  $(".top").css({opacity:1});
  function renderBox2(l,truck){

    var catas = "$ ";
    for(var i =0; i<truck.type.length;i++){
      catas+=` | ${truck.type[i]}`
    }

    $("<div>").addClass("row xx2 brow"+l).appendTo(".finderContainer");
    $("<div>").addClass("col-1 x re c col-1b"+l).appendTo(".brow"+l);
    $("<div>").addClass("col-10 truckC col-10b"+l).appendTo(".brow"+l).attr("_id",truck.objectID);
    $("<img>").addClass("truckI truckmm").attr("src",truck.display).attr("_id",truck.objectID).appendTo(".col-10b"+l);

    $("<h6>").addClass("nameT").text(truck.name).appendTo(".col-10b"+l);

    $("<p>").addClass("p").text(catas).appendTo(".col-10b"+l);
    $("<div>").addClass("col-1 x er c col-1b"+l).appendTo(".brow"+l);

  }

  var l=0;
  response.map((truck)=>{
    renderBox2(l,truck);
    l++;
});
    $(".truckC").on("click",(event)=>{

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
}

if(window.innerWidth < 490){
  $("<img>").addClass("loader ll25").appendTo(".container-fluid").attr("src","./assets/images/loader.gif");
  $(".top").css({opacity:0});

  setTimeout(()=>{renderFinder()},000);
}else{
  $("body").text("Make Screen Smaller")
}
