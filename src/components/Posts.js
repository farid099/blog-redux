import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import UserDetail from './UserDetail';
import {fetchPosts} from '../redux/posts/postActions'

function Posts(props) {

  useEffect(() => {
    fetchPosts()  
  }, [])

const renderedList = props.posts.map(post => {
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>1</h2>
                <p>2</p>
              </div>
              {/* <UserDetail></UserDetail> */}
              {/* <UserHeader userId={post.userId} /> */}
            </div>
          </div>
        );
      });


    return <div className="ui relaxed divided list">{renderedList}</div>;
    
}

const mapStateToProps = (state) =>{
  console.log(state.fetchPostReducer);
  return {
      posts : state.fetchPostReducer
  }
}

export default connect(mapStateToProps,{fetchPosts})(Posts)