//hw04task5:
//
// Створити цикл який виводить значення з масивві  в консоль в такому 
// форматі "Сьогодні ....  у вас такі плани .." 
// let days = ["Понеділок", "Середа", "Неділя"] 
// let plans = ["Урок 03", "Урок 04", "Вихідни"]


let days = ["Понеділок", "Середа", "Неділя"] 
let plans = ["Урок 03", "Урок 04", "Вихідни"]

// console.log(`Сьогодні ${days[0]}  ${plans[0]}`);
// console.log(`Сьогодні  ${days[1]}  ${plans[1]}`);
// console.log(`Сьогодні  ${days[2]}  ${plans[2]}`);

if (days.length===plans.length) {
    for (let i = 0; i < days.length; i++) {
        console.log(`Сьогодні ${days[i]} плани ${plans[i]}`);  
    }
}
else{
    console.log('Уточніть графік');
    
}