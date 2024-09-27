// hw04task6:
//Написати цикл який замінює відємне значення в масиві на 0  
// let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];


    for (let i = 0; i < checkArr.length; i++) {
    if (checkArr[i] < 0 ) {
          checkArr[i] = 0;

}
    }
console.log(checkArr);


