// //6. onclick + робота з css
// створіть кнопку та список з лінками.Кнопка має текст "Відкрити меню". І по кліку на кнопку відкриває меню яке заховане за допомгою css та змінює текст в середині на "Закрити меню"
window.onload = function () {
let isTuneloption =false;
 let headerEl = document.querySelector('.container') ;  
let buttonEl = document.querySelector('.menuButton');
console.log(buttonEl);
let listEl = document.querySelector('.menu');
console.log(listEl);

// headerEl.addEventListener('click',function(e){
   
// },isTuneloption)

// buttonEl.addEventListener('click',function(e){
//     this.innerText = ('Close menu');
// },isTuneloption);

// listEl.addEventListener('click',function(e){
//     this.style.opacity ='1';
// },isTuneloption);

buttonEl.onclick = function(e){
    console.log(e.target);
e.target.innerText = 'Close menu';
let sibling = e.target.nextElementSibling;
sibling.style.opacity = '1';
    }
}






