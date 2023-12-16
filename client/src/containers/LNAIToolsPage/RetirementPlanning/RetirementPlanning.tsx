import { Box, Typography, TextField } from "@mui/material";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
import { FaRupeeSign } from "react-icons/fa";
import { useState, useEffect } from "react";

import "./RetirementPlanning.css";
const RetirementPlanning = () => {
  const [currentAge, setCurrentAge] = useState<number>(0);
  const [retirementAge, setRetirementAge] = useState<number>(0);
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [retirementSavings, setRetirementSavings] = useState<number>(0);

  useEffect(() => {
    const calculateRetirementSavings = () => {
      const yearsToRetirement: number = retirementAge - currentAge;
      const monthlyInterestRate: number = interestRate / 100 / 12;
      const totalMonths: number = yearsToRetirement * 12;
      const calculatedRetirementSavings: number = Math.ceil(
        (monthlySavings * ((1 + monthlyInterestRate) ** totalMonths - 1)) /
          monthlyInterestRate
      );
      setRetirementSavings(calculatedRetirementSavings);
    };

    calculateRetirementSavings();
  }, [currentAge, retirementAge, monthlySavings, interestRate]);

  const handleCurrentAgeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCurrentAge(Number(e.target.value));
  };

  const handleRetirementAgeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRetirementAge(Number(e.target.value));
  };

  const handleMonthlySavingsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMonthlySavings(Number(e.target.value));
  };

  const handleInterestRateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInterestRate(Number(e.target.value));
  };
  return (
    <Box className="lnai-Retirement-mainBox">
      <Box className="lnai-Retirement-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          Online Retirement Planning Calculator
        </Typography>

        <Box className="leftrightbox-retirement">
          <Box className="leftbox-retirement">
            <Box className="leftbox-input-retirement">
              <Typography component={"h3"} variant="h5">
                Current Age
              </Typography>
              <TextField
                value={currentAge}
                onChange={handleCurrentAgeChange}
                placeholder="Your Current Age"
                type="number"
                sx={{ width: "200px" }}
                className="lnai-tools-text-field"
                InputProps={{
                  endAdornment: endtextComponent("Age"),
                }}
              />
            </Box>
            <Box className="leftbox-input-retirement">
              <Typography component={"h3"} variant="h5">
                Retirement Age
              </Typography>
              <TextField
                value={retirementAge}
                onChange={handleRetirementAgeChange}
                placeholder="Your Retirement Age"
                type="number"
                sx={{ width: "200px" }}
                className="lnai-tools-text-field"
                InputProps={{
                  endAdornment: endtextComponent("Age"),
                }}
              />
            </Box>
            <Box className="leftbox-input-retirement">
              <Typography
                variant="h5"
                className="lnai-incometaxcalculator-inputheading"
                component={"h3"}
              >
                Monthly Saving
              </Typography>
              <TextField
                value={monthlySavings}
                onChange={handleMonthlySavingsChange}
                placeholder="Enter Monthly Savings "
                type="number"
                sx={{ width: "240px" }}
                className="lnai-tools-text-field"
                InputProps={{
                  startAdornment: startruppeComponent(),
                }}
              />
            </Box>
            <Box className="leftbox-input-retirement">
              <Typography component={"h3"} variant="h5">
                Interest Rate
              </Typography>
              <TextField
                placeholder="Your Current Age"
                value={interestRate}
                onChange={handleInterestRateChange}
                type="number"
                sx={{ width: "180px" }}
                className="lnai-tools-text-field"
                InputProps={{
                  endAdornment: endtextComponent("%"),
                }}
              />
            </Box>
          </Box>
          <Box className="rightbox-retirement">
            <Box className="output-box-retirement">
              <Typography component={"h2"} variant="h2">
                Retirement Savings
              </Typography>
              <Box>
                <FaRupeeSign />
                {retirementSavings}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RetirementPlanning;
