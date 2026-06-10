const roles = [
    "Full Stack Developer",
    "Computer Engineering Student",
    "Web Developer",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");

function typeRole() {
    if(charIndex < roles[roleIndex].length){
        typingElement.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole,100);
    } else {
        setTimeout(eraseRole,1500);
    }
}

function eraseRole(){
    if(charIndex > 0){
        typingElement.innerHTML =
        roles[roleIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(eraseRole,50);
    } else {
        roleIndex++;
        if(roleIndex >= roles.length){
            roleIndex = 0;
        }
        setTimeout(typeRole,500);

    }
}

typeRole();

let hiddenElements = document.querySelectorAll(".hidden");
window.addEventListener("scroll", function () {
    hiddenElements.forEach(function (element) {
        let position = element.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            element.classList.add("show");
        }
    });
});

let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector("nav ul");
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
});