import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { addFormObjectStoreHandler } from "../../../actions";
import { postFormData } from "../../../axiosActions";
import { StyledRadio } from "../../../utils";

import LNAIDynamicPincode from "../LNAIDynamicPincode/LNAIDynamicPincode";
import "./FormFillipPage1.css";
import { useDispatch } from "react-redux";
import { GoBack, GoNext, Upload } from "../../../assets";

const FormFillipPage1 = ({
  fillipFormData,
  setFillipFormData,
  selectedFormPageTab,
  setSelectedFormPageTab,
}: any) => {
  const dispatch = useDispatch();
  const submitFillipFormHandler = () => {
    dispatch(addFormObjectStoreHandler("fillip", fillipFormData));
    console.log(fillipFormData);
    postFormData("fillip", fillipFormData);
  };

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
      {/* <div className="form-fillip-page1-go-next-container">
        <img src={GoNext} alt="GoNext" height={40} width={40} />
      </div> */}
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <FormControl className="form-fillip-page1-company-details-container">
          <div className="form-fillip-page1-is-name-approved-container">
            <FormLabel className="form-fillip-page1-is-name-approved-label">
              Whether name is already approved by Registrar of Companies?
            </FormLabel>
            <RadioGroup
              defaultValue=""
              name="radio-buttons-group"
              value={fillipFormData.extra.companyApprovedByRegistrar}
              onChange={companyRegisteredChangeHandler}
              className="form-fillip-page1-is-name-approved-radio-group"
            >
              <FormControlLabel
                value="yes"
                control={<StyledRadio />}
                label="YES"
              />
              <FormControlLabel
                value="no"
                control={<StyledRadio />}
                label="NO"
              />
            </RadioGroup>
          </div>

          <div>
            {fillipFormData.extra.companyApprovedByRegistrar === "yes" && (
              <FormControl
                variant="standard"
                className="form-fillip-srn-number-input-container"
              >
                <p>Service Request Number (SRN)of RUN-LLP</p>

                <TextField
                  id="outlined-controlled"
                  placeholder="Please Specify"
                  className="lnai-primary-form-input-field"
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
          </div>
        </FormControl>

        <FormControl
          variant="standard"
          className="form-fillip-page1-company-address-container"
        >
          <label>Address of registered office of LLP</label>
          <LNAIDynamicPincode
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
          />
        </FormControl>

        <FormControl variant="standard">
          <div className="form-fillip-page1-proof-office-addr-container">
            <FormLabel
              component="legend"
              className="form-fillip-page1-proof-office-addr"
            >
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
              variant="LNAIPurpleGradientLight"
              style={{ width: "fit-content" }}
              startIcon={
                <img src={Upload} alt="Upload" height={20} width={20} />
              }
            >
              Upload file
              <input type="file" hidden />
            </Button>
          </div>
        </FormControl>
      </form>

      <div className="form-fillip-page1-go-next-container">
        <Tooltip
          title="Go Next"
          onClick={() => {
            let prevSelectedFormPageTabData = { ...selectedFormPageTab };

            prevSelectedFormPageTabData["center"] = true;
            prevSelectedFormPageTabData["left"] = false;
            prevSelectedFormPageTabData["right"] = false;
            setSelectedFormPageTab(prevSelectedFormPageTabData);
          }}
        >
          <img src={GoNext} alt="GoNext" height={40} width={40} />
        </Tooltip>
      </div>
    </div>
  );
};

export default FormFillipPage1;
