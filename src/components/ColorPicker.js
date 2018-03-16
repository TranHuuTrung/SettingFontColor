import React, { Component } from 'react';
class ColorPicker extends Component {

    constructor(props){
      super(props);
      this.state = {
         colors : ['red', 'green', 'blue', 'yellow', '#ccc']
      }
      this.showColor = this.showColor.bind(this);
    }

    showColor(value){
       return {
          backgroundColor: value
       }
    }
    setActiveColor(color){
       this.props.onReciveColor(color);
    }
    render() {

      var elmColors = this.state.colors.map((color, index) => {
         return   <span 
                      key= { index } 
                      style={ this.showColor(color) }
                      className={ this.props.color === color ? 'active' : ''}
                      onClick={ () => this.setActiveColor(color) } //ham co truyen tham so
                  ></span> //goi ham show color ra
      })

      return (
         <div className="panel panel-primary">
            <div className="panel-heading">
               <h3 className="panel-title">Color Picker</h3>
            </div>
            <div className="panel-body">
               { elmColors }
               <hr/>
            </div>
         </div>
      );
  }
}

export default ColorPicker;
