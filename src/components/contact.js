import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import logo from './logo.svg'

const AnyReactComponent = ({ text }) => (
  <img src={logo} className='App-logo' alt="logo" />
)

export default class Contact extends Component {
  static defaultProps = {
    center: {lat: 55.757, lng: 37.5555},
    zoom: 17
  }
  render() {
    return (
      <div className='App'>
        <p className='App-intro'>
           Контакт 
        </p>
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={55.75785}
          lng={37.55499}
          text={'Studio9Reborn'}
         /> 
      </GoogleMapReact>
      </div>
    )
  }
}
