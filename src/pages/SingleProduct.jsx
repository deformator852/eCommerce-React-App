import "../assets/styles/singleproduct.css";
import arrowUp from "../assets/images/arrow-up.svg";
import sofa1 from "../assets/images/sofa1.png";
import sofa2 from "../assets/images/sofa2.png";
import sofa3 from "../assets/images/sofa3.png";
import sofa4 from "../assets/images/sofa4.png";
import sofaBig from "../assets/images/sofa-big.png";
import halfStar from "../assets/images/review-half-star.svg";
import star from "../assets/images/review-star.svg";
import twitterIcon from "../assets/images/twitter.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import facebookIcon from "../assets/images/facebook.svg";
import { useState } from "react";
function SingleProduct() {
  const [countProduct, setCountProduct] = useState(0);
  const incrementCountProduct = () => {
    setCountProduct(countProduct + 1);
  };
  const decrementCountProduct = () => {
    setCountProduct(countProduct - 1);
  };
  return (
    <div className="single-product">
      <div className="single-product__panel">
        <p>Home</p>
        <p>
          <img
            className="single-product__panel__arrow-up-first"
            src={arrowUp}
            alt="image"
          />
        </p>
        <p>Shop</p>
        <p>
          <img
            className="single-product__panel__arrow-up-second"
            src={arrowUp}
            alt="image"
          />
        </p>
        <div className="single-product-line"></div>
        <p>Leviosa</p>
      </div>
      <div className="single-product__product-info">
        <div className="single-product__product-info__first">
          <div className="single-product__product-info__first-wrapper">
            <div>
              <img src={sofa1} alt="image" />
            </div>
            <div>
              <img src={sofa2} alt="image" />
            </div>
            <div>
              <img src={sofa3} alt="image" />
            </div>
            <div>
              <img src={sofa4} alt="image" />
            </div>
          </div>
          <div className="single-product__product-info__first-wrapper2">
            <img src={sofaBig} alt="image" />
          </div>
        </div>
        <div className="single-product__product-info__second">
          <p className="single-product__product-info__second__title">
            Asgaard sofa
          </p>
          <p className="single-product__product-info__second__price">
            Rs. 250,000.00
          </p>
          <div className="single-product__product-info__reviews">
            <img src={star} alt="image" />
            <img src={star} alt="image" />
            <img src={star} alt="image" />
            <img src={star} alt="image" />
            <img src={halfStar} alt="image" />
            <div className="single-product-line reviews-line"></div>
            <p>5 Customer Review</p>
          </div>
          <p className="single-product__description">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="single-product__product-info__second__size">
            <p>Size</p>
            <div className="single-product__product-info__second__size__wrapper">
              <div className="second__size single-product__product-info__second__size__L">
                L
              </div>
              <div className="single-product__product-info__second__size__XL second__size">
                XL
              </div>
              <div className="single-product__product-info__second__size__XS second__size">
                XS
              </div>
            </div>
          </div>
          <div className="single-product__product-info__second__color">
            <p>Color</p>
            <div className="single-product__product-info__second__color__colors">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="single-product__product-info__second-add-to-cart">
            <div className="single-product__product-info__second-add-to-cart__first">
              <p onClick={decrementCountProduct}>-</p>
              <p>{countProduct}</p>
              <p onClick={incrementCountProduct}>+</p>
            </div>
            <div className="single-product__product-info__second-add-to-cart__second">
              <p>Add To Cart</p>
            </div>
            <div className="single-product__product-info__second-add-to-cart__third">
              <p>+ Compare</p>
            </div>
          </div>
          <div className="single-product__product-info__second__line"></div>
          <div className="single-product__product-info__second__meta">
            <div className="single-product__product-info__second__meta__first">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            <div className="single-product__product-info__second__meta__second">
              <p>: SS001</p>
              <p>: Sofas</p>
              <p>: Sofa, Chair, Home, Shop</p>
              <p style={{ display: "flex" }}>
                :{" "}
                <div className="single-product__socials">
                  <img src={facebookIcon} alt="image" />
                  <img src={linkedinIcon} alt="image" />
                  <img src={twitterIcon} width="20px" height="20px" alt="image" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
