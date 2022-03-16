import React from 'react';
import '../styles/Sec.css';
export default class Sec extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        if(this.props.header === undefined)
        {
        return (
        <div className="container">
            <div className="container-item item-left" >
                {this.props.left}
            </div>
            <div className="container-item item-right">
                {this.props.right}
            </div>
        </div>
        );
        }
        else
        {
            return (
            <div>
                <h1>Alper!!!!</h1>
                {this.props.left}
            </div>
        );
        }
    
      }
  };
