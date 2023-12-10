import { Box, Typography, Button } from "@mui/material";
import {
  ServicesBussinessSetup,
  EditProperty,
  Registration,
  Company,
  Business,
  TrademarkandIp_service,
} from "../../../assets";
import { documentation_icon, taxcompilation_icon } from "../../../assets";
import "./BussinessSetupService.css";
import { useState } from "react";
import { itemListdata } from "../ItemsData";
interface ItemListProps {
  items: string[];
}
const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <Box className="more-services-text">
      {items.map((item, index) => (
        <Box key={index}>{item}</Box>
      ))}
    </Box>
  );
};
const BussinessSetupService = () => {
  const [moreService, setMoreServices] = useState<string[]>([]);
  const [ismoreservices, setIsmoreServices] = useState(false);
  const onclickHandler = (itemsvalue: any) => {
    setMoreServices(itemsvalue);
    setIsmoreServices(!ismoreservices);
  };
  return (
    <Box className="lnai-bussiness-setupservice-mainBox">
      <Box className="lnai-bussiness-setupservice-innerBox1">
        <Box className="upperbox-bussiness-setupservice">
          <Box>
            <img
              src={ServicesBussinessSetup} // Replace with the actual path to your image
              alt="Image of Service bussiness us page"
            />
          </Box>
          <Box className="upperbox-rightbox-bussiness-setupservice">
            <Typography
              component={"h2"}
              variant="h2"
              className="lnai-landing-page-ai-solutions-heading-span"
            >
              Business Setup
            </Typography>
            <Typography component={"h5"} variant="h5">
              Are you an aspiring entrepreneur <br /> looking to establish your
              own venture? <br /> Look no further! Our website offers a <br />
              wide range of professional services <br /> tailored to meet your
              business needs
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
            No matter your choice, we assist you in navigating the legalities
            and paperwork <br /> involved. Our team is well-versed in Startup
            India Registration, ensuring you <br /> access the incentives and
            support available to innovative startups
          </Typography>
          <Box className="about-page-busines-setup-more-services">
            <Box className="about-service-innerbox-more-related-services ">
              <Button
                onClick={() =>
                  onclickHandler(itemListdata.bussinessRegistration)
                }
              >
                <img
                  src={Registration} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  Bussiness <br /> Registration
                </Typography>
              </Button>
              <Button
                onClick={() => onclickHandler(itemListdata.companynamesearch)}
              >
                <img
                  src={Company} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  Company Name <br />
                  Search
                </Typography>
              </Button>
              <Button
                onClick={() =>
                  onclickHandler(itemListdata.licenseandregistration)
                }
              >
                <img
                  src={Business} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  License & <br /> Registration
                </Typography>
              </Button>
              <Button
                onClick={() => onclickHandler(itemListdata.changecompanyname)}
              >
                <img
                  src={EditProperty} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Change <br /> Company Name
                </Typography>
              </Button>
            </Box>
            <Box
              className="more-services"
              sx={{
                display: ismoreservices ? "" : "none",
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
                src={TrademarkandIp_service} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"}>Trademark & IP</Typography>
            </Button>
            <Button>
              <img
                src={taxcompilation_icon} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"}>Tax & Compliance</Typography>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BussinessSetupService;
