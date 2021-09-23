let open = document.getElementById("button--open--doom")
let close = document.getElementById("doom--ok")
let mood = document.getElementById("doom")
console.log(mood.style.visibility)
open.addEventListener("click", (e)=>{
    mood.style.visibility = 'visible'
});
close.addEventListener("click", (e)=>{
    mood.style.visibility = 'hidden'
});