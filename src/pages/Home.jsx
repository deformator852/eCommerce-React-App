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
import HomeProductBlock from "../components/HomeProductBlok";
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
        <HomeProductBlock
          title="Syltherine"
          description="Stylish cafe chair"
          imgPath={ourProducts1}
          price="Rp 2.500.000"
          discountPrice="Rp 3.500.000"
        />
        <HomeProductBlock
          title="Leviosa"
          description="Stylish cafe chair"
          imgPath={ourProducts2}
          price="Rp 2.500.000"
        />
        <HomeProductBlock
          title="Lolito"
          description="Luxury big sofa"
          imgPath={ourProducts3}
          price="Rp 7.000.000"
          discountPrice="Rp 14.000.000"
        />
        <HomeProductBlock
          title="Respira"
          description="Outdoor bar table and stool"
          imgPath={ourProducts4}
          price="Rp 500.000"
        />
        <HomeProductBlock
          title="Grifo"
          description="Night lamp"
          imgPath={ourProducts5}
          price="Rp 1.500.000"
        />
        <HomeProductBlock
          title="Muggo"
          description="Small mug"
          imgPath={ourProducts6}
          price="Rp 150.000"
        />
        <HomeProductBlock
          title="Pingky"
          description="Cute bed set"
          imgPath={ourProducts7}
          price="Rp 7.000.000"
          discountPrice="Rp 14.000.000"
        />
        <HomeProductBlock
          title="Potty"
          description="Minimalist flower pot"
          imgPath={ourProducts8}
          price="Rp 500.000"
        />
        <div className="home__show-more">Show More</div>
      </div>
    </main>
  );
}

export default Home;
