import React from 'react';
import "./Skills.css";

function Skills() {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'React js', level: 'fourstar' },
    { name: 'JavaScript', level: 'fourstar' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'SQL', level: 'fourstar' },
  ];

  // Map text levels to star counts (Advanced = 5 stars, Intermediate = 3 stars)
  const starRating = (level) => {
    const rating = level === 'Advanced' ? 5 : level === 'fourstar' ? 4 : level === 'Intermediate' ? 3 : 0;
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 class="skills-title ">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-rating">{starRating(skill.level)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
