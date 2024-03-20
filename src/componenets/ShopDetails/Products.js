import { React, useEffect, useState } from "react";
import { get } from "../../Services/mongodb";
import { Link } from "react-router-dom";
import { Navigate_to, RoutePaths } from "../../xnavigate";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const getData = async () => {
    const result = await get();
    setData(result);
  };
  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <div className='container-fluid py-5'>
        <div className='text-center mb-4'>
          <h2 className='section-title px-5'>
            <span className='px-2'>You May Also Like</span>
          </h2>
        </div>
        <div className='row px-xl-5'>
          <div className='col'>
            <div className='d-flex justify-content-center'>
              {Array.from({ length: 5 }).map((_, index) => (
                <div className='card product-item border-0 m-2' key={index}>
                  <div className='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                    <img
                      className='img-fluid w-100'
                      src={data[index].pic}
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                  <div className='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                    <h6 className='text-truncate mb-3'>{data[index].title}</h6>
                    <div className='d-flex justify-content-center'>
                      <h6>Rs: {data[index].price}</h6>
                      {/* <h6 className='text-muted ml-2'>
                        <del>$123.00</del>
                      </h6> */}
                    </div>
                  </div>
                  <div className='card-footer d-flex justify-content-between bg-light border'>
                    <button
                      onClick={() => {
                        Navigate_to(
                          navigate,
                          RoutePaths.SHOP_DETAILS,
                          data[index]._id
                        );
                        window.location.reload();
                      }}
                      className='btn btn-sm text-dark p-0'
                    >
                      View Detail
                    </button>
                    <a href='' className='btn btn-sm text-dark p-0'>
                      <i className='fas fa-shopping-cart text-primary mr-1'></i>
                      Add To Favourites
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Products;
