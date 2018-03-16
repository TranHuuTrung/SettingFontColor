import React, { Component } from 'react';
class FontSize extends Component {
  changeFontSize(value){
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
        </div>
        <div className="panel-body">
          <button className="btn btn-success" onClick={() => this.changeFontSize(-1) } >Giảm</button>
          <button className="btn btn-success" onClick={ () => this.changeFontSize(1) } >Tăng</button>
        </div>
      </div>
    );
  }
}

export default FontSize;
