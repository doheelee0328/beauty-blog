import styled from 'styled-components'
import { theme } from '../../theme'

export const LogoTitle = styled.h1`
  color: transparent;
  text-align: center;
  -webkit-text-stroke: 1px ${theme.color.white};
  background: url(${(props) => props.whiteBackground});
  -webkit-background-clip: text;
  background-position: 0 0;
  animation: back 20s linear infinite;
  width: 100%;

  @keyframes back {
    100% {
      background-position: 2000px 0;
    }
  }
  @media (max-width: 570px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 70px;
  }
`
