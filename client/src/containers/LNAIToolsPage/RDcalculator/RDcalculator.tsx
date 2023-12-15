import "./RDcalculator.css";
import { Box, Typography, TextField } from "@mui/material";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
import { useState, useEffect } from "react";
const RDcalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(0);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(0);
  const [timePeriod, setTimePeriod] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [investedAmount, setInvestedAmount] = useState<number>(0);
  const [estimatedReturns, setEstimatedReturns] = useState<number>(0);

  useEffect(() => {
    const calculateRD = () => {
      const totalMonths: number = timePeriod * 12;
      const totalInvestment: number = monthlyInvestment * totalMonths;
      const interestRatePerMonth: number = expectedReturnRate / 1200;
      const maturityAmount: number =
        monthlyInvestment *
        ((Math.pow(1 + interestRatePerMonth, totalMonths) - 1) /
          interestRatePerMonth);
      const returns: number = maturityAmount - totalInvestment;

      setTotalValue(Number(maturityAmount.toFixed(2)));
      setInvestedAmount(Number(totalInvestment.toFixed(2)));
      setEstimatedReturns(Number(returns.toFixed(2)));
    };
    calculateRD();
  }, [monthlyInvestment, expectedReturnRate, timePeriod]);

  const handleMonthlyInvestmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMonthlyInvestment(parseFloat(e.target.value));
  };

  const handleExpectedReturnRateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExpectedReturnRate(parseFloat(e.target.value));
  };

  const handleTimePeriodChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTimePeriod(parseFloat(e.target.value));
  };

  return (
    <Box className="lnai-RDcalculator-mainBox">
      <Box className="lnai-RDcalculator-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          RD Calculator For Maturity Amount
        </Typography>
        <Box className="leftrightbox-RDcalculator">
          <Box className="leftbox-RDcalculator">
            <Box className="leftbox-RDcalculator-textpart">
              <Typography component={"p"}>
                Know your Future RD returns in just a click with the RD
                CalculatorX
              </Typography>
            </Box>
            <Box className="left-RDcalculator-inputpart">
              <Box className="left-RDcalculator-inputs">
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
              <Box className="left-RDcalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Time period
                </Typography>
                <TextField
                  placeholder="Years"
                  value={timePeriod}
                  onChange={handleTimePeriodChange}
                  sx={{ width: "250px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("yrs"),
                  }}
                />
              </Box>
              <Box className="left-RDcalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Expected Return Rate
                </Typography>
                <TextField
                  value={expectedReturnRate}
                  onChange={handleExpectedReturnRateChange}
                  placeholder="Rate"
                  sx={{ width: "180px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("%"),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="rightbox-RDcalculator">
            <Box className="output-box-RDcalculator">
              <Box component={"div"}>
                <Typography variant="h2" component={"h2"}>
                  Total Value
                </Typography>
                <Box className="output-box-RDcalculator-insideBox">
                  ₹ {totalValue}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Invested Amount
                </Typography>
                <Box className="output-box-RDcalculator-insideBox">
                  ₹ {investedAmount}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Estimated Returns
                </Typography>
                <Box className="output-box-RDcalculator-insideBox">
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

export default RDcalculator;
