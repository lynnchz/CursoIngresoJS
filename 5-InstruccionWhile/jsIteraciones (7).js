function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='true';
	var numero;

	while(respuesta != false)
	{
		contador++
		numero= prompt ('Ingrese numero')
		numero= parseInt(numero)
		respuesta= confirm('¿Desea contiunuar?')
		while(isNaN(numero))
	{
		numero= prompt ('Ingrese numero')
		numero= parseInt(numero)
		respuesta= confirm('¿Desea contiunuar?')
	    
			
	}
	}
		acumulador+=numero 
		//respuesta= confirm('Desea continuar?')
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;
		}
	
//FIN DE LA FUNCIÓN