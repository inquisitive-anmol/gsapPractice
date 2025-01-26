gsap.to(".wigglingEffect", {
    rotation: 10,
    duration: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
})

const text = "Hello, GSAP!";
const el = document.querySelector(".typingTextEffect");
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    el.textContent += text[charIndex++];
    setTimeout(type, 100);
  }
}

setInterval(() => {
  el.textContent = "";
  charIndex = 0;
  type();
}, 2000);


gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallaxScrollEffect", {
  y: -200,
  scrollTrigger: {
    trigger: ".parallaxScrollEffect",
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  },
});

const card = document.querySelector(".card");  
card.addEventListener("mouseenter", () => {
    gsap.to(card, {
        rotationY: 180,
        duration: 3,
    });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
        rotationY: 0,
        duration: 3,
       });
  })
})

// typingTextEffect
// .to() => from current state to the defined state.
// .from() => from defined state to the current state.
// .fromTo() => from defined state to the defined state.
// .set() => set the defined state.
