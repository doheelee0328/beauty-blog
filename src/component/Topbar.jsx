import NavBar from './Navbar'
import Logo from './Logo'
import Text from './Text'
import { TopBarWrapper, TextWrapper, SocialMediaWrapper } from './Topbar.styled'
import Beauty from '../Images/beauty.webp'
import SocialMedia from './SocialMedia'

const Topbar = () => {
  return (
    <>
      <TopBarWrapper backgroundImage={Beauty}>
        <NavBar></NavBar>
        <TextWrapper>
          <Logo></Logo>
          <Text></Text>
        </TextWrapper>
        <SocialMediaWrapper>
          <SocialMedia></SocialMedia>
        </SocialMediaWrapper>
      </TopBarWrapper>
    </>
  )
}

export default Topbar
