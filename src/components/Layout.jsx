import React from 'react'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import Nav from './nav'
import 'typeface-cantata-one'
import 'typeface-open-sans'

const Layout = () => (
  <>
    <Nav />
    <SEO />
    <GlobalStyle />
  </>
)

export default Layout
