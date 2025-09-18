
import React from 'react'

const experiences = [
  {
    role: 'Front End Web Developer',
    company: 'Juvarc',
    location: 'Melbourne, Australia',
    duration: 'March 2025 – Present (5 months)',
  },
  {
    role: 'B.Tech',
    company: ''
  },
  {
    role: 'Senior Team Leader (Intern)',
    company: 'UpToSkills',
    duration: 'Jul–Oct 2025',
    description: 'Managed a team of 14 on a FinTech project using AI chatbot, financial data analysis (Pandas, PostgreSQL).',
  },
]

const Experience = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map(exp => (
          <div key={exp.role}>
            <h3 className="font-bold">{exp.role} at {exp.company}</h3>
            {exp.location && <p className="text-text-secondary">{exp.location}</p>}
            <p className="text-text-secondary">{exp.duration}</p>
            {exp.description && <p className="text-text-secondary mt-2">{exp.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
