var precio = [];
var nombre = [];
var tabla = "", i, j;
var v = 0, name, monto, res
var prom=0 ;
do {
    v++;
    name = prompt('Ingrese en nombre del producto', '');
    monto = prompt('Ingrese el monto del producto', '');
    res = prompt('Desea ingresar otro producto?\n1)Si \n2)No');
    if (name != 0) {
        nombre.push(name);
    }
    if (monto != 0) {
        precio.push(monto)
    }
} while (res != 2);
tabla += "<table id=\"mytable\">\n";
tabla += "<tr>\n<th>\nProducto\n</th>\n";
tabla += "<th class=\"specalt\">Precio\n</th>\n</tr>\n";

 for (i = 0; i < v; i++) {
    clasetexto = ' class="alt"';
    if (i % 2 == 1) {
        clasenota = ' class="alt nota"';
        tabla += "<tr>\n<td" + clasetexto + ">\n" + nombre[i] + "</td>\n<td" + clasenota + ">\n" + precio[i] + "\n</td>\n</tr>\n";
    }
    else {
        clasenota = ' class="alt nota"';
        tabla += "<tr>\n<td" + clasetexto + ">\n" + nombre[i] + "</td>\n<td" + clasenota + ">\n" + precio[i] + "\n</td>\n</tr>\n";
    }
}
for (let i = 0; i < precio.length; i++) {
    prom +=precio[i]*1;   
}
tabla += "<tr>\n<th>\nEl total de los productos\n</th>\n<th class=\"spec nota\">\n" + prom + "</th></tr>";
tabla += "</table>"; 

document.writeln(tabla);