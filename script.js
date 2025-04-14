const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-list").forEach(n => n.
addEventListener("click", () => {
    hamMenu.classList.remove("active");
    hamMenu.classList.remove("active");
}))