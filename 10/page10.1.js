window.onload = function(){
    let isTuneloption =false;
    let firstEl = document.querySelector('.mainParent');
    let secondEl = document.querySelector('.second');
let thirdEl = document.querySelector('.thirdChild');

firstEl.addEventListener('click', function(e){
this.style.backgroundColor ='green';
alert('1 block');
e.stopPropagation();
}, isTuneloption);

secondEl.addEventListener('click', function(e){
    this.style.backgroundColor ='orange';
    alert('2 block');
    e.stopPropagation();
    }, isTuneloption);

   thirdEl.addEventListener('click', function(e){
        this.style.backgroundColor ='yellow';
        alert('3 block');
        e.stopPropagation();
        }, isTuneloption);
       
}