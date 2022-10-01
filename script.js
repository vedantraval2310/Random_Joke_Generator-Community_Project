const jokeEl = document.getElementById('joke');          // div id = joke        
const get_joke = document.getElementById('get_joke');    // button id = get_joke 

get_joke.addEventListener('click', generateJoke);
generateJoke();                                          

async function generateJoke(){  // async makes a function return a Promise
    // call the icanhaz API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {      // await makes a function wait for a Promise
        headers: {
            'Accept': 'application/json'      


        }
    });

    const joke = await jokeRes.json();  // save     

      // Fade out
      jokeEl.style.opacity = 0;
  
  // Fade in 
  setTimeout(function(){ 
     jokeEl.innerHTML = joke.joke; 
      jokeEl.style.opacity = 1;
  },500);
     


}
