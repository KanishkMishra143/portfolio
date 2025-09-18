
import React from 'react'

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Rust'],
  Frameworks: ['ReactJS', 'NextJS', 'React Native', 'ExpressJS', 'Flask', 'Django', 'ASP.NET'],
  Backend: ['NodeJS', '.NET', 'REST APIs', 'Microservices'],
  Databases: ['Postgres', 'SQL', 'MongoDB', 'Elasticsearch'],
  Practices: ['Microservices', 'Microfrontend', 'Agile', 'Git'],
}

const Skills = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-bold">{category}</h3>
            <ul className="text-text-secondary">
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
