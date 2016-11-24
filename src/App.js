import React, { Component } from 'react';
import KanbanBoardContainer from './KanbanBoardContainer';
import 'babel-polyfill';

import './App.css';

class App extends Component {
  render() {
    return (
      <KanbanBoardContainer />
    );
  }
}

export default App;
