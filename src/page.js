function createNode(element, class1, id, text) {
    const newElement = document.createElement(element);
    if (class1) newElement.classList.add(class1);
    if (id) newElement.setAttribute("id", id);
    if (text) newElement.innerHTML = text;
    return newElement;
}

export async function screenPopulate(data) {
    const container = document.querySelector('#container');
    const fahrenheit = document.querySelector('#fahrenheit');
    container.innerHTML = '';
    if (fahrenheit.checked) {
        container.appendChild(createNode('div', '', 'temp', `${data.current.temp_f}°F`));
    } else {
        container.appendChild(createNode('div', '', 'temp', `${data.current.temp_c}°C`));
    }
    
}