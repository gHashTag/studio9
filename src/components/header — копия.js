import React, { Component } from 'react'
import '../App.css'

const styles = {
 logo: {
   position: 'absolute',
   textAlign: 'center',
   marginTop: 11,
   height: 45 
 } 
}

export default class Header extends Component {
  render() {
    const { logo } = styles
    return (
      <div className="App">
        <div className="App-header">
          <img style={logo} src={require('../assets/logo.png')} alt='studio9reborn' />
        </div>
      </div>
    )
  }
}
