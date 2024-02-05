const addProduct = () => {

    const ul = document.querySelector('ul')
    const input = document.querySelector('input')
    const li = document.createElement('li')
    li.innerText = input.value
    ul.appendChild(li)

    const checkbox = document.createElement('input')
    li.appendChild(checkbox)
    checkbox.type = 'checkbox'
};

