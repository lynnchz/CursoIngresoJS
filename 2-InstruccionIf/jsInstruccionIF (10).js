function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota = Math.floor(Math.random()*(1,11));
		if (nota>=9){
		alert ("EXELENTE");
	}
	else if(nota>=7){
		alert ("Muy bien");
	}
	else if(nota>=4){
		alert ("bien");
	}
	else if(nota>=2){
		alert ("Mal");
	}
	else if(nota>=0){
		alert ("mal");
	}
				
	

}//FIN DE LA FUNCIÓN