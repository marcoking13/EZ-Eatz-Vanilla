function renderMenu(){
$.ajax({
  url:"http://localhost:8000/api/currentFoodtruckSample",
  method:"GET"
}).done((response)=>{
  var truck = response[0];
  renderBanner(truck);
  $(".top").css({opacity:1});
  $(".loader").remove();
  for(var i =0; i<truck.menu.length; i++){

    renderCatagoriesChoices(truck.menu[i])

  }
  var k , i =0;
  truck.menu.map((item)=>{
    item.catagory= capitalizeFirstLetter(item.catagory);
      item.food.map((food)=>{
        MenuRoll(food,i);
        menuModal(truck,food,i);
        i++;
      });
      k++;
  });

  $("<a>").addClass("link1 link").attr("href","/checkout").appendTo(".n");
  $("<button>").addClass("checkout btn-danger btn").appendTo(".link1");
  $("<h5>").addClass("wc center").appendTo(".checkout").text("Checkout");

  $(".list-group-item").on("click",(event)=>{
      var chosen = event.target.attributes._id.value
      $("#"+event.target.attributes._id.value).modal("show");
      $(".modal").removeClass("gho");
    });

    $(".add").on("click",(event)=>{
        var chosen = event.target.attributes._id.value;
        response[0].menu.map((foodtruck)=>{
        foodtruck.food.map((truck)=>{
        if(chosen == truck.id){
            $(".modal").modal("hide");
              $.ajax({
                    url:"http://localhost:8000/api/currentCheckout",
                    method:"POST",
                    data:truck
                });
          }
        });
      });
    });

  $(".catas").on("click",(event)=>{
    var listID = event.target.attributes._id.value;
    $(event.target).removeClass("catas");
    var i =0;
      truck.menu.map((item)=>{
        if(item.id == listID){
          item.food.map((food)=>{
            $("."+food.id).remove();
            renderChoices(food,item,i);
          });
        }
      });
        i++;
   });

   ///END///
});

//-----------------------------------------------------------------------------
function renderCatagoriesChoices(catagory){
  $("<li>").addClass("list-group-item catas i "+catagory.id).appendTo(".menux").attr("_id",catagory.id);
  $("<h5>").addClass("hu").appendTo("."+catagory.id).text(catagory.catagory).attr("_id",catagory.id);;
  $("<ul>").addClass("list-group d"+catagory.catagory).appendTo("."+catagory.id).attr("_id",catagory.id);
}

function renderChoices(item,catagory,i){

      $("<li>").addClass("list-group-item list-order gh ccc "+item.id).appendTo(".d"+catagory.catagory).attr("_id",item.id).attr("food",item.id);
      $("<div>").addClass("box gh b"+item.id).appendTo("."+item.id)
      $("<p>").text(item.item).addClass("l").appendTo(".b"+item.id);
      $("<p>").text("$"+item.price).addClass("r").appendTo(".b"+item.id);
  }

  function MenuRoll(food,i){
    $("<div>").addClass("col-3 foodItem adjT  foodItem"+i).appendTo(".menu"+i).attr("data-toggle","modal").attr("data-target","#modal"+i);
    $("<p>").addClass("bold left").text(food.item).appendTo(".foodItem"+i)
    $("<p>").addClass("bold right").text("$"+food.price).appendTo(".foodItem"+i);
    $("<p>").addClass("description adjT").text(food.description).appendTo(".foodItem"+i);
  }

function menuModal (menu,food,i){
  var k =0;
  var j=0;
  var order = [];
      $("<div>").addClass("modal fade").attr("id",food.id).addClass("item"+i).appendTo(".n");
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
        $("<li>").addClass("list-group-item modi"+j).text("No "+item.name).attr("order",item.name).appendTo(".mods"+i);

      }

      });
        $("<h5>").addClass("c").text("Sides").appendTo(".mb"+i);
        $("<ul>").addClass("list-group add adds"+i).appendTo(".mb"+i);

      menu.sides.map((add)=>{
        $("<li>").addClass("list-group-item additem"+k).text(add.name).appendTo(".adds"+i);

      });
      $("<div>").addClass("modal-footer mf"+i).appendTo(".mc"+i);
      $("<button>").addClass("btn btn-secondary").text("Close").appendTo(".mf"+i);
      $("<button>").text("Add to Cart ").addClass("btn add btn-danger").attr("_id",food.id).appendTo(".mf"+i);




}
function renderBanner(truck){
  var banner = `
          <div class="imageContainer col-12">
              <img class="foodtruckI" src="${truck.background}"/>
          </div>
          <div class="blackbanner col-12">
            <img class="logot"src="${truck.logo}"/>
            <p class="namef">${truck.name}</p>
            <a href="/routes" class="link">Directions/Routes</a>
          </div>`;
var element = document.querySelector(".bannerContainer");
element.innerHTML = banner;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}


if(window.innerWidth < 490){
  $(".top").css({opacity:0});
  $("<img>").addClass("loader ll25").appendTo(".n").attr("src","./assets/images/loader.gif");
setTimeout(()=>{renderMenu()},1000);
}else{
  $("body").text("Make Screen Smaller")
}
