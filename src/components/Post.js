import React, {Component} from 'react';
import {getPosts, getCategories} from '../actions';
import {connect} from 'react-redux';

class Post extends Component {
  componentDidMount() {}

  render() {
    return (
      <li key={this.props.id} className="Post__wrapper">
        <div className="Post__header">
          <p className="Post__vote">{this.props.voteScore}</p>
          <h5 className="Post__title">{this.props.title}</h5>
        </div>
        <ul className="Post__info">
          <li>submitted on {this.props.timestamp}</li>
          <li> by {this.props.author}</li>
          <li> to {this.props.category}</li>
        </ul>
      </li>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.postId;
  let {Posts} = state;
  console.log(postId);
  return Posts.find(post => post.id === postId);
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
