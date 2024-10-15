//3)   Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];
console.log(elementsArray);


// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію

let myContainer= document.querySelector('.container');
console.log(myContainer);

function addElements(value) {
   for (let value of elementsArray) {
    let newElement = document.createElement(value.tag);
    newElement.innerHTML = value.text;
    return newElement;  
 
   }
}
addElements('p','div','span');


elementsArray.forEach(newElement => {
   
let myElement =addElements(newElement)
 myContainer.appendChild(myElement);
});


