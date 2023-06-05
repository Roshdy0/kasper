let NavBarOffSetTop = document.querySelector(".header");
let NavBarContainer = document.querySelector(".header .container");
let NavBarContainerAfter = document.querySelector(".header .container::after");
let NavBarLinks = document.querySelectorAll(".header .menu ul li a");

let StartServices = document.querySelector(".services");
let ServicesRight = document.querySelectorAll(".services .from-right");
let ServicesLeft = document.querySelectorAll(".services .from-left");
let ServicesHeading = document.querySelector(".services .main-heading");

let designStart = document.querySelector(".design");
let imgDown = document.querySelector(".design .image img");
let designText = document.querySelector(".design .text");

var owl = $('.owl');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    margin: 10,
});

window.onscroll = function () {
    if ( window.scrollY >= NavBarOffSetTop.offsetTop + 200) {
        NavBarOffSetTop.style.backgroundColor = "#012630";
        NavBarContainer.style.height = "60px";
        NavBarContainer.style.minHeight = "20px";
        NavBarLinks.forEach((link) => {
            link.style.border = "none";
        });
    }else{
        NavBarOffSetTop.style.backgroundColor = "transparent";
        NavBarContainer.style.minHeight = "97px";
        NavBarLinks.forEach((link) => {
            link.style.borderBottom = "1px solid var(--main-color)";
        });
    }
    if ( window.scrollY >= StartServices.offsetTop - 100) {
        ServicesHeading.style.opacity = "100%";
        ServicesRight.forEach((SRight) => {
            SRight.style.animation = "from-right var(--main-transition)";
            SRight.style.animationFillMode = "forwards";
        });
        ServicesLeft.forEach((SLeft) => {
            SLeft.style.animation = "from-left var(--main-transition)";
            SLeft.style.animationFillMode = "forwards";
        })
    }else{
        ServicesHeading.style.opacity = "0";
        ServicesRight.forEach((SRight) => {
            SRight.style.animation = "to-right var(--main-transition)";
            SRight.style.animationFillMode = "forwards";
        });
        ServicesLeft.forEach((SLeft) => {
            SLeft.style.animation = "to-left var(--main-transition)";
            SLeft.style.animationFillMode = "forwards";
        })
    }
    if ( window.scrollY > designStart.offsetTop -100) {
        console.log("00000000000");
        imgDown.style.animation = "from-down var(--main-transition)";
        imgDown.style.animationFillMode = "forwards";
        designText.style.animation = "from-right var(--main-transition)";
        designText.style.animationFillMode = "forwards";
    }else{
        imgDown.style.animation = "from-top var(--main-transition)";
        imgDown.style.animationFillMode = "forwards";
        designText.style.animation = "to-right var(--main-transition)";
        designText.style.animationFillMode = "forwards";
    }
}

/* Start Create Our Works Filter */
let portfolioShuffle = document.querySelectorAll(".portfolio .shuffle li");
let box = document.querySelectorAll(".portfolio .box");

console.log(portfolioShuffle);
portfolioShuffle.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImage);
});
// Remove Active Class From All Li And Add To Select
function removeActive() {
    portfolioShuffle.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
// Management Images 
function manageImage() {
    box.forEach((img) => {
        img.style.display = "none" ;
    });
    document.querySelectorAll(this.dataset.chose).forEach((el) => {
        el.style.display = "block";  
        el.style.animation = 'show 3s';      
    });
}
/* End Create Our Works Filter */