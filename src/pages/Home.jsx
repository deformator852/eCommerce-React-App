import "../assets/styles/home.css";
import dining from "../assets/images/browse-the-range_dining.png";
import living from "../assets/images/browse-the-range_living.png";
import bedroom from "../assets/images/browse-the-range_bedroom.png";
import ourProducts1 from "../assets/images/our-products1.png";
import ourProducts2 from "../assets/images/our-products2.png";
import ourProducts3 from "../assets/images/our-products3.png";
import ourProducts4 from "../assets/images/our-products4.png";
import ourProducts5 from "../assets/images/our-products5.png";
import ourProducts6 from "../assets/images/our-products6.png";
import ourProducts7 from "../assets/images/our-products7.png";
import ourProducts8 from "../assets/images/our-products8.png";
import ProductCart from "../components/ProductCart";
import ShareBlockElement from "../components/ShareBlockElement";
import share1 from "../assets/images/share1.png";
import share2 from "../assets/images/share2.png";
import share3 from "../assets/images/share3.png";
import share4 from "../assets/images/share4.png";
import share5 from "../assets/images/share5.png";
import share6 from "../assets/images/share6.png";
import share7 from "../assets/images/share7.png";
import share8 from "../assets/images/share8.png";
import share9 from "../assets/images/share9.png";
// import Slider from "../components/Slider";
function Home() {
  return (
    <main className="home">
      <div className="home__scandinavian-mockup">
        <div className="home__scandinavian-mockup__section">
          <div>
            <p className="new-arriwal-paragraph">New Arrival</p>
            <p className="discover-our-paragraph">
              Discover Our New Collection
            </p>
            <p className="scandinavian-mockup-paragraph-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="buy-now-button">BUY NOW</div>
          </div>
        </div>
      </div>
      <div className="home__browse-the-range__block">
        <div>
          <p className="home__browse-the-range__block__title">
            Browse The Range
          </p>
          <p className="home__browse-the-range__block__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="home__browse-the-range__section">
          <div className="home__browse-the-range__element">
            <img src={dining} alt="" />
            <p>Dinning</p>
          </div>
          <div className="home__browse-the-range__element">
            <img src={living} alt="" />
            <p>Living</p>
          </div>
          <div className="home__browse-the-range__element">
            <img src={bedroom} alt="" />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
      <div className="home__our-products__block">
        <p className="home__our-products__block__title">Our Products</p>
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
        <div className="home__show-more">Show More</div>
      </div>
      {
        /*
      <div className="inspiration">
        <div className="inspiration__block__first">
          <p>50+ Beatiful rooms inspiration</p>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <div className="inspiration__block__first__explore-more">
            Explore more
          </div>
        </div>
        <div className="inspiration__block__second">
          <Slider />
        </div>
      </div>
      */
      }
      <div className="share__block">
        <ShareBlockElement image = {share1}className="share__block__element__1" />
        <ShareBlockElement image = {share2}className="share__block__element__2" />
        <ShareBlockElement image = {share3} className="share__block__element__3" />
        <ShareBlockElement image = {share4} className="share__block__element__4" />
        <ShareBlockElement image = {share5} className="share__block__element__5" />
        <ShareBlockElement image = {share6} className="share__block__element__6" />
        <ShareBlockElement image = {share7} className="share__block__element__7" />
        <ShareBlockElement image = {share8} className="share__block__element__8" />
        <ShareBlockElement image = {share9} className="share__block__element__9" />
      </div>
    </main>
  );
}

export default Home;
