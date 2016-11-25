/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cant, marca, pDescuento, total, iibb;
 	const precio = 35;
 	iibb = 0;
 	cant = document.getElementById("Cantidad").value;
 	cant = parseInt(cant);
 	marca = document.getElementById("Marca").value;


 	if (cant >= 6) {
 		pDescuento = precio * .5;
 	} else if (cant == 5) {
 		if (marca == "ArgentinaLuz") {
 			pDescuento = precio * .6;
 		} else {
 			pDescuento = precio * .7;
 		}
 	} else if (cant == 4) {
 		if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
 			pDescuento = precio * .75;
 		} else {
 			pDescuento = precio * .8;
 		}
 	} else if (cant == 3) {
 		if (marca == "ArgentinaLuz") {
 			pDescuento = precio * .85;
 		} else if (marca == "FelipeLamparas") {
 			pDescuento = precio * .9;
 		} else {
 			pDescuento = precio * .95;
 		}
 	} else {
 		pDescuento = precio;
 	}

 	total = cant * pDescuento;
 	
  	if (total > 120) {
 		iibb = total * .1;
 		total = total + iibb;
 	}
 	document.getElementById("precioDescuento").value = total;
 	if (iibb != 0) {
 		alert("IIBB Usted pagó " + iibb);
 	}
}	