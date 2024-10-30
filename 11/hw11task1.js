//Завдання 'onMouseOver' і 'onMouseOut': Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір, коли користувач наводить на неї курсор миші, та повертає початковий колір, коли курсор покидає цю область.

let mouseEl = document.querySelector('.mouse');

mouseEl.addEventListener('mouseover', function (e) {
   this.innerHTML = 'Mouse over';
 this.style.backgroundColor = 'red';
});
mouseEl.addEventListener('mouseout', function (e) {
    this.innerHTML = 'Mouse out';
    this.style.backgroundColor = ' rgb(111, 45, 58)';
});

//Завдання 'onContextMenu':
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент". Складніший варіант зробити щоб при кліку на меню текст в блоці вирівнювався

let textEl = document.querySelector('.textBlock');
let menuEl = document.querySelector('.customMenu');
let liCenterEl = document.querySelector('.center');

let liLeftEl = document.querySelector('.left');
let liREl = document.querySelector('.right');
let liNoneEl = document.querySelector('.none');


textEl.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    menuEl.style.top = `${e.offsetY}px`;
    menuEl.style.left = `${e.offsetX}px`;
 
  
    menuEl.style.display ='block'


});
liCenterEl.addEventListener('click', function () {
    textEl.style.textAlign = 'center';
});
liLeftEl.addEventListener('click', function () {
    textEl.style.textAlign = 'left';
});
liREl.addEventListener('click', function () {
    textEl.style.textAlign = 'right';
})

liNoneEl.addEventListener('click', function () {
    menuEl.style.display ='none'
})




//Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена
let playFolder = document.querySelector('.playFolder')
let gameEl = document.querySelector('.element');
let posX = 0;
let posY = 0;
let moveStep = 10;


document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowUp':
            posY = Math.max(0, posY - moveStep);
            break;
        case 'ArrowDown':
            posY = Math.min(playFolder.clientHeight - gameEl.clientHeight, posY + moveStep);
            break;
        case 'ArrowRight':
            posX = Math.min(playFolder.clientWidth - gameEl.clientWidth, posX + moveStep);
            break;
        case 'ArrowLeft':
            posX = Math.max(0, posX - moveStep);
            break;

    }
    gameEl.style.top = `${posY}px`;
    gameEl.style.left = `${posX}px`;

});
