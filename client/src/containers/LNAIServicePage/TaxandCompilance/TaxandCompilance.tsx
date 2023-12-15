import { Box, Typography, Button } from "@mui/material";
import {
  documentation_icon,
  TaxandCompilance_services,
  bussinesssetup_icon,
  TrademarkandIp_service,
  Company_taxAndCompilance,
  Handshake_taxandCompilance,
  MandatoryAnnualFilling,
  Accounting,
  HardWorking,
  Estimate,
  Business_taxAndCompilance,
} from "../../../assets";
import "./TaxandCompilance.css";
import { ItemList } from "../BussinessSetupService/BussinessSetupService";
import { useState } from "react";
import { itemListdata } from "../ItemsData";
const TaxandCompilance = () => {
  const [moreService, setMoreServices] = useState<string[]>([]);
  const [ismoreservices, setIsmoreServices] = useState(false);
  const onclickHandler = (itemsvalue: any) => {
    setMoreServices(itemsvalue);
    // setIsmoreServices(!ismoreservices);
    setIsmoreServices(true);
  };
  return (
    <Box className="lnai-bussiness-setupservice-mainBox">
      <Box className="lnai-bussiness-setupservice-innerBox1">
        <Box className="upperbox-bussiness-setupservice">
          <Box>
            <img
              src={TaxandCompilance_services} // Replace with the actual path to your image
              alt="Image of Service bussiness us page"
            />
          </Box>
          <Box className="upperbox-rightbox-bussiness-setupservice">
            <Typography
              component={"h2"}
              variant="h2"
              className="lnai-landing-page-ai-solutions-heading-span"
            >
              Tax & Compliance
            </Typography>
            <Typography
              component={"h5"}
              variant="h5"
              sx={{ textAlign: "center" }}
            >
              Discover a world of efficiency with our <br /> comprehensive range
              of services. From hassle-
              <br />
              free GST Registration, Filing, and Advisory to <br /> expertly
              managing Directors, Capital, and
              <br />
              Company Changes, we have got you covered.
            </Typography>
          </Box>
        </Box>
        <Box className="about-service-bussiness-setupservice">
          <Typography variant="h3" component={"h2"}>
            About this{" "}
            <span className="lnai-landing-page-ai-solutions-heading-span">
              Service
            </span>
          </Typography>
          <Typography component={"p"} variant="h6" sx={{ textAlign: "center" }}>
            Discover a world of efficiency with our comprehensive range of
            services. From hassle-free GST <br /> Registration, Filing, and
            Advisory to expertly managing Directors, Capital, and Company <br />{" "}
            Changes, we have got you covered.Maximize your business's potential
            while we take care of <br /> your tax and compliance needs. Unlock
            new horizons of success with our exceptional services.
          </Typography>
          <Box className="about-page-trademarkandIp-setup-more-services">
            <Box className="about-service-innerbox-more-related-services wrapper-box-taxandcompilance">
              <Button onClick={() => onclickHandler(itemListdata.trademark)}>
                <img
                  src={Accounting} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  GST & other <br /> Indirect Tax
                </Typography>
              </Button>
              <Button
                onClick={() =>
                  onclickHandler(itemListdata.changeincompanylimited)
                }
              >
                <img
                  src={Company_taxAndCompilance} // Replace with the actual path to your image
                  alt="Internet icon"
                />
                <Typography component={"p"}>
                  Changes in <br /> Pvt. Limited Company
                </Typography>
              </Button>
              <Button onClick={() => onclickHandler(itemListdata.changeinllp)}>
                <img
                  src={Handshake_taxandCompilance} // Replace with the actual path to your image
                  alt="Leave icon"
                />
                <Typography component={"p"}>Changes in LLP</Typography>
              </Button>
              <Button
                onClick={() =>
                  onclickHandler(itemListdata.mandatoryannualfilling)
                }
              >
                <img
                  src={MandatoryAnnualFilling} // Replace with the actual path to your image
                  alt="Documents Icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Mandatory <br /> Annual Filings
                </Typography>
              </Button>
              <Button
                onClick={() => onclickHandler(itemListdata.labourcompilance)}
              >
                <img
                  src={HardWorking} // Replace with the actual path to your image
                  alt="Design Icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Labour <br /> Compliance
                </Typography>
              </Button>
              <Button
                onClick={() => onclickHandler(itemListdata.accountingAndTax)}
              >
                <img
                  src={Estimate} // Replace with the actual path to your image
                  alt="Design Icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Accounting & Tax
                </Typography>
              </Button>
              <Button
                onClick={() =>
                  onclickHandler(itemListdata.convertyourbussiness)
                }
              >
                <img
                  src={Business_taxAndCompilance} // Replace with the actual path to your image
                  alt="Design Icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Design <br /> Registration
                </Typography>
              </Button>
            </Box>
            <Box
              className="more-services more-services-taxandcompilance"
              sx={{
                display: ismoreservices ? "" : "none",
              }}
            >
              <Typography
                variant="h4"
                className="lnai-landing-page-ai-solutions-heading-span "
              >
                More Services
              </Typography>
              <Box className="line"></Box>
              <ItemList items={moreService} />
            </Box>
          </Box>
        </Box>
        <Box className="more-related-services">
          <Typography variant="h3" component={"h2"}>
            More Related{" "}
            <span className="lnai-landing-page-ai-solutions-heading-span">
              Services
            </span>
          </Typography>
          <Box className="innerbox-more-related-services ">
            <Button>
              <img
                src={bussinesssetup_icon} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"}>Bussiness Setup</Typography>
            </Button>
            <Button>
              <img
                src={TrademarkandIp_service} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"}>Trademark & IP</Typography>
            </Button>
            <Button>
              <img
                src={documentation_icon} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"} variant="subtitle1">
                Convert you <br /> Business
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TaxandCompilance;
