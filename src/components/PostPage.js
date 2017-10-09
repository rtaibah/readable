import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSinglePost, getComments, submitVote} from '../actions/index';
import _ from 'lodash';
import moment from 'moment';

class PostPage extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.post_id);
    this.props.getComments(this.props.match.params.post_id);
  }

  render() {
    return (
      <div className="Single-Post__wrapper">
        {this.props.singlePost ? (
          <div>
            <div className="Post__wrapper">
              <div className="Post">
                <div className="Post__header">
                  <ul className="Post__vote">
                    <li
                      className="Post__upvote"
                      onClick={() =>
                        this.props.submitVote({
                          option: 'upVote',
                          postId: this.props.singlePost.id,
                        })}>
                      ^
                    </li>
                    <li>
                      <p className="Post__score">
                        {this.props.singlePost.voteScore}
                      </p>
                    </li>
                    <li
                      className="Post__downvote"
                      onClick={() =>
                        this.props.submitVote({
                          option: 'downVote',
                          postId: this.props.singlePost.id,
                        })}>
                      ^
                    </li>
                  </ul>
                  <h5 className="Post__title">{this.props.singlePost.title}</h5>
                </div>
                <ul className="Post__info">
                  <li>
                    submitted on{' '}
                    {moment(this.props.singlePost.timestamp).format('LL')}
                  </li>
                  <li> by {this.props.singlePost.author}</li>
                  <li> to {this.props.singlePost.category}</li>
                </ul>
              </div>
            </div>
            <div className="Comments__wrapper">
              <h5>comments</h5>
              <ul className="Comments_list">
                {this.props.comments.map(comment => (
                  <li key={comment.id} className="Single-comment">
                    <ul className="Single-comment__metadata">
                      <li className="Single-comment__author">
                        {comment.author}
                      </li>
                      <li className="Single-comment__vote">
                        {comment.voteScore} points
                      </li>
                      <li className="Single-comment__timestamp">
                        {moment(comment.timestamp).format('LL')}
                      </li>
                    </ul>
                    <div className="Single-comment__body">{comment.body}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    singlePost: state.Posts[ownProps.match.params.post_id],
    //singlePost: _.values(state.Posts),
    comments: _.values(state.Comments),
  };
}

export default connect(mapStateToProps, {
  getSinglePost,
  getComments,
  submitVote,
})(PostPage);
