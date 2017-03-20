import React, { Component } from 'react';
import '../../style/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Spotify Client</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
