/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar
 una carga de datos validada
 e ingresada por ventanas
  emergentes solamente 
  (para evitar hacking y cargas maliciosas) 
  y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad
    var sexo
    var sueldo
    var estadoc
    var legajo
    var nacionalidad 
    edad = prompt('ingrese su edad por favor');
    edad = parseInt(edad);
      
             while (edad>=18 || edad <91)
    {
            document.getElementById('Edad').value = edad  
            break;
    }
            while(isNaN(edad))
    {
            alert ("La edad que usted a ingresado es invalida, porfavor ingrese una edad valida")
            edad = prompt('ingrese su edad por favor');
            edad = parseInt(edad);
            document.getElementById('Edad').value = edad  
    }

             if (edad < 18 || edad >91)
    {

             alert ("La edad que usted a ingresado es invalida, porfavor ingrese una edad valida")
             edad = prompt('ingrese su edad por favor');
             edad = parseInt(edad);
             document.getElementById('Edad').value = edad  

    }
        sexo = prompt ('Ingrese su sexo porfavor (M O F)')

        while (sexo != "f" && sexo != "m")
    {
        document.getElementById('Sexo').value = sexo
        break;
    }

        estadoc = prompt ('Ingrese su estado civil porfavor, 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo)'); 
        estadoc = parseInt (estadoc);
       
        if (estadoc === 1 )
     {
         estadoc='Soltero'
     }
       else if (estadoc === 2 )
     {
        estadoc ='Casado'
     }
       else if (estadoc === 3 )
     {
         'Divorciado'
     }
       else if (estadoc === 4 )
     {
         'Viudo'
     }
            document.getElementById('EstadoCivil').value = estadoc

            sueldo = prompt ('Ingrese su sueldo por favor(sueldo bruto, no menor a 8000)');
            sueldo = parseInt (sueldo);
            while (sueldo<8000)
     {
            alert('Usted a ingresado un monto menor a 8000, por favor ingrese otro monto.')
             sueldo = prompt ('Ingrese su sueldo por favor(sueldo bruto, no menor a 8000)');
             sueldo = parseInt (sueldo);
            continue;
     }
            while (isNaN(sueldo)) 
    {
            alert('Usted a ingresado un monto invalido, por favor ingrese otro monto.')
            sueldo = prompt ('Ingrese su sueldo por favor(sueldo bruto, no menor a 8000)');
            sueldo = parseInt (sueldo);
            continue;
     }
             if (sueldo >= 8000) 
     {
             document.getElementById('Sueldo').value = sueldo            
             
      }

      legajo = prompt ('Ingrese su numero de lejago (numerico de 4 cifras sin ceros a la izquierda)');
      legajo = parseInt (legajo);

      while (isNaN(legajo))
      {
          Alert ('usted a ingresado un numero de legajo invalido, por favor ingrese un numero valido')
          legajo = prompt ('Ingrese su numero de lejago (numerico de 4 cifras sin ceros a la izquierda)');
          legajo = parseInt (legajo); 
          continue;
      }
      while (legajo<=9999)
      {
          document.getElementById('Legajo').value = legajo;
          break;
      }

    nacionalidad = prompt ('Ingrese su nacionalidad, en caso de usted ser Argentino, ingrese "A", en caso de ser extranjero "E" y en caso de ser nacionalizado "N"')

     if (nacionalidad === 'a' )
     {
         nacionalidad= 'Argentino/a'
     }
       else if (nacionalidad === 'e' )
    {
     nacionalidad = 'Extranjero/a'
     }
       else if (nacionalidad === 'n' )
     {
         nacionalidad = 'Nacionalizado/a'
     }
      document.getElementById('Nacionalidad').value = nacionalidad;

     
                 
}
