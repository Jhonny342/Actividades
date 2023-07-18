function esPalindromo(palabra) 
{
    // Eliminar espacios y convertir a minúsculas
    palabra = palabra.toLowerCase().replace(/\s/g, '');
  
    // Obtener la versión invertida de la palabra
    let invertida = palabra.split('').reverse().join('');
  
    // Verificar si la palabra es un palíndromo
    if (palabra === invertida) 
    {
      return true;
    } else 
    {
      return false;
    }
  }
  
  let palabra = prompt("Ingresa una palabra o frase:");

  if (esPalindromo(palabra)) 
  {
    let resultado = document.createElement("p");
    resultado.textContent = palabra + ". Es un palíndromo.";
    resultado.style.color = "white";
    resultado.style.textAlign = "center";
    resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
    resultado.style.fontSize = "18px";
    document.body.appendChild(resultado);
  } 
  else 
  {
    let resultado = document.createElement("p");
    resultado.textContent = palabra + ". No es un palíndromo.";
    resultado.style.color = "white";
    resultado.style.textAlign = "center";
    resultado.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
    resultado.style.fontSize = "18px";
    document.body.appendChild(resultado);
  }