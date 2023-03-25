import { TextWrapper, ButtonWrapper } from './Text.styled'
import Button from './Button'
import { middlePropButton } from './ButtonProps'

const Text = () => {
  return (
    <TextWrapper>
      <h2> Welcome To The Beauty Blog</h2>
      <ButtonWrapper>
        <Button displayText='Explore' styleProps={middlePropButton}></Button>
        <Button
          displayText='Connect With Me'
          styleProps={middlePropButton}
        ></Button>
      </ButtonWrapper>
    </TextWrapper>
  )
}

export default Text
