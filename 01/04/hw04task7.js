// hw04task7:
//Напишіть функцію summArray яка приймає масив чисел і повертає їхню суму

let myArr = [4,8,10,100,2,6]
console.log(myArr.length);

function summArray(array) {
     let sum=0;
   for (let i = 0; i < array.length; i++) {
    sum += array[i];

     console.log(sum);
    }
}
  

summArray(myArr)