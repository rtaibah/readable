import React, {Component} from 'react';
import logo from '../logo.svg';
import * as ReadableAPI from '../utils/api';
import './App.css';

class App extends Component {
  state = {
    categories: [],
    posts: [],
  };

  componenetDidMount() {
    ReadableAPI.getCategories().then(response =>
      this.setState({categories: response}),
    );

    ReadableAPI.getPosts().then(posts => this.setState(posts));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
