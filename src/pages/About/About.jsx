import React from 'react'
import { AboutPageWrapper, Copyright } from './About.styled'
import AboutPageImage from '../../Images/Group 8-2.png'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
import { CopyRight } from '../../component'

const About = () => {
  return (
    <AboutPageWrapper>
      <Container className='min-vh-100 d-flex flex-column'>
        <Row className='flex-grow-1'>
          <div className='d-flex flex-column align-items-center w-100'>
            <h1>Hi 👋🏻 I’m Dohee Lee!</h1>
            <img
              src={AboutPageImage}
              alt='about'
              style={{ width: '550px', height: '400px' }}
            />

            <div className='d-flex flex-column w-75 description'>
              <div className='paragraphs'>
                <h2>Who Am I?</h2>
                <p>
                  I am a recent graduate from Coventry University where I
                  studied aviation management and just completed my time at La
                  Fosse Academy. Although I originally hail from South Korea, I
                  moved to the UK when I was 11.
                  <span>
                    Besides my academic pursuits, my true passion lies in
                    dancing. I can dance up to 4 hours a day because, hey, when
                    you love something, why not go all in?
                  </span>
                </p>
              </div>
              <div className='paragraphs'>
                <h2>How I Got Into Coding?</h2>
                <p>
                  It all started just a month after graduating when I stumbled
                  upon some JavaScript challenges from a coding boot camp.
                  <span>
                    Now, keep in mind, I had zero coding experience, but I
                    thought, "Let's give it a shot!" And guess what? I instantly
                    fell head over heels in love with coding. I can't even count
                    the hours I spent on loops and functions. But when I finally
                    cracked a problem, it felt like the ultimate achievement! I
                    got hooked on solving challenges on platforms like CodeWars.
                  </span>
                  <span>
                    I even got into building websites using HTML and CSS on
                    CodePen. Seeing my creations come to life on the screen was
                    like pure magic. That's when I knew deep down that I had to
                    pursue a career in coding.
                  </span>
                </p>
              </div>
              <div className='paragraphs'>
                <h2>My Journey So Far!</h2>
                <p>
                  Since then, I decided to learn coding as much as I can. I've
                  taken advantage of resources like Udemy and YouTube.
                  <span>
                    And then, an incredible opportunity came my way—I joined an
                    8-week program called Code First Girls. In those weeks, I
                    dove into HTML, CSS, and JavaScript. Towards the end of the
                    course, we got to work on a group project, and guess what?
                    Our team won the reward for the best project! It was such an
                    amazing experience.
                  </span>
                  <span>
                    But wait, there's more! Several months later, I got into a
                    13-week immersive boot camp called La Fosse Academy. I got
                    to build full-stack applications alongside a fantastic
                    cohort. We got to explore front-end technologies like HTML,
                    CSS, JavaScript, React, Redux, and Bootstrap. And on the
                    back end, we dived into Node.js, Express.js, Flask, Python,
                    and databases like PostgreSQL and MongoDB. Oh, and let's not
                    forget about the importance of unit testing!
                  </span>
                  <span>
                    My coding journey has been quite a ride, but I'm loving
                    every bit of it. I can't wait to continue growing my skills
                    and diving deeper into the ever-evolving world of coding.
                    It's exciting, and I'm ready to embrace the challenges with
                    a big smile on my face!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <div className='copyright'>
        <CopyRight />
      </div>
    </AboutPageWrapper>
  )
}

export default About
