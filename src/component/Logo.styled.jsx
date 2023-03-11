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
`
