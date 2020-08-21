import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PostsFetch.scss";
import PostCard from "./PostCard";

const PostsFetch = () => {
  const [posts, setPosts] = useState([]);

  const URL = "https://fyggex.com/wp-json/wp/v2/posts/?per_page=100";

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await Axios.get(URL).then((response) => {
      setPosts(response.data);
    });
  };

  return (
    <div className="container">
      <h1>Fyggex news</h1>
      <div className="inner">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
        <i aria-hidden={true}></i>
        <i aria-hidden={true}></i>
      </div>
      <footer>
        <p>Source: https://fyggex.com/</p>
      </footer>
    </div>
  );
};

export default PostsFetch;
