//Declaración de las variables a utilizar
var i,num,nota,notaactual,promedio;
//Captura de la cantidad de notas que se ingresarán
num = parseInt(prompt("¿Cuántos notas va a ingresar?",""));
//Definiendo un valor de inicialización para la variable que almacenará el promedio
nota = 0;
header = "<header class=\"masked\">";
header += "<h1>Selectable Text</h1>";
header += "</haeder>";
document.write(header);
//Ciclo o lazo que permitirá ingresar cada nota
document.write("<section>");
document.write("<article>");
for (i=1;i<=num;i++){
 notaactual = parseFloat(prompt("Ingrese la nota " + i + ": ",""));
 document.write("<h3>La nota " + i + ": " + Math.round(notaactual * Math.pow(10,2))
/ Math.pow(10,2) + "</h3>");
 nota += notaactual;
}
//Obteniendo el cálculo del promedio
promedio = nota / (i-1);
//Imprimir el valor redondeado a dos decimales del promedio
document.write("<h3>El promedio de las notas es: " + Math.round(promedio *
Math.pow(10,2)) / Math.pow(10,2) + "</h3>");
document.write("</article>");
document.write("</section>");