function init(){
    var fileinput = document.getElementById("archivo");
    var upload = document.getElementById("upload");
    if(fileinput.addEventListener){
        fileinput.addEventListener("change", function(){
            setvalue(document.frmfile.archivo);
            }, false);
            }
            else if(fileinput.attachEvent){
            fileinput.attachEvent("onchange", function(){
            setvalue(document.frmfile.archivo);
            });
            }
            if(upload.addEventListener){
            upload.addEventListener("click", function(){
            submitFile(document.frmfile.archivo);
            }, false);
            }
            else if(upload.attachEvent){
            upload.attachEvent("onclick", function(){
            submitFile(document.frmfile.archivo);
            });
            }
           }
           function submitFile(upload){
            var archivo = document.frmfile.archivo.value;
            if(archivo == null || archivo == "" || archivo.length == 0){
            alert("No se ha seleccionado ningún archivo para subir al servidor.");
            return false;
            }
            if(imgURL(upload.value)){
            alert("El archivo " + upload.value + " es un archivo de imagen válido.");
            return true;
            }
            alert("El archivo no es del tipo requerido.");
            return false;
           }
           function setvalue(fileInput){
            if(imgURL(fileInput.value)){
            document.frmfile.urlarchivo.value = fileInput.value;
            }
            else {
            alert("El archivo que intenta subir no es del tipo requerido");
            return false;
            }
           }
           function imgURL(url){
            var re;
            if(/[Ff]irefox/.test(navigator.userAgent)){
            re = /^[0-9a-zA-Z ... ]+\.(jpg|png|gif)$/i;
            }
            else{
            re = /(?:[\w]\:|\\)(\\[a-z_\-\s0-9\.]+)+\.(jpg|png|gif)$/i;
            }
            if(re.test(url)){
            return true;
            }
            return false;
           }
           if(window.addEventListener){
            window.addEventListener("load", init, false);
           }
           else if(window.attachEvent){
            window.attachEvent("onload", init);
        }
        