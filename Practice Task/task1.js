// 1) Write a function that displays a message after 5s. 
setTimeout(() => {
    console.log('It will display after 5s')
}, 5000);

/* 
 * 2) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.
*/
 function delayedGreeting(name, delay){

    setTimeout(()=> {
        console.log('Hello,',name+'!');
    },delay)
   
    
}

delayedGreeting('Indrojit',5000);