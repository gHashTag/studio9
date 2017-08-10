import React, { Component } from 'react'
import '../assets/class.css'

class Classes extends Component {
  constructor () {
    super()
    this.state = {
      show: true
    }
  }

  componentDidMount () {
    this.addScript()
  }

  addScript () {
    const script = document.createElement("script")
    script.src = "https://widgets.healcode.com/javascripts/healcode.js";
    script.async = true;
    document.body.appendChild(script);
  }

  show () {
    this.state()
  }

  render() {
    return (
<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="473784925a0" data-widget-version="0.1"></healcode-widget>
    );
  }
}

export default Classes
