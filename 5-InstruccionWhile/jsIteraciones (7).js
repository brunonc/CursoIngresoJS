function Mostrar()
{

var contador=0;
var acumulador=0;
var respuesta='si';
while (respuesta == "si") {
	numero = prompt("Ingrese un número");
	acumulador += parseInt(numero);
	contador++;
	respuesta = prompt("Desea ingresar otro número", "si");
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN