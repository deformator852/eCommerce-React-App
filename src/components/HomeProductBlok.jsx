import { useState } from "react";
import share from "../assets/images/share.svg";
import compare from "../assets/images/compare.svg";
import like from "../assets/images/like.svg";
function HomeProductBlock(props) {
  const [currentProduct, setCurrentProduct] = useState(false);
  const handlerProductOnMouseEnter = () => {
    setCurrentProduct(true);
  };
  const handlerProductOnMouseLeave = () => {
    setCurrentProduct(false);
  };
  const featuredProduct = (
    <div
      className="wrapper"
      onMouseEnter={handlerProductOnMouseEnter}
      onMouseLeave={handlerProductOnMouseLeave}
    >
      <div className="featured-product">
      </div>
      <div>
        <div className="add-to-cart">Add to cart</div>
      </div>
      <div className="features-product">
        <div className="features-product__item">
          <img src={share} />
          <p>Share</p>
        </div>
        <div className="features-product__item">
          <img src={compare} />
          <p>Compare</p>
        </div>
        <div className="features-product__item">
          <img src={like} />
          <p>Like</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="home__our-products__block__element">
      {currentProduct ? featuredProduct : null}
      <div
        className="home__our-products__block__element__subelement"
        onMouseEnter={handlerProductOnMouseEnter}
        onMouseLeave={handlerProductOnMouseLeave}
      >
        <img src={props.imgPath} alt="" />
        <div className="home__our-products__block__element__subelement__product">
          <p className="product__title">{props.title}</p>
          <p className="product__description">{props.description}</p>
          <div>
            <p className="product__price">{props.price}</p>
            {props.discountPrice
              ? <p className="product__discount-price">{props.discountPrice}</p>
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductBlock;
