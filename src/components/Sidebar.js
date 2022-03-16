import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import crossIcon from "../contents/cross_icon.svg"
import '../styles/Sidebar.css';
export default class Sidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    showSettings (event) {
      event.preventDefault();
    }
    render() {
      return (
          <Menu pageWrapId={this.props.pageWrapId} 
            outerContainerId={this.props.outerContainerId} 
            width={ '25%' } 
            customCrossIcon={ <img src={crossIcon} /> } 
            id="sidebar"
          >
            <a id="home" className="menu-item" href="#">Hello, friend</a>
            <a id="about" className="menu-item" href="#">$WhoAmI</a>
            <a id="services" className="menu-item" href="#">Services</a>
            <a id="comment" className="menu-item" href="#">Comment</a>
            <a id="contact" className="menu-item" href="#">Contact</a>
          </Menu>
      );
    }
  };
