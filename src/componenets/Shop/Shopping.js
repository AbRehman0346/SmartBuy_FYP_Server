import React from 'react'
import ImgProduct1 from '../../img/product-1.jpg'
import ImgProduct2 from '../../img/product-2.jpg'
import ImgProduct3 from '../../img/product-3.jpg'
import ImgProduct4 from '../../img/product-4.jpg'
import ImgProduct5 from '../../img/product-5.jpg'
import ImgProduct6 from '../../img/product-6.jpg'
import ImgProduct7 from '../../img/product-7.jpg'
import ImgProduct8 from '../../img/product-8.jpg'

const products = [
  {
    id: 1,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct1,
  },
  {
    id: 2,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct2,
  },
  {
    id: 3,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct3,
  },
  {
    id: 4,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct4,
  },
  {
    id: 5,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct5,
  },
  {
    id: 6,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct6,
  },
  {
    id: 7,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct7,
  },
  {
    id: 8,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct8,
  },
  {
    id: 9,
    name: 'Colorful Stylish Shirt',
    price: 123.0,
    discountedPrice: 123.0,
    image: ImgProduct1,
  },
  // Add more products here...
]
let images = [
  ImgProduct1,
  ImgProduct2,
  ImgProduct3,
  ImgProduct4,
  ImgProduct5,
  ImgProduct6,
  ImgProduct7,
  ImgProduct8,
]

