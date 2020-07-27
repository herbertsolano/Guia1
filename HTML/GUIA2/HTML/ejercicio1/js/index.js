var un=1, de=1, ce=0, num, par, impar, sun, vale;

do {
    num = parseInt(prompt('Ingrese un numero'));    //Verificar que se ingrese un dato numérico
    if (isNaN(num)) {
        alert("El valor digitado no es numérico.");
        continue;
    }
    //Verificar que el valor ingresado sea mayor o igual que 2
    if (num < 9) {
        alert("Ingrese un numero mayor");
    }
} while (isNaN(num) || (num < 9 && num>999));

//numeros de 2 cifras
if(num>9 && num<99){
    de=parseInt(num/10);
    un= parseInt(num-(de*10));
    document.write("El numero ingresado es: "+num+"<br>");
    document.write("1) El numero ingresado tiene 2 cifras<br>");
    if((de %2 == 0 && un %2 == 0)){
        document.write("2) El numero ingresado tiene 0 numeros impares<br>");
        document.write("3) El numero ingresado tiene 2 numeros pares<br>");
        par=de+un;
        impar=0;
    }
    else if((de %2 != 0) && (un %2 != 0)){
        document.write("2)El numero ingresado tiene 2 numeros impares<br>");
        document.write("3)El numero ingresado tiene 0 numeros pares<br>");
        impar=de+un;
        par=0;   
    }               
    else if((de %2 != 0 && un %2 == 0) || (de %2 == 0 && un %2 != 0)){
        
        document.write("2) El numero ingresado tiene 1 numeros impares<br>");
        document.write("3) El numero ingresado tiene 1 numeros pares<br>");
        if(de % 2 != 0 && un % 2 == 0){
            impar=de+0;
            par=un+0; 
            
        }
        else if(de % 2 == 0 && un % 2 != 0){
            impar=un+0;
            par=de+0;
            
        }
    } 
    sum=de+un;

    document.write("4) La suma de los numeros pares es: "+par+"<br>");
    document.write("5) La suma de los numeros impares es: "+impar+"<br>");
    document.write("6) La suma de todos los digitos es: "+sum+"<br>");
    if(de<un){
        document.write("7) El numero mayor es es: "+un+"<br>");
        document.write("8) El numero menor es es: "+de+"<br>");
    }
    else if(de>un){
        document.write("7) El numero mayor es es: "+de+"<br>");
        document.write("8) El numero menor es es: "+un+"<br>");
    }
}

else if(num>99 && num<999){
    ce=parseInt(num/100);
    de=parseInt((num-(ce*100))/10);
    un= parseInt(num-(ce*100+de*10));
    document.write("El numero ingresado es: <strong>"+num+"</strong><br>");
    document.write("1) El numero ingresado tiene 3 cifras<br>");
    if(ce%2==0 && de %2 == 0 && un %2 == 0 ){
        document.write("2) El numero ingresado tiene 0 numeros impares<br>");
        document.write("3) El numero ingresado tiene 3 numeros pares<br>");
        impar=0;
        par=ce+de+un;
    }
    else if(ce%2 != 0 && de %2 != 0 && un %2 != 0 ){
        document.write("2) El numero ingresado tiene 3 numeros impares<br>");
        document.write("3) El numero ingresado tiene 0 numeros pares<br>");
        impar=ce+de+un;
        par=0;
    }
    else if(ce%2 == 0 && de %2 != 0 && un %2 != 0 || ce%2 != 0 && de %2 == 0 && un %2 != 0 || ce%2 != 0 && de %2 != 0 && un %2 == 0){
        document.write("2) El numero ingresado tiene 2 numeros impares<br>");
        document.write("3) El numero ingresado tiene 1 numeros pares<br>");
        if(ce%2 == 0 && de %2 != 0 && un %2 != 0){
            par=ce;
            impar=de+un;
        }
        else if(ce%2 != 0 && de %2 == 0 && un %2 != 0){
            par=de;
            impar=ce+un;
        }
        else if(ce%2 != 0 && de %2 != 0 && un %2 == 0){
            par=un;
            impar=ce+de;
        }
    }
    else if(ce%2 == 0 && de %2 == 0 && un %2 != 0 || ce%2 == 0 && de %2 != 0 && un %2 == 0 || ce%2 != 0 && de %2 == 0 && un %2 == 0){
        document.write("2) El numero ingresado tiene 1 numeros impares<br>");
        document.write("3) El numero ingresado tiene 2 numeros pares<br>");
        if(ce%2 == 0 && de %2 == 0 && un %2 != 0){
            impar=un;
            par=ce+de;
        }
        else if(ce%2 == 0 && de %2 != 0 && un %2 == 0){
            impar=de;
            par=ce+un;
        }
        else if(ce%2 != 0 && de %2 == 0 && un %2 == 0){
            impar=ce;
            par=de+un;
        }

    }
    sum=ce+de+un;
    document.write("4) La suma de los numeros pares es: "+par+"<br>");
    document.write("5) La suma de los numeros impares es: "+impar+"<br>");
    document.write("6) La suma de todos los digitos es: "+sum+"<br>");
    if(ce > de && de > un){
        document.write("7) El numero mayor es es: "+ce+"<br>");
        document.write("8) El numero menor es es: "+un+"<br>");
    }
    else if(ce>un && un > de){
        document.write("7) El numero mayor es es: "+ce+"<br>");
        document.write("8) El numero menor es es: "+de+"<br>");
    }
    else if(de>ce && ce > un){ 
        document.write("7) El numero mayor es es: "+de+"<br>");
        document.write("8) El numero menor es es: "+un+"<br>");
    }
    else if(de>un && un > ce){ 
        document.write("7) El numero mayor es es: "+de+"<br>");
        document.write("8) El numero menor es es: "+ce+"<br>");
    }
    else if(un>ce && ce > de){ 
        document.write("7) El numero mayor es es: "+un+"<br>");
        document.write("8) El numero menor es es: "+de+"<br>");
    }
    else{
        document.write("7) El numero mayor es es: "+un+"<br>");
        document.write("8) El numero menor es es: "+ce+"<br>");
    }
}
document.write("</p>");
document.write("</article>");
document.write("</section>");