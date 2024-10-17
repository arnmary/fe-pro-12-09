// //5.event.target   
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік
window.onload =function () {
  let isTuneloption = false;
  let firstButtonEl = document.querySelector('.first');
let secondButtonEl =document.querySelector('.second');
let thirdButtonEl = document.querySelector('.third');
  
firstButtonEl.addEventListener('click',function (e) {
    this.style.backgroundColor = 'pink';
    alert('first button');
}, isTuneloption);

secondButtonEl.addEventListener('click',function (e) {
    this.style.backgroundColor ='pink';
    alert('second button');
},isTuneloption);

thirdButtonEl.addEventListener('click', function(e){
    this.style.backgroundColor ='pink';
    alert('third button');
}, isTuneloption);

}



