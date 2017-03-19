const Store = require("./js/store.js");
const store = new Store({
  configName: 'user-preferences'
});

$("#firstName").on("change paste keyup", function () {
  $("#save-status").html("Saving...")
  var fname = $(this).val()

  store.set('userInfo', {"fname":fname, "lname":store.get('userInfo').lname})

  $("#save-status").html("Saved!")
  checkBothSet()
})

$("#lastName").on("change paste keyup", function () {
  $("#save-status").html("Saving...")
  var lname = $(this).val()

  store.set('userInfo', {"fname":store.get('userInfo').fname, "lname":lname})

  $("#save-status").html("Saved!")
  checkBothSet()
})

$("#finishSetup").on("click", function (e) {
  e.preventDefault()

  window.location.replace("index.html")
})

function checkBothSet () {
  if($("#firstName").val().length && $("#lastName").val().length){
    $("#finishSetup").removeAttr('disabled')
  }

}
