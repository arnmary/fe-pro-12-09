
// console.log(`Compare Max and MaX`${'Max' === 'MaX'});


// console.log(`Compair  2 and 2 ${2===2}`);
// console.log(`Compair 2 and 3 ${2===3}`);


//< > >=  <=
// console.log(`Compare 20>15 ${20>15}`);
// console.log(`Compare 20>=20 ${20>=20}`);
// console.log(`Compare 20>=20 ${20>=20}`);

//&&
// true 2>1 && 3>2 true && true = true
// true && false = false
// false && true = false
// false && false = false

// let enterPassword = '12345'
// let userPassword = '12345'===enterPassword
// let userNickName ='admin'
// let checkAdmin ='admin' === userNickName


//or
// ||
// 2>1|| 3>4 = true; true|| false =true;
//false || true = true;
//true || true = true;
// false || false = false;

// let userLogin = true;
// let userAge =17;
// let isAdmin = false;

// let continueShoping = userLogin ===true || userAge>18 ||isAdmin ===true;
// console.log(continueShoping);

// increment/Decrement


// let myNumber =1;
// myNumber =  myNumber +1;
// console.log(myNumber);
// myNumber = myNumber +1;
// console.log(myNumber);
// myNumber+=1;
// console.log(myNumber);

// let minusValue = 10;
// minusValue -=2;
// console.log(minusValue);


// let multiplyValue =3;
// multiplyValue*=2;
// console.log(multiplyValue);

// let divideValuue =18;
// divideValuue/=3;
// console.log(divideValuue);

//increment означає збільшувати
// postfix increment
//поступове збільшення


// console.log('postFixIncrement');
// let postFixIncrement = 1;
// console.log(`Start value ${postFixIncrement}`);
// console.log(`Call with increment value ${postFixIncrement++}`);
// console.log(`Call with value ${postFixIncrement}`);
// console.log(`Call with increment value ${postFixIncrement++}`);
// console.log(`Call with value ${postFixIncrement}`);





//decrement означає зменшувати
//postfixdecrement
//поступове зменшення

// console.log('postFixDecrement');
// let postFixDecrement = 15;
// console.log(`Start value ${postFixDecrement}`);
// console.log(`Call with decrement value ${postFixDecrement--}`);
// console.log(`Call with value ${postFixDecrement}`);
// console.log(`Call with decrement value ${postFixDecrement--}`);
// console.log(`Call with value ${postFixDecrement}`);


//prefix Increment
//моментальне збільшення

// console.log('PrefixIncrement');

// console.log('preFixIncrement');
// let preFixIncrement = 1;
// console.log(`Start value ${preFixIncrement}`);
// console.log(`Call with increment value ${++preFixIncrement}`);
// console.log(`Call with value ${preFixIncrement}`);
// console.log(`Call with increment value ${++preFixIncrement}`);
// console.log(`Call with value ${preFixIncrement}`);

//prefix Decrement
//моментальне зменшення

// console.log('PrefixDecrement');

// console.log('preFixDecrement');
// let preFixDecrement = 10;
// console.log(`Start value ${preFixDecrement}`);
// console.log(`Call with increment value ${--preFixDecrement}`);
// console.log(`Call with value ${preFixDecrement}`);
// console.log(`Call with increment value ${--preFixDecrement}`);
// console.log(`Call with value ${preFixDecrement}`);

// if/else

// let checkValue = 20>3

// if (checkValue && 10>3) {
//     console.log(true);
// }
// else{
// console.log(false)
// }

// let userNumber = 2;

// if (userNumber<4) {
//     console.log(`user number less than 4`);  
// }
// else if (userNumber >5 && userNumber<10) {
//        console.log('5> and <10');
// } 
//  else if(userNumber>10 && userNumber<15) {
// console.log('10< and <15');

// }
// else{
//     console.log('another number no information');
    
// }



// let adminLogin = false;

// if(!adminLogin){
//     console.log('Hello user');  
// }

// let firstValue = 2;
// let secondValue = 20;

// if (firstValue != 0) {
    

//     let result = secondValue/firstValue
//     if (result>2) {
//         let newResult = result/100;
//         console.log(newResult);
        
//     }
//     else{
//         console.log('Cancel second operation');
        
//     }
// }
// else{
//     console.log('Cancel operation');
    
// }

// let result = '';
// let userLodin = true;

// if(userLodin){
//     result = 'Hello user';

// }
// else{
//     result =' Login to system';

// }
//  тернарний оператор

// result = userLodin ? 'Hello user short if' :'login to system short else';

// console.log(`Result value ${result}`);

// let firstTestValue = 100;
// let secondTestValue = 200;


// let maxValue;

// if(firstTestValue>secondTestValue){
//     maxValue = firstTestValue;

// }
// else{
//     maxValue =secondTestValue
// }

// let maxValue=firstTestValue>secondTestValue?firstTestValue:secondTestValue;

// console.log(maxValue);

// let score =75;
// let grade;
// if(score>=90){
//     grade = 'A'
// }
// else if(score>=80){
//     grade ='B'
// }
// else if(score>=70){
//     grade ='C'
// }
// else{
//     grade ='D';
// }


// тернарний оператор
// let grade = (score>=90) ? 'A':
//              (score>=80)? 'B':
//              (score>=70) ?'C': 'D'

// console.log(grade);

//switch оператор

// let value = prompt('Hello type your level')
// switch(value){
//     case'admin':
//     console.log('Hello admin');
//     break;
//     case'user':
//     console.log('Hello user');
//     break;
//     default:
//         console.log(`Any info about ${value}`);
        
    
    
// }

 
// let productPriceByName = prompt('Type product name');

// switch(productPriceByName){
//     case'milk':
//     case'butter':
//     console.log(`${productPriceByName} 1.25$`);
//     break;
//     case'orange':
//     case'lime':
//     case'lemon':
//     console.log(`${productPriceByName} 0.45$`);
//     break;
//     case'bread':
//     case'tost bread':
//     console.log(`${productPriceByName} 0.15$`);
//     break;
//     case'banana':
//     case'melon':
//     console.log(`${productPriceByName} 0.25$`);
//     break;
//     case'pie':
//     case'cake':
//     case'candy':
//     console.log(`${productPriceByName} 2.25$`);
//     break;
//     default:
//         console.log(`Any info about ${productPriceByName}`);
        
    
    
// loop цикли декілька разів поаторювана дія

// console.log('Hello world1');
// console.log('Hello world2');
// console.log('Hello world3');
// console.log('Hello world4');
// console.log('Hello world5');


let counter=1
// do {
//     console.log(`Hello ${counter}`);
//     counter++;
// } while (counter<20);
// while (counter<5) {
//     console.log(` Hello${counter}`);
//     counter++;
// }

// for (let i=0; i<10; i++) {
//    console.log(`Hello${i}`);
     
// }
for (let index = 0; index < 10; index++) {
    console.log(`Hello${index}`);
    // if (index===5) {
    //     break;
    // }
    if (index%2 ===
        0) {
        continue;
    }
   console.log(`Break value${index}`);
    
}
