import React, { useMemo, useState } from "react";
import CatService from "../../../api/cat.service";
import Cat from "./Cat";
import '../../../styles/CatList.css';

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  // get all cats list
  const getAllCats = async () => {
    setLoading(true);
    const res = await CatService.getAllCats();
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
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
          <div className="cats-container">
            <h2>Cat Image Gallery</h2>
          <div className="cats-content">
            {cats.map((cat) => (
              <Cat key={cat._id} cat={cat} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CatList;
