// src/components/Skills.jsx
import React, { useEffect } from "react";

function Skills() {
  const skills = [
    { name: "HTML/CSS", level: "Advanced" },
    { name: "React js", level: "Intermediate" },
    { name: "Java", level: "fourstar" },
    { name: "Python", level: "Intermediate" },
    { name: "SQL", level: "Advanced" },
    { name: "Power BI", level: "fourstar" },
  ];

  const starRating = (level = "") => {
    const lvl = String(level).trim().toLowerCase();
    const rating =
      lvl === "advanced"
        ? 5
        : lvl === "fourstar"
        ? 4
        : lvl === "intermediate"
        ? 3
        : 0;
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  useEffect(() => {
    console.log("Skills component mounted");
    skills.forEach((s) =>
      console.log(s.name, "->", s.level, "=>", starRating(s.level))
    );
  }, []);

  return (
    <section id="skills" className="py-20 bg-transparent text-center ">
      <div className="max-w-4xl mx-auto px-4 items-center  ">
        <h2 className="mx-auto text-2xl font-extrabold text-center mb-12 relative inline-block">
          <span className="relative text-3xl font-bold text-center mb-12 font-[cursive] group w-[25%] ml-auto mr-auto">
            Skills
          </span>
          <span
            className="absolute left-0 right-0 -bottom-2 h-[2px] bg-amber-700 scale-x-0 transform transition-transform duration-300 origin-center hover:scale-x-100"
            aria-hidden
          />
        </h2>

        <div className="flex gap-6 justify-center flex-wrap">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-[250px] p-6 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm text-center"
            >
              <h3 className="text-lg font-semibold mb-2 bg-white/80 text-gray-800">
                {skill.name}
              </h3>
              <p
                className="text-lg bg-white/80"
                style={{ lineHeight: 1 }}
                aria-label={`${skill.name} rating`}
              >
                <span className="text-amber-600 bg-white/80">
                  {starRating(skill.level)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
