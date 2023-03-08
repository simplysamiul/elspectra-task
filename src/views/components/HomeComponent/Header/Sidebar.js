import React, { useMemo, useState } from "react";
import catService from "../../../../api/cat.service";
import '../../../../styles/Sidebar.css';

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
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <ul>
          {cats.map((cat) => (
            <li key={cat._id}>{cat.cat_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
