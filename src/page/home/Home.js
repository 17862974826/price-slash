import React from 'react';
import Header from './Header'
import  About from './About'
import Why from './Why'
import Feature from './Feature'



function Home() {
  return (
      <>
        <Header key="header"/>
        <About key="about"/>
        <Why />
        <Feature />
      </>
  )
}

export default Home;
