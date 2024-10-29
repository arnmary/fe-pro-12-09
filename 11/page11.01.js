let mouseEl = document.querySelector('.mouse');

// mouseEl.addEventListener('mouseover', function (e) {
//     this.innerText = e.type;
//     this.style.backgroundColor = 'yellow';
// });

// mouseEl.addEventListener('mouseout', function (e) {
//     this.innerText = e.type;
//     this.style.backgroundColor = 'green';
// });

mouseEl.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    this.innerText = e.type;
    this.style.backgroundColor = 'gray';
})

let moveEl = document.querySelector('.move');
console.log(moveEl);
let infoPel = document.querySelector('.info');
console.log(infoPel);

moveEl.addEventListener('mousemove', function (e) {
    infoPel.innerText = `Type ${e.type} Client X an Y ${e.clientX} 
    ${e.clientY} <br>
    Layer X an Y ${e.layerX} and ${e.layerY} <br>
    Screen X an Y${e.screenX} and ${e.screenY} <br>
    Offset X an Y${e.offsetX} and ${e.offsetY}`
});

let inputEl = document.querySelector('input');

inputEl.addEventListener('keydown', function (e) {
    infoPel.innerText = e.type;

});
inputEl.addEventListener('keyup', function (e) {
    // infoPel.innerText = e.type;
    infoPel.innerHTML = ` 
    key = ${e.key} <br>
    key Code =${e.code} <br>
    Shift key = ${e.shiftKey} <br>
    Alt key = ${e.altKey} <br>
    Ctrl key = ${e.ctrlKey}
    `
    
});
inputEl.addEventListener('copy', function (e) {
    alert("dont Copy");
    e.preventDefault();
});

inputEl.addEventListener('paste', function (e) {
    alert("dont Paste");
    e.preventDefault();
});

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
});


