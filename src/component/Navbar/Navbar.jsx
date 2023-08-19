import { NavbarWrapper } from './Navbar.styled'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom'
import Logo from '../../Images//Group 23.png'

const NavBar = () => {
  const location = useLocation()

  // Check if the current route is the homepage
  const isHomePage = location.pathname === '/'

  return (
    <NavbarWrapper>
      <Navbar expand='lg' collapseOnSelect className='burger-menu'>
        <Container>
          {isHomePage ? (
            <>
              <Navbar.Toggle
                aria-controls='basic-navbar-nav'
                className='ms-auto toggle homepage-toggle'
              />
              <Navbar.Collapse id='basic-navbar-nav' className='ms-auto '>
                <Nav className='ms-auto homepage-nav'>
                  <>
                    <LinkContainer to='/about'>
                      <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/projects'>
                      <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                      <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                  </>
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <LinkContainer to='/'>
                <Navbar.Brand>
                  <img src={Logo} alt='logo' className='logo' />
                </Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle
                aria-controls='basic-navbar-nav'
                className='toggle'
              />

              <Navbar.Collapse id='basic-navbar-nav' className='burger-menu'>
                <Nav className='ms-auto other-nav'>
                  <>
                    <LinkContainer to='/about'>
                      <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/projects'>
                      <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                      <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                  </>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
      <Outlet />
    </NavbarWrapper>
  )
}

export default NavBar
