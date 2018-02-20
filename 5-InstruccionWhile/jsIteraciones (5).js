function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
document.getElementById('Sexo').value=sexo;

while (sexo !='f' && sexo !='m'){ 
     sexo = prompt("ingrese f ó m .");
}

}//FIN DE LA FUNCIÓN


/////adivina el numero con while 
/// while (numero == numerosecreto)
//secreto = random();
//