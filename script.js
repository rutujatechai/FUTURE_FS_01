let button = document.querySelector("button");

button.addEventListener("click", function(){

    let projectsSection = document.querySelector("#projects");

    projectsSection.scrollIntoView({
        behavior: "smooth"
    });

});