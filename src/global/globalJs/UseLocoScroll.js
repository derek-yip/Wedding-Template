import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'
import {ScrollTrigger} from "gsap/ScrollTrigger";

export function UseLocoScrollWithGsap() {
      const scorllbar_exist = document.querySelector('.c-scrollbar')
      if (!scorllbar_exist) {
      const Element= document.querySelector(".locoscroll_wrapper")
      let locoScroll= new LocomotiveScroll({
        el:Element,
        smooth:true,
        multiplier:0.5
  })
  
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy('.locoscroll_wrapper',{
    scrollTop(value){
      if(locoScroll){
        return arguments.length
        ? locoScroll.scrollTo(value,0,0)
        : locoScroll.scroll.instance.scroll.y;
      }
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: Element.style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => {locoScroll.update()});
  ScrollTrigger.refresh();
  

  } else{
    const Element= document.querySelector(".locoscroll_wrapper")
      let locoScroll= new LocomotiveScroll({
        el:Element,
        smooth:true,
        multiplier:0.5
  })
  
  }
}
  
export function UseLocoScroll(){
  const scorllbar_exist = document.querySelector('.c-scrollbar')
      if (!scorllbar_exist) {
        const Element= document.querySelector(".locoscroll_wrapper")
        let locoScroll = new LocomotiveScroll({
        el:Element,
        smooth:true,
        multiplier:0.5
      }); 
    }
}

// export function AfterEnter(){
//     const Element= document.querySelector(".locoscroll_wrapper")
//     let locoScroll= new LocomotiveScroll({
//       el:Element,
//       smooth:true,
//       multiplier:0.5
// })
//     locoScroll.init()
// }

// export function AfterLeave(){
//     const Element= document.querySelector(".locoscroll_wrapper")
//     let locoScroll= new LocomotiveScroll({
//       el:Element,
//       smooth:true,
//       multiplier:0.5
// })
// }
