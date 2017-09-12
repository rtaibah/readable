import React, {Component} from 'react';
import {getPosts, getCategories} from '../actions';
import {connect} from 'react-redux';
import Post from './Post.js';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    let {Posts, Categories} = this.props;
    return (
      <div>
        <div className="Posts__controls">
          <a className="Posts__new" href="#">
            Submit
          </a>
          <ul className="Posts__categories">
            {Categories.map(category => (
              <li key={category.name}>
                <a href={category.path}>{category.name}</a>
              </li>
            ))}
          </ul>
          <ul className="Posts__filter">
            <li>filter by</li>
            <li>date</li>
            <li>vote</li>
          </ul>
        </div>
        <div className="Posts__wrapper">
          <ul>{Posts.map(post => <Post key={post.id} postId={post.id} />)}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {Posts, Categories} = state;
  return {
    Posts,
    Categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts()),
    getCategories: () => dispatch(getCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
