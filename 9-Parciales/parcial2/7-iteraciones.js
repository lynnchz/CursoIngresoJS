//7-Realizar el algoritmo que al presionar el botón
// "Mostrar" pida por prompt las notas (validar entre 0 y 10)
// y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
//a) el promedio de las notas totales. 
//b) la nota más baja. 
//c) la cantidad de varones que su nota haya sido mayor o igual a 

function Mostrar()
{
	var nota
	var sexo
	var alumnos = 0;
	var promedio;
	var notaMin
	var hombre6 =0;
	var primera = true
	var notas =0;
	
	while ( alumnos !=6 )
	{
		alumnos++;
		nota = prompt('ingrese la nota del alumno')
		nota = parseInt(nota)
		while (nota<0||nota>10||isNaN(nota))
	{
		nota = prompt ('La nota tiene que ser entre 0 y 10')
	}
	notas = notas + nota
	sexo = prompt('Ingrese f para femenino o m para masculino')
	while (sexo !='f' && sexo !='m')
	{
		sexo = prompt('ingrese f o m')
	}
	if(primera==true)
		primera = false
		notaMin = nota
	}
	if (notaMin>nota)
	{
		notaMin = nota
	}
	if (alumnos == 6)
	{
		promedio = notas / alumnos
	}
	if (nota>=6 && sexo == 'm')
	{
		hombre6++;
	}

	alert ('El promedio de las notas es ' +promedio)
	alert ('La nota mas baja es ' +notaMin )
	alert ('La cantidad de varones con nota mayor a 6 es' +hombre6)
	}

	


