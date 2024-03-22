import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTriggerAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "top center+=100",
            end: "bottom top+=100",
            scrub: false,
            pin: false,
            markers: false,
            // other scrolltrigger options...
          },
        })
        .fromTo(
          element,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        );
    }
  }, []);

  return ref;
};

export default useScrollTriggerAnimation;
