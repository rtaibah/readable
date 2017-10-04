import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';
import _ from 'lodash';
import Post from './Post';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <ul className="Posts">
        {this.props.posts.map(post => (
          <li key={post.id} className="Post__wrapper">
            <Post postId={post.id} />
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {posts: _.values(state.Posts)};
}

export default connect(mapStateToProps, {getPosts})(Posts);
