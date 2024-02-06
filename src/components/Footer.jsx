import "../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: "flex", marginTop: "48px" }}>
        <div className="footer__first__block">
          <p className="footer__block__logo">
            Funiro.
          </p>
          <p>
            400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
          </p>
        </div>
        <div className="footer__second__block">
          <ul className="block__items">
            <li>Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__third__block">
          <ul className="block__items">
            <li>Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer__fourth__block">
          <p className="newsletter">Newsletter</p>
          <div className="footer__fourth__block__subdiv">
            <p>Enter your email address</p>
            <p>SUBSCRIBE</p>
          </div>
        </div>
      </div>
      <div className="footer__line"></div>
      <p className="footer__furino-rights">2023 furino. All rights reverved</p>
    </footer>
  );
}
export default Footer;
