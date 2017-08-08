import React, { Component } from 'react';
import TestComponent from  './videobackground.js';

document.body.style.position = 'absolute';
document.body.style.margin = 0;
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.overflow = 'hidden';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.player.isPaused,
      isMuted: this.player.isMuted,
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  };

  handleOnPlay = () => {
    this.setState({isPlaying: true});
  };

  handleOnPause = () => {
    this.setState({isPlaying: false});
  };

  handleTimeUpdate = (currentTime, progress, duration) => {
    this.setState({
      progress,
      currentTime,
      duration,
    });
  };

  handleOnMute = () => {
    this.setState({isMuted: true});
  };

  handleOnUnmute = () => {
    this.setState({isMuted: false});
  };

  togglePlay = () => {
    this.player.togglePlay();
  };

  toggleMute = () => {
    this.player.toggleMute();
  };

  render() {
    return (
      <div style={{position: 'absolute', width: ' 100%', height: '100%'}}>
        <TestComponent
          ref={p => this.player = p}
          containerWidth={this.state.windowWidth}
          containerHeight={this.state.windowHeight}
          src={require('../assets/spa.mp4')}
          poster={'http://i29.ltalk.ru/23/78/277823/52/8163752/11111.png?i10c=img.resize(height:160)'}
          onPlay={this.handleOnPlay}
          onPause={this.handleOnPause}
          onMute={this.handleOnMute}
          onUnmute={this.handleOnUnmute}
          onTimeUpdate={this.handleTimeUpdate}
          startTime={10}
          autoPlay={true}
          volume={0.5}
        />
        <nav style={{
          position: 'absolute',
          marginLeft: 90,
          paddingTop: 26,
          display: 'flex',
        }}>
        <img style={{ textAlign: 'center', height: 50 }} src={require('../assets/logo.png')} alt='studio9reborn' />
        </nav>
      </div>
    )
  }
}
