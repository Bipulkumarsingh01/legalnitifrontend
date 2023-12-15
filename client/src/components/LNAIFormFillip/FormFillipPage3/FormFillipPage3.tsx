import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import { StyledRadio } from "../../../utils";

import "./FormFillipPage3.css";
import { GoBack } from "../../../assets";

const FormFillipPage3 = ({
  fillipFormData,
  setFillipFormData,
  selectedFormPageTab,
  setSelectedFormPageTab,
  submitFillipFormHandler,
}: any) => {
  return (
    <div>
      <div className="form-fillip-page3-content-container">
        <FormControl className="form-fillip-page3-require-help-container">
          <FormLabel className="form-fillip-page3-require-help-label">
            Would you require Web Development,Pitch Deck,Notion,Investor
            proposal services post incorporation of your Company
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
            value={fillipFormData.requireHelp}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedFillipFormData = {
                ...fillipFormData,
              };
              updatedFillipFormData.requireHelp = (
                event.target as HTMLInputElement
              ).value;
              setFillipFormData(updatedFillipFormData);
            }}
          >
            <FormControlLabel
              value="yes"
              control={<StyledRadio />}
              label="YES"
            />
            <FormControlLabel value="no" control={<StyledRadio />} label="NO" />
          </RadioGroup>
        </FormControl>

        <FormControl className="form-fillip-page3-authorize-for-data-container">
          <FormLabel className="form-fillip-page3-auth-for-data-label">
            Authorize us to use your name, photograph and the name of the
            company in our website for marketing
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
            value={fillipFormData.authorizePermission}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedFillipFormData = {
                ...fillipFormData,
              };
              updatedFillipFormData.authorizePermission = (
                event.target as HTMLInputElement
              ).value;
              setFillipFormData(updatedFillipFormData);
            }}
          >
            <FormControlLabel
              value="yes"
              control={<StyledRadio />}
              label="YES"
            />
            <FormControlLabel value="no" control={<StyledRadio />} label="NO" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="form-fillip-page3-submit-button-container">
        <Button
          variant="LNAIPrimaryButton"
          color="secondary"
          onClick={submitFillipFormHandler}
        >
          Submit
        </Button>
      </div>

      <div className="form-fillip-page3-go-back-container">
        <Tooltip
          title="Go Back"
          onClick={() => {
            let prevSelectedFormPageTabData = { ...selectedFormPageTab };

            prevSelectedFormPageTabData["center"] = true;
            prevSelectedFormPageTabData["left"] = false;
            prevSelectedFormPageTabData["right"] = false;
            setSelectedFormPageTab(prevSelectedFormPageTabData);
          }}
        >
          <img src={GoBack} alt="GoBack" height={40} width={40} />
        </Tooltip>
      </div>
    </div>
  );
};

export default FormFillipPage3;
