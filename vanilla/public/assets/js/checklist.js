$.ajax({
  url:"http://localhost:8000/api/currentItem",
  method:"GET"
}).done((response)=>{

   var item = response[0];
   var sides = item.sides;
   var name = item.item;
   var ingredients = item.ingredients;
   var image = item.image;
   var l = 0;

   var x =0;
//------------------------------------------------------------------------------
  renderBanner(item);

  $("<h5>").addClass("t-center").appendTo(".c-f").text("Modify");
  $("<h5>").addClass("t-center").appendTo(".c-f-f").text("Add");

  ingredients.map((item)=>{
    renderCheckBox(item,l);
    l++;
  });
$.ajax({
  url:"http://localhost:8000/api/currentfoodTruckSample",
  method:"GET"
}).done((response)=>{
var sides = response[0].sides;
  sides.map((item)=>{
    renderSides(item,x);
    x++;
  });
});

  //----------------------------------------------------------------------------

  $(".noMo").on("click",(event)=>{
    console.log(event.target);
    var classes = $(event.target).parent().prop("classList");
    if(classes[4] == "activeb"){
      $(event.target).parent().removeClass("activeb");
  }else{
    $(event.target).parent().addClass("activeb");
  }
  });
  $(".orderButton").on("click",((event)=>{
      addCart();
  }))

});

$(".cancelM").on("click",(event)=>{
  console.log("CANCEL");
  $.ajax({
    url:"http://localhost:8000/api/cancelItem",
    method:"POST"
  }).done((response)=>{
    window.location.assign("/menu");
  });
});
//-----------------------------------------------------------------------------
function renderCheckBox(item,l){

  $("<div>").addClass("col-3 checkboxContainer mt2.5 checkboxContainer"+l).attr("data",item.name).appendTo(".menbu");
  $("<div>").addClass("checkbox noMo checkbox"+l).attr("food","m"+item.name).attr("modify","No "+item.name).appendTo(".checkboxContainer"+l);
  $("<img>").addClass("check").appendTo(".checkbox"+l).attr("src","assets/images/check.png");
  $("<p>").addClass("t-center noMo noMos").text("No "+item.name).appendTo(".checkboxContainer"+l);
}

function renderBanner(item){
  var  output  = `
      <div class="bannerDetail">

        <h4 class="bannerName">${item.item}</h4>
        <br />
        <br />
       <img class="bannerImage" src='${item.image}'/>
        <div class="bannerInfo">
          <h5 class="dep">$ ${item.price}</h5>
          <h5 class="dep">${item.calories} calories</h5>
        </div>
        <button class="btn btn-danger orderButton">Add To Order </button>
      </div>`;
    var banner = document.querySelector(".bannerrrr");
    banner.innerHTML = output;
}
function addCart(catagory){
  var modify=[];
  var add = [];
  $(".checkbox").each(function(i,element){
    var className = $(element).hasClass("activeb");

    console.log(className);
    if(className){
      var modifyItem = $(element).attr("modify");
      var addItem = $(element).attr("add");
      if(addItem){
        add.push(addItem);
      }
      modify.push(modifyItem);
    }

  });
  console.log(modify);
}
function renderSides(item,l){
  $("<div>").addClass("col-3 checkboxContainerS mt2.5 checkboxContainerS"+l).attr("data",item.name).appendTo(".mencu");
  $("<div>").addClass("checkbox checkboxS"+l).attr("add",item.name).appendTo(".checkboxContainerS"+l);
  $("<img>").addClass("check").appendTo(".checkboxS"+l).attr("src","assets/images/check.png");
  $("<p>").addClass("t-center noMo noMos").text("Add "+item.name).appendTo(".checkboxContainerS"+l);
}
