//hw03task10:
// Зворотний лічильник:
// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.



for (let i = 10; i >0; i--) {
    console.log(`Hello ${i}`);
    if (i>0) {
        continue;
    }
    console.log(`Break vaalue${i}`);
    
    
}