import React from 'react';
import '../styles/Sec.css';
export default class Sec extends React.Component {
    constructor(props) {
      super(props);
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
            if(this.props.banner === undefined && this.props.footer === undefined){
            /* Sec content*/
            }
            else if(this.props.banner === undefined){
                /*sec content + footer */
            }
            else if(this.props.footer === undefined){
                /*banner + sec content */
                return (
                    <div>
                        <h1>AAAAAAAAA</h1>
                        {this.props.banner}
                        {this.props.main}
                    </div>
                    );
            }
            else{
                /*banner + sec content + footer */
            }
            /* footer + banner position absolue / sec content fullfill the remaining space */
        }
    
      }
  };
