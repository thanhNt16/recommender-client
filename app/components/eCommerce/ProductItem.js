import React from "react";
import {Button} from "antd";
import StarRatingComponent from "react-star-rating-component";

import IntlMessages from "../../../util/IntlMessages";

const ProductItem = ({product, grid}) => {
  const { name, description} = product;
  const starValue = Math.round(Math.floor(Math.random() * 5))
  return (
    <div className={`gx-product-item  ${grid ? 'gx-product-vertical' : 'gx-product-horizontal'}`}>
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt="Remy Sharp" src='/images/products/iPhone.jpeg'/>
          </span>
        </div>
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">
          Item {name}
          {/* <small className="gx-text-grey">{", " + variant}</small> */}
        </h3>
        <div className="ant-row-flex">
          <h4>{Math.floor(Math.random() * 100)}$ </h4>
          {/* <h5 className="gx-text-muted gx-px-2">
            <del>mrp</del>
          </h5> */}
          {/* <h5 className="gx-text-success">{offer} off</h5> */}
        </div>
        <div className="ant-row-flex gx-mb-1">
          <StarRatingComponent
            name=""
            value={starValue}
            starCount={5}
            editing={false}/>
          <strong className="gx-d-inline-block gx-ml-2">{starValue}</strong>
        </div>
        <p>{description}</p>
      </div>

      <div className="gx-product-footer">
        <Button variant="raised"><IntlMessages
          id="eCommerce.addToCart"/></Button>

        <Button type="primary"><IntlMessages id="eCommerce.readMore"/></Button>
      </div>
    </div>
  )
};

export default ProductItem;

