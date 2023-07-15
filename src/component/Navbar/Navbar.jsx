import { NavbarWrapper } from './Navbar.styled'
import { NavLink } from 'react-router-dom'
import { theme } from '../../theme'

const NavBar = () => {
  const activeStyle = {
    color: theme.color.pink,
    fontWeight: 900,
  }

  return (
    <>
      <NavbarWrapper>
        <NavLink to='/' activeStyle={activeStyle} exact>
          Home
        </NavLink>
        <NavLink to='about' activeStyle={activeStyle}>
          About
        </NavLink>
        <NavLink to='projects' activeStyle={activeStyle}>
          Projects
        </NavLink>
        <NavLink to='contact' activeStyle={activeStyle}>
          Contact
        </NavLink>
      </NavbarWrapper>
    </>
  )
}

export default NavBar
