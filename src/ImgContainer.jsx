import React, { useState, useEffect } from "react";
import Axios from "axios";
// import defaultImage from "../../assets/photos/defaultImage.png";

const ImgContainer = (props) => {
  const [pic, setPic] = useState("");
  const id = props.id;

  useEffect(() => {
    getPic(); // eslint-disable-next-line
  }, [props]);

  const getPic = async () => {
    await Axios.get(`https://fyggex.com/wp-json/wp/v2/media/${id}`).then(
      (response) => {
        setPic(response.data.source_url);
      }
    );
  };

  console.log(pic);

  return (
    <div className="img-container">
      <img src={pic} />
    </div>
  );
};

export default ImgContainer;
