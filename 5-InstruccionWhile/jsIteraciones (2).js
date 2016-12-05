function Mostrar()
{
	alert('iteración while');
	var contador = 10;
	document.write("<h1>Hola</h1>");
	while (contador > 0) {
		document.write("<br>contador: " + contador);
		contador--;
		console.log(contador);
	}
	console.log("<p>Fin</p>");

}//FIN DE LA FUNCIÓN