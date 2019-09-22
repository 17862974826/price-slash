import React from 'react';
import './about.css'



function About() {
  return (
    <div className="absolute-wrap">
      <div className="content">
        <div className="about">
          <h3 className="title">About</h3>
          <p className="subTitle">Price Slash</p>
          <p className="summary">Are you painfully anxious about acquiring customers?</p>
          <p className="description">Who doesn’t hold a dream to set up a shopify site? As a shopify merchant, weabsolutely understand and experienced how difficult to attract customers andhow expensive the advertisement costs. Here we launch a powerful promotion tool - Price Slash, which can let you not beanxious about customer acquisition and make your e-commerce dreamscontinue. Price Slash is built for acquiring customers through creating certain incentive for shoppers to invite a certain amount of their contacts to win the offer.</p>
        </div>
        <img src={require('../../images/about.png')} alt="" className="about-img"/>
      </div>
    </div>
  )
}

export default About;
