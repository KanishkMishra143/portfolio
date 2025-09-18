
import React from 'react'

const projects = [
  {
    name: 'Custom Linux Setup for Productivity',
    description: 'Hyprland + Eww + automation',
  },
  {
    name: 'API Testing & Bug Reporting Practice',
    description: '',
  },
  {
    name: 'Python Utility Scripts',
    description: '',
  },
  {
    name: 'Sink Switch CLI Tool',
    description: 'published on Fedora COPR & Arch AUR',
  },
]

const Projects = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.name}>
            <h3 className="font-bold">{project.name}</h3>
            <p className="text-text-secondary">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
