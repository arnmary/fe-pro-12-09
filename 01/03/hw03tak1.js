
//hw03task1: Використовуючи prompt, запросіть у користувача введення числа.
// Перевірте, чи введене число парне чи непарне.
// Виведіть результат з використанням console.log.

let numberValue = prompt('Hello, type your number')

let chackValue = numberValue%2;
// console.log(chackValue);



if (chackValue > 0 ) {
    console.log('Your number is not even'); 
}
else {

    console.log('Your number is even');
    
 }