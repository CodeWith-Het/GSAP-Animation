var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imagediv = document.querySelector("#image");

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "back.out(1)"
    });
});

imagediv.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        scale: 3,
        duration: 0.3
    });
});

imagediv.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale: 1,
        duration: 0.3
    });
});
