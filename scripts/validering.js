$(document).ready(function() {

    //.blur event is sent to an element when it loses focus by keyboard commands, such as the Tab key, or by mouse clicks
    $("#fornamn").blur(function(event) {

        var inputfornamn = $(this);
        var fornamnRegex = /(\w|W)+/;
        var is_fornamn = fornamnRegex.test(inputfornamn.val()); //The test() method executes a search for a match between a regular expression and a specified string.
        // Returns true or false
        //The .val() method is primarily used to get the values of form elements such as input,
        // select and textarea


        if (is_fornamn) {

            inputfornamn.removeClass("invalid").addClass("valid");
            $('.felf').remove();

            //Similar to .empty(), the .remove() method takes elements out of the DOM



        }


        else {


            inputfornamn.removeClass("valid").addClass("invalid");
            $('.felf').remove();
            $("#fn").append('<label class="felf">Det här fältet är obligatoriskt</label>');

            //.append() Insert content, specified by the parameter, to the end of each element in the set of matched elements.

        }
    });

    $("#efternamn").blur(function(event) {

        var inputefternamn = $(this);
        var efternamnnamnRegex = /(\w|W)+/;
        var is_efternamn = efternamnnamnRegex.test(inputefternamn.val());


        if (is_efternamn) {

            inputefternamn.removeClass("invalid").addClass("valid");
            $('.fele').remove();




        }

        else {


            inputefternamn.removeClass("valid").addClass("invalid");
            $('.fele').remove();
            $("#en").append('<label class="fele">Det här fältet är obligatoriskt</label>');

        }
    });

    $("#postnummer").blur(function(event) {

        var inputpostNumber = $(this);

        var postNummerRegex = /^(SE)?(\s)?((\d){5}$|((\d){3}(\s|-)\d{2}))$/;
        var is_post = postNummerRegex.test(inputpostNumber.val());
        var postReturn = inputpostNumber.val().match(postNummerRegex);

        //The match() method retrieves the matches when matching a string against a regular expression
        // return value Array, An Array containing the matched results or null if there were no matches



        if (is_post) {

            inputpostNumber.removeClass("invalid").addClass("valid");
            $('.felp').remove();
            $("#postnummer").val(postReturn[3].replace(/(\s)|-/, ""));

            //    console.log(postReturn);
            // 4e platsen i arrayen återgav ett 5siffrigt postnummer. Alltså [3].
            //The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
            // The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

        }

        else {


            inputpostNumber.removeClass("valid").addClass("invalid");
            $('.felp').remove();
            $("#pn").append('<label class="felp">Det här fältet är obligatoriskt</label>');

        }



    });


    $("#mejl").blur(function(event) {

        var inputmejl = $(this);
        var mejlRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var is_mejl = mejlRegex.test(inputmejl.val());

        if (is_mejl) {

            $('.felm').remove();
            inputmejl.removeClass("invalid").addClass("valid");

        }


        else {

            inputmejl.removeClass("valid").addClass("invalid");
            $('.felm').remove();
            $("#ep").append('<label class="felm">Det här fältet är obligatoriskt</label>');

        }
    });



    //After submit  



    /*
    Need to prevent user from submiting if invalid class...
     
                
    var element=$("#myForm");            
    var valid = element.hasClass("valid");
            
            
                var element = $("#myForm");
                var invalid = element.hasClass("invalid");

      $('#genomf').click(function(event) {
                event.preventDefault();

            });*/

    $('#genomf').click(function(event) {





        //  event.preventDefault();
        //If this method is called, the default action of the event will not be triggered

        // kanske ska användas till If-satsens händelse sen...


        var $inputs = $('#myForm :input');
        // get the array of all the inputs 

        var classInputs = $('.rubrik');
        // get an associative array of the values

        var values = {};

        $inputs.each(function(index)
        //generic iterator function, which can be used to seamlessly iterate over both objects and arrays
        {
            values[this.name] = $(this).val();
            
            // Vad säger [this.name] egentligen? Vad styr det?


            $('#hiddenOverlay').attr('id', 'overlayBack');
            //switch ID to cover background
            
            $("#hiddenOverlay").css("visibility", "visible");
            //appear hiddenOverlay to get through popup

            $('#confirmlist').append('<span>' + '<p>' + classInputs.eq(index).text() + '</p>' + '</span>');
            $('#confirmlist').append('<p>' + $(this).val() + '</p>');

        });

        $('#stila').click(function() {
            $('#myForm').submit();

        });
        $('#stila').click(function() {


            $('#overlayBack').attr('id', 'hiddenOverlay');
            $("#hiddenOverlay").css("visibility", "hidden");

        });
        $('#cancel').click(function() {


            $('#overlayBack').attr('id', 'hiddenOverlay');
            $("#overlayBack").css("visibility", "hidden");
            $('#confirmlist').empty(); 
            //clear form inputs so only one uniqe set will be sent
        });






    });
});
