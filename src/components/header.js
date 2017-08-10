import React, { Component } from 'react'
import '../App.css'

export default class Header extends Component {
  render() {
    const { logo } = styles
    return (
      <img style={logo} src={require('../assets/logo.png')} alt='studio9reborn' />
    )
  }
}

const styles = {
 logo: {
   textAlign: 'center',
   marginTop: 11,
   marginLeft: 25,
   height: 45 
 } 
}
