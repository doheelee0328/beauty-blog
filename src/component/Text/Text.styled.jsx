import styled from 'styled-components'
import { theme } from '../../theme'

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.white};
  /* justify-content: center;
  align-items: center;
  position: relative; */
  h2 {
    font-size: 25px;
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 20px;
  width: 100%;
  height: auto;
  /* justify-content: center;
  align-items: center;
  transform: translate(-10%, 0px); */
`
