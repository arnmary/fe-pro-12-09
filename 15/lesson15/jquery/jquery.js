// window.onload =function(){
//     let btnEl = document.querySelector('button');
//     btnEl.addEventListener('click',function(){

//     })
// }

$(document).ready(function(){
    $('#myBtn').click(function(){
        alert('test')
    })

    $('#myBtn').on('click',function(){
        alert('test2')
    })
    $('.your-class').slick({
        infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
      });

})