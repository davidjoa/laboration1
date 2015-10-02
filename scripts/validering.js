$("#fornamn").blur(function(event) {

    var inputfornamn = $("#fornamn").val();
    var fornamnRegex = /(\w|W)+/;


    if (!fornamnRegex.test(inputfornamn)) {

        $(function() {
            $("#fornamn").css("background-color", "#FF0818");
            $('.felf').remove();
            $("#fn").append('<label class="felf">Det här fältet är obligatoriskt</label>');

        });
    }

    else {
        $(function() {
            $("#fornamn").css("background-color", "#62BF13");
            $('.felf').remove();
        });
    }
});

$("#efternamn").blur(function(event) {

    var inputefternamn = $("#efternamn").val();
    var efternamnnamnRegex = /(\w|W)+/;


    if (!efternamnnamnRegex.test(inputefternamn)) {

        $(function() {
            $("#efternamn").css("background-color", "#FF0818");
            $('.fele').remove();
            $("#en").append('<label class="fele">Det här fältet är obligatoriskt</label>');

        });
    }

    else {
        $(function() {
            $("#efternamn").css("background-color", "#62BF13");
            $('.fele').remove();
        });
    }
});

$("#postnummer").blur(function(event) {

    var inputpostNumber = $("#postnummer").val();

    var postNummerRegex = /^(SE)?(\s)?((\d){5}$|((\d){3}(\s|-)\d{2}))$/;

    var postReturn = /^\d{5}$/;




    if (!postNummerRegex.test(inputpostNumber)) {


        $(function() {
            $("#postnummer").css("background-color", "#FF0818");
            $('.felp').remove();
            $("#pn").append('<label class="felp">Det här fältet är obligatoriskt</label>');

        });
    }


    else {


        $(function() {

            $("#postnummer").css("background-color", "#62BF13");
            $('.felp').remove();


        });
    }
});


$("#mejl").blur(function(event) {

    var inputmejl = $("#mejl").val();
    var mejlRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i


    if (!mejlRegex.test(inputmejl)) {

        $(function() {
            $("#mejl").css("background-color", "#FF0818");
            $('.felm').remove();
            $("#ep").append('<label class="felm">Det här fältet är obligatoriskt</label>');

        });
    }
    else {
        $(function() {
            $("#mejl").css("background-color", "#62BF13");
            $('.felm').remove();
        });

    }
});