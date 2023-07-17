import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from './ProjectsList'

const EachProject = () => {
  const { id } = useParams()
  console.log(id)

  const filterProjects = projects.find((el) => el.id === parseInt(id))

  return (
    <div key={filterProjects.id}>
      <div className='image-container'>
        <img src={filterProjects.image} alt={filterProjects.title} />
      </div>
      <div className='title-description-container align-items-center'>
        <h2 className='title'>{filterProjects.title}</h2>
        <p className='project-details'>{filterProjects.description}</p>
      </div>
      <div>
        <p>{filterProjects.technologies}</p>
      </div>
      <p>{filterProjects.demo ? filterProjects.demo : ''}</p>
    </div>
  )
}

export default EachProject
