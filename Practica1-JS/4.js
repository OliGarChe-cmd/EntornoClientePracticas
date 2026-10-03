var nota= 9;
var mensaje;
var mensaje2;
if(nota>=9){
mensaje="Sobresaliente! FELICIDADES!";
}else if(nota<=8 && nota>=7){
    mensaje="notable";
}else if(nota<=6 && nota>=5){
    mensaje="Aprobado"
}else if(nota<5){
    mensaje="Suspenso"
}

const salida4=document.getElementById("salida4");
salida4.textContent=mensaje;