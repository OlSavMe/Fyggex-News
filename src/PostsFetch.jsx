import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PostsFetch.scss";
import PostCard from "./PostCard";
import SkeletonCard from "./SkeletonCard";

const PostsFetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://fyggex.com/wp-json/wp/v2/posts/?per_page=100";

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await Axios.get(URL).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  };

  return (
    <div className="container">
      <h1>Fyggex news</h1>
      <div className="inner">
        {loading && <SkeletonCard />}
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
        <i aria-hidden={true}></i>
        <i aria-hidden={true}></i>
      </div>
      <footer>
        <p>
          Source:{" "}
          <a
            href="https://fyggex.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://fyggex.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default PostsFetch;
