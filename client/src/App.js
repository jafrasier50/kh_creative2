import React, { Component } from 'react';
import './App.css';
import UploadPieceView from './upload_pieces/components/View'
class App extends Component {
  render() {
    return (
      <div className="App">
      <UploadPieceView/>
      </div>
    );
  }
}

export default App;
