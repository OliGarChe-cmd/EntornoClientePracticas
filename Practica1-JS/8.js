let mensaje8 = "";

for (let i = 20; i > 0; i--) {
    // Repetimos espacios según la fila en la que estemos y añadimos el asterisco + salto de línea
    mensaje8 += " ".repeat(i) + "*\n" ;
}

const salida8 = document.getElementById("salida8");
salida8.textContent = mensaje8;