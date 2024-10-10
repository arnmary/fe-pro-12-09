//string

let stringValue ='String value' ;
console.log(stringValue);

let replaceStr = stringValue.replace('String','New string');
console.log(replaceStr);

//length of string
console.log(stringValue.length);

let arrValue =[ 'Hello','Array'];
console.log(arrValue);

let stringArr = arrValue.join();
console.log(stringArr);


let names = 'Nick,Tom,Bob,Rob';
let namesArr =names.split(',');
console.log(namesArr);


let catName = '   Max   ';
// console.log(`Trim value ${catName.trimStart()}!`);
// console.log(`Trim value ${catName.trimEnd()}!`);
console.log(`Trim value ${catName.trim()}!`);

console.log(catName.length);


let sliceValue = 'Js program';
let newString = sliceValue.slice(3,8);
console.log(sliceValue);
console.log(newString);

let usserChoice = 'Rock';

console.log(usserChoice.toLowerCase());
console.log(usserChoice.toUpperCase());

//date

let nowDate = new Date();
console.log(nowDate);

//new Date(year,month, hours, minutes, seconds, ms)
// month 0-Jenuary 11-December
//day 1-31
//hours 0-23
// minutes 0-59
// ms 0-999

console.log(new Date (1995, 0, 4, 40, 0));
let firstMonth = new Date(2000,0);
console.log(firstMonth);

console.log(`Day info ${nowDate.getDate()}`);
console.log(`Day number info ${nowDate.getDay()}`);
console.log(`Month  number info${nowDate.getMonth()}`);
console.log(`Hours info${nowDate.getHours()}`);
console.log(`Minutes info${nowDate.getMinutes()}`);
console.log(`Seconds info${nowDate.getSeconds()}`);


console.log(`Format time${nowDate.toJSON()}`);
console.log(`Format time${nowDate.toDateString()}`);
console.log(`Format time${nowDate.toUTCString()}`);

//new syntax

//Symbol
const keyValue =Symbol('key');
console.log(keyValue);

const newKeyValue = Symbol('key');
console.log(newKeyValue);

console.log(`Compare Symbol${keyValue===newKeyValue}`);
console.log(`Compare Symbol${keyValue==newKeyValue}`);

//Rest в круглих дужках завжди рест оператор
function restExample (...args) {
    console.log(args);
    console.log(arguments);
    
    
}
restExample(1,2,3,'test', true);


//Spread в середині масива завжди спред оператор

let firstArr =[3,4,5,8];
let secondArr =[...firstArr,7,45,28]
console.log(secondArr);


let firstObj = {
    userName :'Tom',
    userAge : 25
}
let moreUserInfo = {
    ...firstObj,
    skill:'Js'
}
console.log(moreUserInfo);

let numbers = [1,3,6,0,-10]
console.log(Math.min(2,5,78,9));
console.log(Math.min(...numbers));

//Деструктуризація

const pearson ={
    firstName : 'John',
    lastName : 'Biden'
}

console.log(`Pearson name ${pearson.firstName} second name ${pearson.lastName}`);

const{firstName,lastName} = pearson;

console.log(`Pearson name ${firstName} second name ${lastName}`);

let dataArr = ['John','Array','age 20','html','css','js'];
//destr
const[name, lastname,age, ...skills]=dataArr;


console.log(skills);
console.log(name);
console.log(lastname);
console.log(age);


const hero = {
    heroName :'Batman',
    realName : 'Bruce',
    suitColor : 'Black'
}
const{heroName,realName, suitColor='skin color green'}=hero;
console.log(`Hero info ${heroName} ${realName} ${suitColor}`);


const heroes =[
    {character : 'Batman'},
    {character : 'Joker'},
    {character : 'Catlady'}
]

for (const character of heroes) {
//   console.log(item.character);
console.log(character);

    
}

const heroesTextTitle = heroes.map(
    function ({character}) {
       return `This batman film heroes ${character}` 
    }
);
console.log(heroesTextTitle);

//typeof

// Boolean,
// undefined,
// number,
// string,
// Symbol,
// function,
// Object

console.log(`Test data type ${typeof  42}`);
console.log(`Test data type ${typeof  '42'}`);
console.log(`Test data type ${typeof  "42"}`);

let objValue = {value:'Test'};

console.log(`Test data type ${typeof  objValue}`);
console.log(`Test data type ${typeof  null}`);


console.log(`Test data type ${typeof  [1,2]}`);

let key = Symbol('Value');
console.log(`Test data type ${typeof  key}`);

const fnValue = ()=>'hello';
console.log(`Test data type ${typeof  fnValue}`);
console.log(`Test data type ${typeof  undefined}`);

console.log(`Test data type ${typeof  true}`);
console.log(`Test data type ${typeof  false}`);

//DOM
console.log('===DOM===');


let thisValue =this;
console.log(thisValue);
// console.log(document);

let idEl =document.getElementById('test');
console.log(idEl);

let [...classEl] = document.getElementsByClassName('title');
console.log(classEl);
let tagName =document.getElementsByTagName('p');
console.log(tagName);

let queryId =document.querySelector('#test');
console.log(queryId);

let link = document.querySelector('header nav a');
console.log(link);

// let [...links] = document.querySelectorAll('header nav a');
// links.forEach(item=>{
//     item.innerHTML = 'Test';
// })
// console.log(links);


//2

// let links = document.querySelectorAll('header nav a');
// let linkArr = Array.from(links)
// console.log(links);
