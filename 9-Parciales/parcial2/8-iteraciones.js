//Realizar el algoritmo que al presionar el botón 
//"Mostrar" permita ingresar números positivos (validar que sea positivo) hasta que el usuario quiera. 
//Informar al terminar el ingreso por document.write: 
//a) la cantidad de números pares. 
//b) el promedio de todos los números ingresados. 
//c) la suma de todos los 
function Mostrar()
{
var numero
var contadorp = 0
var contador = 0;
var numeromax;
var numeromin;
var primedio
var numeros = 0
var primera = 'si'
var respuesta = 'si'
while (respuesta== 'si')
{
	numero = prompt('Ingrese un numero profavor')
	if(numero==null)
{
	break;
}
numero = parseInt(numero)
if (isNaN(numero))
{
	alert('Ingrese un numero valido')
}
while (numero<=0)
{
	numero = prompt('Solo numeros positivos')
}
	contador ++;
	numeros = numeros + numero
	if(numero %2 == 0)
{
	contadorp++;
}
if (primera =='si')
	primera = 'no'
	numeromax =numero
	numeromin =numero
}
if (numeromax<numero)
{
	numeromax = numero
}
if (numeromin>numero)
{
	numeromin = numero
}
if (contador !=0)
{
	promedio = numero % contador
}
document.write("A)" +contadorp)
document.write("B)" +promedio)
document.write("C)" + numeros)
document.write("D)" + numeromax + "y" + numeromin)
}

