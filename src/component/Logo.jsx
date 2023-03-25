import { LogoWrapper, LogoTitle } from './Logo.styled'
import WhiteBackground from '../Images/back.png'
const Logo = () => {
  return (
    <LogoWrapper>
      <LogoTitle whiteBackground={WhiteBackground}>Grow Up</LogoTitle>
    </LogoWrapper>
  )
}

export default Logo
