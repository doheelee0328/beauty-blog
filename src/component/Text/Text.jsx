import { TextWrapper, ButtonWrapper } from './Text.styled'
import { Button } from '../../component'
import { middlePropButton } from '../Button/ButtonProps'

const Text = () => {
  return (
    <TextWrapper>
      <h2> Welcome To My Portfolio</h2>
      <ButtonWrapper>
        <Button displayText='Explore Projects' styleProps={middlePropButton} />
        <Button displayText='Connect With Me' styleProps={middlePropButton} />
      </ButtonWrapper>
    </TextWrapper>
  )
}

export default Text
