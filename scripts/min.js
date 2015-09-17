$(document).ready(function() {
 $(".right").mouseenter(function() {
  alert("Badass tree");
 });
});

$(document).ready(function() {
 $("button").click(function() {
  $("p").toggle();
  $("ul").toggle();
 });
});

$(document).ready(function(){
    $("#meny").click(function(){
        $("#navigation").slideToggle("slow");
    });
});