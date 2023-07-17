import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { ProjectWrapper } from './Projects.styled'
import { projects } from './ProjectsList'
import { Buttons } from '../../component'
import { projectButtonsProps } from '../../component/Button/ButtonProps'
import { ButtonWrapper } from '../../component/Text/Text.styled'
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
          </div>

          <div className='projects-container'>
            {projects.map(
              ({ id, title, image, description, technologies, demo, link }) => (
                <Col key={id} className='projects-post-container'>
                  <div className='image-container'>
                    <img
                      src={image}
                      alt={title}
                      style={{ width: '400px', height: '300px' }}
                    />
                  </div>
                  <div className='title-description-container align-items-center'>
                    <h2 className='title'>{title}</h2>
                    <p className='project-details'>{description}</p>
                    <p className='technologies'>{technologies}</p>
                    <div className='button-container'>
                      <ButtonWrapper>
                        <Buttons
                          styleProps={projectButtonsProps}
                          displayText='Live'
                        />
                        <Buttons
                          styleProps={projectButtonsProps}
                          displayText='Github'
                        />
                        {demo && (
                          <Link
                            to={link && link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <div className='demo'>
                              <Buttons
                                styleProps={projectButtonsProps}
                                displayText='Demo'
                              />
                            </div>
                          </Link>
                        )}
                      </ButtonWrapper>
                    </div>
                  </div>
                </Col>
              )
            )}
          </div>
        </Row>
      </Container>
    </ProjectWrapper>
  )
}

export default Projects
