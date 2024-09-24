// hw03addtask3:
// створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planetValue = prompt('Enter name of the planet')
switch (planetValue) {
        case 'Mercury':
        case 'Venus':
         case 'Earth':
        case 'Mars':
        case'Jupiter':
        case 'Saturn':
        case 'Uranus':
        case 'Neptune':
console.log('This  planet belongs of the solar system');

        break;

    default:
        console.log('This planet do not belongs of the solar system');
        
        break;
}