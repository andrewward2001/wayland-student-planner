var articleURL = window.location.hash;
var articleURL = articleURL.substring(articleURL.indexOf("#") + 1);

$(".article-view").append('<iframe src="'+articleURL+'" width="100%" height="100%" frameborder="0"></iframe>')
