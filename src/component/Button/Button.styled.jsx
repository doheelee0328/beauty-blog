import styled, { css, keyframes } from 'styled-components'
import { theme } from '../../theme'

export const ButtonWrapper = styled.button`
  width: 250px;
  height: 55px;
  border: none;
  font-size: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;

  ${({ styleProps }) => css`
    background: ${styleProps.backgroundColor};
    color: ${styleProps.color};
    border: ${styleProps.border};
  `};

  :after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: ${theme.color.white};
    z-index: -1;
    -webkit-transition: width 150ms ease-in-out;
    transition: width 150ms ease-in-out;
  }
  :hover {
    color: ${theme.color.pink};
  }
  :hover:after {
    width: 110%;
  }
`
