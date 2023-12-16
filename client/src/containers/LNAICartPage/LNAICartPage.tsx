import { useNavigate } from "react-router-dom";
import { CartBag } from "../../assets";
import { LNAICartTable, LNAIFooter, LNAINavBar } from "../../components";

import "./LNAICartPage.css";

const LNAICartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="lnai-cart-page-main-container">
      <LNAINavBar />
      <div className="lnai-cart-page-container">
        <div className="lnai-cart-page-heading-container">
          <img src={CartBag} alt="CartBag" height={30} width={35} />
          <h1 className="lnai-cart-page-heading lnai-primary-heading">
            My Cart
          </h1>
        </div>
        <div>
          <LNAICartTable />
        </div>
        <div className="lnai-cart-page-more-queries-container" onClick={() => {
          navigate('/contact')
        }}>
          <h1>For more queries <span className="lnai-primary-heading">Contact Us</span></h1>
        </div>
      </div>
      <div style={{ width: "100%", paddingTop: "5%" }}>
        <LNAIFooter getStarted={false} />
      </div>
    </div>
  );
};

export default LNAICartPage;
