import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1>
            <a href="/">READABLE</a>
          </h1>
        </div>
        <div className="PostPage__wrapper">I am a post page</div>
      </div>
    );
  }
}

export default connect()(PostPage);
