let numeros = [];

while (true) 
{
  let numero = prompt("Ingresa un número:");

  if (numero === null) 
  {
    break;
  }

  numero = parseInt(numero);

  if (!isNaN(numero)) 
  {
    numeros.push(numero);
  }
}

if (numeros.length > 0) 
{
  let maximo = Math.max(...numeros);

  let resultado = document.createElement("p");

  resultado.textContent = "El número más grande es: " + maximo;
  resultado.style.color = "white";
  resultado.style.textAlign = "center";
  resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  resultado.style.fontSize = "18px";

  document.body.appendChild(resultado);
} else 
{
  document.write("No se ingresaron números.");
}