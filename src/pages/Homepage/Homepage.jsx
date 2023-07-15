import { Logo, Text, SocialMedia } from '../../component'
import { NavbarWrapper } from '../../component/Navbar/Navbar.styled'
import {
  TopBarWrapper,
  TextWrapper,
  SocialMediaWrapper,
} from './Homepage.styled'
import { NavLink } from 'react-router-dom'
import { theme } from '../../theme'

const Homepage = () => {
  const activeStyle = {
    color: theme.color.pink,
    fontWeight: 900,
  }

  return (
    <>
      <TopBarWrapper>
        <TextWrapper>
          <Logo />
          <Text />
        </TextWrapper>
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
        <SocialMediaWrapper>
          <SocialMedia />
        </SocialMediaWrapper>
      </TopBarWrapper>
    </>
  )
}

export default Homepage
