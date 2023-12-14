import { Button } from "@mui/material";
import "./LNAIDashboardCompletedTasks.css";

const LNAIDashboardCompletedTasks = ({}: // servicesSubscribed
any) => {
  return (
    <div className="lnai-dashboard-completed-tasks-main-content-container">
      <div className="lnai-dashboard-completed-tasks-all-completed-container">
        <p>All your tasks are completed</p>
        <Button variant="LNAIPurpleGradientLight">Explore Services</Button>
      </div>
    </div>
  );
};

export default LNAIDashboardCompletedTasks;
