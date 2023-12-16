import "./SIPcalculator.css";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
const SIPcalculator = () => {
  const [investmentType, setInvestmentType] = useState<string>("sip");
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(0);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(0);
  const [timePeriod, setTimePeriod] = useState<number>(0);

  // const handleInvestmentTypeChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setInvestmentType(e.target.value);
  // };

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
    setTimePeriod(parseInt(e.target.value));
  };

  const calculateTotalValue = () => {
    let totalValue = 0;
    let investedAmount = 0;
    let estimatedReturns = 0;

    if (investmentType === "sip") {
      totalValue = monthlyInvestment * (1 + expectedReturnRate) * timePeriod;
      estimatedReturns = (totalValue - monthlyInvestment) / timePeriod;
    } else if (investmentType === "lumpsum") {
      investedAmount = monthlyInvestment;
      totalValue = Math.ceil(
        monthlyInvestment * Math.pow(1 + expectedReturnRate / 100, timePeriod)
      );
      estimatedReturns = totalValue - investedAmount;
    }

    return { totalValue, investedAmount, estimatedReturns };
  };

  const { totalValue, investedAmount, estimatedReturns } =
    calculateTotalValue();

  return (
    <Box className="lnai-sipcalculator-mainBox">
      <Box className="lnai-sipcalculator-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          SIP Return Calculator
        </Typography>
        <Box className="leftbox-sipcalculator-textpart">
          <Typography component={"p"}>
            Know your SIP returns anytime, anywhere!
          </Typography>
          <Typography
            component={"h5"}
            variant="h6"
            className="innertext-salaryCalculator"
          >
            Calculate the future value of your monthly SIP <br /> investment on
            the Go!
          </Typography>
        </Box>
        <Box className="sipcalculator-button-switch">
          <Button
            variant={
              investmentType === "sip" ? "LNAIPrimaryButton" : "LNAIBasicLight"
            }
            sx={{ width: "210px" }}
            type="submit"
            onClick={() => {
              setInvestmentType("sip");
            }}
          >
            SIP
          </Button>
          <Button
            variant={
              investmentType === "lumpsum"
                ? "LNAIPrimaryButton"
                : "LNAIBasicLight"
            }
            sx={{ width: "210px" }}
            type="submit"
            onClick={() => {
              setInvestmentType("lumpsum");
            }}
          >
            Lumpsum
          </Button>
        </Box>
        <Box className="leftrightbox-sipcalculator">
          <Box className="leftbox-sipcalculator">
            <Box className="left-sipcalculator-inputpart">
              {investmentType === "sip" ? (
                <Box className="left-sipcalculator-inputs">
                  <Typography component={"h2"} variant="h2">
                    Cost of Goods/Services
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
              ) : (
                <Box className="left-sipcalculator-inputs">
                  <Typography component={"h2"} variant="h2">
                    Monthly Investment
                  </Typography>
                  <TextField
                    value={monthlyInvestment}
                    onChange={handleMonthlyInvestmentChange}
                    placeholder="Enter your salary"
                    sx={{ width: "350px" }}
                    className="lnai-tools-text-field"
                    InputProps={{
                      startAdornment: startruppeComponent(),
                    }}
                  />
                </Box>
              )}

              <Box className="left-sipcalculator-inputs">
                <Typography component={"h2"} variant="h2">
                  Expected Return Rate
                </Typography>
                <TextField
                  placeholder="Rate"
                  value={expectedReturnRate}
                  onChange={handleExpectedReturnRateChange}
                  sx={{ width: "150px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("%"),
                  }}
                />
              </Box>
              <Box
                className="left-sipcalculator-inputs"
                style={{ marginBottom: "1rem" }}
              >
                <Typography component={"h2"} variant="h2">
                  Time period
                </Typography>
                <TextField
                  placeholder="Years"
                  value={timePeriod}
                  onChange={handleTimePeriodChange}
                  sx={{ width: "150px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("yrs"),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            className="rightbox-sipcalculator"
            // style={{ paddingBottom: "-1rem" }}
          >
            <Box className="output-box-sipcalculator">
              <Box component={"div"}>
                <Typography variant="h2" component={"h2"}>
                  Total Value
                </Typography>
                <Box className="output-box-sipcalculator-insideBox">
                  ₹ {totalValue}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Invested Amount
                </Typography>
                <Box className="output-box-sipcalculator-insideBox">
                  ₹ {investedAmount}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Estimated Returns
                </Typography>
                <Box className="output-box-sipcalculator-insideBox">
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

export default SIPcalculator;
