import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitVote} from '../actions/index';
import {Link} from 'react-router-dom';

import moment from 'moment';

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
          </ul>
        </div>
      </li>
    );
  }
}

function mapStateToProps({Posts}, ownProps) {
  console.log('this is it', Posts);
  return {
    singlePost: Posts[ownProps.postId],
  };
}

export default connect(mapStateToProps, {submitVote})(Post);
