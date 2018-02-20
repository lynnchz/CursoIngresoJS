function Mostrar()
{

	var contador=0;
	var min = 0;
	var max =0;
	var primera = true;
	var numero;

	// declarar variables
	var respuesta=true;

		while(respuesta!=false )
	{
		contador++;
		numero = prompt ('INGRESE UN NUMERO');
		numero = parseInt (numero);
		respuesta= confirm('¿Desea contiunuar?')

		while (isNaN(numero))
	{ 
		numero = prompt ('INGRESE UN NUMERO');
		numero = parseInt (numero)
	}

		if (primera)
	{
		primera = false;
		max=numero;
		min=numero;
	}	

document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;
}}//FIN DE LA FUNCIÓN