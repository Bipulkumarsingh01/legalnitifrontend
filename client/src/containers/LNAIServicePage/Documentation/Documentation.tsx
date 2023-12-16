// const Documentation = () => {
//   return <>Documentation</>;
// };
// export default Documentation;
import { Box, Typography, Button } from "@mui/material";
import {
  DocumentationServices,
  SigningADocument,
  Internet,
  Leave,
  PrivacyPolicy,
  RealEstate,
  bussinesssetup_icon,
  TrademarkandIp_service,
} from "../../../assets";
import { taxcompilation_icon } from "../../../assets";
import { ItemList } from "../BussinessSetupService/BussinessSetupService";
import { useState } from "react";
import { itemListdata } from "../ItemsData";
const TrademarkandIp = () => {
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
              src={DocumentationServices} // Replace with the actual path to your image
              alt="Documentation Services"
            />
          </Box>
          <Box className="upperbox-rightbox-bussiness-setupservice">
            <Typography
              component={"h2"}
              variant="h2"
              className="lnai-landing-page-ai-solutions-heading-span"
            >
              Documentation
            </Typography>
            <Typography component={"h5"} variant="h5">
              When it comes to protecting your business <br /> relationships,
              our comprehensive range of <br /> documentation solutions have got
              you <br /> covered.
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
            Safeguard sensitive information and maintain confidentiality with
            Non-Disclosure Agreements <br /> (NDA), ensuring that your
            proprietary knowledge and trade secrets remain secure.
          </Typography>
          <Box className="about-page-trademarkandIp-setup-more-services">
            <Box className="about-service-innerbox-more-related-services wrapper-box-trademarkandip">
              <Button
                onClick={() => onclickHandler(itemListdata.bussinesscontract)}
              >
                <img
                  src={SigningADocument} // Replace with the actual path to your image
                  alt="Signing a document icon"
                />
                <Typography component={"p"}>
                  Bussiness <br /> Contracts
                </Typography>
              </Button>
              <Button
                onClick={() => onclickHandler(itemListdata.websitepolicies)}
              >
                <img
                  src={Internet} // Replace with the actual path to your image
                  alt="Internet icon"
                />
                <Typography component={"p"}>
                  Website <br /> Policies
                </Typography>
              </Button>
              <Button onClick={() => onclickHandler(itemListdata.notice)}>
                <img
                  src={Leave} // Replace with the actual path to your image
                  alt="Leave icon"
                />
                <Typography component={"p"}>Notice</Typography>
              </Button>
              <Button onClick={() => onclickHandler(itemListdata.hrpolicies)}>
                <img
                  src={PrivacyPolicy} // Replace with the actual path to your image
                  alt="Privacy Policy icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  HR Policies
                </Typography>
              </Button>
              <Button onClick={() => onclickHandler(itemListdata.realestate)}>
                <img
                  src={RealEstate} // Replace with the actual path to your image
                  alt="Real Estate icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Real Estate
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
                src={taxcompilation_icon} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"}>Tax & Compliance</Typography>
            </Button>
            <Button>
              <img
                src={TrademarkandIp_service} // Replace with the actual path to your image
                alt="Trademark icon"
              />
              <Typography component={"p"} variant="subtitle1">
                Trademark & Ip
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TrademarkandIp;
