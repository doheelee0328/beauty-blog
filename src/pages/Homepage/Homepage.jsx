import { Logo, Text, SocialMedia, NavBar, CopyRight } from '../../component'
import { TopBarWrapper, SocialMediaWrapper } from './Homepage.styled'
import HomePageImage from '../../Images/Group 8.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Homepage = () => {
  return (
    <TopBarWrapper className='vh-100 h-100'>
      <Container fluid className='h-100'>
        <Row className='h-100'>
          <Col className='left-side d-flex flex-column justify-content-center  '>
            <div className='text-wrapper'>
              <div className='p-2'>
                <Logo />
              </div>
              <div className='p-2'>
                <Text />
              </div>
            </div>
          </Col>
          <Col className='right-side'>
            <NavBar />
            <div className=' d-flex flex-column justify-content-center align-items-center right-side-wrapper'>
              <img src={HomePageImage} alt='me' />
              <p>La Fosse Graduate Academy & Full Stack Developer</p>
            </div>
            <div className='copy-right-container'>
              <CopyRight />
            </div>

            <SocialMediaWrapper>
              <SocialMedia />
            </SocialMediaWrapper>
          </Col>
        </Row>
      </Container>
    </TopBarWrapper>
  )
}

export default Homepage
