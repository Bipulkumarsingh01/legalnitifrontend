import { Box, Typography, Button } from "@mui/material";
import {
  trademark_icon,
  documentation_icon,
  TaxandCompilance_services,
  Copyright,
  Concept,
  Design,
  Documents,
  bussinesssetup_icon,
  TrademarkandIp_service,
} from "../../../assets";
import "./TaxandCompilance.css";
const TaxandCompilance = () => {
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
          <Box className="about-service-innerbox-more-related-services wrapper-box-taxandcompilance">
            <Button>
              <img
                src={trademark_icon} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"}>
                GST & other <br /> Indirect Tax
              </Typography>
            </Button>
            <Button>
              <img
                src={Copyright} // Replace with the actual path to your image
                alt="Internet icon"
              />
              <Typography component={"p"}>
                Changes in <br /> Pvt. Limited Company
              </Typography>
            </Button>
            <Button>
              <img
                src={Concept} // Replace with the actual path to your image
                alt="Leave icon"
              />
              <Typography component={"p"}>Changes in LLP</Typography>
            </Button>
            <Button>
              <img
                src={Documents} // Replace with the actual path to your image
                alt="Documents Icon"
              />
              <Typography component={"p"} variant="subtitle1">
                Labour Compliance
              </Typography>
            </Button>
            <Button>
              <img
                src={Design} // Replace with the actual path to your image
                alt="Design Icon"
              />
              <Typography component={"p"} variant="subtitle1">
                Accounting & Tax
              </Typography>
            </Button>
            <Button>
              <img
                src={Design} // Replace with the actual path to your image
                alt="Design Icon"
              />
              <Typography component={"p"} variant="subtitle1">
                Convert you <br /> Business
              </Typography>
            </Button>
            <Button>
              <img
                src={Design} // Replace with the actual path to your image
                alt="Design Icon"
              />
              <Typography component={"p"} variant="subtitle1">
                Design <br /> Registration
              </Typography>
            </Button>
          </Box>
          <Box></Box>
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
                Documentation
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TaxandCompilance;
