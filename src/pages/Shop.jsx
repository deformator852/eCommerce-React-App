import "../assets/styles/shop.css";
import shopFilterIcon from "../assets/images/shop__filter-icon.svg";
import shopElement from "../assets/images/shop__element-icon.svg";
import shopViewList from "../assets/images/shop__view-list.svg";
function Shop() {
  return (
    <div className="shop">
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
            <figure style={{ display: "flex",alignItems:"flex-end"}}>
              <img
                src={shopFilterIcon}
                alt="image"
                width="19.05px"
                height={"16.67px"}
                style={{ marginRight: "16px" }}
              />
              <figcaption style={{marginBottom:"-6px",fontSize:"20px"}}>Filter</figcaption>
            </figure>
          </div>
          <div>
            <img src={shopElement} alt="image" />
          </div>
          <div>
            <img src={shopViewList} alt="image" />
          </div>
          <div className="shop__filter-line" style={{height:"1px"}}></div>
          <div style={{marginTop:"4px"}}>
            <p>Showing 1–16 of 32 results</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
