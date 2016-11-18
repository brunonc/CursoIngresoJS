function perimetro() {
	var largo, ancho, res;
	largo = document.getElementById("Largo").value;
	ancho = document.getElementById("Ancho").value;
	res = (largo * ancho) * 3;
	alert("Se necesitan " + res + " metros de alambre para colocar 3 hilos de alambrado al perimetro.");
}