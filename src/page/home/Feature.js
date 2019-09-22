import React from 'react';
import './feature.css'

const image = require('../../images/feature.png')

const feartureList = [
    {
        id: 'feature1',
        icon: require('../../images/install.png'),
        title: 'No-code install',
        subTitle: 'Upon installation, the app will seamlessly add all required code into your store.'
    },
    {
        id: 'feature2',
        icon: require('../../images/window.png'),
        title: 'Positioning the campaign pop-up',
        subTitle: 'determine on which page the pop-up appears. For different kinds of pages, we provide different UIs of the pop-up.'
    },
    {
        id: 'feature3',
        icon: require('../../images/set.png'),
        title: 'Flexible setting',
        subTitle: 'you can easily choose the product that turns into the campaign, set the discount amount of the Price slash offer and the required amount of invited slashes as manage the campaign duration.'
    },
    {
        id: 'feature4',
        icon: require('../../images/rename.png'),
        title: 'Customized templates',
        subTitle: 'quickly adjust the best suitable UI of the campaign for your page without any coding working.'
    },
    {
        id: 'feature5',
        icon: require('../../images/user.png'),
        title: 'Targeting the right customers',
        subTitle: 'Manage the availability for whom the campaign can be attended, and determine who is eligible to help him or her to slash price. By that, you can always spend the cost for the real new customers.'
    },
    {
        id: 'feature6',
        icon: require('../../images/real.png'),
        title: 'Real-time performance analytics tracking',
        subTitle: 'Monitor the campaign performance at any time, you can evaluate the effects, for example, how many new customers attracted, how many offers have been won and other KPIs.'
    }
]


function Feature() {
  return (
    <div className="feature-wrap">
        <div className="feature-container">
            <div className="feature-left">
                <h2 className="feature-title">Features</h2>
                <div>
                    {
                        feartureList.map(data => {
                            const { icon, id, title , subTitle } = data || {}
                            return (
                                <div key={id} className="text-wrap">
                                    <div className="feature-icon-wrap">
                                        <img src={icon} alt="" className="feature-icon"/>
                                        <p className="feature-content-title">{title}</p>
                                    </div>
                                    <p className="feature-content-subTitle">{subTitle}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <img src={image} alt="" className="feature-right"/>
        </div>
    </div>
  );
}

export default Feature;
