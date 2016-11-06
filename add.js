var counter =1;
function addInput(divName){
	var newdiv=document.createElement('div');
	newdiv.innerHTML = "Location #" + (counter +2)+ " <input type = 'text' name ='myInputs[]'>";
	document.getElementById(divName).appendChild(newdiv);
	counter++;
}

