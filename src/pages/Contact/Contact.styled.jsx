import styled from 'styled-components'
import { theme } from '../../theme'

export const ContactWrapper = styled.div`
  background-color: ${theme.color.lightBrown};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .contact-paragraph {
    text-align: center;
    font-size: 20px;
    width: 70%;
  }
  .display-1 {
    transform: translate(-80px, 0px);
    font-size: 40px;
  }
  .display-2 {
    font-size: 40px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .another-container {
    gap: 80px;
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
    gap: 20px;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .icon {
    width: 60px;
    height: 40px;
  }

  .contact-info {
    gap: 32px;
    margin-top: 18px;
    margin-left: 10px;
    display: flex;
    justify-content: center;

    flex-direction: column;
  }

  .phone {
    width: 100px;
  }
`
