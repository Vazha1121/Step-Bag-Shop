const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

/* register */

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.registered-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.display = "block";
})
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.style.display = "none";
});


/* function myFunction() {
    document.getElementById("panel").style.display = "none";
} */


/* accordion */

let accordions = document.querySelectorAll(".accordion-wrapper .accordion ");
let plus = document.querySelectorAll(".accordion-heading");

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
/* content.forEach(content => {
    content.addEventListener("click", event =>{
        content.classList.toggle("active");
    })
})
 */

/* carousel */

const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll(".img_container")[0];
const arrowIcons = document.querySelectorAll(".d6 i");

let isDragStart = false ,prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 23;
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id =="left" ? -firstImg : firstImgWidth;
    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging")
    let positionDiff = e.pageX = prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
};
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging")
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);