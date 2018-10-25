var innerWidth = window.innerWidth;
function sliderMenu(){
  $.ajax({
    url:"http://localhost:8000/api/foodTruckSample",
    method:"GET"
  }).done((response)=>{
      var Catagories = [
        {
          name:"Nearest-You",
          trucks:[],
          counter:0
        },
        {
          name:"Cheapest",
          trucks:[],
          counter:0
        },
        {
          name:"Most-Popular",
          trucks:[],
          counter:0
        },
        {
          name:"all-american",
          trucks:[],
          counter:0
        },
        {
          name:"dessert",
          trucks:[],
          counter:0
        },
        {
          name:"burgers",
          trucks:[],
          counter:0
        }
      ];

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }


  function catagoryConstruct(Catagories){
    var l = 0;
    Catagories.map((catagory)=>{
      $("<div>").addClass("catt"+l).appendTo(".finderContainer");
      var cap = capitalizeFirstLetter(catagory.name);
      $("<h3>").addClass("cName").text(cap).appendTo(".catt"+l);
      $("<div>").addClass("row cat"+l).appendTo(".catt"+l);
        renderBox(l,catagory.trucks[catagory.counter],catagory);
        l++;
    });


}

  function renderBox(l,truck,catagory){
    $("<div>").addClass("col-2 jumbotron re x re"+l).attr("catagory",catagory.name).appendTo(".cat"+l);
    var address = `${truck.address.street}, ${truck.address.city}, ${truck.address.state}, ${truck.address.zip}`;
    $("<div>").addClass("col-8 truck jumbotron j jcu"+l).attr("_id",truck.objectID).attr("catagory",catagory.name).appendTo(".cat"+l);
    $("<div>").addClass("imageContainer truck im"+l).attr("_id",truck.objectID).appendTo(".jcu"+l);
    $("<img>").attr("src",truck.display).addClass("truck truckI").attr("_id",truck.objectID).appendTo(".im"+l);
    $("<div>").addClass("detailC truck dC"+l).attr("_id",truck.objectID).appendTo(".jcu"+l);
    $("<div>").addClass("left truck l"+l).attr("_id",truck.objectID).appendTo(".dC"+l);
    $("<h4>").addClass("name truck").attr("_id",truck.objectID).appendTo(".l"+l).text(truck.name);
    $("<div>").addClass("middle truck m"+l).attr("_id",truck.objectID).appendTo(".dC"+l);
    $("<h6>").addClass("address").text(address).appendTo(".m"+l);
    for(var i =0; i<2;i++){
      $("<div>").addClass("box "+truck.type[i]).text(truck.type[i]).appendTo(".m"+l);
    }
    $("<h6>").addClass("d").appendTo(".m"+l).text("$$$");
    $("<div>").addClass("col-2 jumbotron er x er"+l).attr("catagory",catagory.name).appendTo(".cat"+l);


  }

function catagoryLoop(){
    response.map((truck)=>{
      Catagories.map((catagory)=>{
        for(var i = 0; i<truck.type.length; i++){
          return catagory.trucks.push(truck);
        }
      });
    });
  }

  function counterReset(catagory){
    if(catagory.counter < 0 || catagory.counter > catagory.trucks.length){
      return true;
    }else{
      return false;
    }
  }

function counterCheck(x,id,cat){
  Catagories.map((catagory)=>{
      if(catagory.name == cat){
        catagory.counter = eval(catagory.counter + x);
        var reset = counterReset(catagory);
        console.log(reset);
        if(reset){
           console.log(reset);
          catagory.counter = 0;
        }
      $(".cat"+id).empty();
      return  renderBox(id,catagory.trucks[catagory.counter],catagory);

    }
  });
}
function changer(event){
  var catagoryCounter = event.target.attributes.catagory.value;
  var trigger = event.target.classList[2];
  var id = event.target.classList[4];
  var counter = 0;
  id = id.match(/\d+/);
  id = id[0];
  if(trigger == "re"){
    counter --;
  }
  if(trigger == "er"){
    counter ++;
  }
  counterCheck(counter,id,catagoryCounter);
}

//------------------------------------------------------


  catagoryLoop();
  catagoryConstruct(Catagories);
  $(".x").on("click",(event)=>{
      changer(event);
    });
    $(".truck").on("click",(event)=>{
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

}
if(innerWidth < 500){
 sliderMenu();
}
