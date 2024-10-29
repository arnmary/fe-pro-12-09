const[...hobbyCheckbox] = document.querySelectorAll('input[name ="hobby"]');

let hobbyResult =document.querySelector('.hobbyResult');
console.log(hobbyCheckbox);

hobbyCheckbox.forEach(checkBox => {
    checkBox.addEventListener('change',function(){
        const checkedHobbies =hobbyCheckbox.filter(i=>i.checked).map(item=>item.value);
        console.log(checkedHobbies);
       hobbyResult.textContent = `Вибрані такі хоббі ${checkedHobbies.join(', ')}`;
    })
});

const[...radioButtonRaiting] = document.querySelectorAll('input[name ="raiting"]');

let raitingResult =document.querySelector('.hobbyResult');

radioButtonRaiting.forEach(radioItem => {
    radioItem.addEventListener('change',function(){
     
       raitingResult.textContent = `Рейтинг фільму ${this.value}`;
    })
});

let userName =document.querySelector('#name');
userName.addEventListener('keyup',function(){
    console.log(`Username ${this.value} ${this.value.length}`);
});

