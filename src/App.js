import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import './App.css';
import Home from './components/home.js'
import We from './components/we.js'
import ForYour from './components/foryour.js'
import TimeTable from './components/timetable.js'
import TV from './components/tv.js'
import Restaurant from './components/restaurant.js'
import Shop from './components/shop.js'


class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
      currentMenu: 'stack',
      isOpen: false,
      side: 'left'
    };
  }

  componentDidMount() {
   window.addEventListener('hashchange', () => {
     this.setState({
     route: window.location.hash.substr(1)
    })
   })
  }

  changeMenu(menu) {
    this.setState({currentMenu: menu});
  }

  changeSide(side) {
    this.setState({side});
  }

  getItems() {
    let items = [
     <a key="0" href="#/home"><i className="fa fa-fw fa-star-o" /><span>Главная</span></a>,
     <a key="1" href="#/we"><i className="fa fa-fw fa-graduation-cap" /><span>Мы</span></a>,
     <a key="2" href="#/foryour"><i className="fa fa-fw fa-gift" /><span>Для Вас</span></a>,
     <a key="3" href="#/timetable"><i className="fa fa-fw fa-calendar" /><span>Расписание</span></a>,
     <a key="4" href="#/tv"><i className="fa fa-fw fa-film" /><span>TV</span></a>,
     <a key="5" href="#/restaurant"><i className="fa fa-fw fa-leaf" /><span>Ресторан</span></a>,
     <a key="6" href="#/shop"><i className="fa fa-fw fa-shopping-bag" /><span>Магазин</span></a>
        ];
    return items;
  }

  render() {
    let Child;
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();

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
      <div id="outer-container" style={{height: '100%'}}>
        <MenuWrap wait={20} side={this.state.side}>
         <Menu customBurgerIcon={ <img src={require('./assets/icon.svg')} alt="studio9" /> } isOpen={this.state.isOpen} id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} left>
            {items}
          </Menu>
        </MenuWrap>
        <Child />
      </div>
    );
  }
}

export default App;
