import styled from 'styled-components'
import { theme } from '../../theme'
import { Link } from 'react-router-dom'

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 25px;
  cursor: pointer;
  z-index: 100;

  a {
    color: ${theme.color.white};
  }

  a:hover {
    color: ${theme.color.brown};
    transition: 0.5s ease-in-out;
    animation: bounce 1s ease-in-out;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
`

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <Link to='https://github.com/doheelee0328' target='_blank'>
        <i className='fa-brands fa-github'></i>
      </Link>
      <Link
        to='https://www.linkedin.com/in/dohee-lee-7115001ba/'
        target='_blank'
      >
        <i className='fa-brands fa-linkedin'></i>
      </Link>
      <Link to='https://www.instagram.com/doyaalee/' target='_blank'>
        <i className='fa-brands fa-square-instagram'></i>
      </Link>
      <Link to='https://twitter.com/Doya28_2001' target='_blank'>
        <i className='fa-brands fa-twitter'></i>
      </Link>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
