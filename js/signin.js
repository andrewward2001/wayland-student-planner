const Store = require("./js/store.js");
const store = new Store({
  configName: 'user-prefs'
});

$("#firstName").val(store.get('userInfo').fname)
$("#lastName").val(store.get('userInfo').lname)
if($("#grade").val() != "") {
  $("#grade").val(store.get('userInfo').grade)
}
if(store.get('externalLinks')) $("#externalLinks").attr('checked', '');

if(store.get('persistWindowSize')) $("#persistWindowSize").attr('checked', '')
if(store.get('persistWindowPos')) $("#persistWindowPos").attr('checked', '')
if(store.get('devTools')) $("#showDevTools").attr('checked', '')

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

$("#externalLinks").on("change paste keyup", function () {
  $("#save-status").html("Saving...")

  store.set('externalLinks', ($(this).is(":checked") ? true : false))

  $("#save-status").html("Saved!")
  checkAllSet()
})

$("#persistWindowSize").on("change paste keyup", function () {
  $("#save-status").html("Saving...")

  store.set('persistWindowSize', ($(this).is(":checked") ? true : false))

  $("#save-status").html("Saved!")
  checkAllSet()
})

$("#persistWindowPos").on("change paste keyup", function () {
  $("#save-status").html("Saving...")

  store.set('persistWindowPos', ($(this).is(":checked") ? true : false))

  $("#save-status").html("Saved!")
  checkAllSet()
})

$("#showDevTools").on("change paste keyup", function () {
  $("#save-status").html("Saving...")

  store.set('devTools', ($(this).is(":checked") ? true : false))

  $("#save-status").html("Saved!")
  checkAllSet()
})

$("#finishSetup").on("click", function (e) {
  e.preventDefault()

  window.location.replace("index.html")
})

function checkAllSet () {
  if($("#firstName").val().length && $("#grade").val().length){
    $("#toAppSettings").removeAttr('disabled')
  }
}
