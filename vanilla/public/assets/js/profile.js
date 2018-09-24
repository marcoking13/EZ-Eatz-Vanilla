$.ajax({
  url:"http://localhost:8000/api/currentCustomer",
  method:"GET"
}).done((response)=>{
  response = response[0];
  console.log(response);
  renderNL(response);
  renderEL(response);
  renderPH(response);
  renderPD(response);
})


function renderNL(pro){
  $("<div>").addClass("row NC").appendTo(".fo");
  $("<div>").addClass("col-6 N").appendTo(".NC");
  $("<div>").addClass("inputBox ibn").appendTo(".N");
  $("<h4>").addClass("inputT").text("Name").appendTo(".ibn");
  $("<input>").addClass("form-control ha fl ").val(pro.name).attr("id","last").attr("placeholder","Last Name").appendTo(".ibn");
  $("<div>").addClass("col-6 L").appendTo(".NC");
  $("<div>").addClass("inputBox lbn").appendTo(".L");
  $("<h4>").addClass("inputT").text("Location").appendTo(".lbn")
  $("<input>").addClass("form-control fl").attr("name","location").val("N/A").attr("placeholder","Location").appendTo(".lbn");


}
function renderEL(pro){
  $("<div>").addClass("EL row").appendTo(".fo");
  $("<div>").addClass("col-6 E").appendTo(".EL");
  $("<div>").addClass("inputBox em").appendTo(".E");
  $("<h4>").addClass("inputT").text("Email").appendTo(".em");
  $("<input>").addClass("form-control fl").val(pro.username).attr("id","email").attr("placeholder","Email").appendTo(".em");

  $("<div>").addClass("col-6 LA").appendTo(".EL");
  $("<div>").addClass("inputBox lm").appendTo(".LA");
  $("<h4>").addClass("inputT").text("Language").appendTo(".lm");
  $("<input>").addClass("form-control fl").val("ENG").attr("id","language").attr("placeholder","Language").appendTo(".lm");

}
function renderPH(pro){
  $("<div>").addClass("row PH").appendTo(".fo");
  $("<div>").addClass("col-6 P").appendTo(".PH");
  $("<div>").addClass("inputBox ph").appendTo(".P")
  $("<h4>").addClass("inputT").text("Phone").appendTo(".ph");
  $("<input>").addClass("form-control fl location").val("(480)-822-0511").attr("id","phone").attr("placeholder","Phone").appendTo(".ph");
  }
function renderPD(pro){
  $("<div>").addClass("row PD paT bpaB bte6").appendTo(".fo");
  $("<div>").addClass("col-2 imd").appendTo(".PD");
  $("<img>").addClass("profilePic").attr("id","picture").attr("src",pro.photos).appendTo(".imd");
  $("<button>").addClass("btn btn-secondary upload").text("+ Upload").appendTo(".imd")
  $("<div>").addClass("col-8 PC").appendTo(".PD");
  $("<button>").addClass("btn fr change").text("Change").appendTo(".PC");
  $("<input>").addClass("fr qu form-control pass").attr("id","password").attr("type","password").val(pro.id).attr("placeholder","Password").appendTo(".PC");
  $("<button>").addClass("btn btn-primary ha madjL final").attr("type","submit").text("Save Changes").appendTo(".fo");

  $(".madjL").on("click",(event)=>{
      event.preventDefault();
    var element = event.target;

    var last = $("#last").val();
    var email = $("#email").val();
    var language = $("#language").val();
    var phone = $("#phone").val();
    var picture = $("#picture").attr("src");
    var password = $("#password").val();
    var profile = {
      name:last,
      username:email,
      language:language,
      phone:phone,
      photos:[]
    }
    $.ajax({
      url:"http://localhost:8000/api/profileChange",
      method:"POST",
      data:profile
    }).done((response)=>{
      console.log(profile);
      console.log(response);
    })
  })
}
