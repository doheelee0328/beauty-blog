import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Projects from './Projects'
import { projects } from './ProjectsList'

describe('Project component', () => {
  it('should have the heading', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    )
    const projectHeading = screen.getByTestId('heading')
    expect(projectHeading).toHaveTextContent(
      /welcome to my world of projects!/i
    )
  })

  it('should have the paragraph', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    )

    const projectParagraph = screen.getByTestId('paragraph')
    expect(projectParagraph).toBeInTheDocument(
      / guess what? I've been working on something awesome! check it out!/i
    )
  })

  it('should display the information correctly', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    )

    const { title, technologies, description, live, github, demoLink } =
      projects[0]

    const projectTitle = screen.getByText(title)
    expect(projectTitle).toBeInTheDocument()

    const projectImage = screen.getByAltText(title)
    expect(projectImage).toBeInTheDocument()

    const projectTechnologies = screen.getByText(technologies)
    expect(projectTechnologies).toBeInTheDocument()

    const projectDescription = screen.getByText(description)
    expect(projectDescription).toBeInTheDocument()

    const projectLive = screen.getAllByRole('link', { name: /live/i })[0]
    expect(projectLive).toHaveAttribute('href', live)

    const projectGithub = screen.getAllByRole('link', { name: /github/i })[0]
    expect(projectGithub).toHaveAttribute('href', github)

    const projectDemo = screen.getAllByRole('link', { name: /demo/i })[0]
    expect(projectDemo).toHaveAttribute('href', demoLink)
  })
})
