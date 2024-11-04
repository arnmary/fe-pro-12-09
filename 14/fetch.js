// fetch('url',[options])

// response.json()
//response.text()
//response.formData()
//response.blob()


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



      // fetch('https://jsonplaceholder.typicode.com/posts', {
      //  method : 'POST',
      //  body:JSON.stringify({
      //   body :'Test post',
      //   id : 1,
      //   title : 'My title',
      //   userId : 1
      //  })
      //   }).then(response => response.json())
      //   .then(data => console.log(json))

         //put

 fetch('https://jsonplaceholder.typicode.com/posts/1',{
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
