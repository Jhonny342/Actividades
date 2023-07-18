let numero = parseInt(prompt("Ingresa un número:"));

// Verificar si el número es válido
if (!isNaN(numero) && numero >= 0) 
{
  // Generar la secuencia de Fibonacci hasta el número dado
  let secuencia = [];
  let num1 = 0, num2 = 1;
  while (num1 <= numero) 
  {
    secuencia.push(num1);
    let temp = num2;
    num2 = num1 + num2;
    num1 = temp;
  }

  let resultado = document.createElement("p");
  resultado.textContent = "La secuencia de Fibonacci del número " + numero + " es: " + secuencia.join(", ");
  resultado.style.color = "white";
  resultado.style.textAlign = "center";
  resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  resultado.style.fontSize = "18px";
  document.body.appendChild(resultado);
} 
else 
{
  let resultado = document.createElement("p");
  resultado.textContent = "Número inválido. Por favor, ingresa un número entero no negativo.";
  resultado.style.color = "white";
  resultado.style.textAlign = "center";
  resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  resultado.style.fontSize = "18px";
  document.body.appendChild(resultado);
}
