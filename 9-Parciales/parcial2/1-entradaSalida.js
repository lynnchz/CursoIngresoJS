//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//Realizar el algoritmo que al presionar el botón 
//"Mostrar" lea la base de un triangulo equilatero por ID, e informar el perímetro del mismo por alert 



function Mostrar()
{
	var base
	var perimetro

	base = document.getElementById('lado').value;
	base = parseInt (base);

	perimetro = ( base + base + base);

	alert ('Su perimetro es = ' + perimetro);	
	
}

