
import React from 'react'

const About = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 bg-secondary rounded-full"></div>
        <div>
          <p className="text-text-secondary">New Delhi, India</p>
          <a href="https://i.postimg.cc/FK3kG6wf/image.png" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white px-4 py-2 rounded-md mt-2">Resume</a>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-text-secondary">A 22-year-old experienced DevOps Engineer, comfortable with Linux, scripting, and Git, with experience in startups.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
        <p className="text-text-secondary">Gaming, Manga, Manhwa</p>
      </div>
    </div>
  )
}

export default About
