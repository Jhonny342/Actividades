var edad = prompt("Ingresa tu edad:");

if (parseInt(edad) >= 18) 
{
    alert("Ya puedes conducir");
}
else 
{
    alert("No puedes conducir, ya que eres menor de edad.");
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var calificacion = prompt("Ingresa tu calificación (número): ");

if (isNaN(parseInt(calificacion))) 
{
    alert("Solo se permiten valores numéricos.");
}
else 
{
    var valorNota = parseInt(calificacion);

    if (valorNota === 0 || valorNota === 1 || valorNota === 2 || valorNota === 3) 
    {
        alert("Muy deficiente");
    }
    else if (valorNota === 4 || valorNota === 5) 
    {
        alert("Insuficiente");
    }
    else if (valorNota === 6 || valorNota === 7) 
    {
        alert("Suficiente");
    }
    else if (valorNota === 8) 
    {
        alert("Bien");
    }
    else if (valorNota === 9 || valorNota === 10) 
    {
        alert("Sobresaliente");
    } 
    else 
    {
        alert("El valor de la calificacion no es válido.");
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var guion = [];

while (true) 
{
    var text = prompt("Ingresa un texto: ");
    if (text === null) {
        break;
    }
    guion.push(text);
}

var print = guion.join("-");
alert("Texto en forma de cadenas: " + print);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
while (true) 
{
    var numeroStr = prompt("Ingresa el número de DNI:");

    if (numeroStr === null) {
        break;
    }

    var numero = parseInt(numeroStr);

    if (isNaN(numero)) {
        alert("El valor ingresado no es un número válido. Por favor, intente nuevamente.");
        continue;
    }

    if (numero < 0 || numero > 99999999) {
        alert("El número de DNI debe estar entre 0 y 99999999. Por favor, intente nuevamente.");
        continue;
    }

    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var indice = numero % 23;
    var letra = letras.charAt(indice);

    alert("La letra correspondiente al número de DNI " + numero + " es: " + letra);
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------



