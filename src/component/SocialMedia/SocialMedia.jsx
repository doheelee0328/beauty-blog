import styled from 'styled-components'
import { theme } from '../../theme'

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 25px;
  cursor: pointer;
  color: ${theme.color.white};
`

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <i className='fa-brands fa-square-instagram'></i>
      <i className='fa-brands fa-twitter'></i>
      <i class='fa-brands fa-linkedin'></i>
      <i class='fa-brands fa-github'></i>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
