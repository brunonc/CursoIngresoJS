function Mostrar()
{
	alert('iteración while');
	var contador = 0;
	document.write("<h1>Hola</h1>");
	while (contador < 10) {
		contador++;
		console.log(contador);
		document.write("<br>contador: " + contador);
	}
	console.log("<p>Fin</p>");
}//FIN DE LA FUNCIÓN