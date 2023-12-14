import { Box, Typography, TextField } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import { useState, useEffect } from "react";

import "./SalaryCalculator.css";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
const SalaryCalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    const calculateSalary = () => {
      const calculatedSalary: number = hourlyRate * hoursWorked;
      setSalary(calculatedSalary);
    };

    calculateSalary();
  }, [hourlyRate, hoursWorked]);

  const handleHourlyRateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHourlyRate(Number(e.target.value));
  };

  const handleHoursWorkedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHoursWorked(Number(e.target.value));
  };

  return (
    <Box className="lnai-salaryCalculator-mainBox">
      <Box className="lnai-salaryCalculator-innerBox1">
        <Typography
          variant="h1"
          className="lnai-landing-page-ai-solutions-heading-span"
        >
          Inhand Salary Calculator
        </Typography>
        <Box className="lnai-salaryCalculator-leftrightbox">
          <Box className="lnai-salaryCalculator-leftbox">
            <Box>
              <Typography component={"p"}>
                Calculate Your Monthly Salary On the Go
              </Typography>
              <Typography
                component={"h5"}
                variant="h6"
                className="innertext-salaryCalculator"
              >
                Quickly calculate your take-home salary and other deductions in
                seconds <br /> using the Salary calculator online. Enjoy easy
                and accurate results!
              </Typography>
            </Box>

            <Box className="salaryCalculator-input-boxes">
              <Box>
                <Typography component={"h3"} variant="h5">
                  Hourly Rate
                </Typography>
                <TextField
                  placeholder="Enter your salary"
                  value={hourlyRate}
                  onChange={handleHourlyRateChange}
                  sx={{ width: "300px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box>
                <Typography component={"h3"} variant="h5">
                  Hours Worked
                </Typography>

                <TextField
                  placeholder="Working Hours"
                  type="number"
                  value={hoursWorked}
                  sx={{ width: "150px" }}
                  onChange={handleHoursWorkedChange}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("hrs"),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="output-box-BussinessSetup">
            <Typography
              variant="h2"
              style={{
                fontSize: "64px",
              }}
            >
              Salary
            </Typography>
            <Box className="output-box-BussinessSetup-insideBox">
              <FaRupeeSign />
              {salary}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SalaryCalculator;
