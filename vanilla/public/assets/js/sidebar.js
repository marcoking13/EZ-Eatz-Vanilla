var sidenav = document.querySelector(".sidenav");
var spanner = document.querySelector(".spanner");
var close = document.querySelector(".closebtn");
$.ajax({
  url:"http://localhost:8000/api/currentCustomer",
  method:"GET"
}).done((response)=>{

  if(response.length == 0){
    return profileFill(sample.photo,sample.name,sample.username);
  }
  var information = response[0];
  return profileFill(information.photos,information.name,information.username);

});
var sample = {
  photo:"assets/images/sample.png",
  name:"John",
  username:"DragonSmoke1322"
}
spanner.addEventListener("click",()=>{
  SideToggle("200px");
});

close.addEventListener("click",()=>{
  SideToggle("0px");
});

const SideToggle=(width)=>{
  console.log("Function Executed");
  sidenav.style.width=width;
}
const profileFill = (photo,name,username)=>{
  $("<img>").attr("src",photo).addClass("profileImage").appendTo(".profileInfo");
  $("<h4>").addClass("names firstName").text(name).appendTo(".profileInfo");
  $("<h6>").addClass("names UserName").appendTo(".profileInfo").text(username);
}
