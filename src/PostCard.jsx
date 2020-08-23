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

  const formatText = (e) => {
    const eventText = e + " . . .";
    return eventText;
  };

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
    >
      <ImgContainer id={id} title={title} />
      <div className="info">
        <h3>{moment(date).format("dddd, MMMM Do YYYY")}</h3>
        <p>{ReactHtmlParser(formatText(content.substring(0, 150)))}</p>
      </div>
    </a>
  );
};

export default PostCard;
