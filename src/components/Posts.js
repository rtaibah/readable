import React, {Component} from 'react';
import {getPosts, getCategories} from '../actions';
import {connect} from 'react-redux';

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
              <li>
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
          <ul>
            {Posts.map(post => (
              <li className="Post__wrapper">
                <div className="Post__header">
                  <p className="Post__vote">{post.voteScore}</p>
                  <h5 className="Post__title">{post.title}</h5>
                </div>
                <ul className="Post__info">
                  <li>submitted on {post.timestamp}</li>
                  <li> by {post.author}</li>
                  <li> to {post.category}</li>
                </ul>
              </li>
            ))}
          </ul>
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
