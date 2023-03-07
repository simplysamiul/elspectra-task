import React from 'react'

const Cat = ({ cat }) => {
    const { cat_name, cat_nick_name, cat_pic} = cat;
  return (
    <div className="cat-container">
      <div className="cat-img">
        <img src={cat_pic} alt="Cat img not found..!" />
          </div>
          
    </div>
  );
}

export default Cat