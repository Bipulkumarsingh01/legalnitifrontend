import { Button, InputBase, Paper, ThemeProvider } from "@mui/material";

import { NavLink } from "react-router-dom";
import { LNAIThemeConfig } from "../../ThemeConfig";
import { LawDigitalTechniques } from "../../assets";
import "./LNAICartTable.css";

const productItems = [
  {
    key: 1,
    img: (
      <img
        src={LawDigitalTechniques}
        alt="LawDigitalTechniques"
        height={100}
        width={75}
      />
    ),
    title: "Law and Digital Techniques",
    subTitle: "Loren Ipsum",
    price: 3500,
    quantity: 1,
  },
  {
    key: 2,
    img: (
      <img
        src={LawDigitalTechniques}
        alt={"LawDigitalTechniques"}
        height={100}
        width={75}
      />
    ),
    title: "Law and Digital Techniques",
    subTitle: "Loren Ipsum  ",
    price: 3500,
    quantity: 1,
  },
];

const LNAICartTable = () => {
  return (
    <ThemeProvider theme={LNAIThemeConfig}>
      <div style={{ display: "flex", gap: "4rem", marginTop: "1rem" }}>
        <table className="lnai-cart-table">
          <tr className="lnai-cart-table-heading-row">
            <th className="lnai-cart-table-heading-row-item">Product</th>
            <th className="lnai-cart-table-heading-row-item">Price</th>
            <th className="lnai-cart-table-heading-row-item">Quantity</th>
            <th className="lnai-cart-table-heading-row-item">Subtotal</th>
          </tr>
          {productItems.map((item: any) => (
            <tr key={item.key} className="lnai-cart-table-items-data-row">
              <td className="lnai-cart-table-items-data-cell">
                <div className="lnai-cart-table-product-column-main-container">
                  <div className="lnai-cart-table-product-column-content-container">
                    <div>{item.img}</div>
                    <div className="lnai-cart-table-product-column-title-container">
                      <h4>{item.title}</h4>
                      <p>{item.subTitle}</p>
                    </div>
                  </div>
                  <div className="lnai-cart-table-product-column-action-buttons-container">
                    <Button variant="LNAIPlainButton">Remove</Button>
                    <Button variant="LNAIPlainButton">Move to wishlist</Button>
                  </div>
                </div>
              </td>
              <td className="lnai-cart-table-items-data-cell">{item.price}</td>
              <td className="lnai-cart-table-items-data-cell">
                {item.quantity}
              </td>
              <td className="lnai-cart-table-items-data-cell">{item.price}</td>
            </tr>
          ))}
        </table>
        <div className="lnai-cart-total-container">
          <div className="lnai-cart-total-content-container">
            <h3 className="lnai-cart-total-heading">Coupons</h3>
            <Paper
              component="form"
              sx={{
                p: "0",
                borderRadius: "var(--lnai-primary-border-radius)",
                display: "flex",
                alignItems: "center",
                width: 325,
                border: "1px solid black",
                boxShadow: "none",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter Coupon Code"
                inputProps={{ "aria-label": "enter coupon code" }}
              />
              {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
              <Button
                variant="LNAIPrimaryButtonDensed"
                className="lnai-cart-total-coupon-code-submit-button"
              >
                Submit
              </Button>
            </Paper>
            <p className="lnai-cart-total-container-offer-text">
              <NavLink
                className="lnai-primary-heading"
                to="/accounts?source=signin"
                style={{ fontWeight: "600" }}
              >
                Login
              </NavLink>{" "}
              to get upto &#8377;200 OFF on first quote
            </p>
            <table className="lnai-cart-total-table">
              <tr>
                <th colSpan={2} className="lnai-cart-total-table-heading">
                  Cart Total (2 Items)
                </th>
              </tr>
              <tr>
                <td>Total MRP</td>
                <td>&#8377;6500</td>
              </tr>
              <tr>
                <td>Discount on MRP</td>
                <td>- &#8377;500</td>
              </tr>
              <tr>
                <td>Coupon Discount</td>
                <td className="lnai-primary-heading">Apply Coupoun</td>
              </tr>
            </table>
          </div>
          <div>
            <table
              style={{
                borderCollapse: "separate",
                borderSpacing: "4rem 0.8rem",
                padding: "0.4rem 2rem 0.4rem 2rem",
              }}
            >
              <tr>
                <td>Total Amount</td>
                <td>&#8377;6000</td>
              </tr>
            </table>
            <div className="lnai-cart-total-get-quote-button-container">
              <Button variant="LNAIPrimaryButtonDensed">Get Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LNAICartTable;
