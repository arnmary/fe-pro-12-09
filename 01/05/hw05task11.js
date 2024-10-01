//Напишіть функцію, яка приймає масив чисел, сортує його за спаданням, потім замінює перші три елементи масиву значенням 10

let numbArray = [3, 12, 45, 99, 25, 63];

// numbArray.sort((a,b)=>a+b);

//     console.log(numbArray);
numbArray.sort(function (a,b) {
    return a - b;
     
 } )
 console.log(numbArray);
 numbArray.reverse();
 console.log(numbArray);
 
    for (let i = 0; i < 3; i++) {
        if (numbArray[i] > 25) {
             numbArray[i] = 10;
        }

    }
console.log(numbArray);



