import { useEffect, useState } from "react";
import "./LNAIDashboardOngoingTasks.css";
import { getOngoingTasks } from "../../../../axiosActions";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { ExpandLeftArrow } from "../../../../assets";
import moment from "moment";

const LNAIDashboardOngoingTasks = ({ servicesSubscribed }: any) => {
  const [ongoingTasksLocalState, setOngoingTasksLocalState] = useState<any>({});

  useEffect(() => {
    const getOngoingTasksdata = async () => {
      const localStorageTokens = localStorage.getItem("x-users-tokens");

      if (localStorageTokens) {
        const parsedLocalStorageTokens = JSON.parse(localStorageTokens);
        const accessToken: string = parsedLocalStorageTokens["access_token"];
        const ongoingTasksData: any = await getOngoingTasks(accessToken);

        if (ongoingTasksData.status === 200) {
          setOngoingTasksLocalState({
            ...ongoingTasksData.data.ongoing_tasks,
          });
        }
      }
    };

    getOngoingTasksdata();
  }, []);

  return (
    <div className="lnai-dashboard-ongoing-tasks-content-main-container">
      {Object.keys(ongoingTasksLocalState)?.map((indUserId, indUserIndex) =>
        Object.keys(ongoingTasksLocalState?.[indUserId])?.map(
          (indOngoingTask, indOngoingTaskIndex) => (
            <Accordion className="lnai-dashboard-ongoing-tasks-main-container">
              <AccordionSummary
                expandIcon={
                  <img
                    src={ExpandLeftArrow}
                    alt="ExpandLeftArrow"
                    height={25}
                    width={25}
                    style={{ transform: "rotate(90deg)" }}
                  />
                }
                className="lnai-dashboard-ongoing-tasks-header-main-container"
              >
                <div>
                  <h4>{indOngoingTask}</h4>
                  <p>
                    Order Id :{" "}
                    <span>
                      {
                        ongoingTasksLocalState?.[indUserId][indOngoingTask]?.[
                          "order_id"
                        ]
                      }
                    </span>
                  </p>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className="lnai-dashboard-ongoing-tasks-expanded-details-container">
                  <div className="ongoing-tasks-expanded-details-item lnai-dashboard-ongoing-tasks-expanded-details-input-container">
                    <FormLabel component={"legend"}>Client Name: </FormLabel>
                    <TextField
                      id="outlined-controlled"
                      placeholder=""
                      // value={
                      //   bodiesHavingDpinState.nameBodyCorporate
                      //     ? bodiesHavingDpinState.nameBodyCorporate
                      //     : ""
                      // }
                      // onChange={(
                      //   event: React.ChangeEvent<HTMLInputElement>
                      // ) => {
                      //   let updatedPartnerNotHavingDpin = {
                      //     ...bodiesHavingDpinState,
                      //   };
                      //   updatedPartnerNotHavingDpin.nameBodyCorporate =
                      //     event.target.value;
                      //   setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
                      // }}
                      className="lnai-dashboard-ongoing-tasks-expanded-detail-input-field lnai-primary-form-input-field"
                    />
                  </div>

                  <div className="ongoing-tasks-expanded-details-item lnai-dashboard-ongoing-tasks-expanded-details-input-container">
                    <FormLabel component={"legend"}>
                      Assigned Professional Name:
                    </FormLabel>
                    <TextField
                      id="outlined-controlled"
                      placeholder=""
                      // value={
                      //   bodiesHavingDpinState.nameBodyCorporate
                      //     ? bodiesHavingDpinState.nameBodyCorporate
                      //     : ""
                      // }
                      // onChange={(
                      //   event: React.ChangeEvent<HTMLInputElement>
                      // ) => {
                      //   let updatedPartnerNotHavingDpin = {
                      //     ...bodiesHavingDpinState,
                      //   };
                      //   updatedPartnerNotHavingDpin.nameBodyCorporate =
                      //     event.target.value;
                      //   setBodiesHavingDpinState(updatedPartnerNotHavingDpin);
                      // }}
                      className="lnai-dashboard-ongoing-tasks-expanded-detail-input-field lnai-primary-form-input-field"
                    />
                  </div>

                  <div className="ongoing-tasks-expanded-details-item lnai-dashboard-ongoing-tasks-expanded-details-timing-container">
                    <p className="service-start-date-timings">
                      Service Start Date:{" "}
                      {moment(
                        +ongoingTasksLocalState?.[indUserId][indOngoingTask]?.[
                          "service_slot"
                        ]
                      ).format("DD/MM/YYYY")}
                    </p>

                    <p className="service-start-time-timings">
                      Service Start Time:{" "}
                      {moment(
                        +ongoingTasksLocalState?.[indUserId][indOngoingTask]?.[
                          "service_slot"
                        ]
                      ).format("h:mm A")}
                    </p>
                  </div>

                  <div className="ongoing-tasks-expanded-details-item lnai-dashboard-ongoing-tasks-expanded-details-billing-container">
                    <p>Billing Address: </p>
                    <code style={{ display: "block" }}>
                      <p>
                        {
                          ongoingTasksLocalState?.[indUserId][indOngoingTask]
                            ?.billing_addr.addr_line1
                        }
                      </p>
                      <p>
                        {
                          ongoingTasksLocalState?.[indUserId][indOngoingTask]
                            ?.billing_addr.city
                        }
                        ,{" "}
                        {
                          ongoingTasksLocalState?.[indUserId][indOngoingTask]
                            ?.billing_addr.state
                        }
                      </p>
                      <p>
                        {
                          ongoingTasksLocalState?.[indUserId][indOngoingTask]
                            ?.billing_addr.pincode
                        }
                      </p>
                    </code>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          )
        )
      )}
    </div>
  );
};

export default LNAIDashboardOngoingTasks;
