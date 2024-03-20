import React from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../xnavigate";
import { get, getById } from "../../Services/mongodb";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0'>
      <a href='' className='text-decoration-none d-block d-lg-none'>
        <h1 className='m-0 display-5 font-weight-semi-bold'>
          <span className='text-primary font-weight-bold border px-3 mr-1'>
            S
          </span>
          <span className='font-weight-bold'>martBuy</span>
        </h1>
      </a>
      <button
        type='button'
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarCollapse'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      {/* Links Home, Shop, shop details, pages, contact */}
      <div
        className='collapse navbar-collapse justify-content-between'
        id='navbarCollapse'
      >
        <div className='navbar-nav mr-auto py-0'>
          <Link
            to={RoutePaths.ROOT}
            className='nav-item nav-link hover-back-primary hover-white'
          >
            Home
          </Link>
          {/* <Link
            to={RoutePaths.SHOP}
            className='nav-item nav-link hover-back-primary hover-white'
          >
            Shop
          </Link> */}
          <Link
            to={RoutePaths.SHOP_DETAILS}
            className='nav-item nav-link hover-back-primary hover-white'
          >
            ShopDetails
          </Link>
          <Link
            to={RoutePaths.CONTACT}
            className='nav-item nav-link hover-back-primary hover-white'
          >
            Contact
          </Link>
        </div>
        <div className='navbar-nav ml-auto py-0'>
          <Link
            to={RoutePaths.LOGIN}
            className='nav-item nav-link hover-back-primary hover-white'
          >
            Login
          </Link>
          <Link
            to={RoutePaths.REGISTER}
            className='nav-item nav-link hover-back-primary hover-white'
          >
            Register
          </Link>
        </div>
      </div>
      {/* Links end. */}
    </nav>
  );
}

export default Navbar;
