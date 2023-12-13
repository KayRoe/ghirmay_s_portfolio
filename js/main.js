(() => {

gsap.registerPlugin(ScrollToPlugin);

let menu = document.querySelector("#hammenu"),
  mobileNav = document.querySelector(".mobile-menu");

function toggleMenu() {
  mobileNav.classList.toggle("hidden");
}

menu.addEventListener("click", toggleMenu);

    

})();


gsap.to(".slogo", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.3,
  });
  
  gsap.to(".hheading", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.5,
  });
  
  gsap.to(".hsubtitle", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.4,
  });
  
  gsap.to(".button", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.6,
  });
  



