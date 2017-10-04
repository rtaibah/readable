import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
  render() {
    const {
      title,
      voteScore,
      author,
      category,
      id,
      timestamp,
    } = this.props.singlePost;
    return (
      <div className="Post">
        <div className="Post__header">
          <ul className="Post__vote">
            <li className="Post__upvote">^</li>
            <li>
              <p className="Post__score">{voteScore}</p>
            </li>
            <li className="Post__downvote">^</li>
          </ul>
          <a href="#">
            <h5 className="Post__title">{title}</h5>
          </a>
        </div>
        <ul className="Post__info">
          <li>submitted on {timestamp}</li>
          <li> by {author}</li>
          <li> to {category}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({Posts}, ownProps) {
  return {
    singlePost: Posts[ownProps.postId],
  };
}

export default connect(mapStateToProps)(Post);
