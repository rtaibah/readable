import React, {Component} from 'react';
import logo from '../logo.svg';
import Posts from './Posts.js';
import {getCategories, getPosts} from '../actions';
import '../index.css';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1>READABLE</h1>
        </div>
        <Posts />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts()),
  };
}

export default connect(null, mapDispatchToProps)(App);
