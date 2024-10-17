// window.onload = function(){

// }
let mouseEl = document.querySelector('.mouse');
mouseEl.addEventListener('mousedown',function(e) {
    console.log(e);
    
   this.innerText = `Event ${e.type} <br> Alt key ${e.altKey}  <br>  Ctrl key ${e.ctrlKey}  <br> Shift key ${e.shiftKey}`; 
});
// mouseEl.addEventListener('mouseup',function(e) {
//     this.innerText = e.type; 
//  })