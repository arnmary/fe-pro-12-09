//object
let userInfo =[
    ['Tom',24],
    ['Bob',24]
]

let myObj = new Object();//створ об'екту

let simpleObject = {};


let priceValue = 800
let laptopObj = {
    model :'apple',
    ram: '16gb',
memory : 512,
color:['silver', 'black','gold'],
price:priceValue,
produceCountry:['China','Tayvan','USA'],
procesor:{
    year:2023,
    type:'M2'
},
info:function () {
    console.log(`${this.model} ram info ${laptopObj.ram} memory${this.memory}`);
    
}
}
console.log(laptopObj.model);
console.log(laptopObj.price);
console.log(laptopObj.produceCountry[0]);
console.log(laptopObj.procesor.type);

laptopObj.prodYear ='2023';
laptopObj.cheepPrice = 800;
laptopObj.bigerPrice = 2000;

laptopObj['dynamicKey'] ='Dynamic value'; //підставлені значення

for (let i = 0; i < 3; i++) {
    laptopObj[`key${i}`] = `Key value ${i}`;
    
}
console.log(laptopObj);

delete laptopObj.color;
delete laptopObj.model;
delete laptopObj.procesor;


laptopObj.bigerPrice = 2500;
console.log(laptopObj.bigerPrice);


//методи масивів
//push -add the items to array
let myArrey =[];
myArrey.push('Test1');
myArrey.push('Test2'); //додає в кінець масиву
myArrey.push('Test3');
myArrey.push('Test4');

//pop
console.log(myArrey);
myArrey.pop();
myArrey.pop(); //видаляє з кінця списку
myArrey.pop();
myArrey.pop();

console.log(myArrey);

//unfhift
myArrey.unshift('First');
myArrey.unshift('Second'); //додає на початок списку
myArrey.unshift('Third');
console.log(myArrey);

delete myArrey[1] //emty slot видаляє за індексом залишаючи пусту комірку

console.log(myArrey);

//shift
myArrey.shift();
myArrey.shift(); //видаляє з початку списку
myArrey.shift();

console.log(myArrey);


let stringValue ='Hello';
console.log(`Hello string ${stringValue.length}`);
if (stringValue.length>0) {
    
}
// console.log(myArrey);

//isArray

let newArrey = new Array (2);

console.log(Array.isArray('String'));
console.log(Array.isArray(123));
console.log(Array.isArray({a:1}));
console.log(Array.isArray([1,2,3]));



function testFunction(...ars) {
    console.log(...ars);
    let test=ars.pop();
    //  let test = ars.unshift('Hello');
    
    console.log(test);
}

testFunction(1,2,3,4,5,6,7)


//fill
let fillArr = new Array(10);
fillArr.fill('hello');
console.log(fillArr);
fillArr.fill('***');
console.log(fillArr);

fillArr.fill('~~~',5);
console.log(fillArr);

fillArr.fill('$$$',6,7);
console.log(fillArr);

//sort 
// let sortValue = [6,3,8,6,9];
// sortValue.sort();
// console.log(sortValue);

let sortValue = [6,13,100,80,6,29,2];
sortValue.sort();
console.log(sortValue);

let animals = ['cat', 'ret', 'chicken','dolphin'];
animals.sort();
console.log(animals);


sortValue.sort((a,b)=>a-b);// !!!Для коректного сортування чисел по зростаючому 
sortValue.sort((a,b)=>a+b); // для коректного сортування в зворотньому напрямку
console.log(sortValue);


let filmsArr = [
    {filmName:'Terminator', year: 1994},
    {filmName:'Terminator', year: 2004},
    {filmName:'Terminator', year: 2017}
]

filmsArr.sort((a,b)=>a.year-b.year);
console.log(filmsArr);


//revers

let originalArr =[1,2,3,4];
originalArr.reverse();
console.log(originalArr);


//concat

let firstArr = [1,2,3];
let secondArr = [4,5,6];

firstArr = firstArr.concat(secondArr, [7,9,8], 'test','Hello',true);
console.log(firstArr);

//includes

let includeArr =[1,2,3,4,29,'Test',false];
console.log(`20 include in arr ${includeArr.includes(20)}`);
console.log(`20 include in arr ${includeArr.includes(3)}`);

//indexof

let indexrr = [1,2,3,'test',50];
console.log(`search index ${indexrr.indexOf(50)}`);
console.log(`search index ${indexrr.indexOf(505)}`);
console.log(`search index ${indexrr.indexOf(2)}`);
console.log(`search index ${indexrr.indexOf('test')}`);
console.log(indexrr);


//join

let joinArr = ['Hello','world',1,2,3];
console.log(joinArr);
let afterJoin = joinArr.join(' ');
 afterJoin = afterJoin.toUpperCase();
console.log(afterJoin);

//split
afterJoin = afterJoin.split(' ');
console.log(afterJoin);



















