import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Init extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Init</h1>
        <ul>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/genre'>Genre</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
