/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: Tempertatura.js *
* Uso: Calcular la tempertura de celsius a farhenheit. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
const Farhent = 32;
var grado = prompt('Introduzca los grados celsius que desea transformar:','');
var farhenth;
if( isNaN(grado) ) {
    alert('Error');
}else{
    farhenth = (grado*9/5)+Farhent;
    

document.write("<header><h1>Los grados de celsius a fahrenheit son: " + farhenth + "</h1><hr/><br /></header>");
}
var imagen = document.getElementById("imagen");
    if(farhenth = 0 && farhenth <= 90 ){
        imagen.src = "/IMG/Guia1-IMG/2.jpg"
    }else if(farhenth = 91 && farhenth <= 180 ){
        imagen.src = "/IMG/Guia1-IMG/1.jpg"
    }else if(farhenth = 91 && farhenth <= 180 ){
        imagen.src = "/IMG/Guia1-IMG/3.jpg"
    }else{
        imagen.src = "/IMG/Guia1-IMG/4.jpg"
    }