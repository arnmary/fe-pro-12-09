// let containerEl= document.querySelector('.container');
// console.log(containerEl);
// let titleEl = document.createElement('h1');
// titleEl.innerHTML ='Hello Js element';
// containerEl.appendChild(titleEl);

// let navEl =document.querySelector('header nav');
// let navigationLinks =['Home','About','Sale'];
// for (let  link of navigationLinks) {
//    let linkEl = document.createElement('a');
//    linkEl.innerHTML=link;
// //    navEl.appendChild(linkEl)
// // navEl.prepend(linkEl);
// // navEl.before(linkEl);
// navEl.after(linkEl);

// }

// let listEl =document.querySelector('ul');
// let activeEl = document.querySelector('.active');
// let newLi =document.createElement('li');
// newLi.innerHTML ='Brand new li element';
// listEl.replaceChild(newLi,activeEl);

// let lastLi =listEl.lastElementChild;
// console.log(lastLi);

// let firstLi =listEl.firstElementChild;
// console.log(firstLi);

// let [...listItems] =document.querySelectorAll('ul li');
// console.log(listItems);

// lastLi.remove();
// firstLi.remove();
// let mainTitle =document.querySelector('h1');
// mainTitle.remove();

//Traversing
console.log('===traversing===');

// let activeEl=document.querySelector('.active');
// console.log(activeEl.nextSibling);
// let activeEl=document.querySelector('.active');
// console.log(activeEl.nextElementSibling);

// console.log(activeEl.previousElementSibling);

// let nextEl = activeEl.nextElementSibling;

// let previosEl = activeEl.previousElementSibling;

// nextEl.innerHTML = 'Next';
// previosEl.innerHTML ='Prev';

// console.log(activeEl.parentElement);


let linkEl = document.querySelector('a');
console.log(`Link href${linkEl.getAttribute('href')}`);

console.log(`Link target${linkEl.getAttribute('target')}`);

let emtyLink =document.querySelector('.emty');
console.log(emtyLink);

console.log(`Emty link href${ emtyLink.getAttribute('href')}`);
console.log(`Emty link href${ emtyLink.getAttribute('target')}`);

emtyLink.setAttribute('href','https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/rest_parameters');

emtyLink.setAttribute('target','blank');
emtyLink.innerHTML='Sale'
console.log(`Emty link href${ emtyLink.getAttribute('href')}`);
console.log(`Emty link href${ emtyLink.getAttribute('target')}`);

let buttonEl= document.querySelector('button');
buttonEl.setAttribute('disabled','disabled')
console.log(`Is button disabled ${buttonEl.hasAttribute('disabled')}`);

console.log(`is link has target${emtyLink.hasAttribute('target')}`);
console.log(`Is class ${emtyLink.hasAttribute('class')}`);
//style

let mainTitle = document.querySelector('h1');
console.log(mainTitle);
mainTitle.setAttribute('style', 'background-color:rgba(0,0,0,0.5); padding:50px;');
console.log(mainTitle.style.cssText);
mainTitle.style.cssText +='font-size:40px';
mainTitle.style.color ='blue';
mainTitle.style.marginBottom = 0;
mainTitle.style.fontSize ='20px';

//get coomputed style

let allStyle =getComputedStyle(mainTitle);
// console.log(allStyle);

console.log(allStyle.fontSize);



let originFontSize = parseInt(allStyle.fontSize);
originFontSize +=20;
console.log(originFontSize);
mainTitle.style.fontSize = `${originFontSize}px`;
console.log(allStyle.backgroundColor);

let subTitle = document.querySelector('h2');
// subTitle.setAttribute('class', 'test active');
// console.log(subTitle.className += 'my-class');

// console.log(subTitle.classList);

// subTitle.classList.add('first');
// subTitle.classList.add('second');
subTitle.classList.add('first','second','test-again','remove-me','double-value');

subTitle.classList.remove('remove-me','first','second');

subTitle.classList.replace('test-again','danger');
subTitle.classList.add('me')

console.log(`Test me class value${subTitle.classList.contains('me')}`);

// subTitle.classList.remove('me');


//togle

let buttonTest = document.querySelector('.test');
let list = document.querySelector('ul');

// buttonTest.onclick = function () {
//    subTitle.classList.toggle('open');
//    list.classList.toggle('active');

// }
buttonTest.oneclick=function() {
    buttonTest.classList.toggle('open');
    list.classList.toggle('active');
}
