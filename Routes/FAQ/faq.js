const hamMenu = document.querySelector('.ham-menu');
const plan = document.querySelector('.plantitle')
const offScreenMenu = document.querySelector('.off-screen-menu');
const secDivRemove = document.querySelector('.section-div')
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    plan.classList.toggle('active');
    secDivRemove.classList.toggle('active');
    /* plus.classList.toggle("active"); */
});

/* search input */
const searchButton = document.querySelector(".searchButton");
const searchInput = document.querySelector(".searchInp");
const h2Remove = document.querySelector(".h2Remove");

searchButton.addEventListener("click", () => {
    searchButton.classList.toggle("active");
    searchInput.classList.toggle("active");
    h2Remove.classList.toggle("active");
    
})

/* accordion */
let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
let plus = document.querySelectorAll(".arrow");
let accoContent = document.querySelectorAll(".accordion-content");

    accordions.forEach((acco) => {
        acco.onclick = () => {
            accordions.forEach((subcontent) => {
                acco.classList.toggle("active")
                plus.classList.toggle("active");
            })
        }
    });