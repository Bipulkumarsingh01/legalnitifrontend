import "./GSTcalculator.css";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  startruppeComponent,
  endtextComponent,
} from "../BussinessSetup/BussinessSetup";
const GSTcalculator = () => {
  const gstOptions: number[] = [3, 5, 12, 18, 28];
  const [investmentType, setInvestmentType] = useState<string>("inclusive");
  const [cost, setCost] = useState<number>(0);
  const [gstRate, setGstRate] = useState<number>(3);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalGst, setTotalGst] = useState<number>(0);
  const [profitRatio, setProfitRatio] = useState<number>(0);
  const [totalProfit, setTotalProfit] = useState<number>(0);

  const handleButtonClick = (percentage: number) => {
    setGstRate(percentage);
  };
  const handleCostChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCost(Number(e.target.value));
  };

  const handleProfitRatioChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfitRatio(Number(e.target.value));
  };
  useEffect(() => {
    calculateGst();
  }, [cost, gstRate, investmentType, profitRatio]);

  const calculateGst = () => {
    const costValue = Number(cost);
    const gstPercentage: number = gstRate / 100;

    if (investmentType === "inclusive") {
      const totalGstValue: number =
        (costValue * gstPercentage) / (1 + gstPercentage);
      const totalCostValue: number = costValue - totalGstValue;
      const totalProfitValue: number =
        (costValue * (1 - gstPercentage) * profitRatio) / 100;
      setTotalCost(Number(totalCostValue.toFixed(2)));
      setTotalGst(Number(totalGstValue.toFixed(2)));
      setTotalProfit(Number(totalProfitValue.toFixed(2)));
    } else {
      const totalGstValue: number = costValue * (gstRate / 100);
      const totalCostValue: number = costValue + totalGstValue;
      const totalProfitValue: number = (costValue * profitRatio) / 100;
      setTotalCost(Number(totalCostValue.toFixed(2)));
      setTotalGst(Number(totalGstValue.toFixed(2)));
      setTotalProfit(Number(totalProfitValue.toFixed(2)));
    }
  };
  return (
    <Box className="lnai-gstcalculator-mainBox">
      <Box className="lnai-gstcalculator-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          GST Calculator
        </Typography>
        <Box className="leftbox-gstcalculator-textpart">
          <Typography component={"p"}>
            Don't know how to calculate GST?
          </Typography>
          <Typography component={"h5"} variant="h6">
            Get the best GST calculator in India. Easy GST calculation in
            seconds, <br /> anytime and anywhere!
          </Typography>
        </Box>
        <Box className="gstcalculator-button-switch">
          <Button
            variant={
              investmentType === "inclusive"
                ? "LNAIPrimaryButton"
                : "LNAIBasicLight"
            }
            sx={{ width: "210px" }}
            type="submit"
            onClick={() => {
              setInvestmentType("inclusive");
            }}
          >
            Inclusive
          </Button>
          <Button
            variant={
              investmentType === "exclusive"
                ? "LNAIPrimaryButton"
                : "LNAIBasicLight"
            }
            sx={{ width: "210px" }}
            type="submit"
            onClick={() => {
              setInvestmentType("exclusive");
            }}
          >
            Exclusive
          </Button>
        </Box>
        <Box className="leftrightbox-gstcalculator">
          <Box className="leftbox-gstcalculator">
            <Box className="left-gstcalculator-inputpart">
              <Box className="left-gstcalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Cost of Goods/Services
                </Typography>
                <TextField
                  placeholder="Enter your salary"
                  value={cost}
                  onChange={handleCostChange}
                  sx={{ width: "350px" }}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box className="left-gstcalculator-inputs">
                <Typography component={"h3"} variant="h5">
                  Select GST Rates
                </Typography>
                <Box className="left-gstcalculator-inputs-button-switching ">
                  {gstOptions.map((percentage) => (
                    <Button
                      variant={
                        gstRate === percentage
                          ? "LNAIPrimaryButton"
                          : "LNAIBasicLight"
                      }
                      sx={{ width: "69px" }}
                      key={percentage}
                      onClick={() => handleButtonClick(percentage)}
                    >
                      {percentage}%
                    </Button>
                  ))}
                </Box>
              </Box>
              {investmentType === "exclusive" ? (
                <Box
                  className="left-gstcalculator-inputs"
                  style={{ marginBottom: "1rem" }}
                >
                  <Typography component={"h3"} variant="h3">
                    Profit Ratio
                  </Typography>
                  <TextField
                    placeholder="Ratio"
                    sx={{ width: "150px" }}
                    value={profitRatio}
                    onChange={handleProfitRatioChange}
                    className="lnai-tools-text-field"
                    InputProps={{
                      endAdornment: endtextComponent("%"),
                    }}
                  />
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className="rightbox-gstcalculator">
            <Box className="output-box-gstcalculator">
              <Box component={"div"}>
                <Typography variant="h2" component={"h2"}>
                  Total Selling Price Will be
                </Typography>
                <Box className="output-box-gstcalculator-insideBox">
                  ₹ {totalCost}
                </Box>
              </Box>
              <Box>
                <Typography variant="h2" component={"h2"}>
                  Total GST
                </Typography>
                <Box className="output-box-gstcalculator-insideBox">
                  ₹ {totalGst}
                </Box>
              </Box>
              {investmentType === "exclusive" ? (
                <Box>
                  <Typography variant="h2" component={"h2"}>
                    Total Profit
                  </Typography>
                  <Box className="output-box-gstcalculator-insideBox">
                    ₹ {totalProfit}
                  </Box>
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GSTcalculator;
