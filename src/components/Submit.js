import React, {Component} from 'react';
import {connect} from 'react-redux';

class Submit extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1>
            <a href="/">READABLE</a>
          </h1>
        </div>
        <div className="Submit__wrapper">I will submit shit here</div>
      </div>
    );
  }
}

export default connect()(Submit);
