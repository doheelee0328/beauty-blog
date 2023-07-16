import { NavbarWrapper } from './Navbar.styled'
import { NavLink } from 'react-router-dom'
import { theme } from '../../theme'

const NavBar = () => {
  const activeStyle = {
    color: theme.color.brown,
    fontWeight: 900,
  }

  const navActive = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <NavbarWrapper>
        <NavLink to='/' style={navActive}>
          Home
        </NavLink>
        <NavLink to='/about' style={navActive}>
          About
        </NavLink>
        <NavLink to='/projects' style={navActive}>
          Projects
        </NavLink>
        <NavLink to='/contact' style={navActive}>
          Contact
        </NavLink>
      </NavbarWrapper>
    </>
  )
}

export default NavBar
