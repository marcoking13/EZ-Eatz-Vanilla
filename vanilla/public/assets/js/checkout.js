// $.ajax({
//   url:"http://localhost:8000/api/foodtruckSample",
//   method:"GET",
//
// }).done((response)=>{
//   console.log(response);
//   renderBanner();
//   renderInstructions();
//   renderTipBoxes();
// })

$.ajax({
  url:"http://localhost:8000/api/currentCheckout",
  method:"GET"
}).done((response)=>{


  renderHTML(response);
  console.log(response);
})
function renderHTML(response){
  renderBanner(response);
  renderInstructions(response);
  renderTipBoxes(response);
  renderOrder(response);
  renderPay(response);

}

function PayPalRender(){
  paypal.Button.render({
  // Configure environment
  env: 'sandbox',
  client: {
    sandbox: 'demo_sandbox_client_id',
    production: 'demo_production_client_id'
  },
  // Customize button (optional)
  locale: 'en_US',
  style: {
    size: 'small',
    color: 'gold',
    shape: 'pill',
  },
  // Set up a payment
  payment: function (data, actions) {
    return actions.payment.create({
      transactions: [{
        amount: {
          total: '0.01',
          currency: 'USD'
        }
      }]
    });
  },
  // Execute the payment
  onAuthorize: function (data, actions) {
    return actions.payment.execute()
      .then(function () {
        // Show a confirmation message to the buyer
        window.alert('Thank you for your purchase!');
      });
  }
}, '#paypal-button');
}


function renderBanner(response){

  $("<div>").addClass("banner").appendTo(".container-fluid");
  $("<h5>").addClass("cancel").appendTo(".banner").text("Cancel Order");
  $("<h4>").addClass("review").text("Checkout").appendTo(".banner");

  $(".cancel").on("click",(event)=>{
    $.ajax({
      url:"http://localhost:8000/data/cancel",
      method:"POST"
    });
    window.location.assign("/finder");
  })

}
function renderInstructions(response){

$("<div>").addClass("orin").appendTo(".container-fluid");
$("<h5>").addClass("orinh5").text("Order Instructions").appendTo(".orin");
$("<div>").addClass("input-group").appendTo(".orin");
$("<input>").addClass("form-control centerText").attr("placeholder"," Add instructions for your order").appendTo(".input-group");
$("<div>").addClass("input-group-append").appendTo(".input-group");
$("<button>").addClass("btn btn-outline-secondary").text("Search").appendTo(".input-group-append");

}

function renderTipBoxes(response){
  var percentages = [10,15,20,30];
  var i =0;
  $("<div>").addClass("tipbar").appendTo(".container-fluid");
    $("<h5>").addClass("cnv").text("Add a tip").appendTo(".tipbar");
  $("<div>").addClass("tipContainer").appendTo(".tipbar");

  percentages.map((percent)=>{
    var randomNum = Math.floor(Math.random() * 9);
    $("<div>").addClass("tipBox tipBox"+i).appendTo(".tipContainer");
    $("<p>").addClass("tip").text(percent+"%").appendTo(".tipBox"+i);
      $("<p>").addClass("tip").text("$"+(i*3+3)).appendTo(".tipBox"+i);
    i++;
  })
}

function renderOrder(response){
  var order=[];
  response.map((orders)=>{
      order.push(orders);
      console.log(order);
  })

  var total = 0;
  // $("<div>").addClass("orderbarf").appendTo(".container-fluid");
  // $("<h5>").addClass("ordernow").text("Your Order").appendTo(".orderbarf");
  $("<div>").addClass("revieworder").appendTo(".container-fluid");
  $("<ul>").addClass("orderlist").appendTo(".revieworder");
  var i = 0;
  order.map((food)=>{
    console.log(food);
    food.price = parseFloat(food.price);
    total += food.price;
    $("<li>").addClass("food food"+i).appendTo(".revieworder");
    $("<div>").addClass("icon-edi icon-edi"+i).appendTo(".food"+i);
    $("<img>").addClass("editors xx").attr("src","assets/images/delete.png").appendTo(".icon-edi"+i);
    $("<img>").addClass("editors").attr("src","assets/images/edit.png").appendTo(".icon-edi"+i);;
      $("<p>").addClass("dollar").text("$"+food.price).appendTo(".food"+i);
    $("<p>").addClass("orderl").appendTo(".food"+i).text(food.item);
    // food.mods.map((mod)=>{
    //   $("<p>").addClass("orderm").appendTo(".food"+i).text("-No "+mod);
    // });
i++;
});

total =Math.round(total * 100) / 100
  $("<div>").addClass("totalm").appendTo(".container-fluid");

  $("<h4>").addClass("totalt").text("Total").appendTo(".totalm");
  $("<h4>").addClass("totals").text("$"+total).appendTo(".totalm");
}



function renderPay(response){
  $("<div>").addClass("payContainer").appendTo(".container-fluid");
  $("<h4>").addClass("pay").text("Pay Now").appendTo(".payContainer");
  $("<div>").addClass("payC").appendTo(".payContainer");
  $("<button>").addClass("btn d paying").attr("id","paypal-button").appendTo(".payC");
  $("<img>").addClass("payimage").appendTo("#paypal-button").attr("src","assets/images/paypal.png");
  $("<button>").addClass("btn paying vis").attr("id","visa").appendTo(".payC");
  $("<img>").addClass("payimage vsa").appendTo("#visa").attr("src","assets/images/visa.png");
}
