import React, { useEffect, useRef } from "react";
import Typed from "typed.js";  // Make sure Typed is imported correctly
import myImage from "../../assets/akankshaIMAGE.png";
import "./Intro.css";

function Intro() {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize the Typed.js instance
    const typed = new Typed(typedRef.current, {
      strings: ["Akanksha Singh"], // Text to be typed
      typeSpeed: 100, // Speed for typing
      backSpeed: 50, // Speed for backspacing
      showCursor: true, // Show the cursor
      cursorChar: "|", // Cursor character
      loop: true, // Enable infinite loop
    });

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy(); // Destroy the typed effect when the component unmounts
    };
  }, []);

  return (
    <section id="intro">
      <div className="intro2">
        <h1>
          <span ref={typedRef}></span>
<br /> 
          Full Stack Web Developer
          </h1> 
        <img src={myImage} alt="Akanksha Singh" className="profile-img" />
        <div className="draw"></div>
        <p>
          <a href="mailto:akusingh0907@gmail.com">
            <em>akusingh0907@gmail.com</em>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/akanksha-singh-321309285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>LinkedIn</em>
          </a>
          <br />
          <a
            href="https://github.com/aku-S7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Github</em>
          </a>
          <br />
          <a href="mailto:akusingh0907@gmail.com" className="btn hire-me-button">
            Hire Me
          </a>
        </p>
      </div>

      <div className="objective">
        <h3>Objective</h3>
        <p>
          Innovative and detail-oriented full-stack web developer proficient in
          front-end and back-end technologies, dedicated to building responsive
          and user-centric web applications. Seeking opportunities to leverage
          my skills in developing scalable solutions that enhance user
          experiences and drive business growth.
        </p>
      </div>
    </section>
  );
}

export default Intro;
