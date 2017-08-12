import React, { Component } from 'react'
import logoStudio9 from './logo.png'

export default class Header extends Component {
  render() {
    const { logo } = styles
    return (
      <img style={logo} src={logoStudio9} alt='studio9reborn' />
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
