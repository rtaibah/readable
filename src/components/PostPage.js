import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSinglePost, getComments} from '../actions/index';
import Post from './Post';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

class PostPage extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.post_id);
    this.props.getComments(this.props.match.params.post_id);
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
    let date = moment(timestamp).format('LL');
    return (
      <div className="Single-Post__wrapper">
        <div className="Post__wrapper">
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
            </ul>
          </div>
        </div>
        <div className="Comments__wrapper">
          <h5>comments</h5>
          <ul className="Comments_list">
            {this.props.comments.map(comment => (
              <li key={comment.id} className="Single-comment">
                <ul className="Single-comment__metadata">
                  <li className="Single-comment__vote">{comment.voteScore}</li>
                  <li className="Single-comment__author">{comment.author}</li>
                  <li className="Single-comment__timestamp">
                    {comment.timestamp}
                  </li>
                </ul>
                <div className="Single-comment__body">{comment.body}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.Posts,
    comments: _.values(state.Comments),
  };
}

export default connect(mapStateToProps, {getSinglePost, getComments})(PostPage);
