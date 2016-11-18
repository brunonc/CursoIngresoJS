function operaciones() {
	var precio1, precio2, precio3, suma, promedio;
	precio1 = document.getElementById("precio1").value;
	precio2 = document.getElementById("precio2").value;
	precio3 = document.getElementById("precio3").value;
	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);
	suma = precio1 + precio2 + precio3;
	promedio = suma / 3;
	alert("La suma de los precios es: " + suma + "\nEl promedio de los precios es: " + promedio.toFixed(2));
}