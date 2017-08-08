import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import './App.css';

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
      currentMenu: 'stack',
      side: 'left'
    };
  }

  changeMenu(menu) {
    this.setState({currentMenu: menu});
  }

  changeSide(side) {
    this.setState({side});
  }

  getItems() {
    let items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Главная</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-graduation-cap" /><span>Мы</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-gift" /><span>Для Вас</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-calendar" /><span>Расписание</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-film" /><span>TV</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-leaf" /><span>Ресторан</span></a>,
          <a key="6" href=""><i className="fa fa-fw fa-shopping-bag" /><span>Магазин</span></a>
        ];
    return items;
  }

  render() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    return (
      <div id="outer-container" style={{height: '100%'}}>
        <MenuWrap wait={20} side={this.state.side}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} left>
            {items}
          </Menu>
        </MenuWrap>
        <main id="page-wrap">
         <div className="text">Studio 9 Reborn</div>
        </main>
      </div>
    );
  }
}

export default App;
