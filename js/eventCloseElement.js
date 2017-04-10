// (function($) {
// 	var float = {float: 'right'};

// 	var options;

// 	$.fn.mySimplePlugin = function(params) {
// 		options = $.extend({}, options, params);

// 		$('div').keyup(function(event){
			
			
// //console.log(event);
// 			$('button').css('display', 'inline-block');

// 			if(options.float === 'left') {
// 				var margin = '-350px';
// 			} else {
// 				var margin = '-25px';
// 			}
// 			$('button').css('margin-left', margin);

// 			$('button').click(function(){
// 				$("input").val("");
// 				$("textarea").val("");
// 				$('button').css('display', 'none');
// 			});


// 		});
// 		return this;
// 	};
// })(jQuery);

//const div_parent = document.getElementById('parent1');
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

input1.addEventListener("keyup", function (){
	button1.style.visibility='visible';
	button1.onclick = function() {
		input1.value = '';
		button1.style.visibility='hidden';
	}
});

input2.addEventListener("keyup", function (){
	button2.style.visibility='visible';
	button2.onclick = function() {
		input2.value = '';
		button2.style.visibility='hidden';
	}
});

input3.addEventListener("keyup", function (){
	button3.style.visibility='visible';
	button3.onclick = function() {
		input3.value = '';
		button3.style.visibility='hidden';
	}
});

input4.addEventListener("keyup", function (){
	button4.style.visibility='visible';
	button4.onclick = function() {
		input4.value = '';
		button4.style.visibility='hidden';
	}
});