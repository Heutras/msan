import React from 'react';
import { saveAs } from "file-saver";
import '../styles/Button.scss';
export default class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.saveFile = this.saveFile.bind(this);
    }
    saveFile = () => {
      saveAs(
        "https://en.unesco.org/inclusivepolicylab/sites/default/files/dummy-pdf_2.pdf",
        "example.pdf"
      );
    };
    render() {
        return (
              <button className="button-box type1" onClick={this.saveFile}>
                  {this.props.content}
              </button>    
        );
        }
  };