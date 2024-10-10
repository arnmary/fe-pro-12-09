//Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

// Виберіть ці елементи за допомогою 

// getElementById

let firstItemId = document.getElementById('top');
console.log(firstItemId);
let secondItemId = document.getElementById('block');
console.log(secondItemId);
let thirdItemId =document.getElementById('wrap');
console.log(thirdItemId);

// getElementsByClassName

let firstItemClass = document.getElementsByClassName('navigation');
console.log(firstItemClass);

let secondItemClass =document.getElementsByClassName('first-block');
console.log(secondItemClass);

let thirdItemClass = document.getElementsByClassName('first-wrapper');
console.log(thirdItemClass);

// getElementsByTagName

let headerTag = document.getElementsByTagName(' header');
let sectionTag = document.getElementsByTagName('section');
let divTag =document.getElementsByTagName('div');
console.log(divTag);






// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть
// - перший елемент списку

let firstId = document.querySelector('#first-item');
console.log(firstId);


// - останній елемент списку
let lastItem= document.querySelector('#fifth-item');
console.log(lastItem);

// - 3 елемент списку
let thirdItem =document.querySelector('li:nth-child(3)');
console.log(thirdItem);


// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив

let [...allItems] = document.querySelectorAll('li');
console.log(allItems);




// Створіть на сторінці елемент який вибирається ціми селекторами
let listItems1 = document.querySelectorAll('ul.nav > li');
console.log(listItems1);


let listItem = document.querySelectorAll('li:nth-child(2)');

console.log(listItem);
