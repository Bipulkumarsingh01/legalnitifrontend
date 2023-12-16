import { Box, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Divider } from "@mui/material";
import "./BussinessSetup.css";
export const startruppeComponent = () => {
  return (
    <Box display="flex" alignItems="center">
      <FaRupeeSign style={{ fontSize: "18px", color: "#8D04C1" }} />
      <Divider
        orientation="vertical"
        flexItem
        style={{
          backgroundColor: "#8D04C1",
          width: "1px",
          height: "30px",
          marginRight: "8px",
        }}
      />
    </Box>
  );
};
export const endtextComponent = (text: any) => {
  return (
    <Box className="endComponentof-textfield">
      <Divider
        orientation="vertical"
        flexItem
        style={{
          backgroundColor: "#8D04C1",
          width: "1px",
          height: "30px",
          marginRight: "8px",
        }}
      />
      <Typography>{text}</Typography>
    </Box>
  );
};
const BussinessSetup = () => {
  const [investment, setInvestment] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  useEffect(() => {
    const calculateProfit = () => {
      const calculatedProfit: number = revenue - investment;
      setProfit(calculatedProfit);
    };

    calculateProfit();
  }, [investment, revenue]);

  const handleInvestmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInvestment(Number(e.target.value));
  };

  const handleRevenueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRevenue(Number(e.target.value));
  };
  return (
    <Box className="lnai-BussinessSetup-mainBox">
      <Box className="lnai-BussinessSetup-innerBox1">
        <Typography variant="h2" className="tools-main-heading">
          Business Setup Calculator
        </Typography>

        <Box className="leftright-box-BussinessSetup">
          <Box className="leftbox-bussiness">
            <Box>
              <Box className="lnai-BussinessSetup-subheading">
                <Typography component={"p"}>
                  Calculate Startup/Setup Costs
                </Typography>
              </Box>
            </Box>
            <Box className="lnai-BussinessSetup-subheading">
              <Box className="lnai-bussiness-innerBox1-inner">
                <Typography variant="h3" component={"h3"}>
                  Investment
                </Typography>
                <TextField
                  placeholder="Enter your income"
                  type="number"
                  value={investment}
                  onChange={handleInvestmentChange}
                  fullWidth
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
              <Box className="lnai-bussiness-innerBox1-inner">
                <Typography variant="h3" component={"h3"}>
                  Revenue
                </Typography>
                <TextField
                  placeholder="Enter your Revenue"
                  type="number"
                  fullWidth
                  onChange={handleRevenueChange}
                  value={revenue}
                  className="lnai-tools-text-field"
                  InputProps={{
                    startAdornment: startruppeComponent(),
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="rightbox-bussiness">
            <Box className="output-box-BussinessSetup-insideBox">
              <Typography variant="h2">Profit</Typography>
              <Box component={"div"}>₹ {profit}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BussinessSetup;
