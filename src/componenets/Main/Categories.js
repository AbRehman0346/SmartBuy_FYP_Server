import React from "react";
import { Link } from "react-router-dom";

import { RoutePaths } from "../../xnavigate";

function Categories({ data, limit = true }) {
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className='container-fluid pt-5'>
      <div className='row px-xl-5 pb-3'>
        {data.slice(0, limit ? 12 : data.length).map((product, index) => (
          <div key={index} className='col-md-4 mb-3'>
            <div
              className='cat-item d-flex flex-column border mb-2'
              style={{ padding: 25 }}
            >
              <Link
                to={`${RoutePaths.SHOP_DETAILS}/${product._id}`}
                // href={product.link}
                className='cat-img position-relative overflow-hidden mb-2'
                style={{ height: "200px" }} // Adjust the height as needed
              >
                <img
                  className='img-fluid'
                  src={product.pic}
                  alt={product.title}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <h5
                className='font-weight-semi-bold m-0'
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {truncateTitle(product.title, 30)}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
