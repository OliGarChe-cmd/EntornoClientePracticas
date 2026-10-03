var numPar=20;
var mensaje6="";
for(let i=20;i>0;i--){
    numPar-=1;
    if(i%5==0 && i%3==0){
        mensaje6+="FizzBuzz ";
    }else if(i%5==0){
        mensaje6+="Buzz ";
    }else if(i%3==0){
        mensaje6+="Fizz ";
    }
}

const salida6=document.getElementById("salida6");
salida6.textContent=mensaje6;