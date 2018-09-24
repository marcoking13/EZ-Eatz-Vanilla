$(".accountButton").on("click",(event)=>{
  var account = event.target.classList[0];
  $("#modals").modal("show");


})


function modalMaker(title,login){
      $("<div>").addClass("modal fade").attr("id","modals").appendTo(".container-fluid");
      $("<div>").addClass("modal-dialog").attr("role","document").appendTo("#modals");
      $("<div>").addClass("modal-content").appendTo(".moda-dialog");
      $("<div>").addClass("modal-header").appendTo(".modal-content")
      $("<h5>").addClass("modal-title").text(title).appendTo(".modal-header");
      $("<div>").addClass("modal-body").appendTo(".modal-dialog");
        if(login){
          $("<form>").addClass("fom").appendTo(".modal-body");
          $("<input>").addClass("ss form-control").appendTo(".fom");
          $("<input>").addClass("ss form-control").appendTo(".fom");
          $("<button>").addClass("btn btn-danger").text("Login").appendTo(".fom");
          $("<a>").text("Forgot Password?").appendTo(".fom");

        }
      $("<div>").addClass("moda-footer").appendTo(".modal-dialog");
      $("<button>").attr("type","button").addClass("btn btn-primary").attr("data-dismiss","#modals").appendTo("#modals").text("Close");
      $("<button>").attr("type","button").addClass("btn btn-primary").attr("data-dismiss","#modals").appendTo("#modals").text("Close");

}
