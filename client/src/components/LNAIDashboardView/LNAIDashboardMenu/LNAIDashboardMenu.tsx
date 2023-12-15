import { useState } from "react";
import "./LNAIDashboardMenu.css";
import {
  LNAIDashboardCompletedTasks,
  LNAIDashboardOngoingTasks,
  LNAIDashboardPendingTasks,
} from ".";

export const LNAIDashboardMenu = ({ servicesSubscribed }: any) => {
  const [selectedDashboardMenuItem, setSelectedDashboardMenuItem] = useState({
    pending: 3,
    ongoing: 2,
    completed: 1,
  });

  const pendingTaskContainerClickHandler = (event: any) => {
    if (
      event.currentTarget.classList.contains(
        "pending-task-container-not-expanded"
      )
    ) {
      setSelectedDashboardMenuItem({
        pending: 3,
        ongoing: 2,
        completed: 1,
      });
    }
  };

  const ongoingTaskContainerClickHandler = (event: any) => {
    if (
      event.currentTarget.classList.contains(
        "ongoing-task-container-not-expanded"
      )
    ) {
      setSelectedDashboardMenuItem({
        pending: 2,
        ongoing: 3,
        completed: 1,
      });
    }
  };
  const completedTaskContainerClickHandler = (event: any) => {
    if (
      event.currentTarget.classList.contains(
        "completed-task-container-not-expanded"
      )
    ) {
      setSelectedDashboardMenuItem({
        pending: 1,
        ongoing: 2,
        completed: 3,
      });
    }
  };

  return (
    <div className="lnai-dashboard-menu-main-container">
      <div
        className={
          selectedDashboardMenuItem.pending == 3
            ? "lnai-dashboard-menu-item pending-task-container"
            : "lnai-dashboard-menu-item pending-task-container-not-expanded"
        }
        style={{ zIndex: selectedDashboardMenuItem.pending }}
        onClick={pendingTaskContainerClickHandler}
      >
        <div className="lnai-dashboard-menu-item-pending-task-header">
          <h3>
            <span
              className={
                selectedDashboardMenuItem.pending == 3
                  ? "lnai-primary-heading"
                  : ""
              }
            >
              Pending Tasks
            </span>
          </h3>
        </div>
        <div className="lnai-dashboard-menu-item-pending-task-content">
          <LNAIDashboardPendingTasks servicesSubscribed={servicesSubscribed} />
        </div>
      </div>

      <div
        className={
          selectedDashboardMenuItem.ongoing == 3
            ? "lnai-dashboard-menu-item ongoing-task-container"
            : "lnai-dashboard-menu-item ongoing-task-container-not-expanded"
        }
        style={{ zIndex: selectedDashboardMenuItem.ongoing }}
        onClick={ongoingTaskContainerClickHandler}
      >
        <div
          className="lnai-dashboard-menu-item-ongoing-task-header"
          style={{
            position:
              selectedDashboardMenuItem.ongoing == 2 &&
              selectedDashboardMenuItem.pending == 3
                ? "absolute"
                : "static",
            bottom: 0,
            left: 0,
            right: 0,
            margin: "1rem auto",
            marginBottom: "1rem",
          }}
        >
          <h3>
            <span
              className={
                selectedDashboardMenuItem.ongoing == 3
                  ? "lnai-primary-heading"
                  : ""
              }
            >
              Ongoing Tasks
            </span>
          </h3>
        </div>
        <div className="lnai-dashboard-menu-item-ongoing-task-content">
          <LNAIDashboardOngoingTasks servicesSubscribed={servicesSubscribed} />
        </div>
      </div>

      <div
        className={
          selectedDashboardMenuItem.completed == 3
            ? "lnai-dashboard-menu-item completed-task-container"
            : "lnai-dashboard-menu-item completed-task-container-not-expanded"
        }
        style={{ zIndex: selectedDashboardMenuItem.completed }}
        onClick={completedTaskContainerClickHandler}
      >
        <div
          className="lnai-dashboard-menu-item-completed-task-header"
          style={{
            position:
              selectedDashboardMenuItem.completed !== 3 ? "absolute" : "static",
            bottom: 0,
            left: 0,
            right: 0,
            margin: "1rem auto",
            marginBottom: "1rem",
          }}
        >
          <h3>
            <span
              className={
                selectedDashboardMenuItem.completed == 3
                  ? "lnai-primary-heading"
                  : ""
              }
            >
              Completed Tasks
            </span>
          </h3>
        </div>
        <div className="lnai-dashboard-menu-item-completed-task-content">
          <LNAIDashboardCompletedTasks
            servicesSubscribed={servicesSubscribed}
          />
        </div>
      </div>
    </div>
  );
};
