import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20'>
        <div data-aos="zoom-in-down">
          <h2 className='text-4xl md:text-5xl text-pink-400 font-semibold italic'>Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>
            I have solid foundation in web development, specializing in HTML, CSS and Typescript. My experience extends to using frameworks like Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated for the latest technologiesto enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-blue-400 text-3xl sm:text-4xl'>
            <div className='space-y-2 italic'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">Css</h2>
            </div>
            <div className='space-y-2 italic'>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

