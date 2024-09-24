//hw03task2:Використовуючи prompt, запитайте у користувача його вік.
// Перевірте, чи вік менше 18 років.
// Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.

let ageValue = prompt('enter your age');

if(ageValue>=18){
console.log('Welcome to our resource');
}
else{
    console.log('Sorry,come back when you turn 18');
    
}
