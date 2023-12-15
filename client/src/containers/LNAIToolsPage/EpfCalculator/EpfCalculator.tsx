import "./EpfCalculator.css";
import { Box, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
const EpfCalculator = () => {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [tenure, setTenure] = useState<number>(0);
  const [maturityAmount, setMaturityAmount] = useState<number>(0);

  useEffect(() => {
    const calculateMaturityAmount = () => {
      const principal: number = monthlyContribution * tenure * 12;
      const interest: number = (principal * interestRate) / 100;
      const maturityAmount: number = principal + interest;
      setMaturityAmount(Number(maturityAmount.toFixed(2)));
    };
    calculateMaturityAmount();
  }, [monthlyContribution, interestRate, tenure]);

  const handleMonthlyContributionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMonthlyContribution(parseFloat(e.target.value));
  };

  const handleInterestRateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleTenureChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTenure(parseFloat(e.target.value));
  };
  return (
    <Box className="lnai-npsCalculator-mainBox">
      <Box className="lnai-npsCalculator-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          EPF Calculator
        </Typography>
        <Box className="leftrightbox-npscalculator">
          <Box className="leftbox-npscalculator">
            <Box className="leftbox-npscalculator-textpart">
              <Typography className="tools-main-subheading">
                Having trouble figuring out your PF, EPF Calculations?
              </Typography>
              <Typography
                component={"h5"}
                variant="h6"
                className="innertext-salaryCalculator"
              >
                Let Your Calculations Go Better PF Interest Calculator! <br />{" "}
                Ready to explore more about PF, EPF?
              </Typography>
            </Box>
            <Box className="left-npscalculator-inputpart">
              <Box className="left-npscalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Monthly Contribution
                </Typography>
                <TextField
                  placeholder="Enter your salary"
                  sx={{ width: "250px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                  value={monthlyContribution}
                  onChange={handleMonthlyContributionChange}
                />
              </Box>
              <Box className="left-npscalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Tenure
                </Typography>
                <TextField
                  placeholder="Years"
                  sx={{ width: "190px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("yrs"),
                  }}
                  value={tenure}
                  onChange={handleTenureChange}
                />
              </Box>
              <Box className="left-npscalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Interest Rate
                </Typography>
                <TextField
                  placeholder="Rate"
                  sx={{ width: "150px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("%"),
                  }}
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
              </Box>
            </Box>
          </Box>
          <Box className="rightbox-npscalculator">
            <Box className="output-box-npscalculator">
              <Box component={"div"}>
                <Typography variant="h2" component={"h2"}>
                  Total Maturity Amount
                </Typography>
                <Box className="output-box-npscalculator-insideBox">
                  ₹ {maturityAmount}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EpfCalculator;
