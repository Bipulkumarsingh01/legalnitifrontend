import "./NpsCalculator.css";
import { Box, Typography, TextField } from "@mui/material";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
import { useEffect, useState } from "react";
const NpsCalculator = () => {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(0);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(0);
  const [totalInvestment, setTotalInvestment] = useState<number>(0);
  const [interestEarned, setInterestEarned] = useState<number>(0);
  const [maturityAmount, setMaturityAmount] = useState<number>(0);

  const calculateTotalAmount = () => {
    const interestRate: number = expectedReturnRate / 100;
    const numberOfInstallments: number = investmentPeriod * 12;
    const futureValue: number =
      ((monthlyContribution *
        ((1 + interestRate) ** numberOfInstallments - 1)) /
        interestRate) *
      (1 + interestRate);

    const totalInvestment: number = monthlyContribution * numberOfInstallments;
    const interestEarned: number = futureValue - totalInvestment;

    setTotalInvestment(Number(totalInvestment.toFixed(2)));
    setInterestEarned(Number(interestEarned.toFixed(2)));
    setMaturityAmount(Number(futureValue.toFixed(2)));
  };

  useEffect(calculateTotalAmount, [
    monthlyContribution,
    investmentPeriod,
    expectedReturnRate,
  ]);

  const handleMonthlyContributionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMonthlyContribution(parseFloat(e.target.value));
  };

  const handleInvestmentPeriodChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInvestmentPeriod(parseInt(e.target.value));
  };

  const handleExpectedReturnRateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExpectedReturnRate(parseFloat(e.target.value));
  };
  return (
    <Box className="lnai-npsCalculator-mainBox">
      <Box className="lnai-npsCalculator-innerBox1">
        <Typography
          variant="h2"
          className="lnai-landing-page-ai-solutions-heading-span"
        >
          NPS Calculator
        </Typography>
        <Box className="leftrightbox-npscalculator">
          <Box className="leftbox-npscalculator">
            <Box className="leftbox-npscalculator-textpart">
              <Typography component={"p"}>
                Find out how much money you can save for your future!
              </Typography>
              <Typography
                component={"h5"}
                variant="h6"
                className="innertext-salaryCalculator"
              >
                Calculate your National Pension Scheme amount in <br /> seconds
                using the NPS calculator!
              </Typography>
            </Box>
            <Box className="left-npscalculator-inputpart">
              <Box className="left-npscalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Monthly Contribution
                </Typography>
                <TextField
                  placeholder="Enter your salary"
                  value={monthlyContribution}
                  onChange={handleMonthlyContributionChange}
                  sx={{ width: "350px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box className="left-npscalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Investment period
                </Typography>
                <TextField
                  placeholder="Years"
                  value={investmentPeriod}
                  onChange={handleInvestmentPeriodChange}
                  sx={{ width: "190px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("yrs"),
                  }}
                />
              </Box>
              <Box className="left-npscalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Expected Return Rate
                </Typography>
                <TextField
                  value={expectedReturnRate}
                  onChange={handleExpectedReturnRateChange}
                  placeholder="Rate"
                  sx={{ width: "100px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    endAdornment: endtextComponent("%"),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="rightbox-npscalculator">
            <Box className="output-box-npscalculator">
              <Box component={"div"}>
                <Typography variant="h2" component={"h2"}>
                  Total Investment
                </Typography>
                <Box className="output-box-npscalculator-insideBox">
                  ₹ {totalInvestment}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Interest Earned
                </Typography>
                <Box className="output-box-npscalculator-insideBox">
                  ₹ {interestEarned}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Maturity Amount
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

export default NpsCalculator;
