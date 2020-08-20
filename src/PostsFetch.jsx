import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PostsFetch.scss";
import PostCard from "./PostCard";

const PostsFetch = () => {
  const [posts, setPosts] = useState([]);

  const URL = "https://fyggex.com/wp-json/wp/v2/posts";

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await Axios.get(URL).then((response) => {
      setPosts(response.data);
    });
  };

  const formatText = (str) => {
    const eventText = str.replace(/&nbsp;/g, "");
    return eventText;
  };

  return (
    <div className="container">
      <h1>Fyggex news</h1>
      <div className="inner">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsFetch;
