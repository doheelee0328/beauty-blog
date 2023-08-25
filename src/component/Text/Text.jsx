import { TextWrapper, ButtonWrapper } from './Text.styled'
import { Buttons } from '../../component'
import { middlePropButton } from '../Button/ButtonProps'
import { useNavigate, Link } from 'react-router-dom'

const Text = () => {
  const navigate = useNavigate()

  const navigateToProjects = () => {
    navigate('/projects')
  }

  return (
    <TextWrapper>
      <h1 class='display-6'>Welcome To My Portfolio</h1>
      <ButtonWrapper>
        <Buttons
          displayText='Explore Projects'
          styleProps={middlePropButton}
          navigateTo={navigateToProjects}
        />

        <Link
          to='https://drive.google.com/file/d/1xR_IBGqCAqTNmib-mwd4_YCjOdp8Ftc7/view?usp=sharing'
          target='blank'
        >
          <Buttons displayText='My Resume' styleProps={middlePropButton} />
        </Link>
      </ButtonWrapper>
    </TextWrapper>
  )
}

export default Text
