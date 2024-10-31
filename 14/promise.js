let firstPromise = new Promise(function(resolve, reject){
console.log('promise work');

});

// let x = 20;
// let y = 5;

// let calcPromise = new Promise(function(resolve,reject){
//     if (y === 0 ) {
//         reject(alert('0 is bad value for divade operation'));

//     }
// else{
// let result = x/y;
// resolve(alert(`Resolve ${result}`));
// }

// });

let myNumber = 10;
let checkNumber = new Promise(function (resolve, reject) {
    if(myNumber>2){
        resolve('Nice number')
    }
    else{
        reject('Bad value');
        // throw 'Small number';
        
    }
})

checkNumber.then(function (value) {
    console.log(value);
    
}).catch(function(error){
  console.log(`Promise caught error${error}`);
    
});

let firstP = new Promise(function(resolve){
    resolve('First promise value')
});
let secondP = firstP.then(function(value){
    return`${value} + secondP`;
});
let thirdP = secondP.then(function(value){
    return `${value} + thirdP`;
});
let final = thirdP.then(function(value){
    return`${value} + final`;

});

firstP.then(function(finalValue){
    console.log(finalValue);
    
});
new Promise(resolve=>resolve('first value'))
.then(value=>`${value} + secondP short`)
.then(value=>`${value}+ thirdP short`)
.then(value=>{
    console.log(value);
    
});

let myFnalPromise = new Promise((resolve,reject)=>{
    let valueStatus = true;
    if (valueStatus) {
        resolve('Resolve result')
    }
    else{
        reject('Reject result')
    }
});
myFnalPromise.then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('Final work result');
    
});