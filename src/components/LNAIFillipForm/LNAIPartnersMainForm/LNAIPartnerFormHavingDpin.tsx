import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const LNAIPartnerFormHavingDpin = ({
  fillipFormData,
  setFillipFormData,
  personNumber,
  designated,
}: any) => {
  const indHavingDpinStructure: any = {
    Category: designated
      ? "Particulars of individual designated partners having DIN/DPIN"
      : "Particulars of individual partners having DIN/DPIN",
    designatedpartnerID: -1,
    name: "",
    isResidentInIndia: "",
    paidupvalueofsharesheld: "",
    numberOfsharesHeld: -1,
    formOfContribution: "",
    otherModeOfPayment: "",
    monetaryValueOfContributionInFigures: -1,
    monetaryValueOfContributionInWords: "",
    numberOfLLPpartner: -1,
    numberOfcompanyDirector: -1,
    isResidentIndia: "",
    paid: -1,
    modeOfPay: "",
    monetaryValueInFigures: "",
    monetaryValueInwords: "",
    numberOfLLP: -1,
    numberOfCompanyHoldAsDirector: "",
    partnerFirstName: "",
    partnerMiddleName: "",
    partnerSurname: "",
    partnerFatherFirstname: "",
    partnerFatherMiddlename: "",
    partnerFatherSurname: "",
    partnerGender: "",
    partnerDateofBirth: "",
    partnerNationality: "",
    partnerIsResidentIndia: "",
    isPanPass: "",
    panPassDetails: "",
    partnerPlaceofBirthState: "",
    partnerPlaceofBirthDistrict: "",
    partnerIsCitizenofIndia: "",
    OccupationType: "",
    descriptionOfOthers: "",
    areaOfOccupation: "",
    otherAreaOfOccupation: "",
    educationalQualification: "",
    otherEducation: "",
    mobileNo: "",
    emailid: "",
    isresidentofIndia: "Y",
    numberofsharesheld: "",
    firstName: "",
    "middle Name": "",
    surname: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fathersurname: "",
    gender: "",
    dateofBirth: "",
    nationality: "",
    isPanPassport: "",
    panPassportDetails: "",
    passportOrPAN: "",
    placeOfBirthState: "",
    placeOfBirthDistrict: "",
    occupationType: "",
    emailID: "",
    presentAddressSameAddressAsPremanent: "",
    durationStayedAtPresentAddressYears: "",
    durationStayedAtPresentAddressMonth: "",
    addressOfPreviousResidence: "",
    "previousResidence ": "",
    proodOfIdentity: "",
    identityProofNo: "",
    residentialproof: "",
    residentialProofNo: "",
    numberOfSharesHeld: "",
    PaidupvalueShares: "",
  };
  const [partnerHavingDpinState, setPartnerHavingDpinState] = useState(
    indHavingDpinStructure
  );
  return (
    <div>
      <FormLabel component="legend">
        Enter valid DIN/DPIN of Designated Partner {personNumber}
      </FormLabel>
      <TextField
        id="outlined-controlled"
        placeholder=""
        value={
          partnerHavingDpinState.designatedpartnerID !== -1
            ? partnerHavingDpinState.designatedpartnerID
            : ""
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedPartnerHavingDpin = {
            ...partnerHavingDpinState,
          };
          updatedPartnerHavingDpin.designatedpartnerID = event.target.value;
          setPartnerHavingDpinState(updatedPartnerHavingDpin);
        }}
      />
      <FormLabel component="legend">
        In case of company seeking conversion of Designated Partner{" "}
        {personNumber}
      </FormLabel>
      <TextField
        id="outlined-controlled"
        placeholder="Number of shares held"
        value={
          partnerHavingDpinState.numberOfsharesHeld !== -1
            ? partnerHavingDpinState.numberOfsharesHeld
            : ""
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedPartnerHavingDpin = {
            ...partnerHavingDpinState,
          };
          updatedPartnerHavingDpin.numberOfsharesHeld = event.target.value;
          setPartnerHavingDpinState(updatedPartnerHavingDpin);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Paid up value of shares held (in INR)"
        value={
          partnerHavingDpinState.paidupvalueofsharesheld !== -1
            ? partnerHavingDpinState.paidupvalueofsharesheld
            : ""
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedPartnerHavingDpin = {
            ...partnerHavingDpinState,
          };
          updatedPartnerHavingDpin.paidupvalueofsharesheld = event.target.value;
          setPartnerHavingDpinState(updatedPartnerHavingDpin);
        }}
      />
      <div>
        <FormLabel component="legend">
          Form of contribution of Designated Partner {personNumber}
        </FormLabel>
        <Select
          labelId="details-of-partners-other-than-designated-partners-select"
          id="details-of-partners-other-than-designated-partners-select"
          value={
            partnerHavingDpinState.formOfContribution
              ? partnerHavingDpinState.formOfContribution
              : "select"
          }
          label="Select an option"
          onChange={(event: SelectChangeEvent<any>) => {
            let updatedPartnerHavingDpin = {
              ...partnerHavingDpinState,
            };
            updatedPartnerHavingDpin.formOfContribution = event.target.value;
            setPartnerHavingDpinState(updatedPartnerHavingDpin);
          }}
        >
          <MenuItem disabled value="select">
            Select an Option
          </MenuItem>
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="Conversion">Conversion</MenuItem>
          <MenuItem value="Other than cash">Other than cash</MenuItem>
        </Select>
      </div>
      {partnerHavingDpinState.formOfContribution === "Other than cash" && (
        <FormControl variant="standard">
          <TextField
            id="outlined-controlled"
            placeholder="Please Specify"
            value={
              partnerHavingDpinState.otherModeOfPayment
                ? partnerHavingDpinState.otherModeOfPayment
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPartnerHavingDpinState((prevPartnerHavingDpinState: any) => ({
                ...prevPartnerHavingDpinState,
                otherModeOfPayment: event.target.value,
              }));
            }}
          />
        </FormControl>
      )}

      <div>
        <FormLabel component="legend">
          Monetary value of contribution (in INR.) of Designated Partner{" "}
          {personNumber}
        </FormLabel>
        <TextField
          id="outlined-controlled"
          placeholder=""
          value={
            partnerHavingDpinState.monetaryValueOfContributionInFigures !== -1
              ? partnerHavingDpinState.monetaryValueOfContributionInFigures
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerHavingDpin = {
              ...partnerHavingDpinState,
            };
            updatedPartnerHavingDpin.monetaryValueOfContributionInFigures =
              event.target.value;
            setPartnerHavingDpinState(updatedPartnerHavingDpin);
          }}
        />
      </div>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.MCALLPFiLLiPIndPartner.push(
            partnerHavingDpinState
          );

          setFillipFormData(updatedFillipFormData);
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default LNAIPartnerFormHavingDpin;
