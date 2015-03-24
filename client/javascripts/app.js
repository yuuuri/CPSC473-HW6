var main = function() {




	$('#rock').click(function(){
		//alert("test: rock button works");
		$.ajax( {
			url: '/play/rock',
			method: 'post',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'json',
			data: 'move=rock',

			// up to here user clicked rock button and sent to server
			// then waits

			success: function(data) {
				
        // client receives json object and put it out on browser 
        $('#result').html(JSON.stringify(data, null, '\t'));
				console.log(data);

			}

		}

		);
	});





};
$(document).ready(main);
