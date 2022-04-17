import React from 'react';
import '../styles/AboutRight.scss';
export default class AboutRight extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
          <div className="AboutRight-container">
                <h4>My Skills</h4>
                <h5 id="deep-learn">Deep Learning in Finance</h5>
                <h5 id="big-data">Big Data</h5>
                <h5 id="data-analytics">Data Analytics</h5>
                <h5 id="unreal">Unreal Engine</h5>
          </div>
        );
        }
  };
