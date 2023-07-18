import styled from 'styled-components'
import { theme } from '../../theme'

export const ContactWrapper = styled.div`
  background-color: ${theme.color.lightBrown};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  p {
    text-align: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50%;
  }
  .another-container {
    gap: 100px;
  }
  .left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .right-side {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
