// Завдання 5: Динамічне створення SVG-лінії
// Створіть функцію на JavaScript, яка додає на сторінку SVG-елемент з лінією, параметри якої (початкова та кінцева точки, колір, товщина) передаються як аргументи функції.

let btnEl = document.querySelector('button');
let svgContainer =document.querySelector('.svgContainer');
const svgNs ='http://www.w3.org/2000/svg';

function drawLine(x1,y1,x2,y2,color, width) {
    const svg = document.createElementNS(svgNs,'svg');
    svg.setAttribute('width',500);
    svg.setAttribute('height',300);
    svg.style.display = 'block';
    svg.style.marginBottom = '15px';

    const line =document.createElementNS(svgNs,'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1',y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2',y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width',width);

    svg.appendChild(line);
    svgContainer.appendChild(svg);

}
btnEl.onclick = function(){
    drawLine(20,1000,200,100,'black',2)
}