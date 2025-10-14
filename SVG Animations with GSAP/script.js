var path = "M 20 100 Q 250 100 1300 100"
var finalpath = "M 20 100 Q 250 100 1300 100" 

document.querySelector("#string")

// string.addEventListener("mouseenter",function(dets){
//     console.log(dets);
// })

// string.addEventListener("mouseleave",function(){
//     console.log("you are leaved");
// })

// string.addEventListener("mousemove",function(dets){
//     console.log(dets);
// })

string.addEventListener("mousemove",function(dets){

    path=`M 20 100 Q 550 ${dets.y} 1300 100`
    // console.log(path);

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path", {
        attr: { d: finalpath },
        duration: 1,
        ease: "elastic.out(1,0.2)"
    })
})