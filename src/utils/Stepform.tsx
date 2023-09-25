import {
    Container,
    Grid,
    Typography,
    Stepper,
    Step,
    StepLabel,
    FormGroup,
    Checkbox,
    Box,
} from "@mui/material";
import { useState } from 'react'
import { Autocomplete, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DateValidationError, PickerChangeHandlerContext } from "@mui/x-date-pickers";


const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9","Step 10"];

const StepForm = () => {

    const stage = [
        { label: 'Ideation' },
        { label: 'Validation' },
        { label: 'Early traction' },
        { label: 'Scaling' },
    ];
    const intrstin = [
        { label: 'All' },
        { label: 'Other Startups' },
        { label: 'Investors' },
        { label: 'Mentors' },
        { label: 'Incubators' },
        { label: 'Accelerators' },
    ];
    const Regno = [
        { label: 'N/A' },
        { label: 'EM-II' },
        { label: 'UAM Registration number' },
    ];


    const splabled = [
        { label: 'Funded' },
        { label: 'Bootstraped' }
    ]
    const [xyt, setX] = useState(false);
    const [prdt, setP] = useState(false);
    const [em, setEm] = useState(false);
    const [up, setUp] = useState(false);
    const [upld, setUpld] = useState(false);
    const [uam, setUam] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({   
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

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

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={splabled}
                                sx={{ width: 400 }}
                                renderInput={(params) => <TextField {...params} label="Is the startup funded/bootstrapped" />} />

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={stage}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Stage" />} />
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Brief about the startup" />
                            </Box>
                        </>
                    )}
                    {activeStep === 1 && (
                        <>
                            <Typography variant="h6">Step 2</Typography>

                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Do you have Udhyog aadhar?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setX(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setX(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>
                            <br />
                            <TextField id="outlined-basic" label="Website or mobile app link, if any" variant="outlined" />
                            <TextField id="outlined-basic" label="Email" variant="outlined" type='email' />
                            <TextField id="outlined-basic" label="Phone" variant="outlined" type='tel' />
                        </>
                    )}
                    {activeStep === 2 && (
                        <>
                            <Typography variant="h6">Step 3</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={intrstin}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="You are intrested in" />} />

                            <TextField id="outlined-basic" label="Current number of employees (including founder)" variant="outlined" />
                        </>
                    )}
                    {activeStep === 3 && (
                        <>
                            <Typography variant="h6">Step 4</Typography>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Has your startup applied for any IPR (Intellectual Property Right)?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setX(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setX(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>


                            {xyt && (
                                <div>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} onClick={() => setEm(true)} label="Patent" />
                                        <FormControlLabel control={<Checkbox />} label="Trademark" />
                                        <FormControlLabel control={<Checkbox />} label="Copyright" />
                                        <FormControlLabel control={<Checkbox />} label="Design" />
                                        <FormControlLabel control={<Checkbox />} label="Plant Variety" />
                                    </FormGroup>
                                    {em && (

                                        <div >
                                            <TextField id="outlined-basic" label="Application number" variant="outlined" />

                                        </div>
                                    )}
                                </div>)}
                        </>
                    )}
                    {activeStep === 4 && (
                        <>
                            <Typography variant="h6">Step 5</Typography>

                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Is the startup creating an innovative product / service / process or improving an existing product / service / process</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setP(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setP(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>
                            {prdt && (
                                <div>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Product</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="Yes" onClick={() => setUam(true)} control={<Radio />} label="Innovation" />
                                            <FormControlLabel value="No" onClick={() => setUam(false)} control={<Radio />} label="Improvement" />

                                        </RadioGroup>
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Service</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="Yes" onClick={() => setUam(true)} control={<Radio />} label="Innovation" />
                                            <FormControlLabel value="No" onClick={() => setUam(false)} control={<Radio />} label="Improvement" />

                                        </RadioGroup>
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Process</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="Yes" onClick={() => setUam(true)} control={<Radio />} label="Innovation" />
                                            <FormControlLabel value="No" onClick={() => setUam(false)} control={<Radio />} label="Improvement" />

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            )}
                        </>
                    )}
                    {activeStep === 5 && (
                        <>
                            <Typography variant="h6">Step 6</Typography>
                            <Typography variant="h6">Please submit a brief note supporting the options chosen above for innovation, improvement and scalability.</Typography>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Please submit a brief note supporting the options chosen above for innovation, improvement and scalability." />
                            </Box>
                        </>
                    )}
                    {activeStep === 6 && (
                        <>
                            <Typography variant="h6">Step 7</Typography>

                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Is the startup creating a scalable business model with high potential of employment generation or wealth creation</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setUam(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setUam(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>


                            {uam && (
                                <div>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Employment generation" />
                                        <FormControlLabel control={<Checkbox />} label="Wealth creation" />
                                    </FormGroup>

                                </div>)}


                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Any awards/recognition received by the entity</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>
                            <Typography variant="h6">Please mention any awards/recognition received by the entity</Typography>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Please mention any awards/recognition received by the entity" />
                            </Box>
                        </>
                    )}
                    {activeStep === 7 && (
                        <>
                            <Typography variant="h6">Step 8</Typography>
                            <Typography variant="h6">What is the problem the startup is solving?</Typography>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Answer" />
                            </Box>
                            <Typography variant="h6">How does your startup propose to solve this problem?</Typography>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Answer" />
                            </Box>
                            <Typography variant="h6">What is the uniqueness of your solution?</Typography>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Answer" />
                            </Box>
                            <Typography variant="h6">How does your startup generate revenue?</Typography>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Answer" />
                            </Box>

                        </>
                    )}
                    {activeStep === 8 && (
                        <>
                            <Typography variant="h6">Step 9</Typography>

                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Do you have an videos, Pitchdeck, patent, tradematk, copyright or any other supporting docs</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setUp(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setUp(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>

                            {up && (
                                <div >
                                    <Button
                                        variant="contained"
                                        component="label"
                                    >
                                        Upload Documents
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                    {activeStep === 9 && (
                        <>
                            <Typography variant="h6">Step 10 </Typography>

                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Is the entity the result of merger or amalgamation?  </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setUpld(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setUpld(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Is the entity  formed as a result of conversion?  </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setUpld(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setUpld(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">has the entity  change its name??  </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setUpld(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setUpld(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">The entity/s CIN/LLPIN changed? </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" onClick={() => setUpld(true)} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" onClick={() => setUpld(false)} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl>
                            {upld && (
                                <div >
                                    <Button
                                        variant="contained"
                                        component="label"
                                    >
                                        Upload Documents
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                </div>
                            )}
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
        </Container >
    );
};

export default StepForm;