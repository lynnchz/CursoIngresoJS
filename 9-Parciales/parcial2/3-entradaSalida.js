//3-Realizar el algoritmo que al presionar el botón 
//"Mostrar" tome por ID dos datos, 
//el largo y ancho de un terreno y
// luego que muestre cuantos metros 
//de alambre se necesitan para colocarle 6 hilos de alambrado a su perímetro

function Mostrar()
{
	var largo 
	var ancho
	var nec

	largo = document.getElementById('largo').value;
	largo = parseInt(largo);
	ancho = document.getElementById('ancho').value;
	ancho = parseInt(ancho);

	nec = (largo + ancho * 6);

	alert ('Usted necesita ' + nec+ ' metros de alambre');


	
}

