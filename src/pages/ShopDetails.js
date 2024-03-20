import React from "react";
import TopBarStart from "../componenets/shared/topbar_start.js";
import Navbar from "../componenets/ShopDetails/Navbar";
import Detail from "../componenets/ShopDetails/Details";
import Products from "../componenets/ShopDetails/Products";
import Footer from "../componenets/shared/Footer";

function Main() {
  return (
    <div>
      {/* <TopBarStart /> */}
      {/* <Navbar /> */}
      <Detail />
      <Products />
      <Footer />
    </div>
  );
}

export default Main;
