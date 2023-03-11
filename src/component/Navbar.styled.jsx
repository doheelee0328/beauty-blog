import styled from 'styled-components'
import { theme } from '../theme'

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 10%;

  li {
    display: block;
    position: relative;
    padding: 0.2em;
    cursor: pointer;
  }

  li::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    right: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${theme.color.pink};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  li:hover::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
`
