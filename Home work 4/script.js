

const button = document.getElementById('button')

button.addEventListener('click',get200())

function get200(){
   
   const xhr = new XMLHttpRequest();   
   xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
   xhr.send();
   xhr.onload = ()=>{
      console.log(xhr.response);
      alert('статус 200 получен')
   }
};