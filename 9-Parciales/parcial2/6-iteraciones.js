//6-Realizar el algoritmo que al presionar el botón
// "Mostrar" pida el importe de las ventas 
//(validar que sea mayor a 0,”cero”) de los 7
// días de la semana por prompt (una por día), 
//e informar cual fue el mayor importe y cuál fue el menor importe de venta
function Mostrar()
{
var importe;
var contador = 0;
var primera=true;
var importemayor;
var importemenor;
while (contador!=7)
{
	contador++;
	importe = prompt ('Ingrese el valor de cada dia');
	while(importe<1)
{
	importe = prompt ('El importe ingresado debe ser mayor a 0, vuelve a intentarlo');
}
if (primera ==true)
{
	primera = false
	importemenor = importe
	importemayor = importe
}
if (importemayor<importe)
{
	importemayor= importe
}
else if (importemenor>importe)
{
	importemenor= importe
}
}
	alert('el importe mayor de la semana es ' +importemayor+ ' y el importe menor es '+importemenor)
}

