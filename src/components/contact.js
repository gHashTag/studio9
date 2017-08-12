import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#BF813E', 
    background: '#121111',
    height: 40, width: 115    
  }}>
  <h3 style={{alignSelf: 'center' }}>{text}</h3>
  </div>
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
          lat={55.75777}
          lng={37.5549}
          text={'Studio9Reborn'}
         /> 
      </GoogleMapReact>
      </div>
    )
  }
}
