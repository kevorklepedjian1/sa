// File: Resume.jsx

import React from 'react';


const SkillsBlock = () => {
  const skills = [
    { name: 'HTML', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png' },
    { name: 'CSS', imageSrc: 'css_image_url.jpg' },
    { name: 'JavaScript', imageSrc: 'js_image_url.jpg' },
    { name: 'Node.js', imageSrc: 'nodejs_image_url.jpg' },
    { name: 'Tailwind CSS', imageSrc: 'tailwind_image_url.jpg' },
    { name: 'Next.js', imageSrc: 'nextjs_image_url.jpg' },
    { name: 'React Native', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png' },
    // Add more skills as needed
  ];

  return (
    <div className="block-container">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} >
            <div className="skill-item">
            <img src={skill.imageSrc} alt={skill.name} className="skill-image" /></div>
            <p className='p'>{skill.name}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

const ExperienceBlock = () => {
  const experiences = [
    { company: 'Company A', position: 'Frontend Developer', duration: 'Jan 2020 - Mar 2022' },
    { company: 'Company B', position: 'Full Stack Developer', duration: 'Apr 2022 - Present' },
    // Add more experiences as needed
  ];

  return (
    <div className="block-container">
      <h2>Work Experience</h2>
      <ul className="experience-list">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <strong>{experience.position}</strong> at {experience.company}, {experience.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Resume = () => {
  return (
    <div className='king'>
    <div className="resume-container">
      <SkillsBlock />
      <ExperienceBlock />
    </div>
    </div>
  );
};

export default Resume;
