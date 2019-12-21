import React from "react"

import "./layout.css"

import Logo from '../images/SEP_logo.png'

const Header = () => (
  <div 
    style={{ 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    id="header"
  >
    <img 
      style={{
        opacity: '0.06',
        position: 'absolute',
        zIndex: -1,
      }}
      id="logo"
      src={Logo} 
    />
    <h1>Sigma Eta Pi</h1>
    <h3>Co-ed entrepreneurship fraternity</h3>
  </div>
)

export default Header
