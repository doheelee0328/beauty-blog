import React from 'react'
import { ContactWrapper } from './Contact.styled'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <ContactWrapper>
      <Container className='min-vh-100 d-flex flex-column'>
        <Row className='flex-grow-1'>
          <div className='d-flex flex-column align-items-center w-100'></div>
        </Row>
      </Container>
    </ContactWrapper>
  )
}

export default Contact
