import React from "react";
import {
  BsCart,
  BsFacebook,
  BsHeart,
  BsInstagram,
  BsLinkedin,
  BsSearch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { get } from "../../Services/mongodb";
import { useState } from "react";
import Categories from "../Main/Categories";

function TopBarStart({ getDataFun }) {
  const [searchtxt, setSearch] = useState();

  return (
    <div className='container-fluid'>
      <div className='row py-2 px-xl-5' id='main-component-topbar-contactus'>
        <div className='col-lg-6 d-none d-lg-block'>
          <div className='d-inline-flex align-items-center'>
            <a className='text-dark' href=''>
              FAQs
            </a>
            <span className='text-muted px-2'>|</span>
            <a className='text-dark' href=''>
              Help
            </a>
            <span className='text-muted px-2'>|</span>
            <a className='text-dark' href=''>
              Support
            </a>
          </div>
        </div>
        <div className='col-lg-6 text-center text-lg-right'>
          <div className='d-inline-flex align-items-center'>
            <a className='text-dark px-2' href=''>
              <BsFacebook />
            </a>
            <a className='text-dark px-2' href=''>
              <BsTwitter />
            </a>
            <a className='text-dark px-2' href=''>
              <BsLinkedin />
            </a>
            <a className='text-dark px-2' href=''>
              <BsInstagram />
            </a>
            <a className='text-dark pl-2' href=''>
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className='row align-items-center py-3 px-xl-5'>
        <div className='col-lg-3 d-none d-lg-block'>
          <a href='' className='text-decoration-none'>
            <h1 className='m-0 display-5 font-weight-semi-bold primary-color'>
              <span className='primary-color font-weight-bold border px-3 mr-1'>
                S
              </span>
              martBuy
            </h1>
          </a>
        </div>
        <div className='col-lg-6 col-6 text-left'>
          <form action=''>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search for products'
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <div className='input-group-append'>
                <span className='input-group-text bg-transparent text-primary'>
                  <BsSearch
                    className='primary-color'
                    onClick={() => {
                      getDataFun(searchtxt);
                    }}
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className='col-lg-3 col-6 text-right'>
          <a href='' className='btn border'>
            <BsHeart />
            <span className='badge text-black'>0</span>
          </a>
          <a href='' className='btn border'>
            <BsCart />
            <span className='badge text-black'>0</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBarStart;
