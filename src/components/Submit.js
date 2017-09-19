import React, {Component} from 'react';
import {connect} from 'react-redux';

class Submit extends Component {
  render() {
    return <div>I am a submit page</div>;
  }
}

export default connect()(Submit);
