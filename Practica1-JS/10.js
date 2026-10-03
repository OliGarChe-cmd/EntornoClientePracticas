let mensaje10 = "";

for (let i = 0; i <= 20; i++) {
    // Repetimos espacios según la fila en la que estemos y añadimos el asterisco + salto de línea
    mensaje10 += "* ".repeat(i) + "\n" ;
}

const salida10 = document.getElementById("salida10");
salida10.textContent = mensaje10;