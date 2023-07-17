import styled from 'styled-components'
import { theme } from '../../theme'
import { Modal } from 'react-bootstrap'

export const ProjectWrapper = styled.div`
  background-color: ${theme.color.lightBrown};
  color: ${theme.color.brown};
  margin-top: 20px;

  h1 {
    font-size: 40px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
  }

  span {
    display: block;
    margin-top: 10px;
    text-align: center;
  }

  p {
    font-size: 20px;
    width: 500px;
    text-align: center;
    margin-top: 20px;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .projects-post-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.color.brown};
    border-radius: 30px;
    padding: 20px;
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border: 4px solid ${theme.color.pink};
  }

  .image-container img {
    width: 400px;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
  }

  .title-description-container p {
    margin-bottom: 10px;
  }

  .project-details {
    line-height: 20px;
    max-height: 700px;

    font-size: 14px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .customModal {
    width: 500px; /* Adjust the width as needed */
  }
  .technologies {
    font-size: 15px;
  }
  .demo {
    margin-top: -3.5px;
  }
`
