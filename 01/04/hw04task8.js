//hw04task8:
//Дано масив чисел [1,2,3,4 ]Створіть функцію squareArray яка приймає масив і повертає новий масив, де кожен елемент є квадратом відповідного елемента початкового масиву. 
let numberesArray = [1,2,3,4];
// console.log(numberesArray.length);

function squareArray(array) {
  let newNumberArray = [];  

for (let i = 0; i < numberesArray.length; i++) {
    let newNumber =array[i]**2;
 newNumberArray[newNumberArray.length] = newNumber;   
}
return newNumberArray;

}

   console.log(`${squareArray(numberesArray)}`);
   squareArray(arrey);
  
   