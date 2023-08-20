import styled from 'styled-components'
import { theme } from '../../theme'

export const NavbarWrapper = styled.div`
  background-color: ${theme.color.lightBrown};

  .logo {
    width: 70px;
    height: 70px;
    margin-top: 8px;
  }

  .homepage-nav {
    padding-top: 30px;
    padding-right: 20px;
    text-align: center;
  }

  .other-nav {
    padding-top: 20px;
    text-align: center;
  }

  a {
    display: block;
    position: relative;
    padding: 0.2em;
    cursor: pointer;
    font-size: ${theme.fontSize.smallSize};
    color: ${theme.color.white};
    font-weight: 900;
    text-decoration: none;
    font-size: 20px;
  }

  a:hover {
    color: ${theme.color.brown};
  }

  .burger-menu,
  .toggle {
    border: none !important;
    color: ${theme.color.brown};
    background-color: transparent !important;
  }
`
