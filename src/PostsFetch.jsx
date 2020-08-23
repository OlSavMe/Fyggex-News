import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PostsFetch.scss";
import PostCard from "./PostCard";
import SkeletonCard from "./SkeletonCard";

const PostsFetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagenr, setPageNr] = useState();

  const morePosts = async () => {
    await Axios.get(
      `https://fyggex.com/wp-json/wp/v2/posts?per_page=12&page=${page}`
    ).then((res) => {
      setPosts([...posts, ...res.data]);
      setLoading(false);
    });
  };

  const getPageNr = async () => {
    await Axios.get("https://fyggex.com/wp-json/wp/v2/posts?per_page=12").then(
      (res) => {
        setPageNr(res.headers["x-wp-totalpages"]);
      }
    );
  };

  useEffect(() => {
    getPageNr();
  }, []);

  useEffect(() => {
    morePosts();
  }, [page]);

  const loadPosts = () => {
    setPage(page >= 1 ? page + 1 : 1);
    setLoading(true);
  };

  return (
    <div className="container">
      <h1>Fyggex news</h1>
      <div className="inner">
        {loading && <SkeletonCard />}
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
      {page < pagenr && (
        <button className="load-more" onClick={loadPosts}>
          More news
        </button>
      )}
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
