import React, { Component } from 'react'
import Header from './header.js'

export default class TV extends Component {
  render() {
    return (
      <div className='row'>
        <Header />
        <div className='col-md-12'>Раздел /tv</div>
      </div>
    )
  }
}
