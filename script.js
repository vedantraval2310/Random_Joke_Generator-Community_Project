
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const copy = document.querySelector("#copy_joke");


const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://icanhazdadjoke.com/";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
      console.log(item);
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
  


toggle.addEventListener("click", () => {
  body.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-moon")
    : (toggle.firstElementChild.className = "far fa-sun");
});
 //master

 copy.addEventListener("click", () => {
  const text = jokeContainer.textContent;
  navigator.clipboard.writeText(text);
});
