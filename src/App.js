import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import FontSize from './components/FontSize';
import Reset from './components/Reset';
import Result from './components/Result';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize : 12
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }
  onSetColor(params){
    this.setState({
        color: params
    });
  }
  onChangeSize(value){
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 40){
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  }
  onSettingDefault(value){
    if(value){
      this.setState({
        color: 'red',
        fontSize : 12
      })
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand"> Setting Color Text</a>
          </div>
        </nav>
        <div className="container mt-50">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <ColorPicker color={ this.state.color } onReciveColor={ this.onSetColor }/>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <FontSize 
                         fontSize={ this.state.fontSize }
                         onChangeSize={ this.onChangeSize }
                         />
              <Reset onSettingDefault={ this.onSettingDefault}/>
            </div>
            <Result color={ this.state.color } fontSize={ this.state.fontSize }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
