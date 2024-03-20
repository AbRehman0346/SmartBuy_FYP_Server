import React from "react";
import Navbar_Links from "../shared/Navbar";

function Navbar() {
  return (
    <div className='container-fluid mb-5'>
      <div className='row border-top px-xl-5'>
        <div className='col-lg-3 d-none d-lg-block'>
          <a
            className='btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100'
            data-toggle='collapse'
            href='#navbar-vertical'
            style={{ height: "65px", marginTop: "-1px", padding: "0px 30px" }}
          >
            <h6 className='m-0'>Categories</h6>
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
              <div className='nav-item dropdown'>
                <a href='#' className='nav-link' data-toggle='dropdown'>
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
              <a href='' className='nav-item nav-link'>
                Shirts
              </a>
              <a href='' className='nav-item nav-link'>
                Jeans
              </a>
              <a href='' className='nav-item nav-link'>
                Swimwear
              </a>
              <a href='' className='nav-item nav-link'>
                Sleepwear
              </a>
              <a href='' className='nav-item nav-link'>
                Sportswear
              </a>
              <a href='' className='nav-item nav-link'>
                Jumpsuits
              </a>
              <a href='' className='nav-item nav-link'>
                Blazers
              </a>
              <a href='' className='nav-item nav-link'>
                Jackets
              </a>
              <a href='' className='nav-item nav-link'>
                Shoes
              </a>
            </div>
          </nav>
        </div>
        <div className='col-lg-9'>
          <nav className='navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0'>
            <a href='' className='text-decoration-none d-block d-lg-none'>
              <h1 className='m-0 display-5 font-weight-semi-bold'>
                <span className='text-primary font-weight-bold border px-3 mr-1'>
                  E
                </span>
                Shopper
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
            <div
              className='collapse navbar-collapse justify-content-between border-top'
              id='navbarCollapse'
            >
              <Navbar_Links />
            </div>
          </nav>

          <div className='container-fluid bg-secondary mb-5'>
            <div
              className='d-flex flex-column align-items-center justify-content-center'
              style={{ minHeight: "300px" }}
            >
              <h1 className='font-weight-semi-bold text-uppercase mb-3'>
                SHOP DETAILS
              </h1>
              <div className='d-inline-flex'>
                <p className='m-0'>
                  <a href=''>Home</a>
                </p>
                <p className='m-0 px-2'>-</p>
                <p className='m-0'>Shop Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;