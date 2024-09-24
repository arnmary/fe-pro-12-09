//hw03task8:
// Визначення типу геометричної фігури за допомогою switch:
// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let figureValue = prompt('type your figure');

switch (figureValue) {
    case 'circle':
        console.log(`${figureValue} have 0 sides`);
        break;
        case 'triangle':
            console.log(`${figureValue} have 3 sides`);
            break;
            case'square':
            console.log(`${figureValue} haave 4 sides`);
            break;

    default:
        console.log(`any info about ${figureValue}`);
        break;
}