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
import Nawshin from '../images/Nawshin.jpg'



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
          Hi there, <br /> we are Esseson & Nawshin.
        </BigTitle>
        <Subtitle> We can help design your stunning Website, Mobile App, Graphics, UI/UX, SEO 
          and overall Online presence.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="N'dearing naturals"
            link="https://www.endearing.ga/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            My small scale Ecommerce platform for Shea Butter and African Black Soap '#Wordpress.
          </ProjectCard>
          <ProjectCard
            title="Anredia"
            link="https://anredia.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A clients project a single paged web application '#Laravel.
          </ProjectCard>
          <ProjectCard
            title="Volta Irrigation"
            link="https://www.voltairrigation.org/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            An irrigation startup basic website '#Wix.
          </ProjectCard>
          <ProjectCard
            title="Carniovre Connect"
            link="https://carnivore-connect.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Designed a platform for a client to sell steak '#Wordpress.
          </ProjectCard>
          <ProjectCard
            title="Resume"
            link="https://drive.google.com/file/d/112plipuDJrZbN5pZfEfO94EZlxCCJoTx/view?usp=sharing"
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
             I learnt to build websites myself and I became an expert. Providing and asssisting my clients to run their
            business.
          </AboutSub>
        </AboutHero>
         <AboutHero>
          <Avatar src={Nawshin} alt="Nawshin" />
          <AboutSub>
            I am a professional Graphic Designer having over 4 years experience in this field. 
            I am a certified graphic designer.
          </AboutSub>
        </AboutHero>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="essesonahmed@yahoo.com">Hi</a> or find me on other platforms:{' '}
            <a href="+1 (520)-999-9282">Phone Number</a> &{' '}
            <a href="https://www.linkedin.com/in/raphael-esseson-b6940212a/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
         Made by{' '}
          <a href="https://www.lekoarts.de">Esseson</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
