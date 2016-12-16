function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var cantNegativos = 0;
	var sumaNegativos = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var sumaPositivos = 0;
	var cantPositivos = 0;
	while(respuesta!="no")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		if (numero != 0) {
			if (numero % 2 == 0) {
				cantPares++;
			}
			if (numero < 0) {
				cantNegativos++;
				sumaNegativos += numero;
			} else if (numero > 0) {
				cantPositivos++;
				sumaPositivos += numero;
			}
		} else {
			cantCeros++;
		}
		respuesta = prompt("Desea ingresar otro número", "si");
	}

	document.write("<b>Suma de los negativos:</b> " + sumaNegativos + "<br>");
	document.write("<b>Suma de los positivos:</b> " + sumaPositivos + "<br>");
	document.write("<b>Cantidad de los positivos:</b> " + cantPositivos + "<br>");
	document.write("<b>Cantidad de los negativos:</b> " + cantNegativos + "<br>");
	document.write("<b>Cantidad de ceros:</b> " + cantCeros + "<br>");
	document.write("<b>Cantidad de números pares:</b> " + cantPares + "<br>");
	document.write("<b>Promedio de positivos:</b> " + sumaPositivos/cantPositivos + "<br>");
	document.write("<b>Promedio de positivos:</b> " + sumaNegativos/cantNegativos + "<br>");
	document.write("<b>Diferencia entre positivos y negativos:</b> " + sumaPositivos-sumaNegativos + "<br>");
}//FIN DE LA FUNCIÓN