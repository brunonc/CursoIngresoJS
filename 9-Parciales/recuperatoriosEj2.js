function descuento() {
	var importe, res;
	importe = prompt("Ingrese el importe del producto:");
	res = importe * 0.75;
	document.getElementById("resultado").value = res;
}