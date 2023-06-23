//  Creación de los nombres

const Names1 = ["Alejandro", "Sofia", "Mateo", "Valentina", "Gabriel", "Isabella", "Lucas", "Camila", "Daniel", "Victoria"];

const LastName = ["Rodriguez", "García", "López", "Martínez", "González", "Pérez", "Sánchez", "Romero", "Torres", "Ramírez"];

// Obtener elemento del index
var nombreGenerado = document.getElementById("nombre");

// Generar un índice aleatorio
function NombreAleatorio() {
    var LastNameIndex = Math.floor(Math.random()* LastName.length);
    var indiceAleatorio = Math.floor(Math.random() * Names1.length);
    var indiceAleatorio2 = Math.floor(Math.random() * Names1.length);

    // Imprime los nombres
    var nombreAleatorio = Names1[indiceAleatorio] + " " + Names1[indiceAleatorio2] + " " + LastName[LastNameIndex];

    nombreGenerado.textContent = nombreAleatorio;
}





