

function renderModal(signup){
  $(".container").empty();
  $("<div>").addClass("modal modl col-6").attr("id","exampleModal").appendTo(".container");
  $("<div>").addClass("modal-dialog12").appendTo(".modl");
  $("<div>").addClass("modal-content").appendTo(".modal-dialog12");
  $("<div>").addClass("modal-header").appendTo(".modal-content");
  $("<h5>").text("Title").addClass("modal-title").appendTo(".modal-header");
  $("<div>").addClass("modal-body").appendTo(".modal-content");
      if(signup){
        $("<form>").addClass("form-g").attr("action","/api/accounts").attr("method","POST").appendTo(".modal-body");
        $("<div>").addClass("row row-g").appendTo(".form-g");
        inputMake("username",2,12);
        inputMake("password",3,12);

      }else{
        $("<form>").addClass("form-g").attr("action","/api/accounts").attr("method","POST").appendTo(".modal-body");
        $("<div>").addClass("row row-g").appendTo(".form-g");
        inputMake("name",1,6);
        inputMake("username",2,6);
        inputMake("password",4,12);
      }

              $("<div>").addClass("modal-footer").appendTo(".modal-content");
              $("<button>").addClass("btn btn-secondary").attr("data-dismiss","modal").text("Close").appendTo(".modal-footer");
              $("<button>").addClass("btn btn-primary").text("Submit").appendTo(".modal-footer");



}

function inputMake(data,i,col){
  $("<div>").addClass("col-"+col+" col-g"+i).appendTo(".row-g");
  $("<h5>").addClass("ce").text(data).appendTo(".col-g"+i);
  $("<input>").attr("type",data).attr("name",data).addClass("form-control").attr("placeholder"," Enter "+data).appendTo(".col-g"+i);
}


$(".btn").on("click",(event)=>{
  var data = event.target.classList[1];
  if(data == "signup"){
    renderModal(false);
  }else{
     renderModal(true)
  }
  $("#exampleModal").modal("show");
})
