let mensaje7 = "";

for (let i = 0; i < 20; i++) {
    // Repetimos espacios según la fila en la que estemos y añadimos el asterisco + salto de línea
    mensaje7 += " ".repeat(i) + "*\n";
}

const salida7 = document.getElementById("salida7");
salida7.textContent = mensaje7;