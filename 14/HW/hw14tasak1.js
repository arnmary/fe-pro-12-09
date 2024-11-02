//Перетворення тексту: Створіть функцію, яка приймає рядок і повертає promise. promise має перетворювати рядок у верхній регістр після 2 секундної затримки. Використайте setTimeout для створення затримки. Після завершення, використайте then для виведення результату і catch для обробки помилок.

let mySimpleString = document.querySelector('h1');

let timeFn =setTimeout(function(){
    let upgredString = new Promise (function(resolve, reject){
    resolve(mySimpleString.textContent.toUpperCase());
  
});
upgredString.then(function(value){
    console.log(value);
    mySimpleString.innerHTML=value;
}).catch(function(error){
    console.log(error);
    
});


},2000);

// Напишіть функцію, яка приймає два числа як аргументи і повертає promise. promise має вирішуватися з повідомленням про те, яке з чисел більше, або відхилятися, якщо числа рівні, з повідомленням "Числа рівні".


let x = 3;
let y = 20;

let comparNumber = new Promise(function(resolve, reject) {
    if(x !== y){
         resolve(Math.max(x,y));
    }
    else{
        reject('Числа рівні');
    }
   
})
comparNumber.then(function(value){
    console.log(value);
    
}).catch(function(error){
    console.log(error);
    
});

// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).
// https://jsonplaceholder.typicode.com/users
// Виведіть імена та електронні адреси користувачів  на веб-сторінку.
let contEl = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())

.then(usersData=>{
    usersData
   usersData.forEach(value => {
        let pEl=document.createElement ('p');
          pEl.innerHTML = `Name:<strong> ${value.username} </strong> email: ${value.email}`
 contEl.appendChild(pEl);
    });

   
})





