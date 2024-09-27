
// let a = 2;
// let b = 3;
// let operationValue ='+';
// switch (operationValue) {
//     case '+':
//         console.log(`${a+b}`);
//         break;
// case '-':
//     console.log(`${a-b}`);
//     break;
//     case '*':
//         console.log(`${a*b}`);
//         break;
//         case '/':
//             if(b<0)
//         console.log(`Error!${b} must be great than 0`);
//     else{
//         console.log(`${a/b}`);  
//     }

//         break;

//     default:
//         console.log('No info');
//         break;
// }
//function declaration

// myFunction();
// function myFunction() {
//     console.log('==========');
//     console.log('Hello function');
//     console.log('==========');
    

// }
// myFunction();
// myFunction();
// myFunction();

    
// function myFunction(firstArg, secondArg) {
//     console.log('==========');
//     console.log(`Hello first${firstArg} and second${secondArg} `);
//     console.log('==========');
// }
// //myFunctionArgs(parametr, parametr)


//    myFunction(11,12);
// function summValue(firstValue,secondValue) {
//     console.log(`${firstValue}+${secondValue}=${firstValue+secondValue}`);

    
// }
// summValue(2,2);
// summValue(6,2);

// let global = 'Global varible';

// function scopeObject() {
//  let localVar ='local variable'
//  console.log(`Info about${global}+local info: ${localVar}`);
//  for (let i = 0; i < 5; i++) {
//     console.log(`Local var ${localVar}+${i}`);
    
    
//  }
    
// }
// console.log(`Outside call ${localVar}`);

// scopeObject();

// function newSumm(a,b) {
//     if (a !== undefined && b!==undefined) {
//         let summ =a+b;
//     return summ;
//     }
//     else{
//         return'Error in paramas'
//     }
// }
// console.log(`Return summ value ${newSumm(2,3)}`);


// function newSumm(a =0,b = 0) {
//         let summ =a+b;
//     return summ;
   
   
// }
// console.log(`Return summ value ${newSumm(2,3)}`);
// console.log(`Return summ value ${newSumm(2)}`);
// console.log(`Return summ value ${newSumm()}`);



// function manyArgs(a,b) {
//     console.log(`${a},${b}`);
//     console.log(`${arguments}`);
    
    
// }
// manyArgs(4,5);
// manyArgs(1,2,3,4,5,);


// function allArgs(...args) {
//     console.log(args);
    
// }
// allArgs('fsdf','fdsdasd',122);


// function upTen(value) {
//     let newValue = value*10;
//   return newValue;  
// }

// function loopFnTest(loopLimit, callBackFunction) {
//     for (let i = 0; i < loopLimit; i++) {
//      let upValue = callBackFunction(i)
//       console.log(`Up value result${upValue}`);
        
//     }
// }
// loopFnTest(3,upTen);

//Function expresion

// let functionExpression = function name(a,b) {
//     return a*b;
// }
// console.log(`Call function expression example ${functionExpression(4,5)}`);

// //Стрілкові функції

// function normalVersion(a,b) {
//     return a*b
// }
//arrowFn
// let arrowFn = (a,b) =>a*b;

// console.log(`Test function ${normalVersion(6,7)}`);
// console.log(`Test function ${arrowFn(6,7)}`);


// function checkItemValue(value) {
//     if (value>100) {
//         return value;
//     }
//     else{
//         return'Small valuue';
//     }
//     }

// function sortData(data, chechItemCallback) {
//   let result =chechItemCallback(data);
//   if (result !== 'Smal value') {
//     console.log(`Data valid ${result}`);  
//   } else{
//     console.log(`Data invalid`);
    
//   }
// }
// sortData(101,checkItemValue);
// sortData(90,checkItemValue);

//array
let game1teamFirst =10;
let game2teamFirst = 20;
let gaame3teamFirst = 30;

let gameResultsTeamFirst = [10, 20, 35];
console.log(gameResultsTeamFirst);

let mySecondArray = new Array(100);
console.log(mySecondArray);


gameResultsTeamFirst[0] =12;
gameResultsTeamFirst[1] =22;
gameResultsTeamFirst[2]=36;
gameResultsTeamFirst[10]='eleven'

console.log(gameResultsTeamFirst);
console.log(gameResultsTeamFirst[0]);

let emptyArray =[,,,,,,,,];
console.log(emptyArray);

let firstUser ='Tom';
let users =[firstUser,'Bob', 'Julya','Alex'];
console.log(`Users lenght ${users.length}`);
if (users.length>0) {
    for (let index = 0; index < users.length; index++) {
        console.log(index); 
       let element = users[index];
       console.log(`Hello user ${users[index]}`);
        
    }
    
}
else{
    console.log(`No users in array`);
    
}
