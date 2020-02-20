function mostrar()
{

	var contador=0;
	var acumulador=0;
	var valor=0;
	var resp='si';

do
{
	contador++;
	valor = prompt("ingrese su numero");
	acumulador = acumulador + parseInt(valor);
	resp = prompt("desea ingresar otro numero?");
}
while (resp== "s" || resp == "S");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN