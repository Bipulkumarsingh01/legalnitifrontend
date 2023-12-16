import { Box, Typography, Button } from "@mui/material";
import {
  trademark_icon,
  documentation_icon,
  taxcompilation_icon,
  TrademarkandIp_service,
  Copyright,
  Concept,
  Design,
  Documents,
  bussinesssetup_icon,
} from "../../../assets";
import "./TrademarkandIp.css";
import { ItemList } from "../BussinessSetupService/BussinessSetupService";
import { useState } from "react";
import { itemListdata } from "../ItemsData";

const TrademarkandIp = () => {
  const [moreService, setMoreServices] = useState<string[]>([]);
  const [ismoreservices, setIsmoreServices] = useState(false);
  const onclickHandler = (itemsvalue: any) => {
    setMoreServices(itemsvalue);
    setIsmoreServices(true);
    // setIsmoreServices(!ismoreservices);
  };
  return (
    <Box className="lnai-bussiness-setupservice-mainBox">
      <Box className="lnai-bussiness-setupservice-innerBox1">
        <Box className="upperbox-bussiness-setupservice">
          <Box>
            <img
              src={TrademarkandIp_service} // Replace with the actual path to your image
              alt="Image of Service bussiness us page"
            />
          </Box>
          <Box className="upperbox-rightbox-bussiness-setupservice">
            <Typography
              component={"h2"}
              variant="h2"
              className="lnai-landing-page-ai-solutions-heading-span"
            >
              Trademark & IP
            </Typography>
            <Typography component={"h5"} variant="h5">
              Secure Your Intellectual Property <br /> with Our Comprehensive
              Services!
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
          <Typography component={"p"} variant="h6">
            Safeguard your brand identity by registering your trademark. Our
            experts will guide you <br /> through the process, ensuring your
            mark is protected from unauthorized use.
          </Typography>
          <Box className="about-page-trademarkandIp-setup-more-services">
            <Box className="about-service-innerbox-more-related-services wrapper-box-trademarkandip">
              <Button
                onClick={() => {
                  onclickHandler(itemListdata.trademark);
                }}
              >
                <img
                  src={trademark_icon} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>Trademark</Typography>
              </Button>
              <Button
                onClick={() => {
                  onclickHandler(itemListdata.copyright);
                }}
              >
                <img
                  src={Copyright} // Replace with the actual path to your image
                  alt="Internet icon"
                />
                <Typography component={"p"}>Copyright</Typography>
              </Button>
              <Button
                onClick={() => {
                  onclickHandler(itemListdata.patent);
                }}
              >
                <img
                  src={Concept} // Replace with the actual path to your image
                  alt="Leave icon"
                />
                <Typography component={"p"}>Patent</Typography>
              </Button>
              <Button
                onClick={() => {
                  onclickHandler(itemListdata.infrigment);
                }}
              >
                <img
                  src={Documents} // Replace with the actual path to your image
                  alt="Documents Icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Infringement
                </Typography>
              </Button>
              <Button
                onClick={() => {
                  onclickHandler(itemListdata.designregistration);
                }}
              >
                <img
                  src={Design} // Replace with the actual path to your image
                  alt="Design Icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Design <br /> Registration
                </Typography>
              </Button>
            </Box>
            <Box
              className="more-services"
              sx={{
                display: ismoreservices && moreService.length ? "" : "none",
              }}
            >
              <Typography
                variant="h4"
                className="lnai-landing-page-ai-solutions-heading-span"
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
                src={documentation_icon} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"} variant="subtitle1">
                Documentation
              </Typography>
            </Button>
            <Button>
              <img
                src={taxcompilation_icon} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"}>Tax & Compliance</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TrademarkandIp;
