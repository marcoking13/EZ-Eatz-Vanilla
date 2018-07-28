var i =0;
var k =0;
$.ajax({
  url:"http://localhost:8000/api/foodtruckSample",
  method:"GET"
}).done((response)=>{

var truck = response[1];

  renderTruckDetail(truck);

  for(var i =0; i<truck.menu.length; i++){
    renderCatagoriesChoices(truck.menu[i]);
  }

  truck.menu.map((item)=>{
    console.log(item);
    item.catagory=  item.catagory.charAt(0).toUpperCase() + item.catagory.slice(1);

console.log(item);
      item.food.map((food)=>{
          renderChoices(food,item);

        MenuRoll(food,i);
        menuModal(truck,food,i);
        i++;

      });
      k++;
  })
});
















function renderChoices(item,catagory){

console.log(catagory.id);
console.log(item.id)
        $("<li>").addClass("list-group-item "+item.id).appendTo("."+catagory.id);
        $("<div>").addClass("box b"+item.id).appendTo("."+item.id)
        $("<p>").text(item.item).addClass("l").appendTo(".b"+item.id);
        $("<p>").text(item.price).addClass("r").appendTo(".b"+item.id);
}



function renderCatagoriesChoices(catagory){
console.log(catagory)
  $("<li>").addClass("list-group-item "+catagory.id).appendTo(".menux");

  $("<h5>").addClass("hu").appendTo("."+catagory.id).text(catagory.catagory);
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
      $("<div>").addClass("modal fade").attr("id","modal"+i).addClass("item"+i).appendTo(".container-fluid");
      $("<div>").addClass("modal-dialog md"+i).attr('role',"document").appendTo("#modal"+i);
      $("<div>").addClass("modal-content mc"+i).appendTo(".md"+i);
      $("<div>").addClass("modal-header mh"+i).appendTo("mc"+i);
      $("<h5>").addClass("modal-title").appendTo(".mh"+i).text("Add Changes");
      $("<button>").addClass("close cl"+i).attr("data-dismiss","modal").appendTo(".mh"+i);
      $("span").text('&times').appendTo("cl"+i)
      $("<div>").addClass("modal-body mb"+i).appendTo(".mc"+i);
      $("<ul>").addClass("mods list-group mods"+i).appendTo(".mb"+i);
      $("<h5>").addClass("c").text("Modify").appendTo(".mods"+i);
      food.ingredients.map((item)=>{

        $("<li>").addClass("list-group-item modi"+j).text("No "+item).appendTo(".mods"+i);

      });
        $("<h5>").addClass("c").text("Sides").appendTo(".mb"+i);
        $("<ul>").addClass("list-group add adds"+i).appendTo(".mb"+i);

      menu.sides.map((add)=>{
        $("<li>").addClass("list-group-item additem"+k).text(add.name).appendTo(".adds"+i);

      });
      $("<div>").addClass("modal-footer mf"+i).appendTo(".mc"+i);
      $("<button>").addClass("btn btn-secondary").text("Close").appendTo(".mf"+i);
      $("<button>").text("Add to Cart ").addClass("btn btn-danger").appendTo(".mf"+i);

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
