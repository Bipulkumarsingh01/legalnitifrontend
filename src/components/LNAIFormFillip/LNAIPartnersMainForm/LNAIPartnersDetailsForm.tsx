import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import LNAIPartnerFormHavingDpin from "./LNAIPartnerFormHavingDpin";
import LNAIPartnerFormNotHavingDpin from "./LNAIPartnerFormNotHavingDpin";
import LNAIBodiesFormHavingDpin from "./LNAIBodiesFormHavingDpin";
import LNAIBodiesFormNotHavingDpin from "./LNAIBodiesFormNotHavingDpin";
import { useState } from "react";

const category: any = {
  indHavingDpinNumArray:
    "Particulars of individual designated partners having DIN/DPIN",
  indNotHavingDpinNumArray:
    "Particulars of individual designated partners not having DIN/DPIN",
  bodiesHavingDpinNumArray:
    "Particulars of bodies corporate and their nominees as designated partners having DIN/DPIN",
  bodiesNotHavingDpinNumArray:
    "Particulars of bodies corporate and their nominees as designated partners not having DIN/DPIN",
};

const LNAIPartnersDetailsForm = ({
  fillipFormData,
  setFillipFormData,
  selectedType,
  personNumber,
  designated,
}: any) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  console.log(expanded);

  return (
    <>
      <Accordion
        expanded={expanded === `${selectedType}`}
        onChange={handleChange(`${selectedType}`)}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {category?.[selectedType]} of Person {personNumber}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {selectedType === "indHavingDpinNumArray" && (
              <LNAIPartnerFormHavingDpin
                fillipFormData={fillipFormData}
                setFillipFormData={setFillipFormData}
                personNumber={personNumber}
                designated={designated}
              />
            )}
            {selectedType === "indNotHavingDpinNumArray" && (
              <LNAIPartnerFormNotHavingDpin
                fillipFormData={fillipFormData}
                setFillipFormData={setFillipFormData}
                personNumber={personNumber}
                designated={designated}
              />
            )}
            {selectedType === "bodiesHavingDpinNumArray" && (
              <LNAIBodiesFormHavingDpin
                fillipFormData={fillipFormData}
                setFillipFormData={setFillipFormData}
                personNumber={personNumber}
                designated={designated}
              />
            )}
            {selectedType === "bodiesNotHavingDpinNumArray" && (
              <LNAIBodiesFormNotHavingDpin
                fillipFormData={fillipFormData}
                setFillipFormData={setFillipFormData}
                personNumber={personNumber}
                designated={designated}
              />
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default LNAIPartnersDetailsForm;
