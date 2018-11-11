function renderMenu(flag){
  // Make API call to the database holding the current foodtruck selected
  // Use the get method to recieve the data in the form of a array
$.ajax({
  // api source
  url:"http://localhost:8000/api/currentFoodtruckSample",
  // type of call
  method:"GET"
}).done((response)=>{
  // (response) holds all the foodtruck data
  // Turns the array data type of the response into a object
  var truck = response[0];
// Prints the Name of the truck, a Route and Checkout button, and the types of food served
  renderBanner(truck,flag);
  // Render list of the Items catagories to be selected from




// ----------Looping Through Menu and Items ------------------
  truck.menu.map((truck)=>{
// 1.Loops through each catagory in the menu (burger,drinks etc)
    renderCatagories(truck,flag);
    if(!flag){
    renderListCatagories(truck,flag);

  }else{
      $(".list").remove();
    }
// 2. Prints the Name of the Catagory to the page with an empty list under it
      truck.food.map((item)=>{
// 3. Loops through each item in the catagory of menu
        renderItem(item,truck.catagory,flag);
// 4. Prints each item in the menu and renders in the empty list rendered with its catagory
      });
  });

});
}

//--------------------------------- Main Function ------------------------------
var innerWidth = window.innerWidth;
if(innerWidth < 790){
  renderMenu(true);
}
else if(innerWidth > 800){
  console.log("Desktop");
  renderMenu(false)
}
//----------------------------------------Variable Functions--------------------------------
function renderBanner(truck,flag){
  // String which will hold the types of food served in a string
  var types = "";

  truck.type.map((type)=>{
    // Loop Through Each Truck Food Type
    types+=" "+type+" |";
    // Add the new type to the string variable [types] with a | to divide each type
  });
// HTML of banner in backticks

  var desktopOutput = `
      <div class="row bannerContainerD "style="background:url(${truck.background});height:400px;width:95%;margin-left:2.5%;background-size:cover">
        <div class="col-4 jumbotron bw"style="height:250px;border:2px solid #f2f2f2;margin-right:0;margin-top:2%;margin-left:5%;">
          <h3 class="font-n t-center">${truck.name}</h3>
          <p class="t-center gc">$ ${types} </p>
          <div style="width:100%;" >
          <a href="/routes">  <button class="btn menubtn chb"style="width:90%;margin-top:5%;">Directions
          </button>
          </a>

          </div>
        </div>



      </div>
  `
  var output = `
   <div class="row bannerContainer"style="height:380px">
      <div class="col-12">
        <img class="full h250px"style="height:280px"src='${truck.background}'/>
        <div class="jumbotron rela ml bw almostFull shadowf2"style="bottom:35%;border:1px solid grey">
          <h2 class="t-center font-n">${truck.name}</h2>
          <p class="t-center gc">$ ${types} </p>
          <a href="/routes">  <button class="btn menubtn chb">Routes/Directions
          </button>
          </a>
          <a href="/checkout" > <button class="btn menubtn chr">Checkout
          </button>
          </a>
          <br />
        </div>
      </div>
    </div>`;
    // HTML of the Banner Element that will be rendered it has the variables of the FoodTruck surrounded by brackets and a red dollar sign
      if(flag){
    $(".banner").append(output);
  }else{
      $(".banner").append(desktopOutput);
  }
    // Banner div element will have HTML above be rendered inside it
}
function renderCatagories(catagory,flag){
  // HTML of the Catagory being rendered in JQuery

      if(flag){
        $("<div>").addClass("col-12 "+catagory.id).appendTo(".menux").attr("_id",catagory.id);
        $("<h4>").addClass("t-center mt5").appendTo("."+catagory.id).text(catagory.catagory).attr("_id",catagory.id);
        $("<ul>").addClass("list-group mt10 d"+catagory.catagory).appendTo("."+catagory.id).attr("_id",catagory.id);
      }else if(!flag){
        $("<div>").addClass(catagory.id).appendTo(".menux").attr("_id",catagory.id).css({padding:0,marginLeft:"5%"});
        $("<h4>").css({marginLeft:"10%",marginTop:"2.5%",marginBottom:"2.5%"}).text(catagory.catagory).appendTo("."+catagory.id);
        $("<div>").addClass("row d"+catagory.catagory).appendTo("."+catagory.id);

      }

}
const ssp = `  <h4 style="text-align:left;margin-left:10%;margin-top:2.5%;margin-bottom:2.5%">Pizzas</h4>
  <div class="row">


    <div class="col-3"style="border:1px groove #f2f2f2;margin-left:6%;">
      <div style="width:50%;float:left">
        <p style="margin-bottom:45%">Cheese Pizza</p>
        <p style="float:left;margin-right:5%;border-right:1px solid grey;padding-right:10px">$4.99 </p>
          <p style="float:left;margin-right:5%"> 900 calories</p>
      </div>
      <div style="width:50%;float:right">
        <img style="width:100%;float:left;margin-left:5%;margin-top:5%" src="./assets/images/cheesepizza.png"/>
      </div>

    </div>`

function renderListCatagories(catagory){
   var list = `<li style="color:black;float:left;text-align:center;padding-right:15px;list-style-type:none;margin-left:2.5%;color:black;font-size:15px;padding:0;"><p class="clist1 t-center">${catagory.catagory}</p></li>`
  $(".listC").append(list);
}
function renderItem(item,catagory,flag){
    // HTML of the Items in the menu being rendered in the UL for each catagory
    if(flag){
  $("<li>").addClass("list-group-item chf4 "+item.id).appendTo(".d"+catagory);
  $("<div>").addClass("fl w40 a12"+item.id).appendTo("."+item.id);
  $("<p>").text(item.item).appendTo(".a12"+item.id);
  $("<p>").addClass("gc").text("$"+item.price).appendTo(".a12"+item.id);
  $("<div>").addClass("fr w30 b12"+item.id).appendTo("."+item.id);
  $("<img>").addClass("fr w100px").attr("src",item.image).appendTo(".b12"+item.id);
}else if(!flag){
  $("<div>").addClass("col-3 menuxBox "+item.id).appendTo(".d"+catagory).css({border:"2px solid #f2f2f2",marginLeft:"5%",marginTop:"2.5%"});
  $("<div>").addClass("fl half a12"+item.id).css({width:"50%"}).appendTo("."+item.id);
  $("<h6>").text(item.item).css({marginBottom:"15%",marginTop:"10%"}).appendTo(".a12"+item.id);
  $("<p>").text("$ "+item.price + " | "+item.calories+" Calories").appendTo(".a12"+item.id).css({position:"relative",top:"50px"});
  $("<div>").addClass("fr half b12"+item.id).css({width:"50%",float:"right"}).appendTo("."+item.id);
  $("<img>").attr("src",item.image).css({width:"110px",float:"right",position:"relative",bottom:"50px"}).appendTo(".b12"+item.id);

}
}
