function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById("edad").value;
	if (edad > 17) {
		alert("Usted es mayor edad");
	} else if (edad < 13) {
		alert("Usted es un niño");
	} else {
		alert("Usted es un adolescente");
	}



}//FIN DE LA FUNCIÓN