import React, { Component } from 'react';
class Reset extends Component {
  onReset = () =>{
    this.props.onSettingDefault(true);
  }
  render() {
    return (
      <button className="btn btn-primary" onClick={ this.onReset}>Reset</button>
    );
  }
}

export default Reset;