function Shopping() {
  return (
    <div className='container-fluid pt-5'>
      <div className='row px-xl-5'>
        <div className='col-lg-3 col-md-12'>
          {/* Price Filter */}
          <div className='border-bottom mb-4 pb-4'>
            <h5 className='font-weight-semi-bold mb-4'>Filter by price</h5>
            <form>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  checked
                  id='price-all'
                />
                <label class='custom-control-label' for='price-all'>
                  All Price
                </label>
                <span class='badge border font-weight-normal'>1000</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='price-1'
                />
                <label class='custom-control-label' for='price-1'>
                  $0 - $100
                </label>
                <span class='badge border font-weight-normal'>150</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='price-2'
                />
                <label class='custom-control-label' for='price-2'>
                  $100 - $200
                </label>
                <span class='badge border font-weight-normal'>295</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='price-3'
                />
                <label class='custom-control-label' for='price-3'>
                  $200 - $300
                </label>
                <span class='badge border font-weight-normal'>246</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='price-4'
                />
                <label class='custom-control-label' for='price-4'>
                  $300 - $400
                </label>
                <span class='badge border font-weight-normal'>145</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='price-5'
                />
                <label class='custom-control-label' for='price-5'>
                  $400 - $500
                </label>
                <span class='badge border font-weight-normal'>168</span>
              </div>
              {[
                'All',
                '$0 - $100',
                '$100 - $200',
                '$200 - $300',
                '$300 - $400',
                '$400 - $500',
              ].map((priceRange, index) => (
                <div
                  key={index}
                  className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'
                >
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={`price-${index}`}
                    checked={index === 0}
                  />
                  <label
                    className='custom-control-label'
                    htmlFor={`price-${index}`}
                  >
                    {priceRange} Price
                  </label>
                  <span className='badge border font-weight-normal'>1000</span>
                </div>
              ))}
            </form>
          </div>

          {/* Color Filter */}
          <div className='border-bottom mb-4 pb-4'>
            <h5 className='font-weight-semi-bold mb-4'>Filter by color</h5>
            <form>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  checked
                  id='color-all'
                />
                <label class='custom-control-label' for='price-all'>
                  All Color
                </label>
                <span class='badge border font-weight-normal'>1000</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='color-1'
                />
                <label class='custom-control-label' for='color-1'>
                  Black
                </label>
                <span class='badge border font-weight-normal'>150</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='color-2'
                />
                <label class='custom-control-label' for='color-2'>
                  White
                </label>
                <span class='badge border font-weight-normal'>295</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='color-3'
                />
                <label class='custom-control-label' for='color-3'>
                  Red
                </label>
                <span class='badge border font-weight-normal'>246</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='color-4'
                />
                <label class='custom-control-label' for='color-4'>
                  Blue
                </label>
                <span class='badge border font-weight-normal'>145</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='color-5'
                />
                <label class='custom-control-label' for='color-5'>
                  Green
                </label>
                <span class='badge border font-weight-normal'>168</span>
              </div>
              {['All Color', 'Black', 'White', 'Red', 'Blue', 'Green'].map(
                (color, index) => (
                  <div
                    key={index}
                    className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'
                  >
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id={`color-${index}`}
                      checked={index === 0}
                    />
                    <label
                      className='custom-control-label'
                      htmlFor={`color-${index}`}
                    >
                      {color}
                    </label>
                    <span className='badge border font-weight-normal'>
                      1000
                    </span>
                  </div>
                )
              )}
            </form>
          </div>

          {/* Size Filter */}
          <div className='mb-5'>
            <h5 className='font-weight-semi-bold mb-4'>Filter by size</h5>
            <form>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  checked
                  id='size-all'
                />
                <label class='custom-control-label' for='size-all'>
                  All Size
                </label>
                <span class='badge border font-weight-normal'>1000</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='size-1'
                />
                <label class='custom-control-label' for='size-1'>
                  XS
                </label>
                <span class='badge border font-weight-normal'>150</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='size-2'
                />
                <label class='custom-control-label' for='size-2'>
                  S
                </label>
                <span class='badge border font-weight-normal'>295</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='size-3'
                />
                <label class='custom-control-label' for='size-3'>
                  M
                </label>
                <span class='badge border font-weight-normal'>246</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='size-4'
                />
                <label class='custom-control-label' for='size-4'>
                  L
                </label>
                <span class='badge border font-weight-normal'>145</span>
              </div>
              <div class='custom-control custom-checkbox d-flex align-items-center justify-content-between'>
                <input
                  type='checkbox'
                  class='custom-control-input'
                  id='size-5'
                />
                <label class='custom-control-label' for='size-5'>
                  XL
                </label>
                <span class='badge border font-weight-normal'>168</span>
              </div>
              {['All Size', 'XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                <div
                  key={index}
                  className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'
                >
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={`size-${index}`}
                    checked={index === 0}
                  />
                  <label
                    className='custom-control-label'
                    htmlFor={`size-${index}`}
                  >
                    {size}
                  </label>
                  <span className='badge border font-weight-normal'>1000</span>
                </div>
              ))}
            </form>
          </div>
        </div>

        <div className='col-lg-9 col-md-12'>
          <div className='row pb-3'>
            <div className='col-12 pb-1'>
              <div className='d-flex align-items-center justify-content-between mb-4'>
                <form action=''>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search by name'
                    />
                    <div className='input-group-append'>
                      <span className='input-group-text bg-transparent text-primary'>
                        <i className='fa fa-search'></i>
                      </span>
                    </div>
                  </div>
                </form>
                <div className='dropdown ml-4'>
                  <button
                    className='btn border dropdown-toggle'
                    type='button'
                    id='triggerId'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Sort by
                  </button>
                  <div
                    className='dropdown-menu dropdown-menu-right'
                    aria-labelledby='triggerId'
                  >
                    <a className='dropdown-item' href='#'>
                      Latest
                    </a>
                    <a className='dropdown-item' href='#'>
                      Popularity
                    </a>
                    <a className='dropdown-item' href='#'>
                      Best Rating
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Cards */}
            {products.map((product) => (
              <div
                key={product.id}
                className='col-lg-4 col-md-6 col-sm-12 pb-1'
              >
                <div className='card product-item border-0 mb-4'>
                  <div className='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                    <img
                      className='img-fluid w-100'
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                    <h6 className='text-truncate mb-3'>{product.name}</h6>
                    <div className='d-flex justify-content-center'>
                      <h6>${product.price.toFixed(2)}</h6>
                      <h6 className='text-muted ml-2'>
                        <del>${product.discountedPrice.toFixed(2)}</del>
                      </h6>
                    </div>
                  </div>
                  <div className='card-footer d-flex justify-content-between bg-light border'>
                    <a href='#' className='btn btn-sm text-dark p-0'>
                      <i className='fas fa-eye text-primary mr-1'></i>View
                      Detail
                    </a>
                    <a href='#' className='btn btn-sm text-dark p-0'>
                      <i className='fas fa-shopping-cart text-primary mr-1'></i>
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className='col-12 pb-1'>
              <nav aria-label='Page navigation'>
                <ul className='pagination justify-content-center mb-3'>
                  <li className='page-item disabled'>
                    <a className='page-link' href='#' aria-label='Previous'>
                      <span aria-hidden='true'>&laquo;</span>
                      <span className='sr-only'>Previous</span>
                    </a>
                  </li>
                  <li className='page-item active'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                      <span className='sr-only'>Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shopping
