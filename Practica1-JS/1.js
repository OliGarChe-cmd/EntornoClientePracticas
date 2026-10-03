
var nombreVar="Oswaldo";
let nombreLet="Jorge";
const nombreConst="Marco";

let nombresSuma= nombreVar + " , "  + nombreLet + " , " + nombreConst; 
const salida1=document.getElementById("salida1");
salida1.textContent=nombresSuma;

nombreVar="Ruben";
nombreLet="Williams";
nombreConst="Raul"; //Nunca se actualiza al haber un error en el const por intentar cambiarlo, al comentar la linea, se ejecuta sin problema
nombresSuma= nombreVar + " , "  + nombreLet + " , " + nombreConst;

salida1.textContent=nombresSuma;
