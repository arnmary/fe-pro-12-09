//Завдання з інпутами
// Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

let formEl = document.querySelector('form');

let amontEl = document.querySelector('#amount');
console.log(amontEl);
let courseEl = document.querySelector('#course');
console.log(courseEl);
let resultEl = document.querySelector('.getResult');

document.addEventListener('click', function (e) {
    e.preventDefault;
    resultEl.innerText =`${amontEl.value * courseEl.value} `;
})


console.log(formEl);
console.log([...formEl]);