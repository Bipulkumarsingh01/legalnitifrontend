import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LNAINavBar } from "..";

import FormFillipPage1 from "./FormFillipPage1/FormFillipPage1";
import Radio from "@mui/material/Radio";
import "./LNAIFormFillip.css";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormFillipPage2 from "./FormFillipPage2/FormFillipPage2";
import FormFillipPage3 from "./FormFillipPage3/FormFillipPage3";
import { addFormObjectStoreHandler } from "../../actions";
import { postFormData } from "../../axiosActions";

const initialFillipFormData = {
  extra: {
    companyApprovedByRegistrar: "",
    area: [],
    numberOfDesignatedPartners: 0,
    numberOfPartnersOtherThanDesignatedPartners: 0,
    totalNumberOfPartners: 0,

    detailsOfPartnersOtherThanDesignatedPartnersOptions: {
      individualsHavingDpin: "Number of Individuals Having valid DIN/DPIN",
      individualsNotHavingDpin:
        "Number of Individuals not having valid DIN/DPIN",
      bodiesHavingDpin:
        "Number of Body corporates and their nominees Having valid DIN/DPIN",
      bodiesNotHavingDpin:
        "Number of Body corporates and their nominess not Having valid DIN/DPIN",
    },
    detailsOfPartnersOtherThanDesignatedPartnersSelected: "",
    detailsOfPartnersOtherThanDesignatedPartnersSelectedArray: [],
    detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData: {},

    detailsOfDesignatedPartnersOptions: {
      individualsHavingDpin: "Number of Individuals Having valid DIN/DPIN",
      individualsNotHavingDpin:
        "Number of Individuals not having valid DIN/DPIN",
      bodiesHavingDpin:
        "Number of Body corporates and their nominees Having valid DIN/DPIN",
      bodiesNotHavingDpin:
        "Number of Body corporates and their nominess not Having valid DIN/DPIN",
    },
    detailsOfDesignatedPartnersSelected: "",
    detailsOfDesignatedPartnersSelectedArray: [],
    detailsOfDesignatedPartnersSelectedArrayTableData: {},
  },
  srn: "",
  registeredAddress: {
    addressI: "",
    addressII: "",
    country: "",
    pin: -1,
    area: "",
    city: "",
    district: "",
    state: "",
    longitude: -1,
    latitude: -1,
    policeStation: "",
    phone: -1,
    mobile: -1,
    fax: -1,
    email: "",
    registrarOfficeName: "",
  },
  numberOfDesignatedPartnersValidDIN_DPIN: -1,
  numberOfDesignatedPartnersNotValidDIN_DPIN: -1,
  individualValidDINorDPIN: -1,
  individualNotValidDINorDPIN: -1,
  nominiesValidDINorDPIN: -1,
  nominiesNotValidDINorDPIN: -1,
  numberOfPartnersOtherThanDesignatedPartnerValidDINorDPIN: -1,
  numberOfPartnersOtherThanDesignatedPartnerNotValidDINorDPIN: -1,
  individualOtherThanDesignatedPartnerValidDINorDPIN: -1,
  individualOtherThanDesignatedPartnerNotValidDINorDPIN: -1,
  nominiesOtherThanDesignatedPartnerValidDINorDPIN: -1,
  nominiesOtherThanDesignatedPartnerNotValidDINorDPIN: -1,
  totalNumberValidDesignatedPartners: -1,
  totalNumberNotValidDesignatedPartners: -1,
  url: {
    "3eAdressProofURL": "",
    "3eUtilityBillsURL": "",
  },
  requireHelp: "",
  authorizePermission: "",
  MCALLPFiLLiPIndPartner: [],
  MCALLPFiLLiPBodyPartner: [],
};

