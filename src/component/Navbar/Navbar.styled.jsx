import styled from 'styled-components'
import { theme } from '../../theme'

export const NavbarWrapper = styled.div`
  background-color: ${theme.color.lightBrown};
  /* display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: end;
  gap: 3%;
  padding-right: 20px;
  padding-top: 2%; */

  h1 {
    padding-top: 30px;
    font-size: 25px;
    color: ${theme.color.brown};
  }
  .nav-link.active {
    color: ${theme.color.brown};
    font-weight: bold !important;
  }

  .homepage-nav {
    padding-top: 30px;
    padding-right: 20px;
  }

  .other-nav {
    padding-top: 20px;
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
  .toggle {
    color: ${theme.color.brown};
  }

  .burger-menu .navbar-toggler-icon span,
  .burger-menu .navbar-toggler-icon span::before,
  .burger-menu .navbar-toggler-icon span::after {
    color: ${theme.color
      .brown} !important; /* Replace 'red' with your desired color */
  }

  /* a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.6px;
    background-color: ${theme.color.brown};
    width: 100%;
    height: 1px;
    margin: 2px;
    left: 0;
    margin-left: 0%;
    transform: scale(0.1);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  a:hover::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
    color: ${theme.color.brown};
  } */
`
