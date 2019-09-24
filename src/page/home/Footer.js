import React from 'react';
import './footer.css'

const list = [
    {
      title: 'Name'
    },
    {
      title: 'Email'
    },
    {
      title: 'Company'
    },
    {
      title: 'Phone'
    }
]

const links = ['Quick Links', 'About', 'Why', 'How', 'Features', 'Pricing', 'About us', 'Contact']
const Social = ['Twitter', 'Facebook', 'Pinterest', 'Linkedln', 'Instagram']

const Contacts = ['Contacts','Email', 'Phone', 'Fax']

const right = require('../../images/touchRight.png')

const logo = require('../../images/footerLogo.png')


function Footer() {
  return (
      <div className="footer-wrap">
        <div className='footer-wrap-line '>
          <div className="footer-copy-wrap">
            <p className="footer-copy">Copyright ©</p>
            <div className="footer-wrap-logo">
              <img alt="" className="footer-logo-icon" src={require('../../images/fblogo.png')}/>
              <img alt="" className="footer-logo-icon" src={require('../../images/twlogo.png')}/>
            </div> 
          </div>
        </div>
        <div className="footer-top"/>
        <div className="footer-bottom"/>
        <div className='footer-container-wrap'>
        <div className="footer-container">
            <div className='footer-touch'>
              <div className='footer-left'>
                <div className='footer-title'>Get in touch</div>
                <div className='footer-desc'>WHO began when our Constitution came into force on 7 April 1948 – a date we now celebrate every year as World Health Day. We are now more than 7000 people from more than 150 countries working in 150 country offices, in 6 regional offices and at our headquarters in Geneva.</div>
              </div>
              <div className='footer-right'>
                {
                  list.map(data => {
                    const { title } = data || {}
                    return (
                      <div className="footer-input">
                        <span className='footer-label'>{title}</span>
                      </div>
                    )
                  })
                }
              </div>
              <div className='footer-button'>
                <span>Subscribe</span>
                <img src={right} alt='' className="footer-allow"/>
              </div>
            </div>
            <div className='footer-content'>
              <div className='footer-logo-wrap'>
                <img src={logo} alt="" className='footer-logo'/>
                <p className='footer-logo-title'>{'WHO began when our Constitution came into force on 7 April 1948 – a date we now celebrate every year as World Health Day. We are now more than 7000 people from more than 150 countries working in 150 country offices, in 6 regional offices and at our headquarters in Geneva.'}</p>
              </div>
              <ul className='footer-links-wrap'>
                {
                  links.map((value, i) => {
                    const isfirst = i === 0
                    return <li className="footer-links" style={{fontWeight: isfirst ? 900 : 300, marginBottom: isfirst ? 34: 11 }}>{value}</li>
                  })
                }
              </ul>
              <ul className='footer-links-wrap'>
                {
                  Social.map((value, i) => {
                    const isfirst = i === 0
                    return <li className="footer-links" style={{fontWeight: isfirst ? 900 : 300, marginBottom: isfirst ? 34: 24 }}>{value}</li>
                  })
                }
              </ul>
              <ul className='footer-links-wrap'>
                {
                  Contacts.map((value, i) => {
                    const isfirst = i === 0
                    return <li className="footer-links" style={{fontWeight: isfirst ? 900 : 300, marginBottom: isfirst ? 34: 24 }}>{value}</li>
                  })
                }
              </ul>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Footer;
