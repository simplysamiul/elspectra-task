import React from "react";
import "../../../styles/Cat.css";

const Cat = ({ cat }) => {
  const { cat_name, cat_nick_name, cat_pic } = cat;
  return (
    <div className="cat-container">
      <div className="cat-img">
        <img src={cat_pic} alt="Cat img not found..!" />
      </div>
      <div className="cat-details">
        <h3>{cat_name}</h3>
        <p>Nick_Name : {cat_nick_name}</p>
        <p>Age_Category : Infant</p>
      </div>
    </div>
  );
};

export default Cat;
