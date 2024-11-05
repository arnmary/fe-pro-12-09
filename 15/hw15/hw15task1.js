//Завдання 1: Отримання даних користувача з JSONPlaceholder
// Створіть функцію, яка використовує async/await для отримання даних про конкретного користувача за id JSONPlaceholder. Виведіть ім'я та електронну адресу користувача.
// підказка: запит за іd чи іншими параметрами https://jsonplaceholder.typicode.com/users/${userId}


let bodyEl=document.querySelector('body');

async function getData(userId) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    let data =await res.json();
    let pel =document.createElement('p');
    pel.innerHTML =`Ім'я : <strong>${data.name}</strong> email: ${data.email}`;
   bodyEl.appendChild(pel);
  
}
getData(1);
getData(4);
getData(10);


//Завдання 2: Виведення інформації про фільм з SWAPI
// Використайте async/await для запиту інформації про конкретний фільм з SWAPI. Виведіть назву фільму та дату виходу.

let containerEl =document.querySelector('.container');
console.log(containerEl);


async function getFilm(filmID) {
    let res = await fetch(`https://swapi.dev/api/films/${filmID}`)
    let data =await res.json();
    console.log(data);
    
    let pElement =document.createElement('p');
    pElement.innerHTML = `Назва:<strong> ${data.title}</strong> Дата виходу: ${data.release_date} `
    pElement.style.color='green';
    pElement.style.padding ='10px'
   containerEl.appendChild(pElement);

}
getFilm(3);
getFilm(4);
getFilm(5);

