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

interface ItemListProps {
  items: string[];
}
const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <Box className="more-services-text">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Box>
  );
};
const BussinessSetupService = () => {
  const itemList: string[] = [
    "Private Limited Company",
    "Limited Liaibility Partnership",
    "Sole Proprietorhsip",
    "One Person Company",
    "Section 8 Company",
    "Partnership Firm",
    "Nidhi Company",
    "Producer Company",
    "Startup India Registration",
  ];
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
          <Box sx={{ display: "flex" }}>
            <Box className="about-service-innerbox-more-related-services">
              <Button>
                <img
                  src={Registration} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  Bussiness <br /> Registration
                </Typography>
              </Button>
              <Button>
                <img
                  src={Company} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  Company Name <br />
                  Search
                </Typography>
              </Button>
              <Button>
                <img
                  src={Business} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  License & <br /> Registration
                </Typography>
              </Button>
              <Button>
                <img
                  src={EditProperty} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Change <br /> Company Name
                </Typography>
              </Button>
            </Box>
            {/* <Box className="more-services">
              <Typography variant="h4">More Services</Typography>
              <ItemList items={itemList} />
            </Box> */}
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
