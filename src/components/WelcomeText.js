import React from 'react';
import Typewriter from 'typewriter-effect';
import { GlitchAnimation } from 'react-glitch-animation';
import Button from "./Button.js"
import '../styles/WelcomeText.scss';
export default class WelcomeText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
          <div className="page-welcome-text">
            <div className="container-welcome-text">
            <div className="line-text">
              <h4>Hello, I'm</h4>
            </div>
            <GlitchAnimation isActive={true} animationDurationMS={0} text="Berkay Şan"/>
            <Typewriter
            options={{
              strings: ['Teaching Asistant', 'AI Developer'],
              autoStart: true,
              loop: true,
            }}
            />
            <Button content="Download CV"/>
            </div>         
            <div className="container-background">
            <div className="row"> 
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>              
              <div className="row"> 
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
              <div className="row"> 
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
              <div className="row"> 
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
              <div className="row"> 
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
              <div className="row"> 
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <div className="loader">
                  <div className="lines"><span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        }
  };
