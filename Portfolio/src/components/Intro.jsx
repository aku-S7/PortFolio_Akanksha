import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import myImage from "../assets/akankshaIMAGE.png";

function Intro() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Akanksha Singh"],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <ScrollAnimationWrapper>
      <section id="intro" className="  min-h-screen flex flex-col items-center justify-center bg-[rgba(243,238,234,1)] text-[rgba(125,113,94,1)] text-center p-8">
        <ScrollAnimationWrapper className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-16">
        <div className="  flex flex-col md:flex-row items-center justify-center h-screenr md:items-start text-center md:text-left gap-6">
  <h1 className="  text-4xl font-bold mb-4">
    <span ref={typedRef}></span>
    <br /> Full Stack Web Developer
  </h1>

  <div className="relative">
    <div className="bg-transparent absolute inset-0 border-2 border-dashed border-[rgb(180,115,24)] w-[230px] h-[280px] md:w-[300px] md:h-[380px] rounded-[25%_75%_23%_77%/67%_37%_63%_33%]"></div>
    <img src={myImage} alt="Akanksha Singh" className="w-72 h-72 md:w-80 md:h-80 rounded-[55%_45%_55%_45%/62%_30%_70%_38%] object-cover transition-transform hover:scale-105" />
  </div>


  <div className="flex flex-col items-center md:items-start gap-2">
    <a href="mailto:akusingh0907@gmail.com" className="hover:underline">
      akusingh0907@gmail.com
    </a>
    <a href="https://www.linkedin.com/in/akanksha-singh-321309285/" target="_blank" rel="noopener noreferrer" className="hover:underline">
      LinkedIn
    </a>
    <a href="https://github.com/aku-S7" target="_blank" rel="noopener noreferrer" className="hover:underline">
      Github
    </a>

    <a href="mailto:akusingh0907@gmail.com" className="mt-4 px-6 py-2 bg-[rgba(125,113,94,1)] text-[rgba(243,238,234,1)] font-bold rounded-md transition-transform hover:bg-[rgba(243,238,234,1)] hover:text-[rgba(125,113,94,1)] hover:shadow-md hover:scale-105">
      Hire Me
    </a>
  </div>
</div>


          
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="max-w-2xl w-full mx-auto mt-10 px-6 text-center">
          <h3 className="text-2xl font-bold font-[cursive] mb-4">Objective</h3>
          <p className="text-lg text-gray-700">
            Innovative and detail-oriented full-stack web developer proficient in front-end and back-end technologies, dedicated to building responsive and user-centric web applications. Seeking opportunities to leverage my skills in developing scalable solutions that enhance user experiences and drive business growth.
          </p>
        </ScrollAnimationWrapper>
      </section>
    </ScrollAnimationWrapper>
  );
}

export default Intro;
