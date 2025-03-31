

const sun = document.querySelector(".light");
const moon = document.querySelector(".dark");
sun.addEventListener("click", () =>{
    moon.style.background = "#000";
    sun.style.background = "#fff";
    document.body.classList.add("lightmood"); //light off
});
moon.addEventListener("click", () =>{
    sun.style.background = "#fff";
    moon.style.background = "#000";
    document.body.classList.remove("lightmood"); //light on
});


// ===================================navigation menu===================
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const responsiveMenu = document.querySelector("#responsive-menubar");

openMenu.addEventListener("click", () => {
    responsiveMenu.style.top = "0";
    openMenu.style.display = "none";
    closeMenu.style.display = "block"
});

closeMenu.addEventListener("click", () => {
    responsiveMenu.style.top = "-100%";
     openMenu.style.display = "block";
    closeMenu.style.display = "none";
});