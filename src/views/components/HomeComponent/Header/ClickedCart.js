import React from "react";
import { useSelector } from "react-redux";
import '../../../../styles/ClickedCart.css';

const ClickedCart = () => {
  const clickedCat = useSelector((state) => state?.showCart[0]);

  return (
    <>
      {clickedCat ? (
        <div>
          <div className="clicked-cat-img">
            <img src={clickedCat?.cat_pic} alt="Img nott found ...!" />
          </div>
          <div className="clicked-cat-content">
            <h3>{clickedCat?.cat_name}</h3>
            <p>Nick_Name : {clickedCat?.cat_nick_name}</p>
            <p>Age_Category : Infant</p>
          </div>
        </div>
      ): <h1 className="notiffy-text">Please Select a Cat</h1>}
    </>
  );
};

export default ClickedCart;
