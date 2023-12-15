import { Box, Typography, TextField } from "@mui/material";
import "./incometaxcalulator.css";
import { FaRupeeSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import { startruppeComponent } from "../BussinessSetup/BussinessSetup";

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  useEffect(() => {
    const calculateTax = () => {
      let calculatedTax: number = 0;
      const incomeValue = income;
      if (incomeValue <= 18200) {
        calculatedTax = 0;
      } else if (incomeValue <= 45000) {
        calculatedTax = (incomeValue - 18200) * 0.19;
      } else if (incomeValue <= 120000) {
        calculatedTax = (incomeValue - 45000) * 0.325 + 5092;
      } else if (incomeValue <= 180000) {
        calculatedTax = (incomeValue - 120000) * 0.37 + 29467;
      } else {
        calculatedTax = (incomeValue - 180000) * 0.45 + 51667;
      }

      setTax(Number(calculatedTax.toFixed(2)));
    };

    calculateTax();
  }, [income]);

  const handleIncomeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIncome(Number(e.target.value));
  };
  return (
    <Box className="lnai-incomeTaxCalculator-mainBox">
      <Box className="lnai-incomeTaxCalculator-innerBox1">
        <Typography
          variant="h1"
          className="lnai-landing-page-ai-solutions-heading-span"
        >
          Income Tax Calculator
        </Typography>
        <Typography component={"p"}>
          Plan your retirement in seconds with the retirement plan calculator
        </Typography>
        <Box className="lnai-incomeTaxCalculator-innerBox1-inner">
          <Typography
            variant="h5"
            className="lnai-incometaxcalculator-inputheading"
            component={"h5"}
          >
            Income
          </Typography>
          <TextField
            placeholder="Enter your income"
            type="number"
            value={income}
            sx={{ width: "360px" }}
            onChange={handleIncomeChange}
            className="lnai-tools-text-field"
            InputProps={{
              startAdornment: startruppeComponent(),
            }}
          />
        </Box>
        <Box>
          <Box className="output-box">
            <Typography
              variant="h2"
              style={{
                fontSize: "64px",
              }}
            >
              Tax
            </Typography>
            <Box
              sx={{
                color: "#8D04C1",
                fontSize: "54px",
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <FaRupeeSign />
              {tax}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IncomeTaxCalculator;
