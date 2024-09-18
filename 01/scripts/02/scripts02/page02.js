//     // variables
//   let myVar = 5, nextValue = 6, stringValue='Hello!', booleanValue =true;
//   console.log(myVar);
//   console.log(nextValue);
//   console.log(stringValue);
//   console.log(booleanValue);

// //   null= нічого
//   let nullValue = null;
// //    в середині змінної нічого немає=undefined
//   let unerfindValue = undefined;
//   let x;
//   console.log(x);

//   let textValue='Total price:'; //string
//   let price1 =10;
//   let price2 =20;

//   let totalPrice = price1 + price2; //Number 30
//   let result = textValue + ' ' + totalPrice;
//   console.log(result); 

  
//     // Math operation
//     //NEW!! Template literal- тип математичного запису 
  
// //   let newResult = `Test template literal ${price1}`;
// //   let newResult = `Test template literal! ${textValue} ${price1} + ${price2}= ${totalPrice}`;

//   let newResult = `Test template literal! ${textValue} ${price1} + ${price2}= ${price1+ price2}`;
// console.log(newResult);
// console.log( `Version2 Test template literal! ${textValue} ${price1} + ${price2}= ${price1+ price2}`);


// let firstValue =2;
// let secondValue =6;

// console.log(`-operation ${secondValue - firstValue }`);
// console.log(`-operation ${ firstValue -  secondValue}`);
// console.log(`+operation ${ firstValue +  secondValue}`);
// console.log(`*operation ${ firstValue * secondValue}`);
// console.log(`/operation ${secondValue / firstValue }`);

// //%
// console.log(`%operation ${20%2 }`);
// console.log(`%operation ${20%3 }`);
// console.log(`%operation ${20%8 }`);

// //** 
// console.log(`^operation 2^2 ${2**2 }`);
// console.log(`^operation 3^3 ${3**3 }`);
// console.log(`^operation5^5 ${5**5 }`);

// console.log(`operation 25 root2 ${25 ** 1/2 }`);
// console.log(`operation 16 root 2 ${16 ** 1/2}`);

// console.log(`operation 4 root 2 ${4 ** 0.5}`);


// // console.log(` together operation `);

// let product1 = 10;
// let product2 = 20;
// let product3 = 30;

// let totalPproductPrice = product1 + product2 + product3;
// let middleValue = totalPproductPrice/3
//  console.log(middleValue);
//  let middleValuePrice = (product1 + product2 + product3) /3;
//  console.log(`exsample ${middleValuePrice}`);
 
// let mathexample =((2*4)+(4*5))/4
//  console.log(mathexample);

       // input method

    //   alert('Hello world!')
    //   let alertValue= 'Hello world from Let!';
    //   alert(alertValue)
    //   let promptValue = prompt('Напишіть щось для JS');
    // let promptValue = prompt('Напишіть щось для JS','hello');
    //   console. log (promptValue);

      //confirm

    //   let confirmValue = confirm('are you have 18 years old?');
    //   console. log (confirmValue);
    // let price1 = prompt('Ціна першого товару?')
    // let price2 = prompt('Ціна другого товару?')
    // let price3 = prompt('Ціна третього товару?')
    
    //concatenacia: зклеювання значень
// alert(`Сума до спалати ${+price1+ + price2+ + price3}`)
// alert(`Сума до спалати ${Number(price1) + Number(price2)  + Number(price3) }hrn`)


// let price1 =Number(prompt('Ціна першого товару?')) 
// let price2 =Number( prompt('Ціна другого товару?'))
// let price3 =Number(prompt('Ціна третього товару?')) 

// alert(`Сума до спалати ${price1 + price2 + price3}`)
// alert(`Сума до спалати ${Number(price1) + Number(price2)  + Number(price3) }hrn`)


//parseInt


// let intValue = parseInt(prompt('Wright number'));
// alert(intValue)

//parseFloat
// let floatValue = parseFloat(prompt('Wright number'));
// alert(floatValue)
// console.log(`test convertation - ${price1-price2}`);
// console.log(`test convertation * ${price1*price2}`);
// console.log(`test convertation / ${price1/price2}`);

//compaer
//==Виконує порівняння з приведенням типів. отримує false or true.

// console.log(`compair  2 and 2 ${2==2}`);
// console.log(`compair 2 and 3 ${2==3}`);

      //  HWtask#1
      
let number1 = prompt('Вкажіть перше число');
let number2 = prompt ('Вкажіть друге число');
 
alert(`compair number1 and number2 ${number1==number2}`)