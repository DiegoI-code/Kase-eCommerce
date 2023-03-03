import React from "react";
import { Link } from "react-router-dom";

const Item = (data) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 product-wap rounded-0">
          <div className="card rounded-0">
            <img
              className="card-img rounded-0 img-fluid"
              src={data.prods.Img}
              alt={""}
            />
            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"></div>
          </div>
          <div className="card-body">
            <Link
              to={`/ShopDetail/${data.prods.id}`}
              className="h3 text-decoration-none"
            >
              {data.prods.id}
            </Link>
            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
              <Link
                to={`/ShopDetail/${data.prods.id}`}
                className="h3 text-decoration-none"
              >
                <li>Ir al producto</li>
              </Link>
              <li className="pt-2"></li>
            </ul>
            <ul className="list-unstyled d-flex justify-content-center mb-1">
              <li>
                <i className="text-warning fa fa-star"></i>
                <i className="text-warning fa fa-star"></i>
                <i className="text-warning fa fa-star"></i>
                <i className="text-warning fa fa-star"></i>
                <i className="text-muted fa fa-star"></i>
              </li>
            </ul>
            <p className="text-center mb-0">$ {data.prods.Precio}.-</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
