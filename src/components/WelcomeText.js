import React from 'react';
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
             <hr></hr>
             <h4>Hello, I'm</h4>
            </div>
            <p className="glitch-text" data-text="Berkay Şan">Berkay Şan</p>
            <Typewriter
            options={{
              strings: ['Hello', 'World'],
              autoStart: true,
              loop: true,
            }}
            />
            <h3>developer asdsads</h3>
            <button>Download CV</button>
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
