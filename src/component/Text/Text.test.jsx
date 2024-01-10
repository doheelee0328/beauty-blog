import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
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
})
