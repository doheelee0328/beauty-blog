import { ButtonWrapper } from './Button.styled'
const Button = ({ displayText, styleProps }) => {
  return <ButtonWrapper styleProps={styleProps}>{displayText}</ButtonWrapper>
}

export default Button
