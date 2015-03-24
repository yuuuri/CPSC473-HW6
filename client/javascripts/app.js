var main = function() {

	$('#rock').click(function(){
		//alert("testing this button rock works");

    $.ajax ( {
        url: '/play/rock',
        method: 'post',
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        data: 'move=rock',

        // up to here, user clicked rock button and send to
        // server, then waits

        success: function(data) {
            //this data will be sent to client on browser
            $('#result').html(JSON.stringify(data, null, '\t'));
        }

    }
    );

	});



};
$(document).ready(main);
