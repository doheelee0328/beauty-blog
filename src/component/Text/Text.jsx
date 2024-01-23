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
          to='https://docs.google.com/document/d/1n_lP-NSeG5KLBtgoiQxgkAC19MyzZnX5SLbUxaKUBwE/edit?usp=sharing'
          target='blank'
        >
          <Buttons displayText='My Resume' styleProps={middlePropButton} />
        </Link>
      </ButtonWrapper>
    </TextWrapper>
  )
}

export default Text
