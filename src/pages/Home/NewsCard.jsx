import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {title, thumbnail_url, details} = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
      <figure>
        <img
         src={thumbnail_url}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
          {
            details.length > 200 ? <p>{details.slice(200)} <Link className="text-blue-600 font-bold">Read More..</Link> </p>
            :
            <p>{details}</p>
          }
      </div>
    </div>
  );
};

export default NewsCard;
