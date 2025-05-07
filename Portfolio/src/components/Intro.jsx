import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import myImage from "../assets/akankshaIMAGE.png";
import myObj from "../assets/objNew.png";
import DottedBorderAnimation from "./DottedBorderAnimation";
import video from "../assets/videooo.mp4"
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
      <section
        id="intro"
        className=" min-h-screen flex flex-col items-center justify-center bg-[rgba(243,238,234,1)] text-[rgba(125,113,94,1)] text-center p-8"
      >
        <ScrollAnimationWrapper className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-16">
          <div className="  flex flex-col md:flex-row items-center justify-center  md:items-start text-center md:text-left gap-6">
            <h1 className="  text-5xl font-bold mb-4 w-[600px] h-[300px] text-center mt-12">
              <span ref={typedRef}></span>
              <br /> Full Stack Web Developer
            </h1>

            <div className="relative">
              <DottedBorderAnimation></DottedBorderAnimation>
              <img
                src={myImage}
                alt="Akanksha Singh"
                className="w-72 h-72 md:w-80 md:h-80 rounded-[55%_45%_55%_45%/62%_30%_70%_38%] object-cover transition-transform hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center md:items-start gap-2 mt-12">
              <a
                href="mailto:akusingh0907@gmail.com"
                className="hover:underline"
              >
                akusingh0907@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/akanksha-singh-321309285/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/aku-S7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>

              <a
                href="mailto:akusingh0907@gmail.com"
                className="mt-4 px-6 py-2 bg-[rgba(125,113,94,1)] text-[rgba(243,238,234,1)] font-bold rounded-md transition-transform hover:bg-[rgba(243,238,234,1)] hover:text-[rgba(125,113,94,1)] hover:shadow-md hover:scale-105"
              >
                Hire Me
              </a>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="max-w-5xl w-full mx-auto mt-10 px-6 text-center ">
          <h3 className=" text-2xl font-bold font-[cursive] mb-4">Objective</h3>
          <div className=" flex flex-col md:flex-row items-center md:items-start gap-10 text-left w-full">
            {/* Left Side */}
            <div className=" w-full md:w-2/4 h-[450px]">
              <video
                autoPlay
                muted
                loop
                class="w-full h-[500px]"
                src={video}
              ></video>
            </div>
            {/* <div className=" w-full md:w-2/4 h-[450px]">
              <img
                src={myObj}
                alt="Objective"
                className="w-full h-full object-cover rounded-md"
              />
            </div> */}

            {/* Right Side */}
            <div className=" ml-auto  w-full md:w-1/2 text-lg text-gray-700">
              <p>
                Code, Coffee, and Creativity — that’s my fuel! I’m a full-stack
                web developer who loves turning ideas into beautifully crafted
                digital experiences. From building sleek React frontends with
                Tailwind CSS to exploring backend magic with Node.js, I’m always
                curious, always learning, and always coding. I believe great web
                apps aren’t just functional — they should feel effortless. I
                focus on clean design, smooth performance, and user happiness.
                Whether I’m fixing a bug at midnight or brainstorming features
                with a team, I bring energy, attention to detail, and a genuine
                passion for building things that matter. I’m now on the lookout
                for exciting opportunities where I can grow, contribute, and
                maybe even surprise you with what I can do!
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </section>
    </ScrollAnimationWrapper>
  );
}

export default Intro;
