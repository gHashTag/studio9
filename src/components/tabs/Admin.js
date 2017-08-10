import React, { Component } from 'react'
import Classes from './classes.js'

export default class Admin extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Раздел /admin</div>
        <Classes />
      </div>
    )
 }
}
