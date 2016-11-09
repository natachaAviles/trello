function mostrarinput() {
	var contenedor = document.getElementById('secc-boton');

	//se crea area input
	var inp= document.createElement('input');
	inp.setAttribute('type','text');
	inp.setAttribute('placeholder','Ingrese texto');
	inp.classList.add('form-group','textoinput');
	inp.value;
	inp.value ="";

	// se crea boton para agregar texto a lista

	var btn = document.createElement('input');
	btn.setAttribute('type','button');
	btn.setAttribute('value','Guardar');
	btn.classList.add('btn','btn-sec');

	//se agregan elementos input y boton a contenedor 
	contenedor.appendChild(inp);
	contenedor.appendChild(btn);

	var textoinput = document.getElementsByClassName('textoinput')[0].value;
	document.getElementsByClassName('form-group')[0].value = "";




}