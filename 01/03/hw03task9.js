//hw03task9:
// Підрахунок суми парних чисел:
// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).

let counter = 0;
let lastCounter = 20;
let summResult =0;

     while (counter<=lastCounter) {
      while (counter%2==0) {
        console.log(`Hello ${counter++}`);
        counter++;
        summResult+=+counter;
        console.log(`${summResult}`);
        break;
      }
     }
    
    



