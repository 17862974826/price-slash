import React from 'react';
import './pricing.css'

const yes = '√'

const no = 'x'

const list = [
    {
        title: 'Trafic',
        stand: yes,
        pre: yes
    },
    {
        title: 'multiple offers selections',
        stand: yes,
        pre: yes
    },
    {
        title: 'Campign Customization',
        stand: yes,
        pre: yes
    },
    {
        title: 'Adjust Colors and Text',
        stand: yes,
        pre: yes
    },
    {
        title: 'Adjust Position',
        stand: yes,
        pre: yes
    },
    {
        title: 'Real-time performance Analytics',
        stand: yes,
        pre: yes
    },
    {
        title: 'Automatic Unique Coupons',
        stand: yes,
        pre: yes
    },
    {
        title: 'Duplicate attendence Prevention',
        stand: yes,
        pre: yes
    },
    {
        title: 'Page Targeting',
        stand: yes,
        pre: yes
    },
    {
        title: 'Multiple page positioning',
        stand: no,
        pre: yes
    },
    {
        title: 'Free trail 10 days',
        stand: no,
        pre: yes
    },
]



function Pricing() {
  return (
      <div className="pri-wrap">
        <div className="pri-container">
            <div className="pri-title-wrap">
                <p className="pri-title">Pricing</p>
                <div className="pri-standard">
                    <p style={{fontSize: 24, color: '#0367FD',fontWeight: 'bold', textAlign: 'left'}}>Standard</p>
                    <p style={{fontSize: 24, color: '#000000', textAlign: 'left'}}>12.99/month</p>
                    <p style={{fontSize: 0}}>
                        <span style={{fontSize: 24, color: '#EC5E3E', marginRight: 3, textAlign: 'left'}}>30,000</span>
                        <span style={{fontSize: 24, color: '#000000', textAlign: 'left'}}>Monthy Views</span>
                    </p>
                </div>
                <div className="pri-standard">
                    <p style={{fontSize: 24, color: '#0367FD',fontWeight: 'bold', textAlign: 'left'}}>
                            Premium
                    </p>
                    <p style={{fontSize: 24, color: '#000000', textAlign: 'left'}}>19.99/month</p>
                    <p style={{fontSize: 0}}>
                        <span style={{fontSize: 24, color: '#EC5E3E', marginRight: 3, textAlign: 'left'}}>100,000</span>
                        <span style={{fontSize: 24, color: '#000000', textAlign: 'left'}}>Monthy Views</span>
                    </p>
                </div>
            </div>
            <div className="pri-content">
                <div className="pri-line"/>
                {
                    list.map((data,i) => {
                        const { title, stand, pre } = data || {}
                        const color = stand === no ? '#D93742' : '#630218'
                        return (
                            <div key={`pri-${i}`}>
                                <div className="pri-item">
                                    <p className='pri-item-title'>{title}</p>
                                    <p className="pri-item-symbol"  style={{color}}>{stand}</p>
                                    <p className="pri-item-symbol" >{pre}</p>
                                </div>
                                <div className="pri-line"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
  )
}

export default Pricing;
