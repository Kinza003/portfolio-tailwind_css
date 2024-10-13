import React from 'react'
import Heading from "./Heading"
import Card from "./Card"

const data = [
    {
        id: 0,
        title: "Currency Convertor",
        desc: "A HTML, CSS And Typecript based tool for converting currencies with real-time rates.",
        img: "/currency-convertor.png",
        tags: ["HTML", "CSS", "Typescript", "Node"]
    },
    {
        id: 1,
        title: "simple-calculator",
        desc: "A HTML, CSS And Typecript based tool for airthematic operations..",
        img: "/simple-calculator.png",
        tags: ["HTML", "CSS", "Typescript", "Node"]
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <div className='text-pink-400 text-4xl md:text-5xl font-semibold italic'>
      <Heading data-aos="zoom-in-up" title='My Projects'/>
      </div>
      <div className='grid gap-10 xl-gap-0 xl-gap-y-10 md:grid-cols-2 ld:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc= {el.desc}
        img= {el.img}
        tags= {el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
