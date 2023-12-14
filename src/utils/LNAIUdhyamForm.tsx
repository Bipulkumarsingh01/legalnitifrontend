import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";

const steps = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8",
  "Step 9",
];

const LNAIUdhyamForm = () => {
  const socialCat = [
    { label: "General" },
    { label: "SC" },
    { label: "ST" },
    { label: "OBC" },
  ];
  const Regno = [
    { label: "N/A" },
    { label: "EM-II" },
    { label: "UAM Registration number" },
  ];

  const splabled = [{ label: "Yes" }, { label: "No" }];
  const [xyt, setX] = useState(false);
  // const [em, setEm] = useState(false);
  const [lbl, setLbl] = useState(false);
  const [uam, setUam] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleChange = (event: { target: { name: any; value: any } }) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // function datePickerChangeHandler(
  //   value: unknown,
  //   _context: PickerChangeHandlerContext<DateValidationError>
  // ): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          {activeStep === 0 && (
            <>
              <Typography variant="h6">Step 1</Typography>

              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                type="tel"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                id="outlined-basic"
                label="Name Of Buisness Organization"
                variant="outlined"
              />
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="h6">Step 2</Typography>
              <Button variant="contained" component="label">
                Upload Addhar
                <input type="file" hidden />
              </Button>
              <br />

              <Button variant="contained" component="label">
                Upload PAN
                <input type="file" hidden />
              </Button>
              <br />

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Do you have GSTIN
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    onClick={() => setX(true)}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    onClick={() => setX(false)}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              {xyt && (
                <div className="x">
                  <Button variant="contained" component="label">
                    Upload GSTIN
                    <input type="file" hidden />
                  </Button>
                </div>
              )}
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography variant="h6">Step 3</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={socialCat}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Social Category" />
                )}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={splabled}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Specially abled" />
                )}
              />
            </>
          )}
          {activeStep === 3 && (
            <>
              <Typography variant="h6">Step 4</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Regno}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    onClick={() => setUam(true)}
                    {...params}
                    label="Previous EM-II/UAM Registration Number, If Any"
                  />
                )}
              />
              {uam && (
                <div>
                  <TextField
                    id="outlined-basic"
                    label="UAM"
                    variant="outlined"
                  />
                </div>
              )}
            </>
          )}
          {activeStep === 4 && (
            <>
              <Typography variant="h6">Step 5</Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Commencement" />
              </LocalizationProvider>
            </>
          )}
          {activeStep === 5 && (
            <>
              <Typography variant="h6">Step 6</Typography>
              <Typography variant="h6">Kindly Provide Bank Details</Typography>

              <TextField
                id="outlined-basic"
                label="Bank Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="IFSC Code"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Bank Account Number"
                variant="outlined"
              />
            </>
          )}
          {activeStep === 6 && (
            <>
              <Typography variant="h6">Step 7</Typography>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Major Business Activity
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Manufacturing"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Manufacturing"
                    onClick={() => setLbl(false)}
                    control={<Radio />}
                    label="Manufacturing"
                  />
                  <FormControlLabel
                    value="Services"
                    onClick={() => setLbl(true)}
                    control={<Radio />}
                    label="Services"
                  />
                </RadioGroup>
                <RadioGroup
                  row
                  aria-labelledby="radio-buttons-group-label"
                  defaultValue="Trading"
                  name="radio-buttons-group"
                >
                  {lbl && (
                    <FormControlLabel
                      value="Trading"
                      control={<Radio />}
                      label="Trading"
                    />
                  )}
                  {lbl && (
                    <FormControlLabel
                      value="Non-Trading"
                      control={<Radio />}
                      label="Non-Trading"
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </>
          )}
          {activeStep === 7 && (
            <>
              <Typography variant="h6">Step 8</Typography>
              <Typography variant="h6">Number of persons employed</Typography>

              <TextField
                id="outlined-basic"
                label="Female"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Male" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Others"
                variant="outlined"
              />
            </>
          )}
          {activeStep === 8 && (
            <>
              <Typography variant="h6">Step 9</Typography>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  1 Are you interested in getting registered on Government
                  e-Market (GeM) Portal{" "}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  2 Are you interested in getting registered on TReDS
                  Portals(one or more){" "}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  3 Are you interested in getting registered on National Career
                  Service(NCS) Portal{" "}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <br />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  4 Are you interested in getting registered on NSIC B2B Portal{" "}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <br />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  5 Are you interested in availing Free .IN Domain and a
                  business email ID{" "}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Yes"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <FormGroup>
                <FormControlLabel
                  required
                  control={<Checkbox defaultChecked />}
                  label="I confirm that the provided details are accurate to the best of my knowledge and consent to their use."
                />
                <FormControlLabel
                  required
                  control={<Checkbox defaultChecked />}
                  label="I have read and agree to Legal Niti's Terms of Service and Privacy Policy. By checking this box, I acknowledge that I have carefully reviewed and understood the terms and conditions outlined by LegalNiti. I agree to comply with all the stated policies and guidelines while using this service"
                />
              </FormGroup>
            </>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
          {activeStep > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleBack}
              sx={{ marginLeft: 8 }}
            >
              Back
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LNAIUdhyamForm;
