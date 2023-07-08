// Petición GET

// Sin parámetros a una API externa.
fetch('https://api.mercadolibre.com/sites/MLA/search?q=malabares')
    .then(res => res.json())
    .then(res => console.log(res.results))
    .catch(err => console.error(err));

//Sin parámetros a un fichero local
fetch('biblioteca.json')
    .then(res => res.json())
    .then(res => console.log(data.titulo));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Petición POST

fetch('http://localhost:3009/users',
    {
        method: 'POST',
        headers:
        {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: 'pp@pp.com', password: '123' })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Petición PUT

fetch('http://localhost:3005/users/1',
    {
        method: 'PUT',
        headers:
        {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: 'ññññ', password: 'ññññ' })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Petición Delete

fetch('http://localhost:3005/users/2',
    {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => 
    {
        console.log(res);
    });