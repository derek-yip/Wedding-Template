import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Observer from 'gsap/Observer';

function UseHorizontal() {
      let sections = document.querySelectorAll(".block"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      currentIndex = -1,
      animating;

      const wrapper=document.querySelector(".slide_wrapper")
      const wrapper_section = ScrollTrigger.create({
          ease:'none',
          trigger: wrapper,
          // scroller:'.locoscroll_wrapper',
          pin: true,
          scrub:true,
          end: ()=> `+=${wrapper.offsetHeight}`,
      });
    
    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });

    function gotoSection(index, direction) {
      animating = true;

      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 2, ease: "power3.inOut" },
          onComplete: () => {
            animating = false;
          }
        });
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], { zIndex: 0 });
          
          tl.to(sections[currentIndex], { xPercent: -15 * dFactor }).set(
            sections[currentIndex], { autoAlpha: 0 }
          );
        }
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { xPercent: (i) => (i ? -85 * dFactor : 85 * dFactor) },
        { xPercent: 0 },
        0
      ).fromTo(sections[index], { xPercent: 15 * dFactor }, { xPercent: 0 }, 0);

      currentIndex = index;
    }
  
     let observer = Observer.create({
      target: wrapper,
      type: "wheel, touch, pointer",
      wheelSpeed: -1,
      preventDefault:true,
      onDown: () => {
        if(currentIndex > 0 ){
          !animating && gotoSection(currentIndex - 1, -1);
          window.scrollTo({ top:wrapper.getBoundingClientRect().top + window.scrollY});
          // Debug when user scroll up, set the scroll position always on the top
          if(currentIndex === 0){
            setTimeout(() => {
              observer.disable();
              wrapper.addEventListener('mouseleave',(e)=>{
                  observer.enable();
                })
            }, 1000);
          }
        }
      },
      onUp: (self) => {
        if (currentIndex < sections.length - 1 ){
          !animating && gotoSection(currentIndex + 1, 1) ;
          window.scrollTo({ top:wrapper.getBoundingClientRect().top + window.scrollY});
          if(currentIndex === sections.length - 1){
              setTimeout(() => {
                observer.disable();
                wrapper.addEventListener('mouseleave',(e)=>{
                    observer.enable();
                })
              }, 1000);
          }
        }
      } 

   
    });

    gotoSection(0, 1);
    return sections.length
}

export default UseHorizontal