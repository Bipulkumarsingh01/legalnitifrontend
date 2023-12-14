import {
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  // InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { getPincodeDetails } from "../../../axiosActions";

import "./LNAIBodiesFormHavingDpin.css";
import { Upload } from "../../../assets";

const LNAIBodiesFormHavingDpin = ({
  fillipFormData,
  setFillipFormData,
  personNumber,
  designated,
}: any) => {
  const bodiesHavingDpinStructure: any = {
    Category: designated
      ? "Particulars of bodies corporate and their nominees as designated partners having DIN/DPIN"
      : "Particulars of bodies corporate and their nominees as partners having DIN/DPIN",
    typeOfBodyCorporate: "",
    corporateIDNumber: -1,
    pan: "",
    nameBodyCorporate: "",
    registeredofficeAddressLineI: "",
    registeredofficeAddressLineII: "",
    registeredofficeAddressCountry: "",
    registeredofficeAddressPincode: -1,
    registeredofficeAddressArea: "",
    registeredofficeAddressCity: "",
    registeredofficeAddressDistrict: "",
    registeredofficeAddressState: "",
    registeredofficeAddressPoliceStation: "",
    registeredofficePhone: -1,
    registeredofficeMobile: -1,
    registeredofficeFax: "",
    registeredofficeemail: "",
    numberOfSharesHeld: -1,
    paidSharesHeldaidSharesheld: -1,
    formOfContribution: "",
    otherModeOfPayment: "cheque",
    monetaryValueOfContributionInFigures: -1,
    monetaryValueOfContributionInWords: "",
    numberOfLLPpartner: -1,
    numberOfcompanyDirector: -1,
    Name: "",
    isresidentofIndia: "",
    designationAndAuthorityInBody: "",
    firstName: "",
    middleName: "",
    surname: "",
    "fatherFirstName ": "",
    fatherMiddleName: "",
    fathersurname: "",
    Gender: "",
    DateofBirth: "",
    Nationality: "",
    isResidentInIndia: "",
    isPanPassport: "",
    panPassportDetails: "",
    placeOfBirthState: "",
    placeOfBirthDistrict: "",
    isCitizenofIndia: "",
    occupationType: "",
    descriptionOfOthers: "",
    areaOfOccupation: "",
    otherAreaOfOccupation: "",
    educationalQualification: "",
    otherEducation: "",
    mobileNo: "",
    emailID: "",
    presentAddressSameAddressAsPremanent: "",
    durationStayedAtPresentAddressYears: "",
    durationStayedAtPresentAddressMonth: "",
    addressOfPreviousResidence: "",
    proodOfIdentity: "",
    identityProofNo: "",
    residentialproof: "",
    residentialProofNo: "",
    din_DesignatedPartner: -1,
    name: "",
    fatherSurname: "",
    gender: "",
    isPANPassport: "",
    ListOfbodyCorporateOfficeAddress: {
      bodyCorporateOfficeAddress: [
        {
          addressType: "Registered Address",
          addressI: "",
          addressII: "",
          country: "",
          pin: -1,
          area: "",
          city: "",
          district: "",
          state: "",
          policeStation: "",
          phone: "",
          mobile: -1,
          fax: -1,
          email: "",
        },
      ],
    },
  };

  const [bodiesHavingDpinState, setBodiesHavingDpinState] = useState(
    bodiesHavingDpinStructure
  );
  const [bodiesHavingDpinStateArea, setBodiesHavingDpinStateArea] = useState(
    []
  );

  const pincodeChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let updatedBodiesHavingDpin: any = { ...bodiesHavingDpinState };
    updatedBodiesHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[
      "pin"
    ] = +event.target.value;
    setBodiesHavingDpinState(updatedBodiesHavingDpin);

    if (event.target.value?.length === 6) {
      const response = await getPincodeDetails(event.target.value);
      console.log(response.data);
      if (response.status == 200) {
        // const parsedResponseData = JSON.parse(response.data);
        const updatedBodiesHavingDpin = {
          ...bodiesHavingDpinState,
        };
        updatedBodiesHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].country =
          response.data?.country;
        updatedBodiesHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].state =
          response.data?.state;
        updatedBodiesHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].district =
          response.data?.district;
        updatedBodiesHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].city =
          response.data.city;
        setBodiesHavingDpinStateArea(response.data.area);
      }
    }
  };

  return (
    <div className="lnai-bodies-having-dpin-main-container">
      <div className="lnai-bodies-having-dpin-content-container">
        <div className="lnai-bodies-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Type of body corporate {personNumber}
          </FormLabel>
          <FormControl style={{ width: "12rem" }} size="small">
            <Select
              labelId="details-of-bodies-other-than-designated-bodies-select"
              id="details-of-bodies-other-than-designated-bodies-select"
              disableUnderline
              value={
                bodiesHavingDpinState.typeOfBodyCorporate
                  ? bodiesHavingDpinState.typeOfBodyCorporate
                  : "select"
              }
              label="Select an option"
              onChange={(event: SelectChangeEvent<any>) => {
                const updatebodiesHavingDpinState = {
                  ...bodiesHavingDpinState,
                };
                updatebodiesHavingDpinState.typeOfBodyCorporate =
                  event.target.value;
                setBodiesHavingDpinState(updatebodiesHavingDpinState);
              }}
              className="lnai-primary-form-select-field"
            >
              <MenuItem disabled value="select">
                Select an Option
              </MenuItem>
              <MenuItem value="LLP">LLP</MenuItem>
              <MenuItem value="Company">Company</MenuItem>
              <MenuItem value="Foreign LLP">Foreign LLP</MenuItem>
              <MenuItem value="Foriegn Company">Foriegn Company</MenuItem>
              <MenuItem value="LLP Incorporated Outside India">
                LLP Incorporated Outside India
              </MenuItem>
              <MenuItem value="Company Incorporated Outside India">
                Company Incorporated Outside India
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="lnai-bodies-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Corporate Identity Number(CIN) or Foreign Company Registration
            Number(FCRN) or Limited Liability Partnership Identification
            Number(LLPIN) or Foreign Limited Liability Partnership
            Identification number(FLLPIN) or any other registration number of
            body corporate {personNumber}
          </FormLabel>
          <TextField
            id="outlined-controlled"
            placeholder=""
            value={
              bodiesHavingDpinState.corporateIDNumber !== -1
                ? bodiesHavingDpinState.corporateIDNumber
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesHavingDpinState,
              };
              updatedPartnerNotHavingDpin.corporateIDNumber =
                +event.target.value;
              setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
        </div>

        <div className="lnai-bodies-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Name of Body corporate {personNumber}
          </FormLabel>
          <TextField
            id="outlined-controlled"
            placeholder=""
            value={
              bodiesHavingDpinState.nameBodyCorporate
                ? bodiesHavingDpinState.nameBodyCorporate
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesHavingDpinState,
              };
              updatedPartnerNotHavingDpin.nameBodyCorporate =
                event.target.value;
              setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
        </div>

        <div className="lnai-bodies-having-dpin-form-items-container">
          <FormLabel component="legend">Pan Card:</FormLabel>
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
            style={{ width: "fit-content", margin: "0.75rem 0 0.5rem 0" }}
            startIcon={<img src={Upload} alt="Upload" height={20} width={20} />}
          >
            Upload file
            <input type="file" hidden />
          </Button>
        </div>

        <div className="lnai-bodies-having-dpin-form-items-container">
          <FormLabel component="legend">
            Registered office address or Principal place of business in India or
            Principal place of business outside India of the company{" "}
            {personNumber}
          </FormLabel>
          <div className="lnai-bodies-having-dpin-reg-addr-form-items-container">
            <TextField
              id="outlined-controlled"
              placeholder="Address Line 1"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["addressI"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].addressI =
                  event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Address Line 2"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["addressII"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].addressII =
                  event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Pincode"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["pin"] !== -1
                  ? bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                      .bodyCorporateOfficeAddress[0]["pin"]
                  : null
              }
              onChange={pincodeChangeHandler}
              className="lnai-primary-form-input-field"
            />
            <FormControl>
              {/* <InputLabel id="bodies-not-having-dpin-area-select">
              Area
            </InputLabel> */}
              <FormControl style={{ width: "12rem" }} size="small">
                <Select
                  disabled={
                    bodiesHavingDpinStateArea?.length > 0 ? false : true
                  }
                  labelId="bodies-not-having-dpin-area-select"
                  id="demo-controlled-open-select"
                  value={
                    bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                      .bodyCorporateOfficeAddress[0]?.["area"]
                      ? bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                          .bodyCorporateOfficeAddress[0]["area"]
                      : "select"
                  }
                  label="Area"
                  onChange={(event: SelectChangeEvent<any>) => {
                    const updatedPartnerNotHavingDpin = {
                      ...bodiesHavingDpinState,
                    };
                    updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].area =
                      event.target.value;
                    setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
                  }}
                  className="lnai-primary-form-select-field lnai-bodies-having-dpin-area-select"
                >
                  <MenuItem disabled value="select">
                    Area
                  </MenuItem>
                  {bodiesHavingDpinStateArea?.map(
                    (fetchedAreas: any, index: any) => (
                      <MenuItem key={index} value={fetchedAreas}>
                        {fetchedAreas}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </FormControl>

            <TextField
              disabled
              id="outlined-controlled"
              placeholder="Country"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["country"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "country"
                ] = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              disabled
              id="outlined-controlled"
              placeholder="State"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["state"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "state"
                ] = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              disabled
              id="outlined-controlled"
              placeholder="District"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["district"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "district"
                ] = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              disabled
              id="outlined-controlled"
              placeholder="City"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["city"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "city"
                ] = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Phone Number"
              value={
                bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["phone"] !== -1
                  ? bodiesHavingDpinState.ListOfbodyCorporateOfficeAddress
                      .bodyCorporateOfficeAddress[0]["phone"]
                  : null
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "phone"
                ] = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              className="lnai-primary-form-input-field lnai-bodies-having-dpin-partner-address-fields-phone-number"
            />
          </div>
        </div>

        <div className="lnai-bodies-having-dpin-form-items-container">
          <FormLabel component={"label"}>Contact Details</FormLabel>
          <div className="lnai-bodies-having-dpin-contact-details-form-items-container">
            <TextField
              id="outlined-controlled"
              placeholder="First Name"
              value={
                bodiesHavingDpinState.firstName
                  ? bodiesHavingDpinState.firstName
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.firstName = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Middle Name"
              value={
                bodiesHavingDpinState.middleName
                  ? bodiesHavingDpinState.middleName
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.middleName = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Last Name"
              value={
                bodiesHavingDpinState.surname
                  ? bodiesHavingDpinState.surname
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.surname = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Mobile Number"
              value={
                bodiesHavingDpinState.mobileNo
                  ? bodiesHavingDpinState.mobileNo
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.mobileNo = +event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              className="lnai-primary-form-input-field lnai-bodies-having-dpin-partner-address-fields-mobile-number"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Email"
              value={
                bodiesHavingDpinState.emailID
                  ? bodiesHavingDpinState.emailID
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.emailID = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Company"
              value={
                bodiesHavingDpinState.company
                  ? bodiesHavingDpinState.company
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerNotHavingDpin.company = event.target.value;
                setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
          </div>
        </div>

        <div className="lnai-bodies-having-dpin-form-items-container">
          <FormLabel component="legend">
            In case of company seeking conversion of Designated Partner{" "}
            {personNumber}
          </FormLabel>
          <div className="lnai-partners-having-dpin-shares-input-field-container">
            <TextField
              id="outlined-controlled"
              placeholder="Number of shares held"
              value={
                bodiesHavingDpinState.numberOfsharesHeld !== -1
                  ? bodiesHavingDpinState.numberOfsharesHeld
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerHavingDpin.numberOfsharesHeld =
                  +event.target.value;
                setBodiesHavingDpinState(updatedPartnerHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Paid up value of shares held (in INR)"
              value={
                bodiesHavingDpinState.paidupvalueofsharesheld !== -1
                  ? bodiesHavingDpinState.paidupvalueofsharesheld
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerHavingDpin.paidupvalueofsharesheld =
                  +event.target.value;
                setBodiesHavingDpinState(updatedPartnerHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
          </div>
        </div>

        <div>
          <div className="lnai-bodies-having-dpin-form-items-container">
            <FormLabel component="legend">
              Monetary value of contribution (in INR.) of Designated Partner{" "}
              {personNumber}
            </FormLabel>
            <TextField
              id="outlined-controlled"
              placeholder="Number of shares held"
              value={
                bodiesHavingDpinState.monetaryValueOfContributionInFigures !==
                -1
                  ? bodiesHavingDpinState.monetaryValueOfContributionInFigures
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesHavingDpinState,
                };
                updatedPartnerHavingDpin.monetaryValueOfContributionInFigures =
                  +event.target.value;
                setBodiesHavingDpinState(updatedPartnerHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
          </div>
        </div>

        <div>
          <FormLabel component={"legend"}>
            DIN/DPIN of person signing on behalf of the body corporate as
            nominee
          </FormLabel>
          <TextField
            id="outlined-controlled"
            placeholder=""
            value={
              bodiesHavingDpinState.din_DesignatedPartner !== -1
                ? bodiesHavingDpinState.din_DesignatedPartner
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerHavingDpin = {
                ...bodiesHavingDpinState,
              };
              updatedPartnerHavingDpin.din_DesignatedPartner =
                +event.target.value;
              setBodiesHavingDpinState(updatedPartnerHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
        </div>
      </div>

      <div className="lnai-bodies-having-dpin-submit-button-container">
        <Button
          variant="LNAIPrimaryButton"
          onClick={() => {
            let updateFillipFormData = {
              ...fillipFormData,
            };
            updateFillipFormData.MCALLPFiLLiPBodyPartner.push(
              bodiesHavingDpinState
            );
            setFillipFormData(updateFillipFormData);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default LNAIBodiesFormHavingDpin;
