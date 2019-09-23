import React from 'react';
import './why.css'

const whyList = [
    {
        pic: require(`../../images/why${0}.png`),
        title: 'Increase new customers',
        desc: 'Customers are encouraged to invite friends to win free items'
    },
    {
        pic: require(`../../images/why${1}.png`),
        title: 'Improve promotion effectivity',
        desc: 'The invited customers are most likely similar to the inviting customers so that the conversion rate can be increased remarkably.'
    },
    {
        pic: require(`../../images/why${2}.png`),
        title: 'Amazing features and options',
        desc: 'You can create $0 offer or half price offer by setting the amount of invitations at least. Also, the performance analytics are well visualized in charts and table.'
    }
]

const workList =  [
    {
        pic: require('../../images/backHome.png'),
    },
    {
        pic:  require('../../images/workRight.png'),
    },
    {
        pic:  require('../../images/backDataList.png'),
    }
]

const bg  = require('../../images/whyBg.png')


function Why() {
  return (
    <div className="why-wrap">
        <div className="why-content"  name='why' id='why'>
            <img className="why-bg" src={bg} alt=""/>
            <div className="why-info">
                <h2 className="why-title">Why choose Price Slash?</h2>
                <div className="why-container">
                    {
                        whyList.map((data, index) => {
                            const { pic, title, desc} = data || {}
                            return (
                                <div className="why-icon-wrap" key={`why${index}`}>
                                    <img className="why-icon" src={pic} alt="" />
                                    <p className="why-sub-title">{title}</p>
                                    <p className="why-desc">{desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <h1 className="work-title">How does it work?</h1>
                <p className="work-subTitle">Integrates social networking into e-commerce</p>
                <p className="work-desc">With Price Slash, you can create a discount offer by setting how much the price can be slashed to and how many contracts required for inviting to slash. Customers is only allowed to win the offer once they have invited contracts as many as required. Once the invited contracts visit your site to help slashing price, meanwhile, you have more customers to increase sale or boost your branding influence.</p>
                <div className="work-content">
                    {
                        workList.map((data, index) => {
                            const { pic = ''} = data || {}
                            let className = ''
                          
                            switch(index) {
                                case 0:
                                        className  = 'why-home';
                                        break;
                                case 1:
                                        className  = 'why-right-icon';
                                        break;
                                default:
                                        className = 'why-data'

                            }
    
                            return (
                                <img src={pic} key={`work-${index}`} className={className} alt=''/>
                            )
                        })
                    }
                    <p className="why-site">site</p>
                    <p className="why-edit">edit</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Why;
