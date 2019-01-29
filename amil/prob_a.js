
var input = document.getElementById('user_input1');
var optr;
var holder;




function ui(e){
	input.value += e.innerHTML;
}

function doAdd(){
	optr = 1;
	holder = parseInt(input.value);
	input.value = "";

}
function doMin(){
	optr = 2;
	holder = parseInt(input.value);
	input.value = "";

}
function doMul(){
	optr = 3;
	holder = parseInt(input.value);
	input.value = "";

}
function doDiv(){
	optr = 4;
	holder = parseInt(input.value);
	input.value = "";

}
function doExp(){
	optr = 5;
	holder = parseInt(input.value);
	input.value = "";

}

function del(){
	input.value = "";
	
}

function clear(){
	input.value = "";
}

function res() {
	switch(optr){

		case 1: {
			var res = parseInt(parseInt(input.value) + holder);
			input.value = res;
			break;
		}
		case 2: {
			var res = parseInt(holder - parseInt(input.value));
			input.value = res;
			break;
		}
		case 3: {
			var res = parseInt(parseInt(input.value) * holder);
			input.value = res;
			break;
		}
		case 4: {
			var res = parseInt(holder / parseInt(input.value));
			input.value = res;
			break;
		}
		
		case 5: {
			var res = parseInt(holder % parseInt(input.value));
			input.value = res;
			break;
		
		}
	
	}

}

	
	





