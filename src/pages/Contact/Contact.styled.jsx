import styled from 'styled-components'
import { theme } from '../../theme'

export const ContactWrapper = styled.div`
  background-color: ${theme.color.lightBrown};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 88.5vh;

  .contact-paragraph {
    text-align: center;
    font-size: 20px;
    width: 70%;
    margin-bottom: 40px;
    max-height: calc(50vh - 50px); /* Adjust the value as needed */
  }
  .display-1 {
    transform: translate(-70px, 0px);
    font-size: 40px;
  }
  .display-2 {
    font-size: 40px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1; /* Take up all available vertical space */
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
    width: 48px;
    height: 40px;
  }
  .icon2 {
    width: 60px;
    height: 40px;
  }
  p {
    margin-left: 20px;
  }

  .contact-info {
    gap: 20px;
    margin-left: 1px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 12px;
  }

  .phone {
    width: 100px;
  }

  @media (max-width: 575px) {
    .contact-paragraph {
      font-size: 15px;
      margin-bottom: 10px;
    }
    .phone {
      width: 80px;
    }
    .display-1 {
      font-size: 30px;
      transform: translate(-60px, 0px);
    }
    .display-2 {
      font-size: 30px;
    }
    .icon {
      width: 40px;
      height: 35px;
    }
    .icon2 {
      width: 52px;
      height: 30px;
    }

    p {
      font-size: 12px;
      margin-left: 10px;
    }

    .contact-info {
      margin-top: 12px;
    }
    .contact-container {
      margin-top: -30px;
    }
  }
`
