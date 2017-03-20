import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Spotify Client</h1>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
