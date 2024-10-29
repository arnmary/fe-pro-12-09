let menuBtn = document.querySelector('#menuButton');
let menuList = document.querySelector('#menu');

menuBtn.onclick = function () {
    menuList.classList.toggle('d-none');
    if(menuList.classList.contains('d-none')){
menuBtn.innerHTML = 'Відкрити меню'
    }
    else {
        menuBtn.innerHTML = 'Закрити меню'
    }
}



document.querySelector('#btnContainer').addEventListener('click', function (e) {
    console.log(e.target.innerText);
    console.log(e.target);
    if (e.target.classList.contains('first')){
        alert('First button click')
    }
    else if (e.target.classList.contains('second')){
        alert('Second button click');

    }
    else{
        alert('Third button click');
    }
})