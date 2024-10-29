function showAlert() {
    alert('Hello user')
}
let timeOutAlert = setTimeout(showAlert,5000);

document.querySelector('.cancelTimeout').onclick = function(){
  clearTimeout(timeOutAlert) ;
  alert('Calcel'); 
}
setTimeout(function(){
alert('set timeout 2');
}, 10000);

let titleEl = document.querySelector('h1');

// setInterval(function(){

// }, 1000);
let count = 0;
function countFn(){
    count++;
    titleEl.innerHTML =`Count:${count}
    `;
    if(count>20){
      clearInterval(intervalCounter);
      alert('Stop count') 
    }
}
let intervalCounter = setInterval(countFn, 1000);

