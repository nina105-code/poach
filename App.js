import React, { Component } from 'react';
import Navigator from './routes/pageNavigator';

export default class App extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      <Navigator />
    );
  }
}