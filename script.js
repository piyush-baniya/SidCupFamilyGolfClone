let crsr = document.querySelector(".cursor")
let blur = document.querySelector(".cursor-blur")

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
const maxTilt = 10; 

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
        const localMaxTilt = 20; 

        const localTiltX = deltaY * -localMaxTilt;
        const localTiltY = deltaX * localMaxTilt;
        card.style.transform = `perspective(1000px) rotateX(${localTiltX}deg) rotateY(${localTiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        hoveredCard = null;

    });
});

document.addEventListener("mouseleave", () => {
    cards.forEach(card => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    })
});


let h4all = document.querySelectorAll("#nav h4")
h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter", ()=>{
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

h4all.forEach((elem)=>{
    elem.addEventListener("mouseleave", ()=>{
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration:1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})


ScrollTrigger.matchMedia({

    "(min-width: 671px)": function() {
        gsap.from("#page4 h1", {
            y: 50,
            scrollTrigger: {
                trigger: "#page4", 
                scroller: "body",
                start: "top 75%",
                end: "top 70%",
                scrub: 3
            }
        });
    },

    "(max-width: 670px)": function() {
        gsap.from("#page4 h1", {
            y: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: "#page4 h1"
            }
        });
    }
});