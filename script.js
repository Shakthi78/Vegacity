var tl = gsap.timeline({
    repeat: -1
})
tl
.to(".img-container", {
    width: "100%" ,
    ease: Expo.ease,
    stagger: 2,      
},"a")

.to(".class-text ", {
    ease: Expo.ease,
    stagger: 2,
    top: 0
},"a")
.to(".class-text", {
    delay: 2,
    ease: Expo.ease,
    stagger: 2,
    top: "-100%"
},"a")

