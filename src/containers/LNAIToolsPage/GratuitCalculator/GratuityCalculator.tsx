import { Box, Typography, TextField } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import { Divider } from "@mui/material";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
import { useState, useEffect } from "react";

const GratuityCalculator = () => {
  const [monthlyService, setMonthlyService] = useState<number>(0);
  const [yearsOfService, setYearsOfService] = useState<number>(0);
  const [gratuityAmount, setGratuityAmount] = useState<number>(0);

  useEffect(() => {
    const gratuity: number = Math.round(
      (15 * monthlyService * yearsOfService) / 26
    );
    setGratuityAmount(gratuity);
  }, [monthlyService, yearsOfService]);

  const handleMonthlyServiceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMonthlyService(parseInt(e.target.value));
  };

  const handleYearsOfServiceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setYearsOfService(parseInt(e.target.value));
  };

  return (
    <Box className="lnai-salaryCalculator-mainBox">
      <Box className="lnai-salaryCalculator-innerBox1">
        <Typography
          variant="h1"
          className="lnai-landing-page-ai-solutions-heading-span"
        >
          Gratuity Calculator
        </Typography>
        <Box className="lnai-salaryCalculator-leftrightbox">
          <Box className="lnai-salaryCalculator-leftbox">
            <Box>
              <Typography component={"p"}>
                Are you aware of your bonus eligibility?
              </Typography>
              <Typography
                component={"h5"}
                variant="h6"
                className="innertext-salaryCalculator"
              >
                Invest some time & understand gratuity with our <br /> gratuity
                calculator online!
              </Typography>
            </Box>

            <Box className="salaryCalculator-input-boxes">
              <Box>
                <Typography component={"h3"} variant="h5">
                  Monthly Service
                </Typography>
                <TextField
                  placeholder="Enter your income"
                  sx={{ width: "280px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                  value={monthlyService}
                  onChange={handleMonthlyServiceChange}
                  type="number"
                />
              </Box>
              <Box>
                <Typography component={"h3"} variant="h5">
                  Years of Service
                </Typography>

                <TextField
                  placeholder="Enter your TDS rate"
                  type="number"
                  sx={{ width: "180px" }}
                  value={yearsOfService}
                  onChange={handleYearsOfServiceChange}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("yrs"),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="output-box-BussinessSetup">
            <Typography
              variant="h2"
              style={{
                fontSize: "40px",
              }}
            >
              Gratuity Amount
            </Typography>
            <Box className="output-box-BussinessSetup-insideBox">
              <FaRupeeSign />
              {gratuityAmount}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GratuityCalculator;
