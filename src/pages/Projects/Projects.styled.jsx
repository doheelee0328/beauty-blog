import styled from 'styled-components'
import { theme } from '../../theme'

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
    gap: 40px;
    margin-top: 25px;
    /* width: 100%;
    height: auto; */
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
    margin-bottom: 40px;
  }

  .image-container img {
    width: 400px;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .projects-post-container:hover {
    transform: scale(1.1);
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease-in-out;
  }

  .title {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
    height: auto;
  }

  .title-description-container p {
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    @media (max-width: 1000px) {
      padding: 10px;
    }
  }

  .project-details {
    line-height: 20px;
    /* max-height: 700px; */
    width: 100%;
    height: auto;

    font-size: 14px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 20px;
    padding-top: 10px;
    @media (max-width: 1000px) {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }

  .customModal {
    width: 500px; /* Adjust the width as needed */
  }
  .technologies {
    font-size: 14px;
  }

  .project-container {
    width: 100%;
    height: auto;
  }

  a {
    background-color: ${theme.color.pink};
    color: ${theme.color.white};
    width: 70px;
    height: 30px;
    border-radius: 20px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover {
    transform: scale(1.1);
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.1);
  }

  .copy-right-container {
    display: flex;
    justify-content: end;
  }
`
