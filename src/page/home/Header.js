import React from 'react';
import './header.css'

const navbarlist = [
    'About',
    'Why',
    'How',
    'Features',
    'Pricing',
    'About us',
    'Contact'
]

function Header() {
  return (
    <div className="headerWrap">
        <img className="img" src={require('../../images/headerBg.png')} alt=""/>
        <div className="header">
            <div className="headerInfo">
                <div className="navbar">
                    <img className="logo" src={require('../../images/logo.png')} alt=""/>
                    <ul className="navbarlist">
                    {
                        navbarlist.map((value, index) => {
                            return <li className={index === 0 ? 'firstItem': 'item' }>{value}</li> 
                        })
                    }
                    </ul>
                </div>
                <div className="content">
                    <img  className="icon" src={require('../../images/icon.png')} alt=""/>
                    <div className='textWrap'>
                        <p className="title">PRICE SLASH</p>
                        <h1 className="subTitle">
                            Invite friends to slash
                        </h1>
                        <p className="desc">
                            Acquiring customers at a lower marketing cost through social network
                        </p>
                        <p className='button'>Install now</p>
                    </div>
                    <img src={require('../../images/character.png')} className="character" alt=""/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
