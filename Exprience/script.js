gsap.to(".page2 h1",{
     transform:"translateX(-100%)",
     scrollTrigger:{
        trigger:".page2",
        sscroller:"body",
        markers:true,
        start:"top 0%",
        end:"bottem -100%",
        scrub:4,
        pin:true
     }
})