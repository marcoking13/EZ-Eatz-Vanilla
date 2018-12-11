$.ajax({
  url:"http://localhost:8000/api/currentCustomer",
  method:"GET"
}).done((response)=>{
  console.log(response);
  var picture;
  var address;
  if(response[0].photos.length == 0){
    console.log("Replacing Picture");
    picture = "assets/images/profile.png";
  }else{
    picture = response[0].photos[0];
  }
  const mobileOutput = `
  <div class="row"style="background:white;">
    <div class="col-4">
      <img src="assets/images/logo.png"class="logoNav"/>
      <p class="titleNav"style="float:right;position:relative;bottom:-10px;left:10px;opacity:1">EZ Eatz</p>
    </div>
    <div class="col-2">
      <!-- <img class="mapsG"style="width:40px;height:40px;float:left;margin-top:10%" src="./assets/images/googleI.png"/> -->
    </div>
    <div class="col-6">
      <img class="profilePic"style="width:50px;height:50px;border-radius:50%;float:left;margin-top:2.5%;margin-left:5%;"src="assets/images/profile.png"/>
    <a href="/">  <button class="btn btn-danger"style="float:right;margin-right:5%;margin-top:5%">Log Out</button></a>
    </div>
  </div>`
  const desktopOutput = `  <div class="row navbar">
      <div class="col-2">
        <img class="logoNav"src='assets/images/logo.png'/>
        <p class="navName">EZ Eatz </p>
      </div>
       <div class="col-6">

        <form>
            <input class="form-control addressNav"value="7404 E Crystal Lane, Paradise Valley 85823"/>
        </form>
      </div>
     <div class="col-4">
       <a href="/checkout">  <img class="cart" src="assets/images/cart.png"/></a>

        <img class="profilePic" src="${picture}"/>
          <a href="/"><button class="btn btn-danger logoutNav">Log Out</button></a>

      </div>
    </div>`;
  const windowWidth = window.innerWidth;
  function renderNavbar(data,output){
    document.querySelector(".navContainer").innerHTML =output;
  }
console.log(windowWidth);
  if(windowWidth > 480){
    renderNavbar(null,desktopOutput);
  }else{
    renderNavbar(null,mobileOutput);
  }
});
