/*
 * CPSC473 Assignment 6
 * Mario Andrade & Yuri Van Steenburg
 * Consulted by : Henry Le
 *
 */

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
            // console.log(data)
            $('#result').html(JSON.stringify(data, null, '\t'));
          }

		});
	});

  //okay, rock button works, just copy and paste the rest of the buttons

  	$('#paper').click(function(){
		//alert("test: rock button works");
		$.ajax( {
			url: '/play/paper',
			method: 'post',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'json',
			data: 'move=paper',

			// up to here user clicked rock button and sent to server
			// then waits

          success: function(data) {
            
            // client receives json object and put it out on browser 
            // console.log(data)
            $('#result').html(JSON.stringify(data, null, '\t'));
          }

		});
	});

	$('#scissors').click(function(){
		//alert("test: rock button works");
		$.ajax( {
			url: '/play/scissors',
			method: 'post',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'json',
			data: 'move=scissors',

			// up to here user clicked rock button and sent to server
			// then waits

          success: function(data) {
            
            // client receives json object and put it out on browser 
            // console.log(data)
            $('#result').html(JSON.stringify(data, null, '\t'));
          }

		});
	});

	$('#lizard').click(function(){
		//alert("test: rock button works");
		$.ajax( {
			url: '/play/lizard',
			method: 'post',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'json',
			data: 'move=lizard',

			// up to here user clicked rock button and sent to server
			// then waits

          success: function(data) {
            
            // client receives json object and put it out on browser 
            // console.log(data)
            $('#result').html(JSON.stringify(data, null, '\t'));
          }

		});
	});

	$('#spock').click(function(){
		//alert("test: rock button works");
		$.ajax( {
			url: '/play/spock',
			method: 'post',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'json',
			data: 'move=spock',

			// up to here user clicked rock button and sent to server
			// then waits

          success: function(data) {
            
            // client receives json object and put it out on browser 
            // console.log(data)
            $('#result').html(JSON.stringify(data, null, '\t'));
          }

		});
	});


};
$(document).ready(main);
