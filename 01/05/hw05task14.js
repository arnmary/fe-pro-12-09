//У вас є масив об'єктів, які представляють користувачів. Кожен користувач має ім'я та вік. Напишіть функцію, яка відфільтрує користувачів старших за 18 років, відсортує їх за віком у порядку зростання і видалить наймолодшого.
//let users = [
 // { name: 'Оля', age: 17 },
 // { name: 'Іван', age: 25 },
 //{ name: 'Петро', age: 19 },
 // { name: 'Марія', age: 30 },
//];

let users = [
 { name: 'Оля', age: 17 },
 { name: 'Іван', age: 25 },
 { name: 'Петро', age: 19 },
 { name: 'Марія', age: 30 },
];

// users.sort((a,b)=>a.age-b.age);
// console.log(users);

// users.shift();
// console.log(users);

 function filterAndSortUsers(usersArr) {
    let filtretUsers =[];
    for (let i = 0; i < usersArr.length; i++) {
        if (usersArr[i].age>18) {
            filtretUsers.push(usersArr[i]);
        }
        
    }
    console.log(filtretUsers);
    filtretUsers.sort((a,b)=>a.age-b.age);
    console.log(filtretUsers);
    filtretUsers.shift();
    return filtretUsers
 } 
 
console.log(filterAndSortUsers(users));

;
