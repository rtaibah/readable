import React, {Component} from 'react';
import {connect} from 'react-redux';
import {votePost} from '../actions';
import {bindActionCreators} from 'redux';

class Post extends Component {
  render() {
    let {
      id,
      votePost,
      voteScore,
      title,
      timestamp,
      author,
      category,
    } = this.props;

    return (
      <li key={id} className="Post__wrapper">
        <div className="Post__header">
          <ul className="Post__vote">
            <li
              onClick={() => votePost({option: 'upVote'}, id)}
              className="Post__upvote">
              ^
            </li>
            <li>
              <p className="Post__score">{voteScore}</p>
            </li>
            <li
              className="Post__downvote"
              onClick={() => votePost({option: 'downVote'}, id)}>
              ^
            </li>
          </ul>
          <h5 className="Post__title">{title}</h5>
        </div>
        <ul className="Post__info">
          <li>submitted on {timestamp}</li>
          <li> by {author}</li>
          <li> to {category}</li>
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

const mapDispatchToProps = dispatch => ({
  votePost: (option, id) => dispatch(votePost(option, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
