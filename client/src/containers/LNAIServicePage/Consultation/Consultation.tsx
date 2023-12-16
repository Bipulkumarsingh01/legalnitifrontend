// const Consultation = () => {
//   return <>Consultation</>;
// };
// export default Consultation;
import { Box, Typography, Button } from "@mui/material";
import {
  EditProperty,
  Registration,
  Company,
  Business,
  TrademarkandIp_service,
  Lawyer,
  ManOfficeWorker,
  WomanOfficeWorker,
  trademark_icon,
} from "../../../assets";
import {
  documentation_icon,
  taxcompilation_icon,
  consultationMainImage,
} from "../../../assets";
import { useState } from "react";
import { itemListdata } from "../ItemsData";
interface ItemListProps {
  items: string[];
}
export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <Box className="more-services-text">
      {items.map((item, index) => (
        <Box key={index}>{item}</Box>
      ))}
    </Box>
  );
};
const Consultation = () => {
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
          <img
            src={consultationMainImage} // Replace with the actual path to your image
            alt="Image of Service bussiness us page"
          />
          <Box className="upperbox-rightbox-bussiness-setupservice">
            <Typography component={"h2"} variant="h2">
              Consultation
            </Typography>
            <Typography component={"h5"} variant="h5" sx={{ width: "50% " }}>
              Speak with our knowledgeable professionals, including experienced
              Lawyers, Chartered Accountants (CAs), Company Secretaries (CS),
              and specialized IP/Trademark Lawyers. Receive personalized
              guidance tailored to your legal and business needs. Schedule a
              consultation now!
            </Typography>
          </Box>
        </Box>
        <Box className="about-service-bussiness-setupservice">
          <Typography variant="h2" component={"h2"}>
            About this{" "}
            <span className="lnai-landing-page-ai-solutions-heading-span">
              Service
            </span>
          </Typography>
          <Typography component={"p"} variant="body1">
            Corrupti deleniti atque magnam is es et quas stias cepturi sint aete
            non provident, similique sunt dunt ut labore et dolore magnam
            aliquam quaerat Neque porro quisquam est dolorem
          </Typography>
          <Box className="about-page-busines-setup-more-services">
            <Box className="about-service-innerbox-more-related-services ">
              <Button onClick={() => onclickHandler(itemListdata.talktolawer)}>
                <img
                  src={Lawyer} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>
                  Talk to a <br /> Lawyer
                </Typography>
              </Button>
              <Button onClick={() => onclickHandler(itemListdata.talktoca)}>
                <img
                  src={ManOfficeWorker} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>Talk to a CA</Typography>
              </Button>
              <Button onClick={() => onclickHandler(itemListdata.talktocs)}>
                <img
                  src={WomanOfficeWorker} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"}>Talk to a CS</Typography>
              </Button>
              <Button
                onClick={() => onclickHandler(itemListdata.talktoidtrademark)}
              >
                <img
                  src={trademark_icon} // Replace with the actual path to your image
                  alt="Trademark icon"
                />
                <Typography component={"p"} variant="subtitle1">
                  Talk to a <br /> IP/Trademark
                </Typography>
              </Button>
            </Box>
            <Box
              className="more-services"
              sx={{
                display: ismoreservices && moreService.length ? "" : "none",
              }}
            >
              <Typography variant="h4">More Services</Typography>
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
export default Consultation;
