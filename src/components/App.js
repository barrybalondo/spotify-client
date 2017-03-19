import React, { Component } from 'react';
import '../../style/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Spotify Client</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
