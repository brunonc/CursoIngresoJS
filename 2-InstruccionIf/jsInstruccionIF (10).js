function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = Math.floor(Math.random() * 10 + 1);
	if (nota < 4) {
		alert("Vamos, la proxima se puede " + nota);
	} else if (nota < 9) {
		alert("APROBÓ " + nota);
	} else {
		alert("EXCELENTE " + nota);
	}

}//FIN DE LA FUNCIÓN