import { TextWrapper, ButtonWrapper } from './Text.styled'
import { Button } from '../../component'
import { middlePropButton } from '../Button/ButtonProps'
import { useNavigate } from 'react-router-dom'

const Text = () => {
  const navigate = useNavigate()

  const navigateToProjects = () => {
    navigate('/projects')
  }
  const navigateToContact = () => {
    navigate('/contact')
  }
  return (
    <TextWrapper>
      <h2> Welcome To My Portfolio</h2>
      <ButtonWrapper>
        <Button
          displayText='Explore Projects'
          styleProps={middlePropButton}
          navigateTo={navigateToProjects}
        />
        <Button
          displayText='Connect With Me'
          styleProps={middlePropButton}
          navigateTo={navigateToContact}
        />
      </ButtonWrapper>
    </TextWrapper>
  )
}

export default Text
