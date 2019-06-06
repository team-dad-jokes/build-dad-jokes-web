//naviation bar
let navigationLinks = document.querySelectorAll(".nav-link");
console.log(navigationLinks);
navigationLinks.forEach(anchor => {
    anchor.addEventListener("mouseover", event =>{
        event.target.style.color = "";
    });
    anchor.addEventListener("mouseout", event => {
        event.target.style.color = "white";
    });
})