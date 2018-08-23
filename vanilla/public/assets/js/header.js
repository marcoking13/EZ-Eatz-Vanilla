


function renderNavBar(){
  $("<div>").addClass("top").appendTo(".container-fluid");
  $("<img>").attr("src","assets/images/logo.png").appendTo(".top");
  $("<h3>").addClass("title").text("EZ-Eatz").appendTo(".top");
  $("<span>").addClass("spanner").appendTo(".top");
}
function renderSideBar(){
  $("<div>").addClass("sidenav").attr("id","mySidenav").appendTo(".container-fluid");
  $("<div>").addClass("profileInfo").appendTo(".sidenav");
    $("<div>").addClass("space").appendTo(".sidenav");
}
