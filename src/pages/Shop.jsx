import "../assets/styles/shop.css";
import shopFilterIcon from "../assets/images/shop__filter-icon.svg";
import shopElement from "../assets/images/shop__element-icon.svg";
import shopViewList from "../assets/images/shop__view-list.svg";
import ourProducts1 from "../assets/images/our-products1.png";
import ourProducts2 from "../assets/images/our-products2.png";
import ourProducts3 from "../assets/images/our-products3.png";
import ourProducts4 from "../assets/images/our-products4.png";
import ourProducts5 from "../assets/images/our-products5.png";
import ourProducts6 from "../assets/images/our-products6.png";
import ourProducts7 from "../assets/images/our-products7.png";
import ourProducts8 from "../assets/images/our-products8.png";
import ProductCart from "../components/ProductCart";
function Shop() {
  return (
    <main className="shop">
      <div className="shop__first-block">
        <div className="shop__first-block__element">
          <p>Shop</p>
          <p>
            <strong>Home &gt;</strong>
            Shop
          </p>
        </div>
      </div>
      <div className="shop__filter">
        <div className="shop__filter__wrapper">
          <div>
            <figure style={{ display: "flex", alignItems: "flex-end" }}>
              <img
                src={shopFilterIcon}
                alt="image"
                width="19.05px"
                height={"16.67px"}
                style={{ marginRight: "16px" }}
              />
              <figcaption style={{ marginBottom: "-6px", fontSize: "20px" }}>
                Filter
              </figcaption>
            </figure>
          </div>
          <div>
            <img src={shopElement} alt="image" />
          </div>
          <div>
            <img src={shopViewList} alt="image" />
          </div>
          <div className="shop__filter-line" style={{ height: "1px" }}></div>
          <div style={{ marginTop: "4px" }}>
            <p>Showing 1–16 of 32 results</p>
          </div>
        </div>
      </div>
      <div className="shop__second-block">
        <ProductCart
          title="Syltherine"
          description="Stylish cafe chair"
          imgPath={ourProducts1}
          price="Rp 2.500.000"
          discountPrice="Rp 3.500.000"
        />
        <ProductCart
          title="Leviosa"
          description="Stylish cafe chair"
          imgPath={ourProducts2}
          price="Rp 2.500.000"
        />
        <ProductCart
          title="Lolito"
          description="Luxury big sofa"
          imgPath={ourProducts3}
          price="Rp 7.000.000"
          discountPrice="Rp 14.000.000"
        />
        <ProductCart
          title="Respira"
          description="Outdoor bar table and stool"
          imgPath={ourProducts4}
          price="Rp 500.000"
        />
        <ProductCart
          title="Grifo"
          description="Night lamp"
          imgPath={ourProducts5}
          price="Rp 1.500.000"
        />
        <ProductCart
          title="Muggo"
          description="Small mug"
          imgPath={ourProducts6}
          price="Rp 150.000"
        />
        <ProductCart
          title="Pingky"
          description="Cute bed set"
          imgPath={ourProducts7}
          price="Rp 7.000.000"
          discountPrice="Rp 14.000.000"
        />
        <ProductCart
          title="Potty"
          description="Minimalist flower pot"
          imgPath={ourProducts8}
          price="Rp 500.000"
        />
        <ProductCart
          title="Syltherine"
          description="Stylish cafe chair"
          imgPath={ourProducts1}
          price="Rp 2.500.000"
          discountPrice="Rp 3.500.000"
        />
        <ProductCart
          title="Leviosa"
          description="Stylish cafe chair"
          imgPath={ourProducts2}
          price="Rp 2.500.000"
        />
        <ProductCart
          title="Lolito"
          description="Luxury big sofa"
          imgPath={ourProducts3}
          price="Rp 7.000.000"
          discountPrice="Rp 14.000.000"
        />
        <ProductCart
          title="Respira"
          description="Outdoor bar table and stool"
          imgPath={ourProducts4}
          price="Rp 500.000"
        />
         <ProductCart
          title="Syltherine"
          description="Stylish cafe chair"
          imgPath={ourProducts1}
          price="Rp 2.500.000"
          discountPrice="Rp 3.500.000"
        />
        <ProductCart
          title="Leviosa"
          description="Stylish cafe chair"
          imgPath={ourProducts2}
          price="Rp 2.500.000"
        />
        <ProductCart
          title="Lolito"
          description="Luxury big sofa"
          imgPath={ourProducts3}
          price="Rp 7.000.000"
          discountPrice="Rp 14.000.000"
        />
        <ProductCart
          title="Respira"
          description="Outdoor bar table and stool"
          imgPath={ourProducts4}
          price="Rp 500.000"
        />

      </div>
    </main>
  );
}

export default Shop;
