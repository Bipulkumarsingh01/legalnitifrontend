import React, { useState } from "react";
import { getPincodeDetails } from "../../../axiosActions";
import {
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";

import "./LNAIBodiesFormNotHavingDpin.css";
import { Upload } from "../../../assets";

const LNAIBodiesFormNotHavingDpin = ({
  fillipFormData,
  setFillipFormData,
  personNumber,
  designated,
}: any) => {
  const bodiesNotHavingDpinStructure = {
    Category: designated
      ? "Particulars of bodies corporate and their nominees as designated partners not having DIN/DPIN"
      : "Particulars of bodies corporate and their nominees as partners not having DIN/DPIN",
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
    registeredofficePhone: "",
    registeredofficeMobile: -1,
    registeredofficeFax: "",
    registeredofficeemail: "",
    numberOfSharesHeld: -1,
    paidSharesHeldaidSharesheld: -1,
    formOfContribution: "",
    otherModeOfPayment: "",
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
    mobileNo: -1,
    emailID: "",
    presentAddressSameAddressAsPremanent: "",
    durationStayedAtPresentAddressYears: "",
    durationStayedAtPresentAddressMonth: "",
    addressOfPreviousResidence: "",
    proodOfIdentity: "",
    identityProofNo: -1,
    identityProofPanNo: -1,
    residentialproof: "",
    residentialProofNo: -1,
    din_DesignatedPartner: "",
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
          phone: -1,
          mobile: -1,
          fax: "",
          email: "",
        },
        {
          addressType: "Permanent Address",
          addressI: "",
          addressII: "",
          country: "",
          pin: -1,
          area: "",
          city: "",
          district: "",
          state: "",
          policeStation: "",
          phone: -1,
          mobile: "",
          fax: "",
          email: "",
        },
        {
          addressType: "Present Address",
          addressI: "",
          addressII: "",
          country: "",
          pin: "",
          area: "",
          city: "",
          district: "",
          state: "",
          policeStation: "",
          phone: -1,
          mobile: "",
          fax: "",
          email: "",
        },
      ],
    },
  };

  const [bodiesNotHavingDpinState, setBodiesNotHavingDpinState] = useState(
    bodiesNotHavingDpinStructure
  );
  const [bodiesNotHavingDpinStateArea, setBodiesNotHavingDpinStateArea] =
    useState([]);

  const pincodeChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let updatedBodieotHavingDpin: any = { ...bodiesNotHavingDpinState };
    updatedBodieotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[
      "pin"
    ] = +event.target.value;
    setBodiesNotHavingDpinState(updatedBodieotHavingDpin);

    if (event.target.value?.length === 6) {
      const response = await getPincodeDetails(event.target.value);
      console.log(response.data);
      if (response.status == 200) {
        // const parsedResponseData = JSON.parse(response.data);
        const updatedBodieotHavingDpin = {
          ...bodiesNotHavingDpinState,
        };
        updatedBodieotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].country =
          response.data?.country;
        updatedBodieotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].state =
          response.data?.state;
        updatedBodieotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].district =
          response.data?.district;
        updatedBodieotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].city =
          response.data.city;
        setBodiesNotHavingDpinStateArea(response.data.area);
      }
    }
  };
  return (
    <div className="lnai-bodies-not-having-dpin-main-container">
      <div className="lnai-bodies-not-having-dpin-content-container">
        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Type of body corporate {personNumber}
          </FormLabel>
          <FormControl style={{ width: "12rem" }} size="small">
            <Select
              labelId="details-of-bodies-other-than-designated-bodies-select"
              id="details-of-bodies-other-than-designated-bodies-select"
              value={
                bodiesNotHavingDpinState.typeOfBodyCorporate
                  ? bodiesNotHavingDpinState.typeOfBodyCorporate
                  : "select"
              }
              label="Select an option"
              onChange={(event: SelectChangeEvent<any>) => {
                const updatebodiesNotHavingDpinState = {
                  ...bodiesNotHavingDpinState,
                };
                updatebodiesNotHavingDpinState.typeOfBodyCorporate =
                  event.target.value;
                setBodiesNotHavingDpinState(updatebodiesNotHavingDpinState);
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

        <div className="lnai-bodies-not-having-dpin-form-items-container">
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
              bodiesNotHavingDpinState.corporateIDNumber !== -1
                ? bodiesNotHavingDpinState.corporateIDNumber
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.corporateIDNumber =
                +event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Name of Body corporate {personNumber}
          </FormLabel>
          <TextField
            id="outlined-controlled"
            placeholder=""
            value={
              bodiesNotHavingDpinState.nameBodyCorporate
                ? bodiesNotHavingDpinState.nameBodyCorporate
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.nameBodyCorporate =
                event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
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

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component="legend">
            Registered office address or Principal place of business in India or
            Principal place of business outside India of the company{" "}
            {personNumber}
          </FormLabel>
          <div className="lnai-bodies-not-having-dpin-office-addr-fields-container">
            <TextField
              id="outlined-controlled"
              placeholder="Address Line 1"
              value={
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["addressI"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].addressI =
                  event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Address Line 2"
              value={
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["addressII"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].addressII =
                  event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Pincode"
              value={
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["pin"] !== -1
                  ? bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                      .bodyCorporateOfficeAddress[0]["pin"]
                  : null
              }
              onChange={pincodeChangeHandler}
              className="lnai-primary-form-input-field"
            />
            <FormControl>
              <InputLabel id="bodies-not-having-dpin-area-select">
                Area
              </InputLabel>
              <FormControl style={{ width: "14rem" }} size="small">
                <Select
                  disabled={
                    bodiesNotHavingDpinStateArea?.length > 0 ? false : true
                  }
                  labelId="bodies-not-having-dpin-area-select"
                  id="demo-controlled-open-select"
                  value={
                    bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                      .bodyCorporateOfficeAddress[0]?.["area"]
                      ? bodiesNotHavingDpinState
                          .ListOfbodyCorporateOfficeAddress
                          .bodyCorporateOfficeAddress[0]["area"]
                      : "select"
                  }
                  label="Area"
                  onChange={(event: SelectChangeEvent<any>) => {
                    const updatedPartnerNotHavingDpin = {
                      ...bodiesNotHavingDpinState,
                    };
                    updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].area =
                      event.target.value;
                    setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
                  }}
                  className="lnai-primary-form-select-field"
                >
                  <MenuItem disabled value="select">
                    Area
                  </MenuItem>
                  {bodiesNotHavingDpinStateArea?.map(
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
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["country"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "country"
                ] = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              disabled
              id="outlined-controlled"
              placeholder="State"
              value={
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["state"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "state"
                ] = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              disabled
              id="outlined-controlled"
              placeholder="District"
              value={
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["district"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "district"
                ] = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              disabled
              id="outlined-controlled"
              placeholder="City"
              value={
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["city"]
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "city"
                ] = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Phone Number"
              value={
                bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                  .bodyCorporateOfficeAddress[0]?.["phone"] !== -1
                  ? bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                      .bodyCorporateOfficeAddress[0]["phone"]
                  : null
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                  "phone"
                ] = +event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              className="lnai-primary-form-input-field lnai-bodies-not-having-dpin-partner-address-fields-phone-number"
            />
          </div>

          <div>
            <FormLabel component={"legend"}>
              Monetary value of contribution (in INR.) of Designated Partner{" "}
              {personNumber}
            </FormLabel>
            <TextField
              id="outlined-controlled"
              placeholder="Number of shares held"
              value={
                bodiesNotHavingDpinState.monetaryValueOfContributionInFigures !==
                -1
                  ? bodiesNotHavingDpinState.monetaryValueOfContributionInFigures
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerHavingDpin.monetaryValueOfContributionInFigures =
                  +event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
          </div>
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Details of Person acting as nominee of the body corporate
          </FormLabel>
          <div className="lnai-bodies-not-having-dpin-nominee-details-fields-container">
            <TextField
              id="outlined-controlled"
              placeholder="Place Of Birth (State)"
              value={
                bodiesNotHavingDpinState.placeOfBirthState
                  ? bodiesNotHavingDpinState.placeOfBirthState
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerHavingDpin.placeOfBirthState = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Place Of Birth (District)"
              value={
                bodiesNotHavingDpinState.placeOfBirthDistrict
                  ? bodiesNotHavingDpinState.placeOfBirthDistrict
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerHavingDpin.placeOfBirthDistrict =
                  event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Mobile Number"
              value={
                bodiesNotHavingDpinState.mobileNo !== -1
                  ? bodiesNotHavingDpinState.mobileNo
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerHavingDpin.mobileNo = +event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerHavingDpin);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              className="lnai-primary-form-input-field lnai-bodies-not-having-dpin-partner-address-fields-mobile-number"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Email"
              value={
                bodiesNotHavingDpinState.emailID
                  ? bodiesNotHavingDpinState.emailID
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerHavingDpin.emailID = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
          </div>
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Occupation Type of Person acting as nominee of the 1st body
            corporate
          </FormLabel>
          <FormControl style={{ width: "12rem" }} size="small">
            <Select
              labelId="bodies-not-having-dpin-occupation-select"
              id="demo-controlled-open-select"
              disableUnderline
              value={
                bodiesNotHavingDpinState.occupationType
                  ? bodiesNotHavingDpinState.occupationType
                  : "select"
              }
              label="Occupation"
              onChange={(event: SelectChangeEvent<any>) => {
                const updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.occupationType = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-select-field"
            >
              <MenuItem disabled value="select">
                Select Option
              </MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Governament Employee">
                Governament Employee
              </MenuItem>
              <MenuItem value="Employment">Employment</MenuItem>
              <MenuItem value="Private Employment">Private Employment</MenuItem>
              <MenuItem value="House Wife">House Wife</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component={"legend"}>
            Education Qualification of Person acting as nominee of the 1st body
            corporate
          </FormLabel>
          <FormControl style={{ width: "12rem" }} size="small">
            <Select
              labelId="bodies-not-having-dpin-education-select"
              id="demo-controlled-open-select"
              disableUnderline
              value={
                bodiesNotHavingDpinState.educationalQualification
                  ? bodiesNotHavingDpinState.educationalQualification
                  : "select"
              }
              label="Education"
              onChange={(event: SelectChangeEvent<any>) => {
                const updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.educationalQualification =
                  event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-select-field"
            >
              <MenuItem disabled value="select">
                Select Option
              </MenuItem>

              <MenuItem value="Primary Education">Primary Education</MenuItem>
              <MenuItem value="Secondary Education">
                Secondary Education
              </MenuItem>
              <MenuItem value="Vocational Qualification">
                Vocational Qualification
              </MenuItem>
              <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
              <MenuItem value="MAster's Degree">MAster's Degree</MenuItem>
              <MenuItem value="Doctorate or Higher">
                Doctorate or Higher
              </MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Diploma">Diploma</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component="legend">
            Present Residential Address of Person acting as nominee of of body
            corporate {personNumber}
          </FormLabel>
          <TextField
            id="outlined-controlled"
            placeholder="Address Line 1"
            value={
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["addressI"]
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].addressI =
                event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
          <TextField
            id="outlined-controlled"
            placeholder="Address Line 2"
            value={
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["addressII"]
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].addressII =
                event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
          <TextField
            id="outlined-controlled"
            placeholder="Pincode"
            value={
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["pin"] !== -1
                ? bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                    .bodyCorporateOfficeAddress[0]["pin"]
                : null
            }
            onChange={pincodeChangeHandler}
            className="lnai-primary-form-input-field"
          />
          <FormControl>
            <InputLabel id="bodies-not-having-dpin-area-select">
              Area
            </InputLabel>
            <FormControl style={{ width: "14rem" }} size="small">
              <Select
                disabled={
                  bodiesNotHavingDpinStateArea?.length > 0 ? false : true
                }
                labelId="bodies-not-having-dpin-area-select"
                id="demo-controlled-open-select"
                value={
                  bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                    .bodyCorporateOfficeAddress[0]?.["area"]
                    ? bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                        .bodyCorporateOfficeAddress[0]["area"]
                    : "select"
                }
                label="Area"
                onChange={(event: SelectChangeEvent<any>) => {
                  const updatedPartnerNotHavingDpin = {
                    ...bodiesNotHavingDpinState,
                  };
                  updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0].area =
                    event.target.value;
                  setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
                }}
                className="lnai-primary-form-select-field"
              >
                <MenuItem disabled value="select">
                  Area
                </MenuItem>
                {bodiesNotHavingDpinStateArea?.map(
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
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["country"]
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                "country"
              ] = event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
          <TextField
            disabled
            id="outlined-controlled"
            placeholder="State"
            value={
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["state"]
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                "state"
              ] = event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
          <TextField
            disabled
            id="outlined-controlled"
            placeholder="District"
            value={
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["district"]
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                "district"
              ] = event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
          <TextField
            disabled
            id="outlined-controlled"
            placeholder="City"
            value={
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["city"]
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                "city"
              ] = event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
          <TextField
            id="outlined-controlled"
            placeholder="Phone Number"
            value={
              bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                .bodyCorporateOfficeAddress[0]?.["phone"] !== -1
                ? bodiesNotHavingDpinState.ListOfbodyCorporateOfficeAddress
                    .bodyCorporateOfficeAddress[0]["phone"]
                : null
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyCorporateOfficeAddress.bodyCorporateOfficeAddress[0][
                "phone"
              ] = +event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            className="lnai-primary-form-input-field lnai-bodies-not-having-dpin-partner-present-address-fields-phone-number"
          />
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component="legend">
            Aadhar and PAN of Designated Partner {personNumber}
          </FormLabel>
          <div>
            <FormLabel component="legend">Aadhar Card:</FormLabel>
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
              startIcon={
                <img src={Upload} alt="Upload" height={20} width={20} />
              }
            >
              Upload file
              <input type="file" hidden />
            </Button>
          </div>
          <TextField
            id="outlined-controlled"
            placeholder="Aadhar card number"
            value={
              bodiesNotHavingDpinState.identityProofNo !== -1 &&
              bodiesNotHavingDpinState.identityProofNo !== 0
                ? bodiesNotHavingDpinState.identityProofNo
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.identityProofNo = +event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <div>
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
              startIcon={
                <img src={Upload} alt="Upload" height={20} width={20} />
              }
            >
              Upload file
              <input type="file" hidden />
            </Button>
          </div>

          <div className="lnai-bodies-not-having-dpin-pan-details-fields-container">
            <TextField
              id="outlined-controlled"
              placeholder="Pan card number"
              value={
                bodiesNotHavingDpinState.identityProofPanNo !== -1 &&
                bodiesNotHavingDpinState.identityProofPanNo !== 0
                  ? bodiesNotHavingDpinState.identityProofPanNo
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.identityProofPanNo =
                  +event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="First Name"
              value={
                bodiesNotHavingDpinState.firstName
                  ? bodiesNotHavingDpinState.firstName
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.firstName = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Middle Name"
              value={
                bodiesNotHavingDpinState.middleName
                  ? bodiesNotHavingDpinState.middleName
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.middleName = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Last Name"
              value={
                bodiesNotHavingDpinState.surname
                  ? bodiesNotHavingDpinState.surname
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.surname = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />

            <TextField
              id="outlined-controlled"
              placeholder="Father's First Name"
              value={
                bodiesNotHavingDpinState["fatherFirstName "]
                  ? bodiesNotHavingDpinState["fatherFirstName "]
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin["fatherFirstName "] =
                  event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Father's Middle Name"
              value={
                bodiesNotHavingDpinState.fatherMiddleName
                  ? bodiesNotHavingDpinState.fatherMiddleName
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.fatherMiddleName =
                  event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
            <TextField
              id="outlined-controlled"
              placeholder="Father's Last Name"
              value={
                bodiesNotHavingDpinState.fathersurname
                  ? bodiesNotHavingDpinState.fathersurname
                  : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.fathersurname = event.target.value;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-primary-form-input-field"
            />
          </div>
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component="legend">Date Of Birth</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              // value={
              //   bodiesNotHavingDpinState.dateofBirth
              //     ? bodiesNotHavingDpinState.dateofBirth
              //     : null
              // }
              onChange={(selectedDate: any) => {
                let formatedDate = moment
                  .utc(selectedDate)
                  .format("MM/DD/YYYY");
                console.log(formatedDate);
                let updatedPartnerNotHavingDpin = {
                  ...bodiesNotHavingDpinState,
                };
                updatedPartnerNotHavingDpin.DateofBirth = formatedDate;
                setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
              }}
              className="lnai-bodies-not-having-dpin-dob-field"
            />
          </LocalizationProvider>
        </div>

        <div className="lnai-bodies-not-having-dpin-form-items-container">
          <FormLabel component="legend">
            Residential Proof of Designated Partner {personNumber}
          </FormLabel>
          <div>
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
              startIcon={
                <img src={Upload} alt="Upload" height={20} width={20} />
              }
            >
              Upload file
              <input type="file" hidden />
            </Button>
          </div>
          <TextField
            id="outlined-controlled"
            placeholder="Residential Proof Number"
            value={
              bodiesNotHavingDpinState.residentialProofNo !== -1 &&
              bodiesNotHavingDpinState.residentialProofNo !== 0
                ? bodiesNotHavingDpinState.residentialProofNo
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let updatedPartnerNotHavingDpin = {
                ...bodiesNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.residentialProofNo =
                +event.target.value;
              setBodiesNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
            className="lnai-primary-form-input-field"
          />
        </div>
      </div>

      <div className="lnai-bodies-not-having-dpin-submit-button-container">
        <Button
          variant="LNAIPrimaryButton"
          onClick={() => {
            let updateFillipFormData = {
              ...fillipFormData,
            };
            updateFillipFormData.MCALLPFiLLiPBodyPartner.push(
              bodiesNotHavingDpinState
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

export default LNAIBodiesFormNotHavingDpin;
