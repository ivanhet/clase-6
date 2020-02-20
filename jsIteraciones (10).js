function mostrar()
{

	var contador=0;
	var acumulador
	var valor
	var positivo = 0
	var negativo = 0
	var cantPositivos
	var cantPositivos
	var cantPares
	var cantCeros
	var respuesta ="si";
	//cantidad de negativos y positivos, cantidad de ceros y pares. promedio de positivos y negativos, diferencia negativos y positivos
do
{
	contador++;
	valor = prompt("ingrese un numero)")
	if (valor>=0)
{
	positivo = positivo + parseInt(valor);
}
	if (valor<0)
{
	negativo = negativo - parseInt(valor);
}

respuesta = prompt ("desea ingresar otro numero?");
}
while(respuesta == "si" || respuesta == "SI");

document.write(" positivo " + positivo);
document.write(" negativo " + negativo);



}//FIN DE LA FUNCIÓN