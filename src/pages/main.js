import React from "react";
import TopBarStart from "../componenets/shared/topbar_start";
import Hero from "../componenets/Main/Hero.js";
import Featured_Start from "../componenets/Main/Featured_Start.js";
import Offers from "../componenets/Main/offers.js";
import Products from "../componenets/Main/Products.js";
import Subscribe from "../componenets/Main/Subscribe.js";
import Vendor from "../componenets/Main/Vendor.js";
import Footer from "../componenets/shared/Footer.js";
import Categories from "../componenets/Main/Categories.js";
import Products2 from "../componenets/Main/Products2.js";
import { Button } from "bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { get, getDataByCategory } from "../Services/mongodb";

function Main() {
  const [useData, setData] = useState();
  const [isSearched, setSearch] = useState(false);

  const getData = async (searchtxt) => {
    const result = await get();
    if (searchtxt) {
      const filtered = [];
      let rex = new RegExp(searchtxt.toLowerCase());
      for (let i = 0; i < result.length; i++) {
        if (rex.test(result[i].title.toLowerCase())) {
          filtered.push(result[i]);
        }
      }
      setSearch(true);
      setData(filtered);
    } else {
      setSearch(false);
      setData(result);
    }
  };

  const getByCategory = async (cat) => {
    const result = await getDataByCategory(cat);
    setSearch(true);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);
  if (useData) {
    return (
      <div>
        <TopBarStart getDataFun={getData} />
        {!isSearched && (
          <>
            <Hero category_data_fun={getByCategory} />
            <Featured_Start />
          </>
        )}
        <Categories data={useData} limit={!isSearched} />

        {!isSearched && (
          <>
            <Offers />
            {/* <Products /> */}
            {/* <Subscribe /> */}
            {/* <Products2 /> */}
            <Vendor />
          </>
        )}
        <Footer />
      </div>
    );
  } else {
    return null;
  }
}

export default Main;
