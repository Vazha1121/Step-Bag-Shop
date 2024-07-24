let accordions = document.querySelectorAll(".accordion-wrapper .accordion ");
let plus = document.querySelectorAll(".accordion-heading")

const stars = document.querySelectorAll(".stars i");
let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

const rangeFill = document.querySelector(".range-fill");
function validateRange() {
    let minPrice = parseInt(inputElements[1].value);
    let maxPrice = parseInt(inputElements[3].value);

    if(minPrice > maxPrice) {
        let tempValue = maxPrice;
        maxPrice = minPrice;
        minPrice= maxPrice;
    }

    const maxPercentage = ((maxPrice - 10)/130)*100;
    const minPercentage = ((minPrice - 10)/130)*100;

    rangeFill.style.left = minPercentage + "%";
    rangeFill.style.width = maxPercentage - minPercentage + "%"

    minValue.innerHTML = "$" + minPrice;
    maxValue.innerHTML = "$" + maxPrice;
};

const inputElements = document.querySelectorAll("input");

inputElements.forEach((Element) => {
    Element.addEventListener("input", validateRange)
});

validateRange();

plus.forEach(plus => {
    plus.addEventListener("click", event => {
        plus.classList.toggle("active");
    })
})

accordions.forEach((acco) => {
    acco.onclick = () => {
        accordions.forEach((subcontent) => {
            subcontent.addEventListener("click",() => {
                /* subcontent.classList.toggle("active") */
            });
        })
        acco.classList.toggle("active")
    }
});


const hamMenu = document.querySelector('.ham-menu');
const plan = document.querySelector('.plantitle')
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    plan.classList.toggle('active');
});



/* stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    })
}) */


const sortBy = document.querySelector(".sort-by12");
const prop = document.querySelector(".button-div");
const icon = document.querySelector(".icon")
const text = document.getElementById("text")
sortBy.addEventListener("click", () => {
    prop.classList.toggle("active");
    icon.classList.toggle("active");
})