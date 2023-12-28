// File: Resume.jsx

import React from 'react';


const SkillsBlock = () => {
  const skills = [
    { name: 'HTML', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png' },
    { name: 'CSS', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png' },
    { name: 'JavaScript', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png' },
    { name: 'TypeScript', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png' },
    { name: 'Node.js', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png' },
    { name: 'Express.js', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/5f27ecd489cbd1cf6bdf703f6514cf4cb59638db-500x500.png' },
    { name: 'Tailwind', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/b945eb4f577059132d07f35ac087ce31cb092ae1-431x290.png' },
    { name: 'Next.js', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/7f3a652dd4e48f795856f28bd56d120bda77c30a-1024x1024.svg' },
    { name: 'Mongodb', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/6c9be215123947cde5182d5240a777adca4d99e0-120x258.svg' },
    { name: 'Framer', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/8e8b514518628b3bff60eab330b1982adcbc3382-2500x2500.svg' },
    { name: 'React/RN', imageSrc: 'https://cdn.sanity.io/images/ed7e5ihf/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png' },
    // Add more skills as needed
  ];

  return (
    <div className="block-container">
      <div class="projects__header">
                <h2 class="h2">Projects</h2>
             
            </div>
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
    {
      company: 'Freelancer',
      position: 'Frontend Developer',
      duration: '2021 - Present',
      description:
        'As a freelance Frontend Developer, I work on a variety of projects, delivering bespoke web applications. ' +
        'I specialize in using React.js and Redux for state management, implementing Higher Order Components (HOCs) ' +
        'for code reusability, and utilizing Tailwind CSS for efficient and responsive styling.'
    },
    {
      company: 'Nelcom Digital',
      position: 'Frontend Developer',
      duration: 'Feb 2023 - Jul 2023',
      description:
        'At Nelcom Digital, I contributed to the development of cutting-edge web applications. ' +
        'I leveraged React.js for building dynamic user interfaces, utilized Node.js and Express.js for server-side ' +
        'development, and incorporated Framer Motion to create smooth and interactive animations.'
    },
    // Add more experiences as needed
  ];

  return (
    <div className="block-container">
      <div class="projects__header" style={{marginTop:"40px"}}></div>
      <h2>Work Experience</h2>
      <ul className="experience-list">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <strong>{experience.position}</strong> at {experience.company}, {experience.duration}
            <p>{experience.description}</p>
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
