//naviation bar
let navigationLinks = document.querySelectorAll(".nav-link");
console.log(navigationLinks);
navigationLinks.forEach(anchor => {
    anchor.addEventListener("mouseover", event =>{
        event.target.style.color = "#17b978";
    });
    anchor.addEventListener("mouseout", event => {
        event.target.style.color = "white";
    });
})

let button = document.querySelector("button");
console.log(button);
button.addEventListener("mouseenter", event => {
  event.target.style.backgroundColor = "#17b978";
});

button.addEventListener("mouseleave", event => {
  event.target.style.backgroundColor = "#071a52";
});