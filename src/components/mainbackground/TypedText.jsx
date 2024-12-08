'use client';

import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TypedText = () => {

    // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Development", "Advertiser", "Photographer", "Content Creator", "Freelancer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    
  return (
    <div>
    {/* Element to display typing strings */}
    <span ref={el}></span>
  </div>
  )
}

export default TypedText