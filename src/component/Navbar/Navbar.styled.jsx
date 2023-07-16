import styled from 'styled-components'
import { theme } from '../../theme'

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: end;
  gap: 3%;
  padding-right: 20px;
  padding-top: 2%;

  a {
    display: block;
    position: relative;
    padding: 0.2em;
    cursor: pointer;
    font-size: ${theme.fontSize.smallSize};
    color: ${theme.color.white};
    font-weight: 900;
    text-decoration: none;
  }

  a::after {
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
  }
`
