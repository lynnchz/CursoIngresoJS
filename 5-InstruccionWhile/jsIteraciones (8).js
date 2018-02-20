function Mostrar()
{

	//var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	var numero
	
	while(respuesta != false)
		{
		//contador++
		numero= prompt ('Ingrese un numero');
		numero= parseInt(numero);
		respuesta= confirm('¿Desea contiunuar?')
		document.getElementById('suma').value=positivo;
		document.getElementById('producto').value=negativo;
		}
		while(isNaN(numero))
		{
		numero= prompt ('Ingrese un numero');
		numero= parseInt(numero);
		respuesta= confirm('¿Desea contiunuar?')
				
		}
		if (numero<0)
		{
		numero += positivo
		}
		else 
		{
		numero *= negativo
		}



}//FIN DE LA FUNCIÓN