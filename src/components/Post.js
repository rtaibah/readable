import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getComments, submitVote} from '../actions/index';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import moment from 'moment';

class Post extends Component {
  componentDidMount() {
    this.props.getComments(this.props.singlePost.id);
  }

  render() {
    const {
      title,
      voteScore,
      author,
      category,
      id,
      timestamp,
    } = this.props.singlePost;
    let commentCount = this.props.comments.filter(
      comment => comment.parentId === this.props.postId,
    );
    let date = moment(timestamp).format('LL');
    return (
      <li className="Post__wrapper">
        <div className="Post">
          <div className="Post__header">
            <ul className="Post__vote">
              <li
                className="Post__upvote"
                onClick={() =>
                  this.props.submitVote({option: 'upVote', postId: id})}>
                ^
              </li>
              <li>
                <p className="Post__score">{voteScore}</p>
              </li>
              <li
                className="Post__downvote"
                onClick={() =>
                  this.props.submitVote({option: 'downVote', postId: id})}>
                ^
              </li>
            </ul>
            <Link to={`/${category}/${id}`}>
              <h5 className="Post__title">{title}</h5>
            </Link>
          </div>
          <ul className="Post__info">
            <li>submitted on {date}</li>
            <li> by {author}</li>
            <li> to {category}</li>
            <li className="Post__comment-length">
              {commentCount.length} comments
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

function mapStateToProps({Posts, Comments}, ownProps) {
  return {
    singlePost: Posts[ownProps.postId],
    comments: _.values(Comments),
  };
}

export default connect(mapStateToProps, {getComments, submitVote})(Post);
