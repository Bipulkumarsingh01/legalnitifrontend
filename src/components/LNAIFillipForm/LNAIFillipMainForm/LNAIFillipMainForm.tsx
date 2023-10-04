import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  styled,
} from "@mui/material";
import { IoMdCloudUpload } from "react-icons/io";
import { LNAIDynamicPincode, LNAIPartnersMainForm } from "..";
import { StyledRadio } from "../../../utils";

import "./LNAIFillipMainForm.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const LNAIFillipMainForm = ({ fillipFormData, setFillipFormData }: any) => {
  const companyRegisteredChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let updatedFillipFormData = {
      ...fillipFormData,
    };
    updatedFillipFormData.extra.companyApprovedByRegistrar = (
      event.target as HTMLInputElement
    ).value;
    setFillipFormData(updatedFillipFormData);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Whether name is already approved by Registrar of Companies?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
            value={fillipFormData.extra.companyApprovedByRegistrar}
            onChange={companyRegisteredChangeHandler}
          >
            <FormControlLabel
              value="yes"
              control={<StyledRadio />}
              label="YES"
            />
            <FormControlLabel value="no" control={<StyledRadio />} label="NO" />
          </RadioGroup>

          {fillipFormData.extra.companyApprovedByRegistrar === "yes" && (
            <FormControl variant="standard">
              <p>Service Request Number (SRN)of RUN-LLP</p>

              <TextField
                id="outlined-controlled"
                placeholder="Please Specify"
                value={fillipFormData.srn ? fillipFormData.srn : ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setFillipFormData(
                    (prevFillipFormData: typeof fillipFormData) => ({
                      ...prevFillipFormData,
                      srn: event.target.value,
                    })
                  );
                }}
              />
            </FormControl>
          )}
        </FormControl>

        <FormControl variant="standard">
          <label>Address of registered office of LLP</label>
          <LNAIDynamicPincode
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
          />
        </FormControl>

        <FormControl variant="standard">
          <div>
            <FormLabel component="legend">
              Proof of Office address along with NOC, if applicable (Conveyance
              / Lease deed/Rent Agreement along with rent receipts)
            </FormLabel>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <Button
              component="label"
              variant="contained"
              style={{ width: "fit-content" }}
              startIcon={<IoMdCloudUpload />}
            >
              Upload file
              <input type="file" hidden />
            </Button>
          </div>

          <div>
            <FormLabel component="legend">
              Copy of the utility bills (not older than two months)
            </FormLabel>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <Button
              component="label"
              variant="contained"
              style={{ width: "fit-content" }}
              startIcon={<IoMdCloudUpload />}
            >
              Upload file
              <input type="file" hidden />
            </Button>
          </div>

          <LNAIPartnersMainForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
          />
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
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

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
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
      </form>
    </div>
  );
};

export default LNAIFillipMainForm;
