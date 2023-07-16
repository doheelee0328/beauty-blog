import React from 'react'
import { NavBar } from '../../component'
import { AboutPageWrapper } from './About.styled'
import AboutPageImage from '../../Images/Group 8-2.png'

const About = () => {
  return (
    <AboutPageWrapper>
      <NavBar />
      <h1>Hi 👋🏻 I’m Dohee Lee!</h1>
      <img src={AboutPageImage} alt='about' />
    </AboutPageWrapper>
  )
}

export default About
