import styled from 'styled-components'
import { theme } from '../../theme'

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.white};
  /* justify-content: center;
  align-items: center;
  position: relative; */
  .display-6 {
    text-align: center;

    @media (max-width: 815px) {
      font-size: 24px;
    }
    @media (max-width: 570px) {
      font-size: 18px;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 20px;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  align-items: center;
`
