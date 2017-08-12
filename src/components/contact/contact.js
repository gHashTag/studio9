import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import logo from './logo.svg'
import Feedback from './feedbackform.js'

const AnyReactComponent = () => (
  <img src={logo} className='App-logo' alt="logo" />
)

export default class Contact extends Component {
  static get defaultProps() {
    return {
      center: {lat: 55.757, lng: 37.5555},
      zoom: 17
    }
  }
  render() {
    const { center, zoom } = this.props
    return (
      <div className='App'>
        <p className='App-intro'>
           Контакт 
        </p>
        <Feedback />
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
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

Contact.propTypes = {
  center: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
}
