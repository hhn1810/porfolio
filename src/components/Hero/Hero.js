import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => {
  const handleClick = () => {
    window.location = 'https://www.facebook.com/nguyen181099/'
  }
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            The purpose of JavaScript Mastery is to help aspiring and
            established developers to take their development skills to the next
            level and build awesome apps.
          </SectionText>
          <Button onClick={handleClick}> Click to contact me</Button>
        </LeftSection>
      </Section>
    </>
  )
}

export default Hero
