'use strict';
// https://oauth.vk.com/blank.html#access_token=78b76241de6f715cd504d6db0ff67e0f0e091007142eec6ec04238e56327063e814c5b2f5778bd07783ed&expires_in=86400&user_id=81238799

var token = '78b76241de6f715cd504d6db0ff67e0f0e091007142eec6ec04238e56327063e814c5b2f5778bd07783ed'
//   'https://api.vk.com/method/users.search?from_list = friends&user_id=81238799&name_case=Nom&offset=10&count_10&access_token=' + token + '&v=5.59'
$('#loadingDiv').show();
let getInfo = () => {
    $.ajax({
        type: 'GET',
        url:'https:api.vk.com/method/newsfeed.search?&q=БГУ&extended=0&start_time=1477227600&v=5.59',
        headers: {
            'client-id': token
        },
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
    getInfo();
    setInterval(getInfo, 10000);
})