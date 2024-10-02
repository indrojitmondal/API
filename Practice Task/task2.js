/*
   The function telljoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. 
 */

function tellJoke(){
   console.log(`why don't scientists trust atoms? Because they make up everything!`);
}

const jokeInterval = setInterval(tellJoke,2000);
// After 10 seconds stop telling jokes.
setTimeout(() =>{
    clearInterval(jokeInterval);
 },10000)