/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno, numeroDos, res;
	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	res = numeroUno + numeroDos;
	alert(res);
}

function restar()
{
	var numeroUno, numeroDos, res;
	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	res = numeroUno - numeroDos;
	alert(res);
	
}

function multiplicar()
{ 
	var numeroUno, numeroDos, res;
	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	res = numeroUno * numeroDos;
	alert(res);
}

function dividir()
{
	var numeroUno, numeroDos, res;
	numeroUno = document.getElementById("numeroUno").value;
	numeroDos = document.getElementById("numeroDos").value;
	res = numeroUno / numeroDos;
	alert(res);
}