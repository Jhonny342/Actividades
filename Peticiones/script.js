// Obtener una referencia al elemento de lista en el HTML
const apiDataList = document.getElementById("apiDataList");

// Función para mostrar los datos en la página HTML
function mostrarDatosEnHTML(data) 
{
    // Limpiar la lista antes de agregar nuevos elementos
    apiDataList.innerHTML = "";

    // Recorrer los datos y crear elementos de lista
    data.forEach(item => 
    {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        apiDataList.appendChild(listItem);
    });
}

// Realizar la solicitud a la primera API
fetch("https://api.mercadolibre.com/sites/MLA/search?q=ordenadores")
    .then(res => res.json())
    .then(res => 
    {
        // Obtener los resultados de la API
        const results = res.results;

        // Obtener solo los nombres de los productos
        const productNames = results.map(product => product.title);

        // Mostrar los nombres en la página HTML
        mostrarDatosEnHTML(productNames);
    })
    .catch(err => console.error(err));

// Realizar la solicitud a la segunda API
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(res => 
    {
        // Obtener el nombre del Pokémon
        const pokemonName = res.name;

        // Mostrar el nombre en la página HTML
        mostrarDatosEnHTML([pokemonName]);
    })
    .catch(err => console.error(err));