import React, { Component } from 'react';
import Classes from './classes.js'

class TimeTable extends Component {
  render() {
    const { container } = styles
    return (
      <div className="App">
        <div style={container}>
         <Classes />
        </div>
      </div>
    );
  }
}

const styles = {
 container: {
   padding: 15
 } 
}

export default TimeTable 
