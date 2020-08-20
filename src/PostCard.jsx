import React from "react";
import ReactHtmlParser, {
  convertNodeToElement,
  processNodes,
} from "react-html-parser";

const PostCard = ({ post }) => {
  const title = post.title.rendered;
  const content = post.content.rendered;

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
      <h2>{ReactHtmlParser(title)}</h2>
      <p>{ReactHtmlParser(content, options)}</p>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "2rem", color: "black" }}
      >
        Read more...
      </a>
    </section>
  );
};

export default PostCard;
