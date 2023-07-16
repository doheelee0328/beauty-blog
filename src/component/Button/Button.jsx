import { ButtonWrapper } from './Button.styled'
const Button = ({ displayText, styleProps, navigateTo }) => {
  return (
    <ButtonWrapper styleProps={styleProps} onClick={navigateTo}>
      {displayText}
    </ButtonWrapper>
  )
}

export default Button
