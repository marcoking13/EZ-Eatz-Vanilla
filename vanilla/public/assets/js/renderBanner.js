function renderMainBanner(truck,i){
  var banner  = `
  <div class="menuBanner">
    <img class="banner" src = ${truck.background}/>
    <div class="blackbanner">
      <a class="link2 link" href="/routes"><h5 class="option">Direction/Routes<h5>
      <img class="rlogo" src=${truck.logo}/>
      <h4 class="namer">${truck.name}></h4>
    </div>
  </div>
  `


  $(".banners").innerHTML = banner;
}

function renderBanner(truck){
    console.log(truck.logo,truck.background);
    $("<div>").addClass("menuBanner").appendTo(".banners");
    $("<img>").addClass("banner").attr("src",truck.background).appendTo(".menuBanner");
    $("<div>").addClass("blackbanner").appendTo(".banners");
    $("<a>").addClass("link2 link").attr("href","/routes").appendTo(".blackbanner");
    $("<h5>").addClass("option").appendTo(".link2").text("Directions/Routes");



    $("<img>").addClass("rlogo").attr("src",truck.logo).appendTo(".blackbanner");
    $("<h4>").addClass("namer").text(truck.name).appendTo(".blackbanner");



}
