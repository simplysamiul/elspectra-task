import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import catService from "../../../../api/cat.service";
import { addToCart, showCat } from "../../../../redux/actions/cartAction";
import "../../../../styles/Sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  // get all cats list
  const getAllCats = async () => {
    setLoading(true);
    const res = await catService.getAllCats();
    try {
      if (res.IsSuccess) {
        setLoading(false);
        setCats(res.data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useMemo(() => {
    getAllCats();
  }, []);
  const allCats = useSelector((state) => state?.cart);
  const dispatch = useDispatch();

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <ul>
          {cats.map((cat) => {
            return (
              <li key={cat._id} onClick={() => dispatch(showCat(cat))}>
                {cat.cat_name}
                {allCats.map((item) =>
                  item._id === cat._id ? `(${item.qty})` : ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
