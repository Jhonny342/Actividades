let numero = prompt("Ingresa un número:");

let numeroEntero = parseInt(numero);

if (!isNaN(numeroEntero)) 
{
  // Calcular la suma de los dígitos
  let suma = 0;
  let digitos = numeroEntero.toString().split('');
  for (let i = 0; i < digitos.length; i++) {
    suma += parseInt(digitos[i]);
  }

  let resultado = document.createElement("p");
  resultado.textContent = "La suma de los dígitos de " + numero + " es: " + suma;
  resultado.style.color = "white";
  resultado.style.textAlign = "center";
  resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  resultado.style.fontSize = "18px";
  document.body.appendChild(resultado);
} 
else 
{
  let resultado = document.createElement("p");
  resultado.textContent = "Número inválido. Por favor, ingresa un número válido.";
  resultado.style.color = "white";
  resultado.style.textAlign = "center";
  resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  resultado.style.fontSize = "18px";
  document.body.appendChild(resultado);
}
