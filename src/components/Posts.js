import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post.js';
import _ from 'lodash';

class Posts extends Component {
  render() {
    let {Posts, Categories, router} = this.props;
    let url = router.location.pathname;
    url = url.substring(1);



    return (
      <div>
        <div className="Posts__controls">
          <a className="Posts__new" href="/submit">
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
          <ul>
            {url.length > 0 &&
              Posts.filter(post => post.category === url).map(post => (
                <Post key={post.id} postId={post.id} />
              ))}
            {url.length === 0 &&
              Posts.map(post => <Post key={post.id} postId={post.id} />)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {router, Posts, Categories} = state;
  return {
    Posts: _.map(Posts),
    Categories,
    router,
  };
}

export default connect(mapStateToProps)(Posts);
