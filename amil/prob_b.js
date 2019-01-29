
var output = document.getElementById('list');
var xhr = new XMLHttpRequest();
var txt = ''

xhr.onload =function(){

	if (this.state == 4){
		var m = JSON.parse(this.responseText);

		for(var i=0; i<m.length ; i++){
			txt += '<ul>'+
			'<li>'+ '<b>'+'UserId'+'</b>'+ m[i].userId + '</li>'+
			'<li>'+ '<b>Id</b>'+ m[i].userId + '</li>'+
			'<li>'+ '<b>Title</b>'+ m[i].userId + '</li>'+
			'<li>'+ '<b>Completed</b>'+ m[i].userId + '</li>'
			'</ul><br>';
		}

	output.innerHTML = txt;




	}

	xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
	xhr.send();

}