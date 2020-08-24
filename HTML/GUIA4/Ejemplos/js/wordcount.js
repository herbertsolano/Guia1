//Máximo número de caracteres que se permiten
var maxchars = 140;
function init(){
 var textarea = document.getElementById("message");
 var inputtext = document.getElementById("count");
 var countertext = document.getElementById("maximum");
 if(textarea.addEventListener){
 textarea.addEventListener("keydown", function(){
 textcounter(this, countertext);
 }, false);
 }
 else if(textarea.attachEvent){
 textarea.attachEvent("onkeydown", function(){
 textcounter(this, countertext);
 });
 }
 if(textarea.addEventListener){
    textarea.addEventListener("keyup", function(){
    wordcount(this, inputtext);
    textcounter(this, countertext);
    }, false);
    }
    else if(textarea.attachEvent){
    textarea.attachEvent("onkeyup", function(){
    wordcount(this, document.frmpalabras.conteo);
    textcounter(document.frmpalabras.maximo, document.frmpalabras.maximo);
    });
    }
    if(inputtext.addEventListener){
    inputtext.addEventListener("keyup", function(){
    wordcount(document.frmpalabras.mensaje, this);
    textcounter(document.frmpalabras.maximo, document.frmpalabras.maximo);
    });
    }
    else if(inputtext.attachEvent){
    inputtext.attachEvent("onkeyup", function(){
    wordcount(document.frmpalabras.mensaje, this);
    textcounter(document.frmpalabras.maximo, document.frmpalabras.maximo);
    });
    }
   }
   function wordcount(w,x){
    var y = w.value;
    var r = 0;
    a = y.replace(/\s/g,' ');
    a = a.split(' ');
    for(z=0; z<a.length; z++){
    if(a[z].length > 0) r++;
    }
    x.value = r;
   }
   function textcounter(textField, showCountField){
    if(textField.value.length > maxchars){
    textField.value = textField.value.substring(0, maxchars);
    }
    else{
    //Muestra en la caja de texto el número de caracteres
    //que resta para llegar al máximo permitido
    showCountField.value = maxchars - textField.value.length;
    }
   }
   if(window.addEventListener){
    window.addEventListener("load", init, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", init);
   }
   