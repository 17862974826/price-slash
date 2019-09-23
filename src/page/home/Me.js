import React from 'react';
import './me.css'



const list = [
    {
        pic: require('../../images/me1.png'),
        title: 'WHO WE ARE',
        desc: 'WHO began when our Constitution came into force on 7 April 1948 – a date we now celebrate every year as World Health Day. We are now more than 7000 people from more than 150 countries working in 150 country offices, in 6 regional offices and at our headquarters in Geneva.'
    },
    {
        pic: require('../../images/me2.png'),
        title: 'Why does it',
        desc: 'WHO began when our Constitution came into force on 7 April 1948 – a date we now celebrate every year as World Health Day. We are now more than 7000 people from more than 150 countries working in 150 country offices, in 6 regional offices and at our headquarters in Geneva.'
    },
    {
        pic: require('../../images/me3.png'),
        title: 'Team show',
        desc: 'WHO began when our Constitution came into force on 7 April 1948 – a date we now celebrate every year as World Health Day. We are now more than 7000 people from more than 150 countries working in 150 country offices, in 6 regional offices and at our headquarters in Geneva.'
    }
]


function Me() {
  return (
      <div className="me-wrap">
        <div className="me-container">
           <p className="me-title">About us</p>
           <div className="me-content-wrap">
            <div className="me-content">
                {
                    list.map((data, i) => {
                        const { pic, title, desc } = data || {}
                        
                        return (
                            <div className="me-item" key={`me-${i}`}>
                                <img className='me-item-pic' src={pic} alt=''/>
                               <p className='me-item-title'>{title}</p>
                               <p className='me-item-desc'>{desc}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
      </div>
  )
}

export default Me;
