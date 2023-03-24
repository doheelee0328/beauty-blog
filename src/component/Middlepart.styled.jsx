import styled from 'styled-components'
import { theme } from '../theme'
export const MiddlePartWrapper = styled.div`
  margin-top: 5px;
`

export const Image = styled.div`
  width: 100%;
  height: 72vh;
  background-image: linear-gradient(rgb(0, 0, 0, 0.2), transparent),
    url(${(props) => props.backgroundImage});

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
export const Wrapper = styled.div`
  color: ${theme.color.white};
  position: absolute;
  bottom: 0.8%;
  font-weight: 900;
  padding-left: 100px;
  line-height: 100px;

  h1 {
    font-size: ${theme.fontSize.bigSize};
    line-height: 160px;
    color: transparent;
    -webkit-text-stroke: 1px ${theme.color.white};
    background: url(${(props) => props.whiteBackground});
    -webkit-background-clip: text;
    background-position: 0 0;
    animation: back 20s linear infinite;
  }

  @keyframes back {
    100% {
      background-position: 2000px 0;
    }
  }
  h2 {
    font-size: ${theme.fontSize.bigMiddleSize};
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`
export const SocialMediaWrapper = styled.div`
  position: absolute;
  right: 0px;
  transform: translate(400px, 40px);
`
