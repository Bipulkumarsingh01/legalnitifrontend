import { useEffect, useState } from "react";

import { Button } from "@mui/material";

import { LNAIFillipMainForm } from "../../components";
import { useDispatch, useSelector } from "react-redux";
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

const LNAIFillipFormPage = () => {
  const store: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fillipFormData, setFillipFormData] = useState(initialFillipFormData);

  // const formData = store?.["formData"];

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
    <div>
      <LNAIFillipMainForm
        fillipFormData={fillipFormData}
        setFillipFormData={setFillipFormData}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={submitFillipFormHandler}
      >
        Submit
      </Button>
    </div>
  );
};

export default LNAIFillipFormPage;
