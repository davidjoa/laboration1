$("#fornamn").blur(function(event) {

    var inputfornamn = $("#fornamn").val();
    var fornamnRegex = /(\w|W)+/;


    if (!fornamnRegex.test(inputfornamn)) {

        $(function() {
            $("#fornamn").css("background-color", "red");
            $('.felf').remove();
            $("#fn").append('<label class="felf">Det här fältet är obligatoriskt</label>');

        });
    }

    else {
        $(function() {
            $("#fornamn").css("background-color", "green");
        });
    }
});

$("#efternamn").blur(function(event) {

    var inputefternamn = $("#efternamn").val();
    var efternamnnamnRegex = /(\w|W)+/;


    if (!efternamnnamnRegex.test(inputefternamn)) {

        $(function() {
            $("#efternamn").css("background-color", "red");
            $('.fele').remove();
            $("#en").append('<label class="fele">Det här fältet är obligatoriskt</label>');

        });
    }

    else {
        $(function() {
            $("#efternamn").css("background-color", "green");
        });
    }
});

$("#postnummer").blur(function(event) {

    var inputpostNumber = $("#postnummer").val();

    var postnummerRegex = /^\d{5}$/;




    if (!postnummerRegex.test(inputpostNumber)) {


        $(function() {
            $("#postnummer").css("background-color", "red");
            $('.felp').remove();
            $("#pn").append('<label class="felp">Det här fältet är obligatoriskt</label>');

        });
    }


    else {
        $(function() {
            $("#postnummer").css("background-color", "green");
        });
    }
});


$("#mejl").blur(function(event) {

    var inputmejl = $("#mejl").val();
    var mejlRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i


    if (!mejlRegex.test(inputmejl)) {

        $(function() {
            $("#mejl").css("background-color", "red");
            $('.felm').remove();
            $("#ep").append('<label class="felm">Det här fältet är obligatoriskt</label>');

        });
    }
    else {
        $(function() {
            $("#mejl").css("background-color", "green");
        });

    }
});