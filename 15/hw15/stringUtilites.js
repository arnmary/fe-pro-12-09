// Завдання 3: Імпорт утиліти для роботи з текстом
// Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в uppercase і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.

let mySimpleString = document.querySelector('h1');
let pEl = document.querySelector('p');

  function uppgradeText(element) {
    let timeFn = setTimeout(function () {
      let upgredString =new Promise (function(resolve){
        resolve(element.textContent.toUpperCase());
      });
      upgredString.then(function(value){
        element.innerHTML =value;
      }) .catch(function(error){
        console.log(error);
        
      });
    },1000);
}
uppgradeText()

// function redColorText(element) {
//     let timeFn = setTimeout(function () {
//       element.style.color = 'red'


//     },10000)
// }
// redColorText()

export{uppgradeText}