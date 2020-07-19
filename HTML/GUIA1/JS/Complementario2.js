var celcius = prompt("Ingrese la temperatura en Cº:", "");
var Fahrenheit;
var imagen = document.getElementById("foto");
Fahrenheit = (celcius*(9/5))+32;
document.write("<header><h1>Temperatura en Fº: " + Fahrenheit + "</h1><hr/><br /></header>");
if(Fahrenheit > 48 && Fahrenheit <= 104){
    imagen.src = "../IMG/3.jpg";
}
else if(Fahrenheit > 104){
    imagen.src = "../IMG/4.jpg";
}
else if(Fahrenheit > 0 && Fahrenheit <= 48){
    imagen.src = "../IMG/2.jpg";
}
else if(Fahrenheit <= 0){
    imagen.src = "../IMG/1.png";
}