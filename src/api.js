// Async function-based

export async function handleSearchAsync() {
    const search = document.querySelector('#search');
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e753ce5d8bbe498280205133233103&q=${search.value}`, {mode: 'cors'});
    const weather = await response.json();
    return weather;
}

// Promise-based

// export function handleSearchPromise() {
//     fetch(`https://api.weatherapi.com/v1/current.json?key=e753ce5d8bbe498280205133233103&q=${search.value}`, {mode: 'cors'})
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//     })
// }