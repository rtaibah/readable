import React, {Component} from 'react';
import logo from '../logo.svg';
import * as ReadableAPI from '../utils/api';
import './App.css';

class App extends Component {
  state = {
    categories: [],
    posts: [],
    catPosts: [],
    singlePost: [],
    singlePostComments: [],
    commentDetails: [],
  };

  componentDidMount() {
    // QUICK and DIRTY testing for API calls
    //ReadableAPI.getCategories().then(categories => this.setState({categories}));
    //ReadableAPI.getPosts().then(posts => this.setState({posts}));
    //ReadableAPI.getCategoryPosts('redux').then(catPosts =>
    //  this.setState({catPosts}),
    //);
    //ReadableAPI.getSinglePost('6ni6ok3ym7mf1p33lnez').then(singlePost =>
    //  this.setState({singlePost}),
    //);
    //ReadableAPI.getComments('8xf0y6ziyjabvozdd253nd').then(singlePostComments =>
    //  this.setState({singlePostComments}),
    //);
    //ReadableAPI.commentDetails(
    //  '894tuq4ut84ut8v4t8wun89g',
    //).then(commentDetails => this.setState({commentDetails}));
    //ReadableAPI.newPost({
    //  id: Date.now(),
    //  title: 'It worked! 3',
    //  body: 'Hello from my JS code!',
    //  voteScore: 1,
    //  deleted: false,
    //});
    //ReadableAPI.votePost({option: 'downVote'}, '8xf0y6ziyjabvozdd253nd');
    //ReadableAPI.voteComment({option: 'downVote'}, '1504309199720');
    //ReadableAPI.newComment({
    //  timestamp: Date.now(),
    //  body: 'new comment',
    //  owner: 'thingone',
    //  parentId: '6ni6ok3ym7mf1p33lnez',
    //  id: Date.now(),
    //});
    //ReadableAPI.editPost(
    //  {title: 'new title', body: 'new body'},
    //  '8xf0y6ziyjabvozdd253nd',
    //);
    //ReadableAPI.editComment(
    //  {body: 'new comment', timestamp: Date.now()},
    //  '894tuq4ut84ut8v4t8wun89g',
    //);
    //ReadableAPI.deletePost('8xf0y6ziyjabvozdd253nd');
    //ReadableAPI.deleteComment('894tuq4ut84ut8v4t8wun89g');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.categories.map(category => (
            <li key={category.name}>{category.name}</li>
          ))}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
