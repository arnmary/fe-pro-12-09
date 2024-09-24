// hw003task6:
//Визначення сезону:

// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let numberValue = prompt('Enter number of month.');

switch (numberValue) {
    case '1':
     case '2':
    case '12':
       console.log('It is winter month');
        break;
        case '3':
        case '4':
        case'5':
        console.log('It is spring month' );
        break;
        case'6':
        case'7':
        case'8':
        console.log('It is summer month');
        break;
        case'9':
        case'10':
        case'11':
        console.log(' It is outumn month');
        break;
    default:
        console.log(`Any info about${numberValue}`);
        break;
}

