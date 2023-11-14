function homepage() {
    var tl = gsap.timeline()
    tl.from(".nav", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2,
    })

        .to(".boundingElement", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1
        })
        .to(".buttonbound", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1
        })
}

homepage();