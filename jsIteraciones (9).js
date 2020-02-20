function mostrar()
{
	var valor ;
	var min ;
	var max ;
	var respuesta='si';

	
	valor = prompt("ingrese un numero)");
	min= valor
	max= valor
	respuesta = prompt ("desea ingresar otro numero?");

	while(respuesta!='no')
{
	valor = prompt("ingrese un numero)");
	if (valor>max)
{
		max=valor;
}
	if(valor<min)
{
	min=valor;
}
	respuesta = prompt ("desea ingresar otro numero?");
}
	document.getElementById('maximo').value= max;
	document.getElementById('minimo').value= min;
	


}

//FIN DE LA FUNCIÓN