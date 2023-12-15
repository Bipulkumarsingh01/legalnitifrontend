import "./HRAcalculator.css";
import { Box, Typography, TextField } from "@mui/material";
import { startruppeComponent } from "../BussinessSetup/BussinessSetup";
import { useState, useEffect } from "react";

const HRAcalculator = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [hraReceived, setHRAReceived] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [exemptedHRA, setExemptedHRA] = useState(0);
  const [taxableHRA, setTaxableHRA] = useState(0);

  useEffect(() => {
    const cacluateHRA = () => {
      const actualHRAReceived = Math.min(
        hraReceived,
        rentPaid,
        basicSalary * 0.5
      );
      const exemptedHRA = actualHRAReceived;
      const taxableHRA = hraReceived - exemptedHRA;

      setExemptedHRA(Number(exemptedHRA.toFixed(2)));
      setTaxableHRA(Number(taxableHRA.toFixed(2)));
    };
    cacluateHRA();
  }, [hraReceived, rentPaid, basicSalary]);

  const handleBasicSalaryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBasicSalary(parseFloat(e.target.value));
  };

  const handleHRAReceivedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHRAReceived(parseFloat(e.target.value));
  };

  const handleRentPaidChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRentPaid(parseFloat(e.target.value));
  };
  return (
    <Box className="lnai-hracalculator-mainBox">
      <Box className="lnai-hracalculator-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          House Rent Allowance Calculator
        </Typography>
        <Box className="leftrightbox-hracalculator">
          <Box className="leftbox-hracalculator">
            <Box className="leftbox-hracalculator-textpart">
              <Typography component={"p"}>
                Are you aware of how to calculate your House Rent Allowance
                exemption?
              </Typography>
              <Typography
                component={"h5"}
                variant="h6"
                className="innertext-salaryCalculator"
              >
                The HRA calculator online is your best choice to do <br />
                the job in mere seconds!
              </Typography>
            </Box>
            <Box className="left-hracalculator-inputpart">
              <Box className="left-hracalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Basic Salary
                </Typography>
                <TextField
                  value={basicSalary}
                  onChange={handleBasicSalaryChange}
                  placeholder="Enter your salary"
                  sx={{ width: "320px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box className="left-hracalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  HRA Recieved
                </Typography>
                <TextField
                  placeholder="Enter your salary"
                  value={hraReceived}
                  onChange={handleHRAReceivedChange}
                  sx={{ width: "320px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box className="left-hracalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Rent Paid
                </Typography>
                <TextField
                  placeholder="Enter your salary"
                  sx={{ width: "320px" }}
                  value={rentPaid}
                  onChange={handleRentPaidChange}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="rightbox-hracalculator">
            <Box className="output-box-hracalculator">
              <Box component={"div"}>
                <Typography variant="h2" component={"h2"}>
                  Exempted HRA
                </Typography>
                <Box className="output-box-hracalculator-insideBox">
                  ₹ {exemptedHRA}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Taxable HRA
                </Typography>
                <Box className="output-box-hracalculator-insideBox">
                  ₹ {taxableHRA}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HRAcalculator;
