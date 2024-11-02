// 1 Знаходження всіх великих літер в тексті і збереження їх в масив

let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let bigLettersRegex =/[A-Z]/g;
let anyBigLetters = textStr.match(bigLettersRegex);
console.log(anyBigLetters);



// 2 Вибір числових значень з строки
let operation = "5 плюс 7 = 3";
console.log(operation);

let numberRegEx =/\d/g;
let anyNumbers = operation.match(numberRegEx)

console.log(anyNumbers);




// 3  Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання
let textStrFiveLetters = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let wordsRegEx = /\w{5}/g;

let worldTest = textStrFiveLetters.match(wordsRegEx);
console.log(worldTest);


// 4 Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage. Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

document.querySelector('.saveButton').addEventListener('click',function(e){
    e.preventDefault();
    let inputEl =document.querySelector('#text').value;

      window.sessionStorage.setItem('inputEl',inputEl);
})
document.querySelector('.showText').addEventListener('click',function (e){
    e.preventDefault();
 let textSession = window.sessionStorage.getItem('inputEl');

 let infoP = document.querySelector('.textInfo') ;
 infoP.innerText = textSession ; 
 console.log(infoP);
})







// 5 Створіть форму з полями email та password  та кнопкою відправити. Та напишіть функції які перевіряють дані на валідність.  Пароль мінімум 8 символів і повинен містити цифрові значення та літери в верхньому регістрі.
// Якщо дані невалідні не заповненні відповідно то кнопка відправити має стан disabled

// let simpleEmail ='teSt34@gmail.com';
// let simpleEmail ='teSt34gmail.com';
let simpleEmail = document.querySelector('#email');
let emailBt = document.querySelector('.sendEmail');
let showMessage =document.querySelector('.message');

function verifyEmail(){
    let emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let testEmal = emailRegex.test(simpleEmail.value);
if (testEmal) {
  
    showMessage.innerText= 'Your email valid';
    emailBt.disabled =false;
}
else{

showMessage.innerText = 'Email повинен містити великі та маленькі латинські букви, а також . та @'
     emailBt. disabled= true;
}
}
emailBt.addEventListener('click', verifyEmail);




// let simplePassword ='Asfg8gghgh'
// console.log(simplePassword);
let simplePassword = document.querySelector('#password');
let passBt =document.querySelector('.sendPass')
let infoP = document.querySelector('.info')

function verifyPass() {
    let passRegex = /[A-Za-z0-9]{8,}/g;
let testPass = passRegex.test(simplePassword.value);

if (testPass) {
   
    infoP.innerText ='Your password valid'
     passBt.disabled= false;
}
else{

    infoP.innerText ='Ваш пароль не валідний. Пароль повинен містити великі та маленькі латинські букви та цифри.'
     passBt.disabled =true;
}
}

passBt.addEventListener('click',verifyPass);

document.querySelector('.conteiner').addEventListener('click',function(e){
    e.preventDefault();
})