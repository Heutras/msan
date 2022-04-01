import React from 'react';
import '../styles/Button.scss';
export default class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
            
                <button class="button-box type1">
                    {this.props.content}
                </button>
            
        );
        }
  };
