import React, {Component} from 'react';
import {connect} from 'react-redux';
import {upVotePost} from '../actions';

class Post extends Component {
  componentDidMount() {}

  render() {
    return (
      <li key={this.props.id} className="Post__wrapper">
        <div className="Post__header">
          <ul className="Post__vote">
            <li className="Post__upvote">^</li>
            <li>
              <p className="Post__score">{this.props.voteScore}</p>
            </li>
            <li className="Post__downvote">^</li>
          </ul>
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
  // Read postId prop passed down from parent
  const postId = ownProps.postId;
  let {Posts} = state;
  return Posts.find(post => post.id === postId);
}

function mapDispatchToProps(dispatch) {
  return {
    upVotePost: () => dispatch(upVotePost()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
