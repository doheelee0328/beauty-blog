import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { ProjectWrapper } from './Projects.styled'
import { projects } from './ProjectsList'

import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <ProjectWrapper>
      <Container className='min-vh-100 d-flex flex-column'>
        <Row className='justify-content-md-center'>
          <div className='d-flex flex-column align-items-center w-100'>
            <h1>
              Welcome to my <span>world of projects!</span>
            </h1>
            <p className='project-paragraph'>
              Guess what? I've been working on something awesome! Check it out!
            </p>
            <div className='d-flex flex-wrap justify-content-center w-100 projects-container'>
              {projects.map(
                ({
                  id,
                  title,
                  image,
                  description,
                  technologies,
                  demo,
                  demoLink,
                  live,
                  github,
                }) => (
                  <Col
                    key={id}
                    md={4}
                    xs={12}
                    className='projects-post-container'
                  >
                    <div className='image-container'>
                      <img
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div className='title-description-container  '>
                      <h2
                        className='title'
                        style={{ width: '100%', height: 'auto' }}
                      >
                        {title}
                      </h2>
                      <p className='project-details'>{description}</p>
                      <p className='technologies'>{technologies}</p>
                      <div className='button-container'>
                        <Link to={live} target='_blank'>
                          Live
                        </Link>
                        <Link to={github} target='_blank'>
                          Github
                        </Link>
                        {demo && (
                          <Link
                            to={demoLink && demoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <div className='demo'>Demo</div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Col>
                )
              )}
            </div>
          </div>
        </Row>
      </Container>
    </ProjectWrapper>
  )
}

export default Projects
