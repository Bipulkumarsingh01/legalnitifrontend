import { CartBag } from "../../assets";
import { LNAICartTable, LNAIFooter, LNAINavBar } from "../../components";

import "./LNAICartPage.css";

const LNAICartPage = () => {
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
      </div>
      <div style={{ width: "100%" }}>
        <LNAIFooter getStarted={false} />
      </div>
    </div>
  );
};

export default LNAICartPage;
