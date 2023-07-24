import styled from 'styled-components'
import { theme } from '../../theme'

export const TopBarWrapper = styled.div`
  .left-side {
    background-color: ${theme.color.pink};
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right-side {
    background-color: ${theme.color.lightBrown};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 55%;

    .right-side-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto; /* Center horizontally within the right-side container */
      width: 100%;

      img {
        width: 60%;
        height: 80%;
        padding-top: 20px;
        margin-bottom: 80px;
        z-index: 10;
        transition: 0.5s ease-in-out;
      }

      img:hover {
        transform: scale(1.1);
      }

      p {
        color: ${theme.color.brown};
        font-weight: 900;
        font-size: 20px;
        text-align: center;
        border-top: 1px solid ${theme.color.brown};
        padding-top: 20px;
        margin-left: 5%;
        position: relative;
        z-index: 10;

        @media (max-width: 815px) {
          font-size: 15px;
        }
      }
    }
  }

  .text-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .copy-right-container {
    display: flex;
    justify-content: end;
  }
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* Additional styles to ensure proper layout */
    .left-side,
    .right-side {
      width: 100%;
    }
  }
`

export const SocialMediaWrapper = styled.div`
  position: absolute;
  right: 1%;
  bottom: 35%;
`
