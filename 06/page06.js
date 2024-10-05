//filter
console.log('===filter==');
let filterValue =[10,20,30,15,25];
function chechValue(value) {
    return value>20
}

let filtResult =filterValue.filter(chechValue);
console.log(filterValue);
console.log(filtResult);

let numbersForFilter = [1,2,3,4,56,7,8,9,10];
let evenNumbers = numbersForFilter.filter((number)=>number %2===0);
console.log(evenNumbers);

let users = [
    { name: 'Оля', age: 17 },
    { name: 'Іван', age: 25 },
    { name: 'Петро', age: 19 },
    { name: 'Марія', age: 30 },
   ];
   let filterUsers = users.filter((user)=>user.age>=18);
   console.log(filterUsers);
    
   let cars =[
    {brand: 'Toyota', model: 'Corolla', year: 2018},
    {brand: 'Honda', model: 'Civic', year: 2020},
    {brand: 'Ford', model: 'Focus', year: 2017},
    {brand: 'Toyota', model: 'Camry', year: 2021},
   ];
let sortCars = cars.filter(
   (car)=>car.brand ==='Toyota' && car.year>2017
)
console.log(sortCars);

//slice

console.log('===Slice===');
let fruits = ['яблуко', 'банан','вишня','апельсин','груша'];
// let myFruits = fruits.slice();//копія поточного массиву
// let myFruits = fruits.slice(1,4); //робимо копію з 1 індексу по 4
// let myFruits = fruits.slice(2); //робимо копію з 2 індексу
let myFruits = fruits.slice(-2);//робимо копію 2-го елемента з кінця масиву

console.log(`Old arr ${fruits}`);
console.log(`New arr ${myFruits}`);

console.log('===Splice===');

let beforeSpliceFruits = ['яблуко', 'банан','вишня','апельсин','груша'];

// let afterSpliceFruits =beforeSpliceFruits.splice(1,2);
// let afterSpliceFruits =beforeSpliceFruits.splice(3);
let afterSpliceFruits =beforeSpliceFruits.splice(-4);

console.log(beforeSpliceFruits);
console.log(afterSpliceFruits);


//ForEach для обходу масиву

let forEachArr = ['First','Second','Third'];
forEachArr.forEach((value, index, array)=>{
    console.log(`ForEach array item value ${value} value index ${index} from ${array}`);
    
})
let cars2 =[
    {brand: 'Toyota', model: 'Corolla', year: 2018},
    {brand: 'Honda', model: 'Civic', year: 2020},
    {brand: 'Ford', model: 'Focus', year: 2017},
    {brand: 'Toyota', model: 'Camry', year: 2021},
   ];
   cars2.forEach((value)=>{
    console.log(`Car info ${value.brand}   model: ${value.model}`);
    
   })
   //Map

   console.log('===Map===');
   
   let mapArr = ['a','b', 'c'];
   let newArr = mapArr.map((value, index,array)=>{
   return `Map value ${value}, index ${index},
    from ${array}`
   });
   console.log(mapArr);
   console.log(newArr);

   let startNumbers = [1,2,3];
   let squareValueArr = startNumbers.map((item)=>{
    return item**2
   });
   console.log(startNumbers);
   console.log(squareValueArr);

   
   
   
   
   


