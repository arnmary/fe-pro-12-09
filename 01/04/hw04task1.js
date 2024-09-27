// hw04task1:
//Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.



let array = ['Anna', 'Serg', 'Danna', 'Tom', 'Alex', 'Bob', 'Nick'];

function hiUser(args) {
    console.log(`Вітаю ${args}!`);
     
 }

function wellcomeUsers(array, callback) {
   for (let index = 0; index < array.length; index++) {
    console.log(index);
    
    callback(array[index]);
    
   } 
}
wellcomeUsers(array, hiUser);
