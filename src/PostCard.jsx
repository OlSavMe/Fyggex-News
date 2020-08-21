import React from "react";
import ReactHtmlParser, { processNodes } from "react-html-parser";
import ImgContainer from "./ImgContainer";
import moment from "moment";

const PostCard = ({ post }) => {
  const title = post.title.rendered;
  const content = post.excerpt.rendered;
  const id = post.featured_media;
  const date = post.date;

  const transform = (node, index) => {
    if (
      (node.type === "tag" && node.name === "b") ||
      (node.type === "tag" && node.name === "strong") ||
      (node.type === "tag" && node.name === "em")
    ) {
      return <p key={index}>{processNodes(node.children, transform)}</p>;
    }
  };

  const options = {
    decodeEntities: true,
    transform,
  };

  return (
    <section className="card">
      <h3>{moment(date).format("dddd, MMMM Do YYYY")}</h3>
      <h2>{ReactHtmlParser(title)}</h2>
      <p>{ReactHtmlParser(content, options)}</p>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 2rem 1rem", color: "black" }}
      >
        Read more...
      </a>
      <ImgContainer id={id} />
    </section>
  );
};

export default PostCard;
