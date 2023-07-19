import React from 'react'
import { ContactWrapper } from './Contact.styled'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
import Phone from '../../Images/cellphone-icon-5 1.png'
import Icon1 from '../../Images/Group 18.png'
import Icon2 from '../../Images/Group 19.png'
import Icon3 from '../../Images/Group 20.png'
import Icon4 from '../../Images/Group 21.png'

const Contact = () => {
  return (
    <ContactWrapper>
      <Container>
        <Row>
          <div className='d-flex flex-column align-items-center container'>
            <p className='contact-paragraph'>
              Feel free to reach out to me through any of the following
              channels: email, phone, or social media. Let's start a
              conversation! I look forward to hearing from you!
            </p>
            <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center   another-container'>
              <div className='left-side'>
                <h1 className='display-1'>Let's</h1>
                <div className='d-flex'>
                  <img src={Phone} alt='phone' className='phone' />
                  <h1 className='display-2'>Connect</h1>
                </div>
              </div>
              <div className='right-side'>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='icon-container'>
                    <img src={Icon1} alt='icon1' className='icon' />
                    <img src={Icon2} alt='icon2' className='icon' />
                    <img src={Icon3} alt='icon3' className='icon' />
                    <img src={Icon4} alt='icon4' className='icon' />
                  </div>
                  <div className='contact-info'>
                    <p>doheelee0328</p>
                    <p>dohee-lee-7115001ba</p>
                    <p>dojuhee2015@gmail.com</p>
                    <p>+44 7368917820</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </ContactWrapper>
  )
}

export default Contact
