fetch('https://jsonplaceholder.typicode.com/posts/3',{
    method :'PUT',
      headers : {
         'Content-Type':'application/json; charset=UTF-8'
      },
      body:JSON.stringify({
         id: 1,
         title:"оновлений заголовок",
         body:"оновлений конттент",
         userId: 1
      })
     })
     .then(response=>response.json())
     .then(data => console.log(`PUT update post`, data))
    .catch(e => console.log(`Put Error `, e));

    //Delete
fetch('https://jsonplaceholder.typicode.com/posts/3',{
    method :'DELETE'
})
.then(response =>response.json())
.then(data=>console.log(`Delet update`,data))
.catch(e=>console.log(`Delete Error`,e));


//pro

fetch('https://jsonplaceholder.typicode.com/posts/3',{
    method :'GET',
    headers:{
       'Content-Type':'aplication/json;charset=UTF-8',
       'Authorization': 'Bearer your_token_here' ,
       'Cookie': 'SessionId-your_session_id'
    }
})
.then(response =>response.json())
.then(data=>console.log(`Get update`,data))
.catch(e=>console.log(`Get Error`,e));



///
fetch( 'https://openlibrary.org/people/mekBot/books/already-read.json',{
    method :'GET'
})
  .then(response=>response.json())
  .then(data=>console.log(`get books data`,data)
  ) 
  .catch(e=>log(`Get error`, e))


  fetch( 'https://openlibrary.org/search/authors.json',{
    method :'GET'
})
  .then(response=>response.json())
  .then(data=>console.log(`get autors data`,data)
  ) 
  .catch(e=>log(`Get error`, e))

//   fetch( '',{
//     method :'GET'
// })
//   .then(response=>response.json())
//   .then(data=>console.log(`get autors data`,data)
//   ) 
//   .catch(e=>log(`Get error`, e))



const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
  });
  
  let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));  