//4-Realizar el algoritmo que al 
//presionar el botón "Mostrar" 
//pida dos números por prompt, 
//si son iguales que los multiplique,
// si el primero es mayor al segundo 
//que los reste y si no que los sume, mostrar el resultado por document.write.

function Mostrar()
{
	var numerouno
	var numerodos
	var multi
	var resta
	var suma

	numerouno = prompt ('Ingrese un numero porfavor');
	numerouno = parseInt(numerouno);
	numerodos = prompt('Ingrese otro numero');
	numerodos = parseInt(numerodos);

	if(numerouno==numerodos)
{
	multi = (numerouno*numerodos)
	document.write(multi)
}
	else if (numerouno>numerodos)
{	
	resta =(numerouno-numerodos)
	document.write(resta)
}
	else if (numerouno<numerodos)
{
	suma = (numerouno+numerodos)
	document.write(suma)
}



}

