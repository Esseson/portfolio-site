import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import Esseson from '../images/Esseson.jpg'






const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-10px`};

`
const Graphics = styled.img`
  ${tw`Circle w-32 xl:w-48 shadow-lg h-auto`};

`


const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> 
        </BigTitle>
        <Subtitle>    
        <h2> I will design your </h2>
            <a href="https://www.esseson.com/">Website, </a>
            <a href="https://www.esseson.com/">Graphics, </a>
            <a href="https://www.esseson.com/">UI and UX, </a>
      <br/>
    and manage your <a href="https://www.esseson.com/">SEO. </a>
    </Subtitle>
      </Hero>

      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="OurSpaceNow"
            link="https://ourspacenow.site/%3Ewelcome"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A Real estate listing platform. '#ASP.Net, Python.
          </ProjectCard>

          {/* ReasonableRemedies */}
          <ProjectCard
            title="Reasonable Remedies"
            link="https://www.reasonableremedies.com/"
            bg="linear-gradient(to right, #DDDDDD 0%, #AAAAAA 100%)"
          >
           Effective and affordable naturopathic health supplement to help you quickly recover from influenza and viruses. '#WORDPRESS.
          </ProjectCard>
          {/* ReasonableRemedies */}

          {/* health.trans4mind.com */}
          <ProjectCard
            title="Holistic Health and Fitness Blog"
            link="https://health.trans4mind.com/"
            bg="linear-gradient(to right, #001f3f 0%, #111111 100%)"
          >
           My Content writing portfolio convering holistic health, fitness and lifestyle. '#WORDPRESS.
          </ProjectCard>
          {/* health.trans4mind.com */}


          <ProjectCard
            title="Resume"
            link="https://docs.google.com/document/d/1WxGMeXsnV50AHvZd1XV4CUovCzoZA_y826tx31rayP0/edit?usp=sharing"
            bg="linear-gradient(to right, #FF0091 0%, #FF0066 100%)"
          >
            My resume detailing relevant work experience'#G-suite.
          </ProjectCard>

       
        </ProjectsWrapper>

      </Projects>
      
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={Esseson} alt="Esseson" />
          <AboutSub>
             "I learnt to build websites myself and I became an expert. Providing and asssisting my clients to run their
            business" <br />
            <h6>
            <a href="https://www.esseson.com/"> ...Esseson </a>
            </h6>
          </AboutSub>
        </AboutHero>
      </About>

      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href = "tel:1-540-360-1924"> Hello</a>,<a href = "mailto:iamesseson@gmail.com"> Email</a> or find me on other platforms:{' '}
            <br/>
            <a href="https://www.linkedin.com/in/raphael-esseson-b6940212a/">LinkedIn</a>
              <br/>
            <a href="https://www.instagram.com/esseson/">Instagram</a>
                <br/>
            <a href="https://web.facebook.com/Lord.Esseson">Facebook</a>
                <br/>
            <a href="https://esseson.contently.com/">Contently</a>




          </ContactText>
        </Inner>
        <Footer>
          Made by{' '}
          <a href="https://www.Esseson.com">Esseson</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
