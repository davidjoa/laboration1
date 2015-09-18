$(document).ready(function() {
 $(".right").mouseenter(function() {
  alert("Badass tree");
 });
});



$(document).ready(function() {
 $("#meny").click(function() {

  $("#navigation").slideToggle("slow");
 });
});

$(document).ready(function() {
 $("button").click(function() {
  $("#div1").fadeToggle("slow");
  $("#div2").fadeToggle(3000);
  $("#div3").fadeToggle(3000);


 });
});