import React, { useState, useEffect } from "react";
import Axios from "axios";
import defaultImage from "./assets/default.png";
import ReactHtmlParser from "react-html-parser";

const ImgContainer = (props) => {
  const [pic, setPic] = useState("");
  let [stat, setStat] = React.useState();
  const id = props.id;
  const title = props.title;

  useEffect(() => {
    getPic(); // eslint-disable-next-line
  }, [props]);

  const getPic = async () => {
    await Axios.get(`https://fyggex.com/wp-json/wp/v2/media/${id}`).then(
      (response) => {
        console.log(response.status);
        setStat(response.status);
        setPic(response.data.media_details.sizes.medium.source_url);
      }
    );
  };

  return (
    <div className="img-container">
      {stat === 200 ? (
        <img src={pic} alt="" />
      ) : (
        <img src={defaultImage} alt="" />
      )}
      <h2>
        <span>{ReactHtmlParser(title)}</span>
      </h2>
    </div>
  );
};

export default ImgContainer;
