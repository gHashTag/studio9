import React, { Component } from 'react'
import Header from './header.js'

export default class Shop extends Component {
  render() {
    return (
      <div className='row'>
        <Header />
        <div className='col-md-12'>Раздел /shop</div>
      </div>
    )
  }
}
