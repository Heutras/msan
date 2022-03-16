import React from 'react';
import '../styles/WelcomeImg.css';
import msanImg from "../contents/msan.jpeg"
export default class WelcomeImg extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
           <div className="frame">
            <img src={msanImg} alt="Msan"/>
           </div>
        );
        }
  };
