//navigation
//naviation bar
let navigationLinks = document.querySelectorAll(".nav-link");
console.log(navigationLinks);
navigationLinks.forEach(anchor => {
    anchor.addEventListener("mouseover", event =>{
        event.target.style.color = "@greenFoam";
    });
    anchor.addEventListener("mouseout", event => {
        event.target.style.color = "white";
    });
})


//Regitration

class FormLink {
    constructor(link) {
        this.formContent = document.querySelector(`.formContent[data-tab='${link.dataset.tab}']`);
        this.formContent = new Content(this.formContent);
        link.addEventListener('click', () => this.linkClick());
        this.allFormContent = document.querySelectorAll('.formContent');
    }
    linkClick() {
        this.allFormContent.forEach(formContent => {
            formContent.classList.remove('change')
        })
        this.formContent.toggleContent();
    }
}

class Content {
    constructor(contentElement) {
        this.content = contentElement;
    }
    toggleContent() {
        this.content.classList.toggle('change');
    }
}

const links = document.querySelectorAll('.link');
console.log(links);
links.forEach( link => new FormLink(link));
