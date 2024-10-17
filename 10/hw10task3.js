// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

let buttonEl = document.querySelector('.clickButton');
console.log(buttonEl);

// let pEl = document.querySelector ('.text');

let count = 0;
function showCounterAlert() {
    alert(`Count ${count}`);
    count++;
}
buttonEl.addEventListener('click',showCounterAlert);
buttonEl.addEventListener('click', function(){
        if(count>10){
buttonEl.removeEventListener('click', showCounterAlert);
alert('Done');
    }
});
  
    

