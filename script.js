var tl = gsap.timeline();
tl.from(".pg1 h1, .pg1 .hero h4", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})
tl.from(".backimg", {
    width: "50%",
    height: "60%",
    borderRadius: 12,
    duration: 1.5,
    ease: Expo.easeInOut
})
tl.from("nav h4, nav button", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})
function scrollText() {
    var para = document.querySelectorAll(".text");
    para.forEach((elem) => {
        var text = elem.textContent;
        var splitedText = text.split("");
        var span = "";
        splitedText.forEach((elem2) => {
            span += `<span>${elem2}</span>`;
        })
        elem.innerHTML = span;
    })
}
scrollText();
gsap.to(".pg2 span", {
    color: "#e2e3c7",
    stagger: 0.1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg2 span",
        start: "top 60%",
        end: "top -35%",
        scrub: 2
    }
})
gsap.to(".pg3-1 span", {
    color: "#454b37",
    stagger: 0.1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg3-1 span",
        start: "top 60%",
        end: "top 20%",
        scrub: 2
    }
})
document.querySelectorAll(".pg4-1 section").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        gsap.to(elem, {
            backgroundColor: "#5d654a",
            duration: 0.1
        })
        gsap.to(elem.querySelector("h1"), {
            color: "#e2e3c7",
            duration: 0.1
        })
        gsap.to(elem.querySelector("h4"), {
            color: "white",
            duration: 0.1
        })
        gsap.to(elem.querySelector("span"), {
            color: "black",
            backgroundColor: "white",
            duration: 0.1
        })
        gsap.to(elem.querySelector("ul"), {
            left: "30%",
            duration: 0.1
        })
        gsap.to(elem.querySelector(".img"), {
            left: "0%",
            duration: 0.1,

        })
    })
    elem.addEventListener("mouseleave", () => {
        gsap.to(elem, {
            backgroundColor: "transparent",
            duration: 0.1
        })
        gsap.to(elem.querySelector("h1"), {
            color: "#454b37",
            duration: 0.1
        })
        gsap.to(elem.querySelector("h4"), {
            color: "black",
            duration: 0.1
        })
        gsap.to(elem.querySelector("span"), {
            color: "white",
            backgroundColor: "#454b37",
            duration: 0.1
        })
        gsap.to(elem.querySelector("ul"), {
            left: "5%",
            duration: 0.1
        })
        gsap.to(elem.querySelector(".img"), {
            left: "-25%",
            duration: 0.1,

        })
    })
})
gsap.to(".pg4-2 .container", {
    x: -1850,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg4-2",
        start: "top 0",
        end: "top -250%",
        pin: true,
        scrub: 2
    }
})
gsap.to(".pg5-1 span", {
    color: "#dddec4",
    stagger: 0.1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg5-1 span",
        start: "top 60%",
        end: "top 20%",
        scrub: 2
    }
})
gsap.to(".pg6-1 span", {
    color: "#454b37",
    stagger: 0.1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg6-1 span",
        start: "top 60%",
        end: "top -35%",
        scrub: 2
    }
})
gsap.to(".pg6-2 .first", {
    left: "-30%",
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg6-2",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.to(".pg6-2 .second", {
    right: "-30%",
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg6-2",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.to(".pg6-2 .textdiv", {
    opacity: 1,
    y: -100,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg6-2",
        start: "top 9%",
        end: "top 0%",
        scrub: 2
    }
})
gsap.to(".pg7-1 span", {
    color: "#e2e3c7",
    stagger: 0.1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg7-1 span",
        start: "top 60%",
        end: "top 20%",
        scrub: 2
    }
})
gsap.from(".pg3-2", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".pg3-2",
        scroller: "body",
        start: "top 60%",
       end:"top 50%",
        scrub: 2
    }
})
gsap.from(".pg4-1 section", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".pg4-1 section",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 2
    }
})
gsap.from(".pg5-1 .elem", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".pg5-1 .elem",
        scroller: "body",
        start: "top 80%",
        end: "top 75%",
        scrub: 2
    }
})
gsap.from(".pg5-1 .bottom2 h3", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".pg5-1 .bottom2 h3",
        scroller: "body",
        start: "top 90%",
        end: "top 88%",
        scrub: 2
    }
})
document.querySelectorAll(".smalltext").forEach((elem) => {
    gsap.from(elem, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: elem,
            scroller: "body",
            start: "top 90%",
            end: "top 88%",
            scrub: 2
        }
    })
})
gsap.from(".pg7-2 .img", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".pg7-2 .img",
        scroller: "body",
        start: "top 80%",
        end: "top 75%",
        scrub: 2
    }
})
gsap.from(".pg7-3 h4", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".pg7-3 h4",
        scroller: "body",
        start: "top 90%",
        end: "top 88%",
        scrub: 2
    }
})
gsap.to(".pg8-1 span", {
    color: "#454b37",
    stagger: 0.1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg8-1 span",
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
})
document.querySelectorAll(".pg8-2 section").forEach((elem) => {
    gsap.from(elem, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: elem,
            scroller: "body",
            start: "top 60%",
           end:"top 55%",
            scrub: 2
        }
    })
})
gsap.from(".pg9 .card", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".pg9 .card",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 2
    }
})
