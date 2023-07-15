import styled from 'styled-components'
import { theme } from '../../theme'

export const MainWrapper = styled.div`
  display: flex;
`
export const AnotherTopWrapper = styled.div`
  display: flex;
`
export const TopBarWrapper = styled.div`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.pink};
  overflow: hidden;
`

export const TextWrapper = styled.div`
  position: absolute;
  top: 34%;
  padding-left: 80px;
  line-height: 70px;
`
export const SocialMediaWrapper = styled.div`
  position: absolute;
  right: 1%;
  bottom: 35%;
`
