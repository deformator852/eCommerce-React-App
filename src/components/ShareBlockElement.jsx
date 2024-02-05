import ourProduct from "../assets/images/our-products1.png"
function ShareBlockElement(props) {
  return <div className={props.className} style={{backgroundImage:`url('${ourProduct}')`}}></div>;
}
export default ShareBlockElement;
