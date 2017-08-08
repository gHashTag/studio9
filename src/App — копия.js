import React, { Component } from 'react'
import './App.css'
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu'
import './assets/index.less'

import Home from './components/home.js'
import We from './components/we.js'
import ForYour from './components/foryour.js' 
import TimeTable from './components/timetable.js'
import TV from './components/tv.js'
import Restaurant from './components/restaurant.js'
import Shop from './components/shop.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  render() {
    let Child

  function handleSelect(info) {
    console.log(info);
    console.log(`selected ${info.key}`);
  }

  function onOpenChange(value) {
    console.log('onOpenChange', value);
  }
  const commonMenu = (<Menu onSelect={handleSelect} onOpenChange={onOpenChange}>
    <MenuItem key="1">ГЛАВНАЯ</MenuItem>
    <SubMenu title={<span>МЫ</span>} key="2">
      <MenuItem key="2-1">УДОБНО</MenuItem>
      <MenuItem key="2-2">ПОЛЕЗНО</MenuItem>
      <MenuItem key="2-3">ВОЗМОЖНО</MenuItem>
      <MenuItem key="2-4">ПРЕПОДАВАТЕЛИ</MenuItem>
      <MenuItem key="2-5">ВРАЧИ</MenuItem>
      <MenuItem key="2-6">КОНТАКТЫ</MenuItem>
    </SubMenu>
    <MenuItem key="3">ДЛЯ ВАС</MenuItem>
    <SubMenu title={<span>РАСПИСАНИЕ</span>} key="4">
      <MenuItem key="4-1">КЛАССЫ</MenuItem>
      <MenuItem key="4-2">СЕМИНАРЫ</MenuItem>
    </SubMenu>
    <MenuItem key="5">TV</MenuItem>
    <MenuItem key="6">РЕСТОРАН</MenuItem>
    <MenuItem key="7">МАГАЗИН</MenuItem>
  </Menu>);

  const horizontalMenu = React.cloneElement(commonMenu, {
      mode: 'horizontal',
      // use openTransition for antd
      openAnimation: 'slide-up',
   });

    switch (this.state.route) {
      case '/home': Child = Home; break;
      case '/we': Child = We; break;
      case '/foryour': Child = ForYour; break;
      case '/timetable': Child = TimeTable; break;
      case '/tv': Child = TV; break;
      case '/restaurant': Child = Restaurant; break;
      case '/shop': Child = Shop; break;
      default: Child = Home;
    }

    return (
      <div className='container'>
        <div>
          <div style={{ margin: 20, width: 800 }}>{horizontalMenu}</div>
        </div>
 
        <h1>Studio9Reborn</h1>
        <ul>
          <li><a href='#/home'>ГЛАВНАЯ</a></li>
          <li><a href='#/we'>МЫ</a></li>
          <li><a href='#/foryour'>ДЛЯ ВАС</a></li>
          <li><a href='#/timetable'>РАСПИСАНИЕ</a></li>
          <li><a href='#/tv'>TV</a></li>
          <li><a href='#/restaurant'>РЕСТОРАН</a></li>
          <li><a href='#/shop'>МАГАЗИН</a></li>
        </ul>
        <Child />
      </div>
    )
  }
}
