import React, { Component } from 'react'

const styles = {
 nav: {
   position: 'absolute',
   marginLeft: 70,
   paddingTop: 29,
   display: 'flex'
 },
 logo: {
   textAlign: 'center',
   height: 45 
 } 
}

export default class Header extends Component {
  render() {
    const { nav, logo } = styles
    return (
     <div>
       <nav style={nav}>
        <img style={logo} src={require('../assets/logo.png')} alt='studio9reborn' />
        </nav>
     </div>
    )
  }
}
