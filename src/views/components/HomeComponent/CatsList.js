import React, { useMemo, useState } from "react";
import CatService from "../../../api/cat.service";

const CatList = () => {
  const [cats, setCats] = useState([]);
  console.log(cats)
  const getAllCats = async () => {
    const res = await CatService.getAllCats()
    try {
      if (res.IsSuccess) {
        setCats(res)
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useMemo(() => {
    getAllCats();
  }, []);
  return <div>AllCats</div>;
};

export default CatList;
