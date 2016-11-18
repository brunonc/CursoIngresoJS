/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo, ancho, res;
	largo = document.getElementById("Largo").value;
	ancho = document.getElementById("Ancho").value;
	res = (largo * ancho) * 3;
	alert(res);
}
function Circulo () 
{
	var radio, pi, res;
	radio = document.getElementById("Radio").value;
	res = (Math.PI * 2 * radio) * 3;
	alert(res);
	
}
function Materiales () 
{
	var largo, ancho, cemento, cal, res;
	largo = document.getElementById("Largo").value;
	ancho = document.getElementById("Ancho").value;
	cemento = 2;
	cal = 3;
	res = largo * ancho;
	alert("Se necesitan " + res * cemento + " bolsas de cemento y " + res * cal + " de cal.")
}