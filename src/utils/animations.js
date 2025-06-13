import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (EventTarget, animationProps, scrollProps)=>{
 gsap.to(EventTarget, {
    ...animationProps,
    scrollTrigger: {
        trigger: EventTarget,
        toggleActions:'restart reverse restart reverse',
        start: 'top 85% ',
    ...scrollProps,
    }
 })
}

export const animationWithGsapTimeline =(timeline, rotationRef, rotaionState, firstTarget, seconddTarget, animationProps)=> {

    timeline.to(rotationRef.current.rotation,{
        y:rotaionState,
        duration:1,
        ease: 'power2.inOut'
    })

    timeline.to (
        firstTarget,
        {
            ...animationProps,
            ease:'power1.inOut'
        },
        '<'
    )

    timeline.to (
        seconddTarget,
        {
            ...animationProps,
            ease:'power1.inOut'
        },
        '<'
    )
}