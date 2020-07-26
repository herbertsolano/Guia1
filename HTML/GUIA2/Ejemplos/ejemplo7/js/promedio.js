//Declarando e inicializando variables
var i, contador = 1, promedio = 0.0;
var clase = "";
var alumno, tabla = "";
var notas = [];
var n = parseInt(prompt("¿Cuántas notas va a ingresar?", ""));
alumno = prompt("Ingrese el nombre del alumno ", "");
//Ciclo o lazo que se utiliza para capturar, una a una las notas
for(i=0; i<n; i++){
 notas[i] = parseFloat(prompt("Ingrese la nota " + (i+1), ""));
}
tabla += "<table id=\"mytable\">\n";
tabla += "<caption>Evaluaciones y promedio de " + alumno + "</caption>"
tabla += "<tr>\n<th>\nEvaluaciones\n</th>\n";
tabla += "<th class=\"specalt\">Notas\n</th>\n</tr>\n";
//Obteniendo el promedio de las notas ingresadas
for(i=0; i<notas.length; i++){
 clasetexto = ' class="alt"';
 promedio += notas[i];
 if(i%2 == 1){
 clasenota = ' class="alt nota"';
 tabla += "<tr>\n<td" + clasetexto + ">\nEvaluación " + (i+1) + "</td>\n<td" +
clasenota + ">\n" + notas[i] + "\n</td>\n</tr>\n";
}
else{
clasenota = ' class="nota"';
 tabla += "<tr>\n<td" + clasetexto + ">\nEvaluación " + (i+1) + "</td>\n<td" +
clasenota + ">\n" + notas[i] + "\n</td>\n</tr>\n";
}
}
//Para calcular el promedio dividimos la suma de las notas
//entre el número total de notas ingresadas
promedio /= notas.length;
promedio = Math.round(promedio * Math.pow(10,2)) / Math.pow(10,2);
tabla += "<tr>\n<th>\nPromedio\n</th>\n<th class=\"spec nota\">\n" + promedio +
"</th></tr>";
tabla += "</table>";
document.writeln(tabla);