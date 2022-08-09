function init(){

    alert("Bienvenido, deberas adivinar el numero aleatorio que tu computadora ha generado.")
    
    //Definicion de variables
    var i = 0, j = 3;//Variable contador de intentos

    //Generando el numero aleatorio
    rndm = Math.ceil(Math.random()*100);
    console.log(rndm);

    while(num != rndm){
        var num = prompt("Ingrese el posible número");
        if(num > rndm){
            alert("El número es mayor al generado.");
        }else if(num < rndm){
            alert("El número es menor al generado.");
        }else if(num == rndm){
            document.getElementById("resultado").innerHTML = "!Felicidades, adivinaste el número¡";
        }
        i++;
    }

    if(num == rndm){
        if(i < 4){
            document.getElementById("txt").innerHTML = "Resultado: Notable";  
         }else if(i < 11){
            document.getElementById("txt").innerHTML = "Resultado: Muy Bien"; 
         }else if(i < 25){
            document.getElementById("txt").innerHTML = "Resultado: Regular"; 
         }else if(i > 25){
            document.getElementById("txt").innerHTML = "Resultado: Pesimo"; 
        }
    }
}

