import "./PPFcalculator.css";
import { Box, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
const PPFcalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [investedAmount, setInvestedAmount] = useState<number>(0);
  const [estimatedReturns, setEstimatedReturns] = useState<number>(0);

  const calculatePPF = () => {
    const interestRatePercentage: number = interestRate / 100;
    const numberOfMonths: number = investmentPeriod * 12;
    const totalValue: number =
      monthlyInvestment *
      ((Math.pow(1 + interestRatePercentage / 12, numberOfMonths) - 1) /
        (interestRatePercentage / 12));
    const investedAmount = monthlyInvestment * numberOfMonths;
    const estimatedReturns = totalValue - investedAmount;

    setTotalValue(Number(totalValue.toFixed(2)));
    setInvestedAmount(Number(investedAmount.toFixed(2)));
    setEstimatedReturns(Number(estimatedReturns.toFixed(2)));
  };

  useEffect(calculatePPF, [monthlyInvestment, interestRate, investmentPeriod]);

  const handleMonthlyInvestmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMonthlyInvestment(parseFloat(e.target.value));
  };

  const handleInterestRateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInterestRate(parseFloat(e.target.value));
  };
  const handleInvestmentPeriodChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInvestmentPeriod(parseInt(e.target.value));
  };

  return (
    <Box className="lnai-ppfcalculator-mainBox">
      <Box className="lnai-ppfcalculator-innerBox1">
        <Typography
          variant="h2"
          className="lnai-landing-page-ai-solutions-heading-span"
        >
          Calculate Your PPF Online Now!
        </Typography>
        <Box className="leftrightbox-ppfcalculator">
          <Box className="leftbox-ppfcalculator">
            <Box className="leftbox-ppfcalculator-textpart">
              <Typography component={"p"}>
                Get accurate maturity and interest calculations with our PPF
                Calculator.
              </Typography>
              <Typography
                component={"h5"}
                variant="h6"
                className="innertext-salaryCalculator"
              >
                Calculate the maturity amount and interest earned on your Public{" "}
                <br />
                Provident Fund (PPF) investment with our PPF Calculator.
              </Typography>
            </Box>
            <Box className="left-ppfcalculator-inputpart">
              <Box className="left-ppfcalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Monthly Investment
                </Typography>
                <TextField
                  placeholder="Enter your salary"
                  value={monthlyInvestment}
                  onChange={handleMonthlyInvestmentChange}
                  sx={{ width: "350px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box className="left-ppfcalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Investment period
                </Typography>
                <TextField
                  value={investmentPeriod}
                  onChange={handleInvestmentPeriodChange}
                  placeholder="Years"
                  sx={{ width: "190px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("yrs"),
                  }}
                />
              </Box>
              <Box className="left-ppfcalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Interest Rate
                </Typography>
                <TextField
                  placeholder="Rate"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  sx={{ width: "100px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("%"),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="rightbox-ppfcalculator">
            <Box className="output-box-ppfcalculator">
              <Box component={"div"}>
                <Typography variant="h2" component={"h2"}>
                  Total Value
                </Typography>
                <Box className="output-box-ppfcalculator-insideBox">
                  ₹ {totalValue}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Invested Amount
                </Typography>
                <Box className="output-box-ppfcalculator-insideBox">
                  ₹ {investedAmount}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Estimated Returns
                </Typography>
                <Box className="output-box-ppfcalculator-insideBox">
                  ₹ {estimatedReturns}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PPFcalculator;
