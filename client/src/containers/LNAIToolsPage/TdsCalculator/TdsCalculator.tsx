import "./TdsCalculator.css";
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

        {/* <Box className="lnai-tdsCalcualtor-leftrightbox">
          <Box className="lnai-tdsCalcualtor-leftbox">
            <Box sx={{ height: "50%" }}>
              <Typography className="tools-main-subheading " component={"h2"}>
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
                <Typography component={"h3"} variant="h3">
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
                <Typography component={"h3"} variant="h3">
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

          <Box className="lnai-tdsCalcualtor-rightbox">
            <Box className="output-box-tdscalculator">
              <Typography variant="h2" component={"h2"}>
                TDS Amount
              </Typography>
              <Box className="output-box-sipcalculator-insideBox">
                ₹ {tdsAmount}
              </Box>
            </Box>
          </Box>
        </Box> */}

        <Box className="lnai-tdsCalcualtor-leftbox">
          <Box sx={{ height: "50%" }}>
            <Typography className="tools-main-subheading " component={"h2"}>
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
        </Box>

        <div style={{ display: "flex", width: "75%", margin: "auto" }}>
          <Box className="salaryCalculator-input-boxes">
            <Box>
              <Typography component={"h3"} variant="h3">
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
              <Typography component={"h3"} variant="h3">
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

          <Box className="lnai-tdsCalcualtor-rightbox">
            <Box className="output-box-tdscalculator">
              <Typography variant="h2" component={"h2"}>
                TDS Amount
              </Typography>
              <Box className="output-box-sipcalculator-insideBox">
                ₹ {tdsAmount}
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default TdsCalculator;
