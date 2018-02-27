//2-Realizar el algoritmo que al presionar el botón
//"Mostrar" lea un importe de un producto por prompt y muestre el importe final sumándole el IVA (21%)

function Mostrar()
{
var producto;
var importefinal;
var f

producto = prompt ('Ingrese el importe del producto');
producto = parseInt (producto);
importefinal = (producto*0.21);
f = (importefinal + producto)
document.getElementById('importe').value = f;
	
}

