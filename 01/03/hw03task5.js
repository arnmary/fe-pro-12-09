//hw03task5:Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.


let firstNumberValue = prompt('Enter first number');
let secondNumberValue = prompt('Enter second number');
let thirdNumberValue = prompt('Enter third number');


let maxValue
if (firstNumberValue>=secondNumberValue && firstNumberValue>= thirdNumberValue) {
    console.log(maxValue = firstNumberValue);
}
    else if(secondNumberValue>=firstNumberValue && secondNumberValue>= thirdNumberValue){
console.log(maxValue=secondNumberValue);
    }
else if(thirdNumberValue>=firstNumberValue && thirdNumberValue>=secondNumberValue){
console.log(maxValue =thirdNumberValue);

}
    
 else {
    console.log('cansel operation');
    
}
//  =(`${firstNumberValue>=secondNumberValue && firstNumberValue>=thirdNumberValue}`) ? ('first number'):
//               (`${secondNumberValue>=firstNumberValue && secondNumberValue>=thirdNumberValue}`) ? ('second number'):
//               (`${thirdNumberValue>=firstNumberValue && thirdNumberValue>=secondNumberValue}`) ? ('third number'):
//     console.log(maxValue);

    
 
