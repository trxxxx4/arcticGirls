const sr = ScrollReveal({
    duration: 1250, reset: true
});
sr.reveal('.slogan__text', { opacity: 0 , origin: 'bottom', distance: "100px", reset: false });
sr.reveal('.slogan__title', {  origin: 'left', distance: "400px", reset: false });
sr.reveal('#gallery1', {origin: 'right', distance: '400px', reset: true});
sr.reveal('#gallery2', {origin: 'left', distance: '400px', reset: true});
sr.reveal('.song__selector__container', {
    opacity: 0, reset: false
})




/*
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.slogan__text', { opacity: 0 }, {
    opacity: 1,
    ScrollTrigger: {
        trigger: '.slogan__text',
        start: 'center',
        scrub: true,
        end: 900
    }
})*/