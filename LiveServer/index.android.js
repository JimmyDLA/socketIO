
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './Components/App.jsx';

export default class LiveServer extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('LiveServer', () => LiveServer);
