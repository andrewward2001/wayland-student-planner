const Store = require("./js/store.js");
const store = new Store({
  configName: 'user-prefs'
});

const remote = require('electron').remote

var actTab = window.location.hash;
var actTab = actTab.substring(actTab.indexOf("#") + 1);

var { fname, lname } = store.get('userInfo')
console.log(fname)
if(fname == "" && lname == "") {

}

$.ajax({
  type: "GET",
  url: "http://waylandstudentpress.com/feed/",
  dataType: "xml",
  success: function(xml) {
    var lim = 3

    $(xml).find("item").each(function (index) {
      if(index < lim) {
        var title = $(this).find("title").text()
        var link = $(this).find("link").text()
        var img = $(this).find("description").text()
        img = $(img).find("img").attr('src')
        var $cont = $("[data-article-num='"+index+"']")
        $cont.find("img").attr('src', img);
        $cont.find("h2").html(title);
        $cont.find("a").attr('href', link);
      }
    })
  }
})

console.log(store.get('userInfo'))

function getUserInfo() {
  fname = store.get('userInfo').fname
  lname = store.get('userInfo').lname
}

$(".firstName").html(fname)

$("span[data-fill-val]").each(function(index, el) {
  var data = $(this).data('fill-val')
  var data = data.split(",")
  var info = store.get(data[0])
  $(this).html(info[data[1]])
});

if(actTab.length){
  $(".tab-pane.active").removeClass('active')
  $(".nav-tabs li.active").removeClass('active')
  $(".tab-pane#"+actTab).addClass('active')
  $(".nav-tabs li a[href='#"+actTab+"']").parents("li").addClass('active')
}

$("[data-view='custo']").on("click", function (e) {
  e.preventDefault()
  var link = $(this).attr("href")
  window.location.replace("web-view.html#"+link)
})

$("#close").on("click", () => {
  remote.getCurrentWindow().close()
})
