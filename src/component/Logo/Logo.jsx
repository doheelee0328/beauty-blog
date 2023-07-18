import { LogoTitle } from './Logo.styled'
import WhiteBackground from './../../Images/back.png'
const Logo = () => {
  return (
    <div>
      <LogoTitle whiteBackground={WhiteBackground} className='display-1'>
        Dohee Lee
      </LogoTitle>
    </div>
  )
}

export default Logo
