import Beauty from '../Images/beauty.jpeg'
import {
  MiddlePartWrapper,
  Image,
  Wrapper,
  ButtonWrapper,
  SocialMediaWrapper,
} from './Middlepart.styled'
import Button from './Button'
import { middlePropButton } from './ButtonProps'
import SocialMedia from './SocialMedia'
import WhiteBackground from '../Images/back.png'

const MiddlePart = () => {
  return (
    <MiddlePartWrapper>
      <Image backgroundImage={Beauty} alt='image'>
        <Wrapper whiteBackground={WhiteBackground}>
          <div className='text-box'>
            <h1>Hi Guys!</h1>
            <h2>Welcome To My Beauty Blog</h2>
          </div>
          <ButtonWrapper>
            <Button
              displayText='Explore'
              styleProps={middlePropButton}
            ></Button>
            <Button
              displayText='Connect With Me'
              styleProps={middlePropButton}
            ></Button>
          </ButtonWrapper>
          <SocialMediaWrapper>
            <SocialMedia></SocialMedia>
          </SocialMediaWrapper>
        </Wrapper>
      </Image>
    </MiddlePartWrapper>
  )
}

export default MiddlePart
//  <img src={Beauty} alt='beauty' />
// <Image backgroundImage={Beauty} alt='image'></Image>
