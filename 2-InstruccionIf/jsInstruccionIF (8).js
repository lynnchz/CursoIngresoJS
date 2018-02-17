function Mostrar()
{//  Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, 
//pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'

//tomo la edad  
var edad;
var estadocivil;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;
    if(edad >=18 && estadocivil=="soltero");{
        alert ("Es soltero y no es menor");
    }




	


}//FIN DE LA FUNCIÓN