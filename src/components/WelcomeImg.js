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
            <div class="ui">
              <p class="zoom"><span class="zoom zoomin"></span><span class="zoom zoomout"></span></p>
              <p class="zoomlevel"><span class="percent"></span><span class="width"></span><span
                class="height"></span></p>
              <p><span class="dead"></span></p>
              <p><span class="alive"></span></p>
              <p><span class="drawn"></span></p>
              <p><span class="fps"></span></p>
            </div>
            <div id="canvas">
              <img src={msanImg} id="msan-image"/>
            </div>    
          </div>
        );
        }
  };
