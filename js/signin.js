const Store = require("./js/store.js");
const store = new Store({
  configName: 'user-preferences'
});

$("#firstName").val(store.get('userInfo').fname)
$("#lastName").val(store.get('userInfo').lname)
$("#grade").val(store.get('userInfo').grade)

$("#firstName").on("change paste keyup", function () {
  $("#save-status").html("Saving...")
  var fname = $(this).val()

  store.set('userInfo', {"fname":fname, "lname":store.get('userInfo').lname, "grade":store.get('userInfo').grade})

  $("#save-status").html("Saved!")
  checkAllSet()
})

$("#lastName").on("change paste keyup", function () {
  $("#save-status").html("Saving...")
  var lname = $(this).val()

  store.set('userInfo', {"fname":store.get('userInfo').fname, "lname":lname, "grade":store.get('userInfo').grade})

  $("#save-status").html("Saved!")
  checkAllSet()
})

$("#grade").on("change paste keyup", function () {
  $("#save-status").html("Saving...")
  var grade = $(this).val()

  store.set('userInfo', {"fname":store.get('userInfo').fname, "lname":store.get('userInfo').lname, "grade":grade})

  $("#save-status").html("Saved!")
  checkAllSet()
})

$("#finishSetup").on("click", function (e) {
  e.preventDefault()

  window.location.replace("index.html")
})

function checkAllSet () {
  if($("#firstName").val().length && $("#lastName").val().length && $("#grade").val().length){
    $("#finishSetup").removeAttr('disabled')
  }

}
