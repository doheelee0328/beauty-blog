import styled from 'styled-components'
import { theme } from '../theme'

export const LogoWrapper = styled.div`
  width: 100%;
  height: 200px;
  font-size: ${theme.fontSize.middleSize};
  text-align: center;
`
export const LogoTitle = styled.h1`
  position: relative;
  top: 10%;
  font-style: italic;
  font-family: 'Pacifico', cursive;
  color: ${theme.color.pink};

  &::after {
    content: '';
    position: absolute;
    top: 60px;
    width: 4%;
    height: 5px;
    background-color: ${theme.color.pink};
    transform: translate(20px, 0px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 60px;
    width: 4%;
    height: 5px;
    background-color: ${theme.color.pink};
    transform: translate(-60px, 0px);
  }
`
