let rangoMin = parseInt(prompt("Ingresa un número mínimo:"));
let rangoMax = parseInt(prompt("Ingresa un número máximo:"));

// Verificar si los valores ingresados son válidos
if (!isNaN(rangoMin) && !isNaN(rangoMax) && rangoMin < rangoMax) 
{
  // Generar un número aleatorio dentro del rango
  let numeroAleatorio = Math.floor(Math.random() * (rangoMax - rangoMin + 1)) + rangoMin;

  // Mostrar el resultado en pantalla
  let resultado = document.createElement("p");
  resultado.textContent = "El número aleatorio dentro del rango [" + rangoMin + ", " + rangoMax + "] es: " + numeroAleatorio;
  resultado.style.color = "white";
  resultado.style.textAlign = "center";
  resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  resultado.style.fontSize = "18px";
  document.body.appendChild(resultado);
} 
else 
{
  let resultado = document.createElement("p");
  resultado.textContent = "Rango inválido. Por favor, ingresa valores numéricos válidos y asegúrate de que el número mínimo sea menor al número máximo.";
  resultado.style.color = "white";
  resultado.style.textAlign = "center";
  resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  resultado.style.fontSize = "18px";
  document.body.appendChild(resultado);
}
