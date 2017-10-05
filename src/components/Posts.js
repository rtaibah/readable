import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts, getCategories, filterBy} from '../actions/index';
import _ from 'lodash';
import Post from './Post';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    let {posts, categories} = this.props;
    return (
      <div>
        <div className="Posts__controls">
          <a className="Posts__new" href="/submit">
            Submit
          </a>
          <ul className="Posts__categories">
            <li>
              <a href="/">all</a>
            </li>
            {categories.map(category => (
              <li key={category.name}>
                <a href={category.path}>{category.name}</a>
              </li>
            ))}
          </ul>
          <ul className="Posts__filter">
            <li>filter by</li>
            <li>
              <a
                href="#"
                onClick={() => this.props.filterBy({option: 'timestamp'})}>
                date
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => this.props.filterBy({option: 'voteScore'})}>
                vote
              </a>
            </li>
          </ul>
        </div>
        <ul className="Posts">
          {this.props.match.params.category ? (
            posts
              .filter(
                post => post.category === this.props.match.params.category,
              )
              .map(post => <Post key={post.id} postId={post.id} />)
          ) : (
            posts.map(post => <Post key={post.id} postId={post.id} />)
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: _.values(state.Posts),
    categories: _.values(state.Categories),
  };
}

export default connect(mapStateToProps, {getPosts, getCategories, filterBy})(
  Posts,
);
