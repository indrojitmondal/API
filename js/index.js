console.log('connected index.js');
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
// function loadData2(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
         
//         data.forEach(element => {
//              console.log(element.title);
//             const ul = document.getElementById('loadData2');
//             const li = document.createElement('li');
//             li.innerHTML =`
//              <h4>${element.title}</h4> `;
//              ul.appendChild(li);

//         });
         
//     })


// }
document.getElementById('btn2').addEventListener('click', async() =>{
   
    document.getElementById('loadData2').classList.toggle('hidden');
    
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    data.forEach(element => 
        {
         console.log(element.title);
        const ul = document.getElementById('loadData2');
        const li = document.createElement('li');
        li.innerHTML =`
         <h3>${element.title}</h3> `;
         ul.appendChild(li);

        }   
    );
   
    


})

const loadData3 = async() =>{
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = await res.json();
    console.log(data);
   
    }

