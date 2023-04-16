import React from 'react';
import { Link } from 'react-router-dom';
import './StarProduct.css';


const StarProduct = ( {headline  , image ,  price , period , stars  } ) => {
  return (
    <div>
  <Link to={`/${headline}`} >
    <div className="single_new_product">
        <img src={image} alt="" className="product_img" />

        <div className="body_padding">
        <h1 className="product_headline"> {headline} </h1>

        <div className="flex_space">
          <div className="d-flex-c stars_div">
          <img src="/images/icons/star_package.png" alt="" className="icon_small" />
          <p className="product_stars"> {stars}  </p>
          </div>
          <div className="time_div d-flex-c">
          <img src="/images/icons/time_package.png" alt="" className="icon_small" />
          <p className="product_time"> {period}  </p>
          </div>
        
        </div>

       
        <h6 className="product_price"> SAR {price} </h6>
        </div>
    

      <div className="star_postion">
      <img src="/images/icons/star.png" alt="" className="icon_small" />

      </div>
     

    </div>
</Link>
    </div>
  )
}

export default StarProduct