//Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.

// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.

let formEl = document.querySelector('form');
console.log(formEl);
let inputEl = document.querySelector('#typeInput');
let buttonEl = document.querySelector('#addButton');
let listEl = document.querySelector('.list');
    
let buttonReset = document.querySelector('reset');
let delEl = document.querySelector('.del');

buttonEl.addEventListener('click', function (e) {
    e.preventDefault();
     e.target;
    let liEl = document.createElement('li');
    listEl.appendChild(liEl);
    liEl.style.listStyleType = 'none';
    liEl.style.width = '500px';
    liEl.style.border = '2px solid black';
    liEl.style.backgroundColor = ' rgb(96, 132, 198)';
    liEl.style.borderRadius = '5px';
    liEl.style.padding = '10px';
    liEl.style.marginTop = '10px';
     liEl.style.textWrap ='wrap'
    
    liEl.innerHTML = `${inputEl.value} `
    liEl.addEventListener('click', function (e) {
        liEl.remove();
   })
})

inputEl.ondbclick = function () {
    formEl.reset();
}
