function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero, maximo, minimo;
	while (respuesta!='no')
	{
		contador++;
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		if (contador == 1) {
			maximo = numero;
			minimo = numero;
		} else {
			if (numero > maximo) {
				maximo = numero;
			} else if (numero < minimo) {
				minimo = numero
			}
		}
		respuesta = prompt("Desea ingresar otro número", "si");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN