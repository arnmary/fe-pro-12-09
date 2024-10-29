//1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір

function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
    
}
let buttonEl = document.querySelector('.click');
console.log(buttonEl);
let pEl = document.querySelector('.change');
console.log(pEl);



buttonEl.onclick = function () {
    
//    pEl.style.backgroundColor = 'pink';
   pEl.style.backgroundColor = getRandomColor() ;
}



//2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

let changeSizeEl = document.querySelector('.size');
console.log(changeSizeEl);

changeSizeEl.ondblclick = function () {
    changeSizeEl.style.fontSize = '100px';
    changeSizeEl.style.color = getRandomColor();
  
} 

let imageEl = document.querySelector('.image');
// imageEl.ondblclick = function () {
//     imageEl.style.width ='30%';
//     imageEl.style.height = '30%';
// }

// console.log(imageEl);
imageEl.ondblclick = function () {
//     let currentWidth = imageEl.clientWidth;
//     let currentHeight = imageEl.clientHeight;
//     console.log(`Current w and h client ${currentWidth} and ${currentHeight}`);
//     imageEl.style.width = `${(currentWidth * 2)}px`;
//     imageEl.style.height = `${(currentHeight * 2)}px`;

    const computedStyle = getComputedStyle(imageEl);
    console.log(computedStyle);
    let currentWidth = parseFloat(computedStyle.width);
    let currentHeight =parseFloat(computedStyle.height);
    
        imageEl.style.width = `${(currentWidth * 2)}px`;
    imageEl.style.height = `${(currentHeight * 2)}px`;

    
    
}



