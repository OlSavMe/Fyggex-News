import React from "react";
import Skeleton from "react-loading-skeleton";
import "./PostsFetch.scss";

const SkeletonCard = () => {
  return (
    <>
      {Array(21)
        .fill()
        .map((item, index) => (
          <div
            className="card"
            key={index}
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <div>
              <Skeleton height={420} width={`100%`} />
            </div>
          </div>
        ))}
    </>
  );
};

export default SkeletonCard;
