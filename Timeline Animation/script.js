document.addEventListener("DOMContentLoaded", function() {
  var t1 = gsap.timeline({ paused: true });

  t1.to("#full", {
    right: 0,
    duration: 0.6,
    ease: "power3.out"
  });

  t1.from("#full h4", {
    x: 150,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

  t1.from("#full i", {
    opacity: 0,
    rotate: 180,
    duration: 0.4
  });

  var menuIcon = document.querySelector("#menuBtn");
  var closeIcon = document.querySelector("#closeBtn");

  menuIcon.addEventListener("click", function() {
    t1.play();
  });

  closeIcon.addEventListener("click", function() {
    t1.reverse();
  });
});
