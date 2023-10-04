import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { getPincodeDetails } from "../../../axiosActions";

const LNAIDynamicPincode = ({ fillipFormData, setFillipFormData }: any) => {
  const pincodeChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value?.length === 6) {
      //       Gandinagar Tumkur	TUMKUR	Karnataka
      // Melekote	TUMKUR	Karnataka
      // S G Extn Tumkur	TUMKUR	Karnataka
      // S.G.Extension Tumkur	TUMKUR	Karnataka
      // Settihalli	TUMKUR	Karnataka
      // Sit Campus	TUMKUR	Karnataka
      // Someswarapuram	TUMKUR	Karnataka

      // const responseJSON = {
      //   area: [
      //     "Gandinagar Tumkur",
      //     "Settihalli",
      //     "Jayanagar Extn Tumkur",
      //     "S G Extn Tumkur",
      //     "Sit Campus",
      //     "Someswarapuram",
      //   ],
      //   country: "India",
      //   city: "Tumkur",
      //   district: "Tumkur",
      //   state: "Karnataka",
      //   error: "",
      //   message: "Data fetched Successfully",
      // };
      const response: any = await getPincodeDetails(event.target.value);
      if (response.status == 200) {
        console.log(response.data);
        // const parsedResponseData: any = JSON.parse(response);
        const updateFillipFormData = {
          ...fillipFormData,
        };
        updateFillipFormData.registeredAddress.country = response.data?.country;
        updateFillipFormData.registeredAddress.state = response.data?.state;
        updateFillipFormData.registeredAddress.district =
          response.data?.district;
        updateFillipFormData.registeredAddress.city = response.data.city;
        updateFillipFormData.extra.area = response.data.area;

        setFillipFormData(updateFillipFormData);
      }
    }
  };
  return (
    <div>
      {/* <FormControl variant="standard"> */}
      <TextField
        id="outlined-controlled"
        placeholder="Address Line 1"
        value={fillipFormData.registeredAddress.addressI}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.addressI = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Address Line 2"
        value={fillipFormData.registeredAddress.addressII}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.addressII =
            event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Pincode"
        value={
          fillipFormData.registeredAddress.pin !== -1
            ? fillipFormData.registeredAddress.pin
            : null
        }
        onChange={pincodeChangeHandler}
      />
      <FormControl style={{ width: "12rem" }}>
        <InputLabel id="fillipfrom-area-select">Area</InputLabel>
        <Select
          disabled={fillipFormData.extra.area?.length > 0 ? false : true}
          labelId="fillipfrom-area-select"
          id="demo-controlled-open-select"
          value={
            fillipFormData.registeredAddress.area
              ? fillipFormData.registeredAddress.area
              : ""
          }
          label="Area"
          onChange={(event: SelectChangeEvent<any>) => {
            const updateFillipFormData = {
              ...fillipFormData,
            };
            updateFillipFormData.registeredAddress.area = event.target.value;
            setFillipFormData(updateFillipFormData);
          }}
        >
          {fillipFormData.extra.area?.map((fetchedAreas: any, index: any) => (
            <MenuItem key={index} value={fetchedAreas}>
              {fetchedAreas}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        disabled
        id="outlined-controlled"
        placeholder="Country"
        value={fillipFormData.registeredAddress.country}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.country = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        disabled
        id="outlined-controlled"
        placeholder="State"
        value={fillipFormData.registeredAddress.state}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.state = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        disabled
        id="outlined-controlled"
        placeholder="District"
        value={fillipFormData.registeredAddress.district}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.district = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        disabled
        id="outlined-controlled"
        placeholder="City"
        value={fillipFormData.registeredAddress.city}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.city = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Phone Number"
        value={
          fillipFormData.registeredAddress.phone !== -1
            ? fillipFormData.registeredAddress.phone
            : null
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.phone = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Mobile Number (Without +91/0)"
        value={
          fillipFormData.registeredAddress.mobile !== -1
            ? fillipFormData.registeredAddress.mobile
            : null
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.mobile = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Email"
        value={fillipFormData.registeredAddress.email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.email = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Registrar Office Name"
        value={fillipFormData.registeredAddress.registrarOfficeName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.registrarOfficeName =
            event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      <TextField
        id="outlined-controlled"
        placeholder="Fax Number"
        value={
          fillipFormData.registeredAddress.fax !== -1
            ? fillipFormData.registeredAddress.fax
            : null
        }
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let updatedFillipFormData = {
            ...fillipFormData,
          };
          updatedFillipFormData.registeredAddress.fax = event.target.value;
          setFillipFormData(updatedFillipFormData);
        }}
      />
      {/* </FormControl> */}
    </div>
  );
};

export default LNAIDynamicPincode;
