import React from 'react';
import '../styles/WelcomeImg.css';
import msanImg from "../contents/msan.png"
export default class WelcomeImg extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
          <div className="WelcomeImg-container">
            <img src={msanImg} id="msan-image" alt='Muhammed Berkay San'/>
          </div>
        );
        }
  };
