import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, showCat } from "../../../redux/actions/cartAction";
import "../../../styles/Cat.css";

const Cat = ({ cat }) => {
  const { cat_name, cat_nick_name, cat_pic } = cat;
  const dispatch = useDispatch();
  const handelClickedCart = () => {
    dispatch(addToCart(cat));
    dispatch(showCat(cat))
  };
  return (
    <div className="cat-container">
      <div className="cat-img">
        <img
          onClick={handelClickedCart}
          src={cat_pic}
          alt="Cat img not found..!"
        />
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
