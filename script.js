document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        left: dets.x + 'px',
        top: dets.y + 'px',
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

const cards = document.querySelectorAll('.card');
let hoveredCard = null;
let globalTiltX = 0;
let globalTiltY = 0;
const maxTilt = 10; // Reduced max tilt for a subtler global effect

document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const percentX = (e.clientX - centerX) / centerX;
    const percentY = (e.clientY - centerY) / centerY;

    globalTiltX = percentY * -maxTilt;
    globalTiltY = percentX * maxTilt;

    cards.forEach(card => {
        if (card !== hoveredCard) {
            card.style.transform = `perspective(1000px) rotateX(${globalTiltX}deg) rotateY(${globalTiltY}deg)`;
        }
    });
});

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        hoveredCard = card;
    });

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cardCenterX = rect.width / 2;
        const cardCenterY = rect.height / 2;
        const deltaX = (x - cardCenterX) / cardCenterX;
        const deltaY = (y - cardCenterY) / cardCenterY;
        const localMaxTilt = 20; // A stronger tilt for the hovered card

        const localTiltX = deltaY * -localMaxTilt;
        const localTiltY = deltaX * localMaxTilt;
        card.style.transform = `perspective(1000px) rotateX(${localTiltX}deg) rotateY(${localTiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        hoveredCard = null;
        // The global mousemove will take over, so it smoothly transitions back
    });
});

document.addEventListener("mouseleave", () => {
    cards.forEach(card => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    })
});