

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