function masIva() {
	var importe, res;
	importe = prompt("Ingrese el importe del producto:");
	res = importe * 1.21;
	document.getElementById("resultado").value = res;
}