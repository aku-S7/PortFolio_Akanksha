import React from "react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"; // Import the wrapper

function Skills() {
  const skills = [
    { name: "HTML/CSS", level: "Advanced" },
    { name: "React.js", level: "fourstar" },
    { name: "JavaScript", level: "fourstar" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "SQL", level: "fourstar" },
  ];

  // Function to map skill levels to stars
  const starRating = (level) => {
    const rating =
      level === "Advanced" ? 5 : level === "fourstar" ? 4 : level === "Intermediate" ? 3 : 0;
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <ScrollAnimationWrapper>
      <section id="skills" className="py-20 bg-[#f3eeea] text-[#7d715e]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative w-fit mx-auto font-[cursive] 
                        before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 
                        before:h-[2px] before:bg-[#7d715e] before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <ScrollAnimationWrapper key={skill.name}>
                <div className="w-[250px] p-6 bg-white shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 border border-gray-200">
                  <h3 className="font-bold bg-white mb-2 text-[#7d715e]">{skill.name}</h3>
                  <p className="text-xl bg-white text-[#7d715e]">{starRating(skill.level)}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}

export default Skills;
