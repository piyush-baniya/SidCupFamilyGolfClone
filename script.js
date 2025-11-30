document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
    });
    gsap.to(".cursor-blur", {
        left: dets.x - 150,
        top: dets.y - 150,
    });
});

const hamburger = document.querySelector("#hamburger-icon");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavClose = document.querySelector("#mobile-nav-close");
let menuOpen = false;

function openMenu() {
    gsap.to(mobileNav, { y: "0%" });
    menuOpen = true;
}

function closeMenu() {
    gsap.to(mobileNav, { y: "-100%" });
    menuOpen = false;
}

hamburger.addEventListener("click", () => {
    menuOpen ? closeMenu() : openMenu();
});

mobileNavClose.addEventListener("click", closeMenu);

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "120px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -10px",
        scrub: 1,
        toggleClass: {targets: "#nav", className: "scrolled"}
}})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})