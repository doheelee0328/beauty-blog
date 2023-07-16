import { TextWrapper, ButtonWrapper } from './Text.styled'
import { Button } from '../../component'
import { middlePropButton } from '../Button/ButtonProps'
import { useNavigate, Link } from 'react-router-dom'

const Text = () => {
  const navigate = useNavigate()

  const navigateToProjects = () => {
    navigate('/projects')
  }
  // const navigateToResume = () => {
  //   navigate(
  //     'https://acrobat.adobe.com/link/review?uri=urn%3Aaaid%3Ascds%3AUS%3A2e473cf4-5a9b-4f60-ac90-3845b46a4551'
  //   )
  // }
  return (
    <TextWrapper>
      <h2> Welcome To My Portfolio</h2>
      <ButtonWrapper>
        <Button
          displayText='Explore Projects'
          styleProps={middlePropButton}
          navigateTo={navigateToProjects}
        />
        <Link
          to='https://drive.google.com/file/d/1FOSt7VyjiU4dk1L7jEiAG95ceq37hpe1/view?usp=sharing'
          target='blank'
        >
          <Button
            displayText='My Resume'
            styleProps={middlePropButton}
            // navigateTo={navigateToResume}
          />
        </Link>
      </ButtonWrapper>
    </TextWrapper>
  )
}

export default Text
