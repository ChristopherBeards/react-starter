import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        this.setState({
          posts: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;

    const postData = (
      <React.Fragment>
        {posts.map(post => {
          return (
            <div className="col-md-6 mb-2">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-text">{post.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );

    return <div className="row">{posts ? postData : null}</div>;
  }
}

export default Posts;
