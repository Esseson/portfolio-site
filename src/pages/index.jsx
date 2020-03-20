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
        <Subtitle> I can help design your stunning Website, Mobile Apps, Graphics, UI/UX, SEO, 
        content writing.</Subtitle>
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
          <ProjectCard
            title="Anredia"
            link="https://anredia.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A clients project a single paged web application '#Laravel.
          </ProjectCard>
          <ProjectCard
            title="YopeToday"
            link="https://www.yopetoday.ga/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A financial literacy platform to help people spend wisely '#ReactJS.
          </ProjectCard>
          <ProjectCard
            title="Resume"
            link="https://docs.google.com/document/d/1WxGMeXsnV50AHvZd1XV4CUovCzoZA_y826tx31rayP0/edit?usp=sharing"
            bg="linear-gradient(to right, #FF0091 0%, #FF0066 100%)"
          >
            My resume detailing relevant work experience'#G-suite.
          </ProjectCard>

          <ProjectCard
            title="Best Quiet RV Generator"
            link="https://docs.google.com/document/d/106QSCHQnPrqEd3-BMJHbPDOhohAQx2yaLBcAbU8enHg/edit?usp=sharing"
            bg="linear-gradient(to right, #3300FF 0%, #8800FF 100%)"
          >
            content writing project for RV blogs.
          </ProjectCard>

          <ProjectCard
            title="Best First Aid Kit For Hiking, Backpacking or Camping"
            link="https://docs.google.com/document/d/131dlrl-GpnwFljVDXbjp2iNeGKDL4JU_5b5ZC3ZRFrE/edit?usp=sharing"
            bg="linear-gradient(to right, #626657 0%, #666D4F 100%)"
          >
            SEO article for first aid kit.
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
            <h6>...Esseson</h6>
          </AboutSub>
        </AboutHero>
      </About>

      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href = "mailto: iamesseson@gmail.com"> Hi</a> or find me on other platforms:{' '}
            <a href="tel:1-540-360-1924">1-540-360-1924</a>
            <a href="https://www.linkedin.com/in/raphael-esseson-b6940212a/">LinkedIn</a>
            <a href="https://www.instagram.com/esseson/">Instagram</a>
            <a href="https://web.facebook.com/Lord.Esseson">Facebook</a>
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
