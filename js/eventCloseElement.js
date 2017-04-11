const input = document.body.querySelectorAll('input');
const button = document.body.querySelectorAll('button');
const inputText = document.body.querySelectorAll('textarea');

for(i=0; i < input.length; i++)
{

	input[i].addEventListener('keyup', function(event) {

		const id = event.srcElement.id;

		if(Position === 'right') {

			button[id].style.cssText='margin-left:-30px';	
			button[id].style.visibility='visible';	
			
		} 

		if(Position === 'left') {
			button[id].style.cssText='margin-left:-350px';
			button[id].style.visibility='visible';	
		}		

		button[id].onclick = () => { input[id].value = ''; button[id].style.visibility='hidden';}	
	})
}
	
