// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
    
}

  let sectionEl =document.querySelector('.wrap');
console.log(sectionEl);
sectionEl.style.display ='flex';
sectionEl.style.flexWrap ='wrap';
sectionEl.style.margin ='0 auto';
sectionEl.style.gap ='10px';
function createEl() {

  
for (let i = 0; i < 10; i++) {
    let divEl = document.createElement('div');
    sectionEl.appendChild(divEl);
    console.log(divEl);
    
    divEl.style.width = '100px';
    divEl.style.height = '100px';
    // divEl.style.backgroundColor = 'grey';
    divEl.style.backgroundColor = getRandomColor();
}

}
createEl();

let [...divEl] =document.querySelectorAll('div')

divEl.forEach(item=>{
    console.log(this);
  item.onclick = function () {
        item.remove();
    }
})