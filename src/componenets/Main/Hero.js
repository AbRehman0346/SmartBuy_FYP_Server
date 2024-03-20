import React from "react";
import ControlledCarousel from "./ControledCoursel.js";
import Navbar from "../shared/Navbar.js";
import { useState, useEffect } from "react";
import { getCategories } from "../../Services/mongodb.js";
import { Link } from "react-router-dom";

function Hero({ category_data_fun }) {
  const [data, setData] = useState();

  const getData = async () => {
    const result = await getCategories();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <div className='container-fluid mb-5'>
        <div className='row border-top px-xl-5'>
          {/* Categories Section Start */}
          <div className='col-lg-3 d-none d-lg-block'>
            <a
              className='btn shadow-none d-flex align-items-center justify-content-between back-primary text-white w-100'
              data-toggle='collapse'
              href='#navbar-vertical'
              style={{ height: "65px", marginTop: "-1px", padding: "0px 30px" }}
            >
              <h6 className='m-0 text-white'>Categories</h6>
              <i className='fa fa-angle-down text-dark'></i>
            </a>
            <nav
              className='collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0'
              id='navbar-vertical'
            >
              <div
                className='navbar-nav w-100 overflow-hidden'
                style={{ height: "410px" }}
              >
                {data.map((element) => {
                  return (
                    <Link
                      onClick={() => {
                        category_data_fun(element.cat);
                      }}
                      className='nav-item nav-link hover-back-secondary hover-black'
                    >
                      {element.cat}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
          {/* Categories Section End */}
          <div className='col-lg-9'>
            <Navbar />
            {/* Carousel Start */}
            <ControlledCarousel />
            {/* Carousel End */}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Hero;
