import { Button, TextField, ThemeProvider } from "@mui/material";
import { LNAIThemeConfig } from "../../ThemeConfig";
import {
  FooterAiImage,
  GetStarted,
  Gmail,
  Instagram,
  LNAILogoTp,
  Linkedin,
  Phone,
  Twitter,
  Whatsapp,
} from "../../assets";

import "./LNAIFooter.css";

const LNAIFooter = ({ getStarted }: { getStarted: boolean }) => {
  return (
    <div
      className="lnai-landing-view-footer-container"
      style={{ marginTop: getStarted ? "10rem" : "10rem" }}
    >
      <div className="lnai-landing-view-get-started-container">
        {getStarted && (
          <div className="lnai-landing-view-get-started-content">
            <div className="lnai-landing-view-get-started-content-text-items">
              <div className="lnai-landing-view-get-started-content-text">
                <h3>Get started Today</h3>
                <p>
                  Leganiti always helps you to stay on top of your compliance
                  requirements and avoid any potential penalties and fines.
                </p>
              </div>
              <div className="lnai-landing-view-get-started-content-input-fields">
                <ThemeProvider theme={LNAIThemeConfig}>
                  <TextField
                    id="email-address"
                    color="primary"
                    placeholder="Email Address"
                    variant="outlined"
                    type="text"
                    required
                    className="lnai-footer-input-field"
                    size="small"
                  />
                  <TextField
                    id="contact-number"
                    color="primary"
                    type="text"
                    required
                    placeholder="Contact Number"
                    variant="outlined"
                    className="lnai-footer-input-field"
                    size="small"
                  />
                  <Button size="small" variant="LNAIDarkPurpleGradientLight">
                    Send Message
                  </Button>
                </ThemeProvider>
              </div>
            </div>
            <img
              src={GetStarted}
              alt="GetStarted"
              height={250}
              width={175}
              className="lnai-landing-view-get-started-content-image"
            />
          </div>
        )}

        <div
          className="lnai-landing-view-about-us-container"
          style={{ padding: getStarted ? "120px 20px 20px 20px" : "10px" }}
        >
          <div className="lnai-landing-view-about-us-content-container">
            <div className="lnai-landing-view-about-us-content-address-item">
              <img src={LNAILogoTp} alt="LNAI LOGO" height={75} width={100} />
              <p>
                Address : <br /> Legalniti workspace,5th floor PG block
                BMSCE,Bull temple road,Basavanagudi Bangalore - 560019.
              </p>
              <div className="lnai-landing-view-about-us-content-address-contact-container">
                <img
                  src={Gmail}
                  alt="g-mail"
                  height={20}
                  width={20}
                  className="lnai-landing-view-about-us-content-address-contact-icon"
                />
                contact@legalniti.com
              </div>

              <div className="lnai-landing-view-about-us-content-address-contact-container">
                <img
                  src={Phone}
                  alt="Phone"
                  height={20}
                  width={20}
                  className="lnai-landing-view-about-us-content-address-contact-icon"
                />
                +91-9481829401
              </div>
            </div>
            <div className="lnai-landing-view-about-us-content-web-services-item">
              <h1>About Us</h1>
              <h2>Our Company</h2>
              <h2>Contact us</h2>
              <h2>Our Services</h2>
              <h2>Careers</h2>
            </div>
            <div className="lnai-landing-view-about-us-content-social-links-item">
              <h1>Social Links</h1>
              <h2>
                <img src={Whatsapp} alt="Whatsapp" height={30} width={30} />
              </h2>
              <h2>
                <img src={Instagram} alt="Instagram" height={30} width={30} />
              </h2>
              <h2>
                <img src={Linkedin} alt="Linkedin" height={30} width={30} />
              </h2>
              <h2>
                <img src={Twitter} alt="Twitter" height={30} width={30} />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <img
        src={FooterAiImage}
        alt="FooterAiImage"
        height={300}
        width={250}
        className="lnai-landing-view-about-us-ai-logo"
      />
    </div>
  );
};

export default LNAIFooter;
