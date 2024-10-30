//Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
// Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.
let formEl = document.querySelector('.formWrap');
const[...radioButtonChangeBg] =document.querySelectorAll('input[name = changeBg');
console.log(radioButtonChangeBg);

radioButtonChangeBg.forEach(radioItem=>{
    radioItem.addEventListener('change',function(){
       
            console.log(`${this.id}`);
            if (this.id === 'red') {
               
              formEl.style.backgroundColor ='red';
            }else if (this.id === 'yellow') {
                formEl.style.backgroundColor = 'yellow';
            }else if(this.id === 'green'){
            formEl.style.backgroundColor = 'green';
            }else{ 
                formEl.style.backgroundColor = 'blue'; 
            }
            
       
    })
})

       
    


//Створіть випадаючий список з назвами країн.
// Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.
    let contextMenuEl =document.querySelector('.countryList')
let customeMenu = document.querySelector('.countries');
 let cardElUk = document.querySelector('.ukInfo');
 let cardElPl = document.querySelector('.plInfo');
 let cardElCr = document.querySelector('.crInfo')

customeMenu.addEventListener('contextmenu',function (e) {
    e.preventDefault();
  contextMenuEl.style.top = `${e.clientY}px`;
  contextMenuEl.style.left = `${e.clientX}px`;

    let listEl =document.querySelector('.countryList');
    listEl.style.display ='block';
// customeMenu.onclick ('click',function () {
//     contextMenuEl.style.display='bloc'
// })
   
});

 const[...changeItems]= document.querySelectorAll('input[name = country]');
 console.log(changeItems);
changeItems.forEach (radioItem=>{
radioItem.addEventListener('change',function (e) {
   
     console.log(`${this.id}`);
    if (this.id ==='uk') {
      cardElUk.style.display='block'
       cardElPl.style.display ='none'
        cardElCr.style.display= 'none'
    }else if(this.id ==='pl'){
cardElPl.style.display ='block'
cardElUk.style.display = 'none'
 cardElCr.style.display= 'none'
    }else{
        cardElCr.style.display= 'block'
        cardElUk.style.display ='none'
         cardElPl.style.display ='none'
    }  
})
    })

//    створіть кнопку яка при натисканні запускає таймер, який виводить збільшення лічильника кожну секунду. Коли лічильник досягне 10, автоматично зупиніть таймер.
let count = 0;
let buttonEl = document.querySelector('.counter');
let titleEl =document.querySelector('h1');

    function countFn () {
     count ++
     titleEl.innerHTML =`Count : ${count}` 
      
   if (count>10) {
  clearInterval(intervalCounter);

    alert('Stop')
 }
    };

   let intervalCounter
buttonEl.addEventListener('click',function () {

intervalCounter = setInterval(countFn, 1000);

});

  






