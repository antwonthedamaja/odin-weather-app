function createNode(element, class1, id, text) {
    const newElement = document.createElement(element);
    if (class1) newElement.classList.add(class1);
    if (id) newElement.setAttribute("id", id);
    if (text) newElement.innerHTML = text;
    return newElement;
}

export async function screenPopulate(data) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createNode('div', '', 'container', ''));
    const container = document.querySelector('#container');
    const fahrenheit = document.querySelector('#fahrenheit');
    if (fahrenheit.checked) {
        container.appendChild(createNode('div', '', 'temp', `${data.current.temp_f}°F`));
        container.appendChild(createNode('div', '', 'feel', `Feels like: ${data.current.feelslike_f}°F`));
    } else {
        container.appendChild(createNode('div', '', 'temp', `${data.current.temp_c}°C`));
        container.appendChild(createNode('div', '', 'feel', `Feels like: ${data.current.feelslike_c}°C`));
    }
    container.appendChild(createNode('div', '', 'description', `${data.current.condition.text}`));
    container.appendChild(createNode('div', '', 'time', `${data.location.localtime}`));
    container.appendChild(createNode('div', '', 'humidity', `Humidity: ${data.current.humidity}%`));
    container.appendChild(createNode('div', '', 'clouds', `Cloud: ${data.current.cloud}%`));
    container.appendChild(createNode('div', '', 'city', `${data.location.name}`));
    container.appendChild(createNode('div', '', 'region', `${data.location.region}`));
    container.appendChild(createNode('div', '', 'rain', `Rain: ${data.current.precip_in} inches`));
}