/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta, operacion, nro1, nro2;
function comenzar()
{
	var nroOperacion;
	nro1 = Math.floor( Math.random()*10)+1;
	nro2 = Math.floor( Math.random()*10)+1;
	nroOperacion = Math.floor( Math.random()*4)+1;
	switch (nroOperacion) {
		case 1 :
			operacion = "Suma";
			break;
		case 2 :
			operacion = "Resta";
			break;
		case 3 :
			operacion = "División";
			break;
		case 4 :
			operacion = "Multiplicación";
			break;
	}
	document.getElementById("PrimerNumero").value = nro1;
	document.getElementById("Operador").value = operacion;
	document.getElementById("SegundoNumero").value = nro2;

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = document.getElementById("Respuesta").value;
	respuesta = parseInt(respuesta);
	switch (operacion) {
		case "Suma" :
			if (respuesta == nro1 + nro2) {
				alert("Correcto");
			} else {
				alert("Incorrecto");
			}
			break;
		case "Resta" :
			if (respuesta == nro1 - nro2) {
				alert("Correcto");
			} else {
				alert("Incorrecto");
			}
			break;
		case "División" :
			if (respuesta.toFixed(2) == (nro1 / nro2).toFixed(2)) {
				alert("Correcto");
			} else {
				alert("Incorrecto");
			}
			break;
		case "Multiplicación" :
			if (respuesta == nro1 * nro2) {
				alert("Correcto");
			} else {
				alert("Incorrecto");
			}
			break;
	}

}//FIN DE LA FUNCIÓN