const LNAIFormFillip = () => {
  const store: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fillipFormData, setFillipFormData] = useState(initialFillipFormData);
  const [selectedFormPageTab, setSelectedFormPageTab] = useState<any>({
    left: true,
    center: false,
    right: false,
  });

  const formData = store?.["formData"];

  const numberOfDesignatedPartners =
    +fillipFormData.extra.numberOfDesignatedPartners;
  const numberOfPartnersOtherThanDesignatedPartners =
    +fillipFormData.extra.numberOfPartnersOtherThanDesignatedPartners;

  useEffect(() => {
    if (
      numberOfDesignatedPartners +
        numberOfPartnersOtherThanDesignatedPartners <=
      10
    ) {
      let updatedFillipFormData = {
        ...fillipFormData,
      };
      updatedFillipFormData.extra.totalNumberOfPartners =
        numberOfDesignatedPartners +
        numberOfPartnersOtherThanDesignatedPartners;

      setFillipFormData(updatedFillipFormData);
    } else {
      alert("Should Be less than 10");
    }
  }, [numberOfDesignatedPartners, numberOfPartnersOtherThanDesignatedPartners]);

  const submitFillipFormHandler = () => {
    dispatch(addFormObjectStoreHandler("fillip", fillipFormData));
    console.log(fillipFormData);
    postFormData("fillip", fillipFormData);
  };

  return (
    <div className="lnai-form-fillip-main-contaner">
      {/* <LNAINavBar menuItems={"none"} /> */}
      <div className="lnai-form-fillip-content-container">
        <div className="lnai-form-fillip-menu-switch-button-container">
          <ToggleButton
            value="left"
            selected={selectedFormPageTab["left"]}
            onChange={(event) => {
              let prevSelectedFormPageTabData = { ...selectedFormPageTab };
              if (prevSelectedFormPageTabData["left"] === false) {
                prevSelectedFormPageTabData["left"] = true;
                prevSelectedFormPageTabData["center"] = false;
                prevSelectedFormPageTabData["right"] = false;
                setSelectedFormPageTab(prevSelectedFormPageTabData);
              }
            }}
          ></ToggleButton>
          <ToggleButton
            value="center"
            selected={selectedFormPageTab["center"]}
            onChange={(event) => {
              let prevSelectedFormPageTabData = { ...selectedFormPageTab };
              if (prevSelectedFormPageTabData["center"] === false) {
                prevSelectedFormPageTabData["center"] = true;
                prevSelectedFormPageTabData["left"] = false;
                prevSelectedFormPageTabData["right"] = false;
                setSelectedFormPageTab(prevSelectedFormPageTabData);
              }
            }}
          ></ToggleButton>
          <ToggleButton
            value="right"
            selected={selectedFormPageTab["right"]}
            onChange={(event) => {
              let prevSelectedFormPageTabData = { ...selectedFormPageTab };
              if (prevSelectedFormPageTabData["right"] === false) {
                prevSelectedFormPageTabData["right"] = true;
                prevSelectedFormPageTabData["center"] = false;
                prevSelectedFormPageTabData["left"] = false;
                setSelectedFormPageTab(prevSelectedFormPageTabData);
              }
            }}
          ></ToggleButton>
        </div>
        {selectedFormPageTab["left"] && (
          <div className="lnai-form-fillip-page-1-main-container">
            <FormFillipPage1
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedFormPageTab={selectedFormPageTab}
              setSelectedFormPageTab={setSelectedFormPageTab}
            />
          </div>
        )}
        {selectedFormPageTab["center"] && (
          <div className="lnai-form-fillip-page-2-main-container">
            <FormFillipPage2
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedFormPageTab={selectedFormPageTab}
              setSelectedFormPageTab={setSelectedFormPageTab}
            />
          </div>
        )}
        {selectedFormPageTab["right"] && (
          <div className="lnai-form-fillip-page-3-main-container">
            <FormFillipPage3
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedFormPageTab={selectedFormPageTab}
              setSelectedFormPageTab={setSelectedFormPageTab}
              submitFillipFormHandler={submitFillipFormHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LNAIFormFillip;
