let tl = gsap.timeline()


tl.from("nav h3 , nav h2 , footer p, footer a",{

    duration: 1,
    delay:0.6,
    y:-120,
    stagger:0.1
})

tl.from(".overlay h1",{

    scale:0,
    opacity:0,
    duration:0.6
})


tl.to('.background .img3',{

    y:-150,
    delay: 0.4,
    duration:1,
    yoyo:true,
    scrollTrigger: {
        trigger: ".background",
        scroller: "body",
        start: "top top",
        scrub:2,

    }
    
})

tl.to('.background .img2',{

    y:-60,
    delay: 0.2,
    scale:1.4,
    yoyo:true,
    scrollTrigger: {
        trigger: ".background",
        scroller: "body",
        start: "top top",
        scrub:3,
        // pin: true
    }
    
})

tl.to('.background .img1',{

    y:-20,
    scale: 2,
    yoyo:true,
    scrollTrigger: {
        trigger: ".background",
        scroller: "body",
        start: "top top",
        scrub:2,
        // pin: true
    }
    
})

tl.from(".elements img",{

    scale:0,
    opactity:0,
    stagger:0.2,
    scrollTrigger: {
        trigger:".elements",
        scroller:"body",
        start: "top 60%",
        end: "top 70%",
        // markers:true,
        scrub:2

    }
})

tl.from(".paragraph p",{

    scale:0,
    scrollTrigger:{
        trigger:".paragraph p",
        scroller:"body",
        scrub:2,
        start:"top 296%",
        // markers:true

    }
})