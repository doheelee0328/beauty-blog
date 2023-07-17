import styled from 'styled-components'
import { theme } from '../../theme'

export const LogoWrapper = styled.div`
  display: flex;
  margin-left: -3px;
`
export const LogoTitle = styled.h1`
  font-size: 130px;
  line-height: 120px;
  color: transparent;
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
`
