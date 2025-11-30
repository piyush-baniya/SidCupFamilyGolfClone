let crsrBlur = document.querySelector(".cursor-blur")
let crsr = document.querySelector(".cursor")
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

document.addEventListener("mousemove", (dets)=> {
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrBlur.style.left = dets.x - 150 +"px"
    crsrBlur.style.top = dets.y - 150 +"px"
})



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