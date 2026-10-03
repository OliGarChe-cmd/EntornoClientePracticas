let mensaje9 = "";

for (let i = 20; i >= 0; i--) {
    // Repetimos espacios según la fila en la que estemos y añadimos el asterisco + salto de línea
    mensaje9 += "* ".repeat(i) + "\n" ;
}

const salida9 = document.getElementById("salida9");
salida9.textContent = mensaje9;