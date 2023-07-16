import styled from 'styled-components'
import { theme } from '../../theme'

export const TopBarWrapper = styled.div`
  .left-side {
    background-color: ${theme.color.pink};
  }

  .right-side {
    position: relative;
    background-color: ${theme.color.lightBrown};
    display: flex;
    flex-direction: column;

    .right-side-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 55%;

      img {
        width: 100%;
        max-width: 450px;
        height: auto;
        margin: auto;
        padding-top: 20px;
        margin-bottom: 80px;
        z-index: 10;
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
      }
    }
  }

  .text-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .copy-right-container {
    display: flex;
    justify-content: end;
  }
`

export const SocialMediaWrapper = styled.div`
  position: absolute;
  right: 1%;
  bottom: 35%;
`
