    var i =0;
var k =0;
$.ajax({
  url:"http://localhost:8000/api/currentFoodtruckSample",
  method:"GET"
}).done((response)=>{
console.log(response[0]);
var truck = response[0];
var flag = false;
  renderTruckDetail(truck);
   renderBanner(truck);
  for(var i =0; i<truck.menu.length; i++){
    renderCatagoriesChoices(truck.menu[i])
  }

  truck.menu.map((item)=>{
    console.log(item);
    item.catagory=  item.catagory.charAt(0).toUpperCase() + item.catagory.slice(1);
      item.food.map((food)=>{

        MenuRoll(food,i);
        menuModal(truck,food,i);
        i++;
      });
      k++;
  });
  $(".list-group-item").on("click",(event)=>{

               console.log(event.target.attributes._id.value);
              $("#"+event.target.attributes._id.value).modal("show");
            });
  $(".catas").on("click",(event)=>{

    var listID = event.target.attributes._id.value;

    $(event.target).removeClass("catas");
    var i =0;
      truck.menu.map((item)=>{
        if(item.id == listID){
          console.log("Success",item.id);
          item.food.map((food)=>{
            $("."+food.id).remove();
            renderChoices(food,item,i);

             });
}


});
            i++;
          });

      });





function renderChoices(item,catagory,i){

      console.log(item)
      $("<li>").addClass("list-group-item list-order gh ccc "+item.id).appendTo(".d"+catagory.catagory).attr("_id",item.id).attr("food",item);
      $("<div>").addClass("box gh b"+item.id).appendTo("."+item.id)
      $("<p>").text(item.item).addClass("l").appendTo(".b"+item.id);
      $("<p>").text("$"+item.price).addClass("r").appendTo(".b"+item.id);
        $(".list-order").on("click",(event)=>{
            var order = event.target.attributes.food;

        })


      }



function renderCatagoriesChoices(catagory){
console.log(catagory)
  $("<li>").addClass("list-group-item catas i "+catagory.id).appendTo(".menux").attr("_id",catagory.id);

  $("<h5>").addClass("hu").appendTo("."+catagory.id).text(catagory.catagory).attr("_id",catagory.id);;
  $("<ul>").addClass("list-group d"+catagory.catagory).appendTo("."+catagory.id);
}


function renderMainCatagory(catagory,k){
  $("<div>").addClass("foodContainer  foodContainer"+k).appendTo(".menuContain");
  $("<h3>").addClass("catagoryName").text(catagory.catagory).appendTo(".foodContainer"+k);
  $("<div>").addClass("row adjT menu"+k).appendTo(".foodContainer"+k);
}

function renderCatagories(catagories,i){


  $("<div>").addClass("catagoryContainer cc"+i).appendTo(".CC");
  $("<h6>").addClass("center adjL gb catagory").text(catagories).appendTo(".cc"+i);

}

function renderTruckDetail(truck){



    $("<div>").addClass("row ladjT  b4 bbb").appendTo(".companyDetail");
      $("<div>").addClass("col-3 imc").appendTo(".b4")
        $("<img>").addClass("adjL truckLogo").attr("src",truck.image).appendTo(".imc");

        $("<div>").addClass("col-3 nmc").appendTo(".b4")

          $("<h3>").addClass("truckName left").appendTo(".nmc").text(truck.name);

        $("<div>").addClass("dmc col-6").appendTo(".b4");
            $("<ul>").addClass("details").appendTo(".dmc");
                $("<li>").addClass("detailItem adjR right").text("Average Calories:" +240).appendTo(".details");
                    $("<li>").addClass("detailItem adjR right").text("Average Time: " +24+" minutes").appendTo(".details");
                $("<li>").addClass("detailItem adjR right green").text("$3-$10").appendTo(".details");

}
function menuModal (menu,food,i){
  var k =0;
  var j=0;
  var order = [];
  console.log(i);

      $("<div>").addClass("modal fade").attr("id",food.id).addClass("item"+i).appendTo(".container-fluid");
      $("<div>").addClass("modal-dialog md"+i).attr('role',"document").appendTo("#"+food.id);
      $("<div>").addClass("modal-content mc"+i).appendTo(".md"+i);
      $("<div>").addClass("modal-header mh"+i).appendTo("mc"+i);
      $("<h5>").addClass("modal-title").appendTo(".mh"+i).text("Add Changes");
      $("<button>").addClass("close cl"+i).attr("data-dismiss","modal").appendTo(".mh"+i);
      $("span").text('&times').appendTo("cl"+i)
      $("<div>").addClass("modal-body mb"+i).appendTo(".mc"+i);
      $("<ul>").addClass("mods list-group mods"+i).appendTo(".mb"+i);
      $("<h5>").addClass("c").text("Modify").appendTo(".mods"+i);
      food.ingredients.map((item)=>{
        if(item.display){
        $("<li>").addClass("list-group-item modi"+j).text("No "+item.name).attr("order",item.name)appendTo(".mods"+i);

      }

      });
        $("<h5>").addClass("c").text("Sides").appendTo(".mb"+i);
        $("<ul>").addClass("list-group add adds"+i).appendTo(".mb"+i);

      menu.sides.map((add)=>{
        $("<li>").addClass("list-group-item additem"+k).text(add.name).appendTo(".adds"+i);

      });
      $("<div>").addClass("modal-footer mf"+i).appendTo(".mc"+i);
      $("<button>").addClass("btn btn-secondary").text("Close").appendTo(".mf"+i);
      $("<button>").text("Add to Cart ").addClass("btn add btn-danger").appendTo(".mf"+i);

      $(".")

}
function renderBanner(truck){
  console.log(truck.logo,truck.background);
  $("<div>").addClass("menuBanner").appendTo(".banners");
    $("<img>").addClass("banner").attr("src",truck.background).appendTo(".menuBanner");
    $("<div>").addClass("blackbanner").appendTo(".banners");
      $("<img>").addClass("rlogo").attr("src",truck.logo).appendTo(".blackbanner");
      $("<h4>").addClass("namer").text(truck.name).appendTo(".blackbanner");
}
function MenuRoll(food,i){


  $("<div>").addClass("col-3 foodItem adjT  foodItem"+i).appendTo(".menu"+k).attr("data-toggle","modal").attr("data-target","#modal"+i);
  $("<p>").addClass("bold left").text(food.item).appendTo(".foodItem"+i)
  $("<p>").addClass("bold right").text("$"+food.price).appendTo(".foodItem"+i);
  $("<p>").addClass("description adjT").text(food.description).appendTo(".foodItem"+i);

}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
