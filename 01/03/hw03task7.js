//hw03task7:
// Визначення розміру числа:

// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let numberValue = prompt('enter your number')

if (numberValue>0) {
    console.log(`${numberValue} is positivve`);
}

  else if (numberValue<0){
     console.log(`${numberValue} is negative`);
    }

    else if ( numberValue == 0){
    console.log(`${numberValue=0}`);   
}


     else {
    console.log('any info about this');
    
}

