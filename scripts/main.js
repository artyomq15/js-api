'use strict';

$('#loadingDiv').show();
function getJSON() {

    $.ajax({
        type: 'GET',
        url:'https://api.mixcloud.com/new/',
        dataType: 'JSON',
        success:function(recourse) {
            console.log(recourse);
            var template = Handlebars.compile( $('#template').html()  );
            $('.info').empty().append( template(recourse)  );

            throw new Error("Error");

        },
        error:function(error) {
            console.log(error.status+":"+error.responseText);
            $('.info').empty().append('<div><h1>Ooops...Something went wrong :(</h1></div>');
            //alert("Error:" + error.status + error.responseText);
        },
        statusCode:{
            0: function(){
                $('.info').append('<div><h3>Failed to load resource. Connection lost. Please check your Internet connection!</h3></div>');
            },
            403: function(){
                $('.info').append('<div><h3>Forbidden</h3></div>');
            },
            404:function(){
                $('.info').append('<div><h3>Not found</h3></div>');
            },
            500:function(){
                $('.info').append('<div><h3>Internal server error</h3></div>');
            },
            504:function(){
                $('.info').append('<div><h3>Failed to load recourse. Internal server error</h3></div>');
            }
        }
    });
}

    $(document).ready(function () {
        setInterval(getJSON, 10000);
    });


