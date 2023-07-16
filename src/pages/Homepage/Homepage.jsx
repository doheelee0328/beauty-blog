import { Logo, Text, SocialMedia, NavBar, CopyRight } from '../../component'
import { TopBarWrapper, SocialMediaWrapper } from './Homepage.styled'
import { theme } from '../../theme'
import HomePageImage from '../../Images/Group 8.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Homepage = () => {
  const activeStyle = {
    color: theme.color.brown,
    fontWeight: 900,
  }

  const navActive = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <TopBarWrapper className='vh-100'>
      <Container fluid className='h-100'>
        <Row className='h-100'>
          <Col className=' left-side'>
            <div className='h-100 d-flex align-items-center justify-content-center '>
              <div className='text-wrapper'>
                <Logo />
                <Text />
              </div>
            </div>
          </Col>
          <Col className='right-side'>
            <NavBar />
            <div className='right-side-wrapper'>
              <img src={HomePageImage} alt='me' />
              <p>La Fosse Graduate Academy & Full Stack Developer</p>
            </div>
            <div className='copy-rght-container'>
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
