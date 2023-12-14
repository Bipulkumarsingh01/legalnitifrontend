import { useEffect, useState } from "react";
import "./LNAIDashboardPendingTasks.css";
import { ThemeProvider } from "@emotion/react";
import { LNAIThemeConfig } from "../../../../ThemeConfig";
import { Button } from "@mui/material";
import moment from "moment";
import { getPendingTasks } from "../../../../axiosActions";

const LNAIDashboardPendingTasks = ({}: any) => {
  const [pendingTasksLocalState, setPendingTasksLocalState] = useState<any>({
    pending_tasks: {},
    service_status: "",
  });

  useEffect(() => {
    const getPendingTasksdata = async () => {
      const localStorageTokens = localStorage.getItem("x-users-tokens");

      if (localStorageTokens) {
        const parsedLocalStorageTokens = JSON.parse(localStorageTokens);
        const accessToken: string = parsedLocalStorageTokens["access_token"];
        const subscribedServicesData: any = await getPendingTasks(accessToken);

        if (subscribedServicesData.status === 200) {
          setPendingTasksLocalState({
            pending_tasks: subscribedServicesData.data.pending_tasks,
            service_status: subscribedServicesData.data.service_status,
          });
        }
      }
    };

    getPendingTasksdata();
  }, []);

  return (
    <div className="lnai-dashboard-pending-tasks-main-container">
      <div className="lnai-dashboard-pending-tasks-main-service-status-heading-container">
        <h4 className="lnai-dashboard-pending-tasks-service-status-heading">
          <span className="lnai-primary-heading">Service Status</span> :
        </h4>
        <p>{pendingTasksLocalState?.service_status}</p>
      </div>

      <div>
        <ThemeProvider theme={LNAIThemeConfig}>
          <div style={{ display: "flex", gap: "2rem", marginTop: "0.5rem" }}>
            <table className="lnai-dashboard-pending-tasks-table">
              <tr className="lnai-dashboard-pending-tasks-table-heading-row">
                <th className="lnai-dashboard-pending-tasks-table-heading-row-item">
                  <span>Service Chosen</span>
                </th>
                <th className="lnai-dashboard-pending-tasks-table-heading-row-item">
                  <span>Service Slot</span>
                </th>
                <th className="lnai-dashboard-pending-tasks-table-heading-row-item">
                  <span>Payment</span>
                </th>
              </tr>

              {Object.keys(pendingTasksLocalState?.["pending_tasks"])?.map(
                (individualUserId: any, key: any) =>
                  Object.keys(
                    pendingTasksLocalState["pending_tasks"][individualUserId]
                  )?.map((individualServiceType) => (
                    <tr
                      key={key}
                      className="lnai-dashboard-pending-tasks-table-items-data-row"
                    >
                      <td className="lnai-dashboard-pending-tasks-table-items-data-cell">
                        {individualServiceType}
                      </td>

                      <td className="lnai-dashboard-pending-tasks-table-items-data-cell service-slot-timings-container">
                        <p className="service-slot-timings-date">
                          {moment(
                            +pendingTasksLocalState["pending_tasks"][
                              individualUserId
                            ][individualServiceType]?.service_slot
                          ).format("DD/MM/YYYY")}
                        </p>
                        <p className="service-slot-timings-time">
                          {moment(
                            +pendingTasksLocalState["pending_tasks"][
                              individualUserId
                            ][individualServiceType]?.service_slot
                          ).format("h:mm A")}
                        </p>
                      </td>

                      <td className="lnai-dashboard-pending-tasks-table-items-data-cell payment-status-container">
                        <p>
                          {
                            pendingTasksLocalState["pending_tasks"][
                              individualUserId
                            ][individualServiceType]?.payment_status
                          }
                        </p>
                      </td>
                    </tr>
                  ))
              )}
            </table>
          </div>
          <div className="lnai-dashboard-pending-tasks-pending-pay-now-button-container">
            <Button variant="LNAIPrimaryButtonDensed">Pay Now</Button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default LNAIDashboardPendingTasks;
