import { Box, Typography, TextField } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
import { useState, useEffect } from "react";
const TdsCalculator = () => {
  const [income, setIncome] = useState<number>(0);
  const [tdsRate, setTdsRate] = useState<number>(10);
  const [tdsAmount, setTdsAmount] = useState<number>(0);

  const handleIncomeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIncome(parseFloat(e.target.value));
  };

  const handleTdsRateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTdsRate(parseFloat(e.target.value));
  };
  useEffect(() => {
    const calculateTdsAmount = () => {
      const amount: number = (income * tdsRate) / 100;
      setTdsAmount(amount);
    };
    calculateTdsAmount();
  }, [income, tdsRate]);

  return (
    <Box className="lnai-salaryCalculator-mainBox">
      <Box className="lnai-salaryCalculator-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          TDS Calculator
        </Typography>
        <Box className="lnai-salaryCalculator-leftrightbox">
          <Box className="lnai-salaryCalculator-leftbox">
            <Box>
              <Typography className="tools-main-subheading">
                Can't figure out how to calculate your taxes?
              </Typography>
              <Typography
                component={"h5"}
                variant="h6"
                className="innertext-salaryCalculator"
              >
                You don't need to worry. We are here to help.
              </Typography>
            </Box>

            <Box className="salaryCalculator-input-boxes">
              <Box>
                <Typography component={"h3"} variant="h5">
                  Income
                </Typography>
                <TextField
                  placeholder="Enter your income"
                  sx={{ width: "300px" }}
                  value={income}
                  onChange={handleIncomeChange}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box>
                <Typography component={"h3"} variant="h5">
                  TDS Rate
                </Typography>

                <TextField
                  placeholder="Enter your TDS rate"
                  type="number"
                  value={tdsRate}
                  onChange={handleTdsRateChange}
                  sx={{ width: "200px" }}
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
                fontSize: "60px",
              }}
            >
              TDS Amount
            </Typography>
            <Box className="output-box-BussinessSetup-insideBox">
              <FaRupeeSign />
              {tdsAmount}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TdsCalculator;
