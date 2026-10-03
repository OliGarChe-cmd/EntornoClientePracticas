var contador2=0;

for(let i=0; i<=50;i++){
    if(i%4==0){
    contador2+=i;
    }
}

const salida5=document.getElementById("salida5");
salida5.textContent=contador2;