import React from "react";
import ClickedCart from "./ClickedCart";
import Sidebar from "./Sidebar";
import '../../../../styles/Header.css';

const Header = () => {
  return (
    <div className="header-content">
      <Sidebar />
      <ClickedCart />
      <p>Heloo bangladesh</p>
    </div>
  );
};

export default Header;
