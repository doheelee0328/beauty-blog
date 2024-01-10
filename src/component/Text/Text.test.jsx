import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Text from './Text'

describe('Text component', () => {
  it('should have the heading with welcome message', () => {
    render(
      <MemoryRouter>
        <Text />
      </MemoryRouter>
    )
    const textHeading = screen.getByRole('heading')
    expect(textHeading).toBeInTheDocument()
    expect(textHeading).toHaveTextContent(/welcome to my portfolio/i)
  })

  it('should have the buttons called with explore projects and my resume', () => {
    render(
      <MemoryRouter>
        <Text />
      </MemoryRouter>
    )
    const exploreProjectButton = screen.getByRole('button', {
      name: /explore projects/i,
    })
    const myResumeButton = screen.getByRole('button', { name: /my resume/i })

    expect(exploreProjectButton).toBeInTheDocument()
    expect(myResumeButton).toBeInTheDocument()
  })

  it('should navigate to the project page', async () => {
    render(
      <MemoryRouter>
        <Text />
      </MemoryRouter>
    )
    const exploreProjectButton = screen.getByRole('button', {
      name: /explore projects/i,
    })

    fireEvent.click(exploreProjectButton)
    await waitFor(() => {
      expect(screen.getByText('Welcome To My Portfolio')).toBeInTheDocument()
    })
  })
})
