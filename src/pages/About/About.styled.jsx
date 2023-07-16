import styled from 'styled-components'
import { theme } from '../../theme'

export const AboutPageWrapper = styled.div`
  background-color: ${theme.color.lightBrown};
  color: ${theme.color.brown};

  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
  }

  img {
    margin-bottom: 25px;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 15px;
    line-height: 25px;
  }

  span {
    display: block;
    padding-top: 10px;
  }

  .paragraphs {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-bottom: 10px;
  }

  .description {
    margin-bottom: 40px;
  }
`
