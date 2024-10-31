let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
let containnerEl =document.querySelector('.container');
xhr.onreadystatechange =function () {
    if(xhr.readyState === 4 && xhr.status == 200){
        console.log(xhr.response);
      xhr.response.forEach(element => {
        let pEl = document.createElement('p');
        pEl.innerHTML = `${element.name} <strong> ${element.username}</strong>`;
        containnerEl.appendChild(pEl);
      });  
    }
}
xhr.responseType = 'json';

//text
//xml
//json
//fofmData
//Binary data(png,jpeg ->base64->server)

xhr.send(null);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))