import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className='col-lg-3 d-none d-lg-block'>
      <Link
        className='btn shadow-none d-flex align-items-center justify-content-between back-primary w-100'
        data-toggle='collapse'
        href='#navbar-vertical'
        style={{ height: "65px", marginTop: "-1px", padding: "0px 30px" }}
      >
        <h6 className='m-0 text-white'>Categories</h6>
        <i className='fa fa-angle-down text-dark'></i>
      </Link>
      <nav
        className='collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0'
        id='navbar-vertical'
      >
        <div
          className='navbar-nav w-100 overflow-hidden'
          style={{ height: "410px" }}
        >
          <div className='nav-item dropdown'>
            <a
              href='#'
              className='nav-link hover-back-secondary hover-black'
              data-toggle='dropdown'
            >
              Dresses <i className='fa fa-angle-down float-right mt-1'></i>
            </a>
            <div className='dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0'>
              <a href='' className='dropdown-item'>
                Men's Dresses
              </a>
              <a href='' className='dropdown-item'>
                Women's Dresses
              </a>
              <a href='' className='dropdown-item'>
                Baby's Dresses
              </a>
            </div>
          </div>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Shirts
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Jeans
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Swimwear
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Sleepwear
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Sportswear
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Jumpsuits
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Blazers
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Jackets
          </a>
          <a
            href=''
            className='nav-item nav-link hover-back-secondary hover-black'
          >
            Shoes
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Categories;
