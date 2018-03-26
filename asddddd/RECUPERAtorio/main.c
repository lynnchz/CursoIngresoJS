#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
,la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.►
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6.►
d) El sexo y la nota del más joven
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer. */

int main()
{
    int notas = 0;
    int nota;
    int edad;
    char sexo;
    float promedio;
    int notamin;
    int edadmin;
    int hombres;
    int mujers;
    int bandera = 0;
    int bandera2 = 0;
    for(int i= 0; i<5; i++){

    printf("Ingrese una nota: ");
    scanf("%d", &nota);

    while(nota < 0 && nota >10){
    printf("La nota ingresada tiene que ser entre 1 y 10");
    fflush(stdin);
    scanf("%d", &nota);
    notas = notas + nota ;
//NOTA MAXIMA Y MINIMA
    if (bandera = 0){
        bandera = 1;
        notamax = nota;
        notamin = nota;
    while (notamax<nota){
        notamax = nota;
    }
    while(notamin>notamin){
        notamin = nota;
    }
    }
}
//EDAD
    printf("Ingrese la edad: ");
    fflush(stdin);
    scanf("%d", &edad);

    while(edad <=0){
    printf("Edad invalida. Reingrese edad: ");
    fflush(stdin);
    scanf("%d", &edad);
    }
    if (bandera2 = 0 )
        bandera2 = 1



//SEXO
    printf("Ingrese sexo: ");
    fflush(stdin);
    scanf("%c ", &sexo);

    while(sexo !='f' && sexo!= 'm'){
    printf("Sexo invalido. Reingrese sexo: ");
    fflush(stdin);
    scanf("%c", &sexo);
    sexo = tolower(sexo);

    }

//PROMEDIO
    promedio =(float) nota / 5;

//HOMBRES MAYORES A 18 Y NOTA MAYOR O IGUAL A 6

    if (nota <=6 && sexo == 'm'){
            hombres++;
    }



    }
    }
