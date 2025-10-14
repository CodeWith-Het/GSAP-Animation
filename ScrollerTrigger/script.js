// gsap.from(".box1",{
//     duration:2,
//     delay:1,
//     rotation:360,
//     scale:0,
// })

// gsap.from(".box2",{
//     duration:2,
//     delay:1,
//     rotation:360,
//     scale:0,
//     // repeat:-1,
//     // yoyo:true,
//     // scrollTrigger:".page2 .box2",
//     scrollTrigger:{
//         trigger:".page2 .box2",
//         scroll:"body",
//         markers:true,
//         start:"top 50%",
//         // end:"bottom 50%"
//     }
// })

// gsap.from(".box3",{
//     duration:2,
//     delay:1,
//     rotation:360,
//     scale:0,
// })

gsap.from(".page2 h1",{
    duration: 2,
    opacity:0,
    x: 500,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
})

gsap.from(".page2 h2",{
    duration: 2,
    opacity:0,
    x:-500,
    scrollTrigger: {
        trigger: ".page2 h2",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "bottom 50%",
        scrub:3,
        pin:true
    }
})