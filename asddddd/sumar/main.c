#include <stdio.h>
#include <stdlib.h>
int sumar (int, int);
int main()
{
    int rta;
    int x = 6;
    int y = 5;

    rta = sumar (x, y);

   printf("El resultado de la suma es %d \n\n", rta);
   return 0;

}
    int sumar (int a,int b){

    int resultado;
    resultado = a + b;
    return resultado;
    }
