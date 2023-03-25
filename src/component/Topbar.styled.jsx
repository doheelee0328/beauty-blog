import styled from 'styled-components'
export const TopBarWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const TextWrapper = styled.div`
  position: absolute;
  top: 34%;
  padding-left: 80px;
  line-height: 70px;
`

export const SocialMediaWrapper = styled.div`
  position: absolute;
  right: 1%;
  bottom: 35%;
`
