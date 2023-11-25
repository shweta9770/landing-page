function locoscrl(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoscrl()


var an = gsap.timeline()

an.from("#nav h1", {
    y:-80,
    duration:0.5,
    delay:1

})
an.from("#nav2 h3",{
    y:-50,
    duration:0.3,
    delay:0.5,
    stagger:0.25
})
an.from("img",{
    scale:0,
    duration:1,
})
an.from("#left h1",{
    x:"-110%",
    duration:1,
})
an.from("#left p",{
    x:"-105%",
    duration:0.5,
})
an.from("#left button",{
    scale:0,
    duration:0.5,
    delay:0.5
})

gsap.from("#page2 h1",{
    y:50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        scrub:2
    }

})
gsap.from("#page2 #box",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.05,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        scrub:3
    }

})
gsap.from("#page3 h1",{
    y:50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        scrub:3
    }

})
gsap.from("#page3 #imgdiv",{
    opacity:0.2,

    duration:0.3,
    scrollTrigger:{
        trigger:"#page3 #imgdiv",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        scrub:3
    }

})
