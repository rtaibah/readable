import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSinglePost} from '../actions/index';
import Post from './Post';

class PostPage extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.post_id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>this is a postpage</h1>
        <Post postId={this.props.Posts.id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Posts: state.Posts,
  };
}

export default connect(mapStateToProps, {getSinglePost})(PostPage);
