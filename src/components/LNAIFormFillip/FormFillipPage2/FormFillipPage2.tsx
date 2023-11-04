import { Button, FormControl, FormLabel, Tooltip } from "@mui/material";
import "./FormFillipPage2.css";
import { GoBack, GoNext, Upload } from "../../../assets";
import LNAIPartnersMainForm from "../LNAIPartnersMainForm/LNAIPartnersMainForm";

const FormFillipPage2 = ({
  fillipFormData,
  setFillipFormData,
  selectedFormPageTab,
  setSelectedFormPageTab,
}: any) => {
  console.log(
    fillipFormData,
    setFillipFormData,
    selectedFormPageTab,
    setSelectedFormPageTab
  );
  return (
    <div>
      <div className="lnai-partners-main-form-content-container">
        <FormControl variant="standard" style={{ width: "100%" }}>
          <div className="lnai-form-fillip-form-item-container">
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

          <div>
            <LNAIPartnersMainForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
            />
          </div>
        </FormControl>
      </div>

      <div className="form-fillip-page2-go-next-container">
        <Tooltip
          title="Go Next"
          onClick={() => {
            let prevSelectedFormPageTabData = { ...selectedFormPageTab };

            prevSelectedFormPageTabData["right"] = true;
            prevSelectedFormPageTabData["left"] = false;
            prevSelectedFormPageTabData["center"] = false;
            setSelectedFormPageTab(prevSelectedFormPageTabData);
          }}
        >
          <img src={GoNext} alt="GoNext" height={40} width={40} />
        </Tooltip>
      </div>

      <div className="form-fillip-page2-go-back-container">
        <Tooltip
          title="Go Back"
          onClick={() => {
            let prevSelectedFormPageTabData = { ...selectedFormPageTab };

            prevSelectedFormPageTabData["left"] = true;
            prevSelectedFormPageTabData["center"] = false;
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

export default FormFillipPage2;
