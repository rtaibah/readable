import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSinglePost} from '../actions';
import {votePost} from '../actions';
import _ from 'lodash';
import moment from 'moment';

class PostPage extends Component {
  componentDidMount() {}

  render() {
    let {
      id,
      title,
      timestamp,
      author,
      category,
      voteScore,
      body,
    } = this.props.Posts;
    let {votePost} = this.props.actions;
    let date = moment.unix(timestamp).format('LL');

    return (
      <div className="App">
        <div className="App__header">
          <h1>
            <a href="/">READABLE</a>
          </h1>
        </div>
        <div className="PostPage__wrapper">
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
            <li>submitted on {date}</li>
            <li> by {author}</li>
            <li> to {category}</li>
          </ul>
        </div>
        <div className="Post__body">
          <span />
          {body}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {Posts} = state;
  return {Posts};
}

function mapDispatchToProps(dispatch, ownProps) {
  const postId = ownProps.match.params.post_id;
  return {
    actions: {
      votePost: (option, id) => dispatch(votePost(option, id)),
      getSinglePost: dispatch(getSinglePost(postId)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
