$(document).ready(function() {
 $(".right").mouseenter(function() {
  alert("Badass tree");
 });
});

$(document).ready(function() {
 $("#dölj").click(function() {
  $("p").hide();
 });
 $("#visa").click(function() {
  $("p").show();
 });
});