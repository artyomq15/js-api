'use strict';

$('#loadingDiv').show();

function getJSON() {
    $.ajax({
        type: 'GET',
        url:'https://api.mixcloud.com/new/',
        dataType: 'JSON',
        success:function(channel) {
            console.log(channel);
            var template = Handlebars.compile( $('#template').html()  );
            $('.updates').empty().show().append( template(channel)  );
        },
        error:function(error) {
            console.log(error.status+":"+error.responseText);
            $('.updates').empty().append('<div><h1>Ooops...Something went wrong :(</h1></div>');
            //alert("Error:" + error.status + error.responseText);
        },
        statusCode:{
            0: function(){
                $('.updates').append('<div><h3>Connection lost. Please check your Internet connection!</h3></div>');
            },
            403: function(){
                $('.updates').append('<div><h3>Forbidden</h3></div>');
            },
            404:function(){
                $('.updates').append('<div><h3>Not found</h3></div>');
            },
            500:function(){
                $('.updates').append('<div><h3>Internal server error</h3></div>');
            }
        }
    });
}

    $(document).ready(function () {
        setTimeout(getJSON, 5000);
        setInterval(getJSON, 10000);
    });


