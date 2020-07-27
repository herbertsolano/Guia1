function inicializar() {
    var numeros = new Array();
    var dato, reves;
    var i, max, temp, contenido = "", tdelement;

    do {
        max = prompt("Cuántos números va a ingresar (valor entero):", "");
        if (isNaN(max)) {
            alert("El valor digitado no es numérico.");
            continue;
        }
        if (max < 2) {
            alert("El arreglo debe ser de dimensión 2 o superior");
        }
    } while (isNaN(max) || max < 2);
    for (i = 0; i < max; i++) {
        numeros[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
    }
    do{
        dato = prompt("Como quiere ordenar los numeros\n1) Ascendente\n2) Descendente");
        if (dato != 1 && dato != 2){
            alert("Error, eliga una opción correcta");
        }
    }while(dato != 1 && dato != 2);
    var datos = document.getElementById('datos');
    with (document) {
        
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        for (i = 0; i < max - 1; i++) {
            for (j = i + 1; j < max; j++) {
                if (numeros[i] > numeros[j]) {
                    temp = numeros[j];
                    numeros[j] = numeros[i];
                    numeros[i] = temp;
                }
            }
        }
        switch (dato) {
            case '1':
                contenido += "<h2>Números ordenados ascendentemente</h2>\n";
                contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                for (i = 0; i < max; i++) {
                    contenido += numeros[i];
                }
                contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
                break;
            case '2':
                contenido += "<h2>Números ordenados descendentemente</h2>\n";
                contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                for (i = max - 1; i >= 0; i--) {
                    contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
                }
                contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
                break;
        }
    }
    datos.innerHTML = contenido;
    tdelement = document.getElementsByClassName('Off');

}
window.onload = inicializar;