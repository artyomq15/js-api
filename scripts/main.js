'use strict';

$('#loadingDiv').show();
let getJSON = () => {
    $.ajax({
        type: 'GET',
        url:'https://api.mixcloud.com/new/',
        dataType: 'JSONP',
        success:function(channel) {
            console.log(channel);
            var template = Handlebars.compile( $('#template').html()  );
            $('.updates').empty().append( template(channel)  );
        },
        error:function() {
            console.log("error");
        }
    });
}

$(document).ready(function () {
    getJSON();
    setInterval(getJSON, 10000);
})
