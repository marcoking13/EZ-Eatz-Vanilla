$.ajax({
  url:"http://localhost:8000/api/currentCheckout",
  method:"GET"
}).done((response)=>{
  if(window.innerWidth < 500){
  renderHTML(response);
}
})
function renderHTML(response){
  renderBanner(response);
  renderInstructions(response);
  renderTipBoxes(response);
  renderOrder(response);
  renderPay(response);
}
function renderBanner(response){
  $("<div>").addClass("b26 ptb1 banner").appendTo(".container-fluid");
  $("<h5>").addClass("fl cancel cw").appendTo(".banner").text("Cancel Order");
  $("<h4>").addClass("cw t-bold t-center").text("Checkout").appendTo(".banner");
  $(".cancel").on("click",(event)=>{
    $.ajax({
      url:"http://localhost:8000/data/cancel",
      method:"POST"
    });
    window.location.assign("/finder");
  })
}
function renderInstructions(response){
  $("<div>").addClass("orin pt5 almostFull ml5").appendTo(".container-fluid");
  $("<h5>").addClass("mb1").text("Order Instructions").appendTo(".orin");
  $("<div>").addClass("input-group").appendTo(".orin");
  $("<input>").addClass("form-control t-center").attr("placeholder"," Add instructions for your order").appendTo(".input-group");
  $("<div>").addClass("input-group-append").appendTo(".input-group");
}
function renderTipBoxes(response){
  var percentages = [10,15,20,30];
  var i =0;
  $("<div>").addClass("mt2.5 pt5 tipbar pb10").appendTo(".container-fluid");
  $("<h5>").text("Add a tip").appendTo(".tipbar");
  $("<div>").addClass("tipContainer pb20 ml10 full mt2.5").appendTo(".tipbar");
  percentages.map((percent)=>{
    var randomNum = Math.floor(Math.random() * 9);
    $("<div>").addClass("almostQuarter tch ct f20 fl t-center boe6 tipBox"+i).appendTo(".tipContainer");
    $("<p>").text(percent+"%").appendTo(".tipBox"+i);
    $("<p>").text("$"+(i*3+3)).appendTo(".tipBox"+i);
    i++;
  });
}
function renderOrder(response){
  var order=[];
  response.map((orders)=>{
      order.push(orders);
  });
  var total =0;
  var i = 0;
  $("<div>").addClass("p5 revieworder").appendTo(".container-fluid");
  $("<ul>").addClass(" orderlist").appendTo(".revieworder");
  order.map((food)=>{
    food.price = parseFloat(food.price);
    total += food.price;
    $("<li>").addClass("food p20px bte6 bbe6 food"+i).appendTo(".revieworder");
    $("<div>").addClass("icon-edi fl pr1 icon-edi"+i).appendTo(".food"+i);
    $("<p>").addClass("mr5 mt10 fr").text("$"+food.price).appendTo(".food"+i);
    $("<p>").appendTo(".food"+i).text(food.item);
    i++;
});
  total = Math.round(total * 100) / 100;
  $("<div>").addClass("totalm h100 prl10px mt5 bobe6 full").appendTo(".container-fluid");
  $("<h4>").addClass("fl mt5").text("Total").appendTo(".totalm");
  $("<h4>").addClass("fr pt5").text("$"+total).appendTo(".totalm");
}
function renderPay(response){
  $("<div>").addClass("payContainer").appendTo(".container-fluid");
  $("<h4>").addClass("t-center").text("Pay Now").appendTo(".payContainer");
  $("<div>").addClass("payC").appendTo(".payContainer");
  $("<button>").addClass("btn smallcut5 ml25 mt2.5 half").attr("id","paypal-button").appendTo(".payC");
  $("<img>").addClass("w100").appendTo("#paypal-button").attr("src","assets/images/paypal.png");
  $("<button>").addClass("btn smallcut5 half ml25 mt2.5 mt5 br").attr("id","visa").appendTo(".payC");
  $("<img>").addClass("w100 vsa").appendTo("#visa").attr("src","assets/images/visa.png");
}
