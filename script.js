var loader = gsap.timeline()

  .to("#sub-text h6", {
    y: -500,
    delay: 0.5,
    duration: 6,
  })
.to("#loader", {
    top: "-100vh",
    duration: 0.5,
    delay:-1,
  })

loader.from("#overlay h1", {
    duration: 1,
    opacity: 0,
    y: 200,
    delay:-0.5,

})

loader.from("#overlay h2", {
    duration: 1,
    opacity: 0,
    y: 200,
    delay:-0.5,
})


gsap.from("#page2 h6", {
    duration: 0.1,
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: "#page2 h6",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
    },
})
gsap.from("#page2 h1", {
    duration: 0.1,
    opacity: 0,
    y: 50,
    // delay: 3,
    scrollTrigger: {
        trigger: "#page2 h6",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
    },
})
gsap.from(".box", {
    duration: 1,
    opacity: 0,
    // stagger: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
    },
})
gsap.from("#page3 h6", {
    duration: 0.1,
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: "#page3 h6",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
    },
})

gsap.from("#page4pt1 h6", {
    duration: 0.1,
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: "#page4pt1 h6",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
    },
})
gsap.from("#dabba1", {
    duration: 0.1,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#dabba1",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
    },
})
gsap.from("#dabba2", {
    duration: 0.1,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#dabba2",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
    },
})


gsap.from("#page5 h6", {
    duration: 0.1,
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: "#page5 h6",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
    },
})




const elems = document.querySelectorAll(".elems");
const image = document.querySelector("#image");
var page5 = document.querySelector("#page5");
var temp;

window.addEventListener("mousemove", function (dets) {
    image.style.left = `${dets.pageX}px`;
    image.style.top = `${dets.pageY}px`;
    temp = dets.clientY;
});
window.addEventListener("scroll", function () {
    var scrollY = window.pageYOffset;
    image.style.top = `${temp + scrollY}px`;
});

elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        image.style.scale = 1;
        let img = elem.getAttribute("data-images");
        image.style.backgroundImage = `url(${img})`;
    });

    elem.addEventListener("mouseleave", function () {
        image.style.scale = 0;
        let img = elem.getAttribute("data-images");
        image.style.backgroundImage = `url(${img})`;
    });
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

gsap.from("#box1", {
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#box1",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
    },
})
gsap.from("#box2", {
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 85%",
        scrub: true,
    },
})
gsap.from("#box3", {
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#box3",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
    },
})
gsap.from("#page9 p", {
    duration: 0.1,
    opacity: 0,
    y: 120,
    scrollTrigger: {
        trigger: "#page9 ",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 40%",
        scrub: true,
    },
})
gsap.from("#page9 button", {
    duration: 0.1,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#page9 button",
        scroller: "body",
        // markers:true,
        start: "top 85%",
        end: "top 75%",
        scrub: true,
    },
})
gsap.from("#smallbox", {
    duration: 0.1,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#smallbox",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
    },
})
