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
import { useState } from "react";
import { getPincodeDetails } from "../../../axiosActions";
import { IoMdCloudUpload } from "react-icons/io";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";

const LNAIPartnerFormNotHavingDpin = ({
  fillipFormData,
  setFillipFormData,
  personNumber,
  designated,
}: any) => {
  const indNotHavingDpinStructure = {
    Category: designated
      ? "Particulars of individual designated partners not having DIN/DPIN"
      : "Particulars of individual partners not having DIN/DPIN",
    firstName: "",
    middleName: "",
    surname: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fathersurname: "",
    gender: "",
    dateofBirth: "12/14/1998",
    nationality: "India",
    isResidentInIndia: "Y",
    isPanPassport: "",
    panPassportDetails: "",
    placeOfBirthState: "",
    placeOfBirthDistrict: "",
    partnerIsCitizenofIndia: "Y",
    occupationType: "",
    descriptionOfOthers: "",
    areaOfOccupation: "",
    otherAreaOfOccupation: "",
    educationalQualification: "",
    otherEducation: "",
    mobileNo: -1,
    emailid: "",
    proodOfIdentity: "Aadhaar",
    residentialproof: "",
    identityProofNo: -1,
    residentialProofNo: -1,
    numberOfsharesHeld: -1,
    paidupvalueofsharesheld: -1,
    formOfContribution: "",
    otherModeOfPayment: "",
    monetaryValueOfContributionInFigures: -1,
    monetaryValueOfContributionInWords: "",
    numberOfLLPpartner: -1,
    numberOfcompanyDirector: -1,
    presentAddressSameAddressAsPremanent: "Y",
    durationStayedAtPresentAddressYears: -1,
    durationStayedAtPresentAddressMonth: -1,
    addressOfPreviousResidence: "",
    designatedpartnerID: "",
    name: "",
    isResidentIndia: "Y",
    paid: "",
    modeOfPay: "",
    monetaryValueInFigures: "",
    monetaryValueInwords: "",
    numberOfLLP: "",
    numberOfCompanyHoldAsDirector: -1,
    partnerFirstName: "",
    partnerMiddleName: "",
    partnerSurname: "",
    partnerFatherFirstname: "",
    partnerFatherMiddlename: "",
    partnerFatherSurname: "",
    partnerGender: "",
    partnerDateofBirth: "",
    partnerNationality: "",
    partnerIsResidentIndia: "Y",
    isPanPass: "",
    panPassDetails: "",
    partnerPlaceofBirthState: "",
    partnerPlaceofBirthDistrict: "",
    OccupationType: "",
    isresidentofIndia: "Y",
    numberofsharesheld: -1,
    passportOrPAN: "",
    emailID: "",
    "previousResidence ": "",
    numberOfSharesHeld: "",
    PaidupvalueShares: "",
    ListOfbodyParnerIndOfficeAddress: {
      bodyParnerIndOfficeAddress: [
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
        },
        {
          addressType: "Registered Address",
          addressI: "",
          addressII: "",
          country: "",
          pin: "",
          area: "",
          city: "",
          district: "",
          state: "",
          policeStation: "",
          phone: "",
        },
      ],
    },
  };

  const [partnerNotHavingDpinState, setPartnerNotHavingDpinState] = useState(
    indNotHavingDpinStructure
  );
  const [partnerNotHavingDpinStateArea, setPartnerNotHavingDpinStateArea] =
    useState([]);

  const pincodeChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let updatedPartnerHavingDpin: any = { ...partnerNotHavingDpinState };
    updatedPartnerHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[
      "pin"
    ] = +event.target.value;
    setPartnerNotHavingDpinState(updatedPartnerHavingDpin);

    if (event.target.value?.length === 6) {
      const response = await getPincodeDetails(event.target.value);
      console.log(response.data);
      if (response.status == 200) {
        // const parsedResponseData = JSON.parse(response.data);
        const updatedPartnerHavingDpin = {
          ...partnerNotHavingDpinState,
        };
        updatedPartnerHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0].country =
          response.data?.country;
        updatedPartnerHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0].state =
          response.data?.state;
        updatedPartnerHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0].district =
          response.data?.district;
        updatedPartnerHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0].city =
          response.data.city;
        setPartnerNotHavingDpinStateArea(response.data.area);
      }
    }
  };

  console.log(partnerNotHavingDpinState);

  let years = Array.from(
    {
      length: 100,
    },
    (_, index) => index + 1
  );
  let months = Array.from(
    {
      length: 11,
    },
    (_, index) => index + 1
  );

  return (
    <div>
      <div>
        <FormLabel component="legend">
          Details of Designated Partner {personNumber}
        </FormLabel>
        <TextField
          id="outlined-controlled"
          placeholder="Place of birth (State)"
          value={
            partnerNotHavingDpinState.placeOfBirthState
              ? partnerNotHavingDpinState.placeOfBirthState
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.placeOfBirthState = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Place of birth (District)"
          value={
            partnerNotHavingDpinState.placeOfBirthDistrict
              ? partnerNotHavingDpinState.placeOfBirthDistrict
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.placeOfBirthDistrict =
              event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Mobile Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
          value={
            partnerNotHavingDpinState.mobileNo !== -1
              ? partnerNotHavingDpinState.mobileNo
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.mobileNo = +event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Email ID"
          value={
            partnerNotHavingDpinState.emailid
              ? partnerNotHavingDpinState.emailID
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.emailid = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
      </div>

      <div>
        <FormLabel component="legend">
          Occupation Type of Designated Partner {personNumber}
        </FormLabel>
      </div>

      <div>
        <FormLabel component="legend">
          Educational Qualifications of Designated Partner {personNumber}
        </FormLabel>
      </div>

      <div>
        <FormLabel component="legend">
          Present Residential Address of 1st Designated Partner
        </FormLabel>
        <TextField
          id="outlined-controlled"
          placeholder="Address Line 1"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["addressI"]
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0].addressI =
              event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Address Line 2"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["addressII"]
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0].addressII =
              event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Pincode"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["pin"] !== -1
              ? partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
                  .bodyParnerIndOfficeAddress[0]["pin"]
              : null
          }
          onChange={pincodeChangeHandler}
        />
        <FormControl>
          <InputLabel id="partner-not-having-dpin-area-select">Area</InputLabel>
          <Select
            disabled={partnerNotHavingDpinStateArea?.length > 0 ? false : true}
            labelId="partner-not-having-dpin-area-select"
            id="demo-controlled-open-select"
            value={
              partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
                .bodyParnerIndOfficeAddress[0]?.["area"]
                ? partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
                    .bodyParnerIndOfficeAddress[0]["area"]
                : ""
            }
            label="Area"
            onChange={(event: SelectChangeEvent<any>) => {
              const updatedPartnerNotHavingDpin = {
                ...partnerNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0].area =
                event.target.value;
              setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
          >
            {partnerNotHavingDpinStateArea?.map(
              (fetchedAreas: any, index: any) => (
                <MenuItem key={index} value={fetchedAreas}>
                  {fetchedAreas}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>

        <TextField
          disabled
          id="outlined-controlled"
          placeholder="Country"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["country"]
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0][
              "country"
            ] = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          disabled
          id="outlined-controlled"
          placeholder="State"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["state"]
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0][
              "state"
            ] = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          disabled
          id="outlined-controlled"
          placeholder="District"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["district"]
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0][
              "district"
            ] = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          disabled
          id="outlined-controlled"
          placeholder="City"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["city"]
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0][
              "city"
            ] = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Phone Number"
          value={
            partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
              .bodyParnerIndOfficeAddress[0]?.["phone"] !== -1
              ? partnerNotHavingDpinState.ListOfbodyParnerIndOfficeAddress
                  .bodyParnerIndOfficeAddress[0]["phone"]
              : null
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.ListOfbodyParnerIndOfficeAddress.bodyParnerIndOfficeAddress[0][
              "phone"
            ] = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        />
      </div>

      <div>
        <FormLabel component="legend">
          Duration of stay at present address of Designated Partner{" "}
          {personNumber}
        </FormLabel>
        <FormControl style={{ width: "12rem" }}>
          {/* durationStayedAtPresentAddressYears */}

          <InputLabel id="duration-of-stay-at-present-select-year">
            Year
          </InputLabel>
          <Select
            labelId="duration-of-stay-at-present-select-year"
            id="duration-of-stay-at-present-select-year"
            value={
              partnerNotHavingDpinState.durationStayedAtPresentAddressYears !==
              -1
                ? partnerNotHavingDpinState.durationStayedAtPresentAddressYears
                : "select"
            }
            label="Select an option"
            onChange={(event: SelectChangeEvent<any>) => {
              const updatedPartnerNotHavingDpin = {
                ...partnerNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.durationStayedAtPresentAddressYears =
                +event.target.value;
              setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
          >
            <MenuItem disabled value="select">
              Select Year
            </MenuItem>
            {years.map((options: any, index: any) => (
              <MenuItem key={index} value={options}>
                {options}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ width: "12rem" }}>
          <InputLabel id="duration-of-stay-at-present-select-month">
            Month
          </InputLabel>
          <Select
            labelId="duration-of-stay-at-present-select-month"
            id="duration-of-stay-at-present-select-month"
            value={
              partnerNotHavingDpinState.durationStayedAtPresentAddressMonth !==
              -1
                ? partnerNotHavingDpinState.durationStayedAtPresentAddressMonth
                : "select"
            }
            label="Select an option"
            onChange={(event: SelectChangeEvent<any>) => {
              const updatedPartnerNotHavingDpin = {
                ...partnerNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.durationStayedAtPresentAddressMonth =
                +event.target.value;
              setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
          >
            <MenuItem disabled value="select">
              Select Month
            </MenuItem>
            {months.map((options: any, index: any) => (
              <MenuItem key={index} value={options}>
                {options}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
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
            variant="contained"
            style={{ width: "fit-content" }}
            startIcon={<IoMdCloudUpload />}
          >
            Upload file
            <input type="file" hidden />
          </Button>
        </div>
        <TextField
          id="outlined-controlled"
          placeholder="Aadhar card number"
          value={
            partnerNotHavingDpinState.identityProofNo !== -1
              ? partnerNotHavingDpinState.identityProofNo
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.identityProofNo = +event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
      </div>

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
          variant="contained"
          style={{ width: "fit-content" }}
          startIcon={<IoMdCloudUpload />}
        >
          Upload file
          <input type="file" hidden />
        </Button>
      </div>

      <div>
        <TextField
          id="outlined-controlled"
          placeholder="Pan card number"
          value={
            partnerNotHavingDpinState.identityProofNo !== -1
              ? partnerNotHavingDpinState.identityProofNo
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.identityProofNo = +event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="First Name"
          value={
            partnerNotHavingDpinState.firstName
              ? partnerNotHavingDpinState.firstName
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.firstName = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Middle Name"
          value={
            partnerNotHavingDpinState.middleName
              ? partnerNotHavingDpinState.middleName
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.middleName = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Last Name"
          value={
            partnerNotHavingDpinState.surname
              ? partnerNotHavingDpinState.surname
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.surname = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
      </div>

      <div>
        <TextField
          id="outlined-controlled"
          placeholder="Father's First Name"
          value={
            partnerNotHavingDpinState.fatherFirstName
              ? partnerNotHavingDpinState.fatherFirstName
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.fatherFirstName = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Father's Middle Name"
          value={
            partnerNotHavingDpinState.fatherMiddleName
              ? partnerNotHavingDpinState.fatherMiddleName
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.fatherMiddleName = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
        <TextField
          id="outlined-controlled"
          placeholder="Father's Last Name"
          value={
            partnerNotHavingDpinState.fathersurname
              ? partnerNotHavingDpinState.fathersurname
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.fathersurname = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
      </div>
      <div>
        <FormLabel component="legend">Date Of Birth</FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            // value={
            //   partnerNotHavingDpinState.dateofBirth
            //     ? partnerNotHavingDpinState.dateofBirth
            //     : null
            // }
            onChange={(selectedDate: any) => {
              let formatedDate = moment.utc(selectedDate).format("MM/DD/YYYY");
              console.log(formatedDate);
              let updatedPartnerNotHavingDpin = {
                ...partnerNotHavingDpinState,
              };
              updatedPartnerNotHavingDpin.dateofBirth = formatedDate;
              setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
            }}
          />
        </LocalizationProvider>
      </div>
      <div>
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
            variant="contained"
            style={{ width: "fit-content" }}
            startIcon={<IoMdCloudUpload />}
          >
            Upload file
            <input type="file" hidden />
          </Button>
        </div>
        <TextField
          id="outlined-controlled"
          placeholder="Residential Proof Number"
          value={
            partnerNotHavingDpinState.residentialProofNo !== -1
              ? partnerNotHavingDpinState.residentialProofNo
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerNotHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerNotHavingDpin.residentialProofNo =
              +event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerNotHavingDpin);
          }}
        />
      </div>

      <FormLabel component="legend">
        In case of company seeking conversion of Designated Partner{" "}
        {personNumber}
      </FormLabel>
      <TextField
        id="outlined-controlled"
        placeholder="Number of shares held"
        value={
          partnerNotHavingDpinState.numberOfsharesHeld !== -1
            ? partnerNotHavingDpinState.numberOfsharesHeld
            : ""
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedPartnerHavingDpin = {
            ...partnerNotHavingDpinState,
          };
          updatedPartnerHavingDpin.numberOfsharesHeld = +event.target.value;
          setPartnerNotHavingDpinState(updatedPartnerHavingDpin);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Paid up value of shares held (in INR)"
        value={
          partnerNotHavingDpinState.paidupvalueofsharesheld !== -1
            ? partnerNotHavingDpinState.paidupvalueofsharesheld
            : ""
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedPartnerHavingDpin = {
            ...partnerNotHavingDpinState,
          };
          updatedPartnerHavingDpin.paidupvalueofsharesheld =
            +event.target.value;
          setPartnerNotHavingDpinState(updatedPartnerHavingDpin);
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
            partnerNotHavingDpinState.formOfContribution
              ? partnerNotHavingDpinState.formOfContribution
              : "select"
          }
          label="Select an option"
          onChange={(event: SelectChangeEvent<any>) => {
            let updatedPartnerHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerHavingDpin.formOfContribution = event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerHavingDpin);
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
      {partnerNotHavingDpinState.formOfContribution === "Other than cash" && (
        <FormControl variant="standard">
          <TextField
            id="outlined-controlled"
            placeholder="Please Specify"
            value={
              partnerNotHavingDpinState.otherModeOfPayment
                ? partnerNotHavingDpinState.otherModeOfPayment
                : ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPartnerNotHavingDpinState(
                (prevPartnerNotHavingDpinState: any) => ({
                  ...prevPartnerNotHavingDpinState,
                  otherModeOfPayment: event.target.value,
                })
              );
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
            partnerNotHavingDpinState.monetaryValueOfContributionInFigures !==
            -1
              ? partnerNotHavingDpinState.monetaryValueOfContributionInFigures
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedPartnerHavingDpin = {
              ...partnerNotHavingDpinState,
            };
            updatedPartnerHavingDpin.monetaryValueOfContributionInFigures =
              +event.target.value;
            setPartnerNotHavingDpinState(updatedPartnerHavingDpin);
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
            partnerNotHavingDpinState
          );

          setFillipFormData(updatedFillipFormData);
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default LNAIPartnerFormNotHavingDpin;
