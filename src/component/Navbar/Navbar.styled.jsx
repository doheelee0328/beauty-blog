import styled from 'styled-components'
import { theme } from '../../theme'

export const NavbarWrapper = styled.div`
  background-color: ${theme.color.lightBrown};

  .logo {
    width: 4rem;
    height: 4rem;
    margin-top: 8px;
  }

  .homepage-toggle {
    border: none !important;
    font-size: 1.8rem;
  }
  .navbar-toggler-icon {
    background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27%23623D2E%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');
  }

  .homepage-toggle:focus {
    box-shadow: 0 0 0 2px ${theme.color.lightBrown} !important;
  }

  .homepage-nav {
    padding-top: 30px;
    padding-right: 20px;
    text-align: center;
  }

  .nav-link.active {
    color: ${theme.color.brown};
    font-weight: bold !important;
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
    font-size: 1.4rem;
  }

  a:hover {
    color: ${theme.color.brown};
  }

  /* .burger-menu,
  .toggle {
    border: none !important;
    color: ${theme.color.brown};
    background-color: transparent !important;
  } */
`
