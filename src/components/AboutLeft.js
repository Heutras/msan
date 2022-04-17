import React from 'react';
import ParticleBackground from './particleBackground.js';
import '../styles/AboutLeft.scss';
export default class AboutLeft extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div className='AboutLeft-container'>
                <ParticleBackground/>
                <div className='AboutLeft-content'>
                </div>
            </div>
          
        );
        }
  };
