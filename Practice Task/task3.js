// Write an async/await function that fetch data from an api and logs a message. 
const loadData = async ()=>{
   const res= await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
   const data = await res.json();
   console.log(data);
}
loadData();