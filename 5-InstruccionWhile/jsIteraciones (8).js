function Mostrar()
{

var contador=0;
var positivo=0;
var negativo=1;
var respuesta='si';
var numero;
while (respuesta == "si") {
	numero = prompt("Ingrese un número");
	numero = parseInt(numero);
	if (numero >= 0) {
		positivo += numero;
	} else {
		negativo *= numero;
	}
	respuesta = prompt("Desea ingresar otro número", "si");
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN