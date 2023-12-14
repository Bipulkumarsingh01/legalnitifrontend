import {
  Button,
  FormLabel,
  IconButton,
  // Input,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import LNAIPartnersDetailsForm from "./LNAIPartnersDetailsForm";

import "./LNAIPartnersMainForm.css";
import { Delete } from "../../../assets";

const LNAIPartnersMainForm = ({ fillipFormData, setFillipFormData }: any) => {
  let indHavingDpinNumArrayDesignated: any = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "individualsHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let indNotHavingDpinNumArrayDesignated: any = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "individualsNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesHavingDpinNumArrayDesignated: any = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "bodiesHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesNotHavingDpinNumArrayDesignated: any = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "bodiesNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let indHavingDpinNumArray: any = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "individualsHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let indNotHavingDpinNumArray: any = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "individualsNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesHavingDpinNumArray: any = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "bodiesHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesNotHavingDpinNumArray: any = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "bodiesNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let firstAccordationCount =
    indHavingDpinNumArray.length !== 0 ||
    indNotHavingDpinNumArray.length !== 0 ||
    bodiesHavingDpinNumArray.length !== 0 ||
    bodiesNotHavingDpinNumArray.length !== 0;

  let nonDesignatedPartnersCount =
    indHavingDpinNumArrayDesignated.length !== 0 ||
    indNotHavingDpinNumArrayDesignated.length !== 0 ||
    bodiesHavingDpinNumArrayDesignated.length !== 0 ||
    bodiesNotHavingDpinNumArrayDesignated.length !== 0;

  const clearPartnerTypeTableRowHandler = (
    selectedPartnerType: any,
    designated: boolean
  ) => {
    const updateUserDetails = {
      ...fillipFormData,
    };
    if (!designated) {
      updateUserDetails.extra.detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
        selectedPartnerType
      ] = null;
      const index =
        updateUserDetails.extra.detailsOfPartnersOtherThanDesignatedPartnersSelectedArray.indexOf(
          selectedPartnerType
        );
      if (index > -1) {
        updateUserDetails.extra.detailsOfPartnersOtherThanDesignatedPartnersSelectedArray.splice(
          index,
          1
        );
      }
      setFillipFormData(updateUserDetails);
    } else {
      updateUserDetails.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
        selectedPartnerType
      ] = null;
      const index =
        updateUserDetails.extra.detailsOfDesignatedPartnersSelectedArray.indexOf(
          selectedPartnerType
        );
      if (index > -1) {
        updateUserDetails.extra.detailsOfDesignatedPartnersSelectedArray.splice(
          index,
          1
        );
      }
      setFillipFormData(updateUserDetails);
    }
  };

  return (
    <div className="lnai-partners-main-form-partners-container">
      <div className="lnai-partners-main-form-items-container">
        <FormLabel component="legend">Number of Designated partners</FormLabel>
        <TextField
          id="outlined-controlled"
          placeholder=""
          value={
            fillipFormData.extra.numberOfDesignatedPartners
              ? fillipFormData.extra.numberOfDesignatedPartners
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedFillipFormData = {
              ...fillipFormData,
            };
            updatedFillipFormData.extra.numberOfDesignatedPartners =
              event.target.value;
            setFillipFormData(updatedFillipFormData);
          }}
          className="lnai-primary-form-input-field"
        />
      </div>

      <div className="lnai-partners-main-form-items-container">
        <FormLabel component="legend">
          Number of partners other than designated partners
        </FormLabel>
        <TextField
          id="outlined-controlled"
          placeholder=""
          value={
            fillipFormData.extra.numberOfPartnersOtherThanDesignatedPartners
              ? fillipFormData.extra.numberOfPartnersOtherThanDesignatedPartners
              : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedFillipFormData = {
              ...fillipFormData,
            };
            updatedFillipFormData.extra.numberOfPartnersOtherThanDesignatedPartners =
              event.target.value;
            setFillipFormData(updatedFillipFormData);
          }}
          className="lnai-primary-form-input-field"
        />
      </div>

      <div className="lnai-partners-main-form-items-container">
        <FormLabel component="legend">Total number of partners</FormLabel>
        <TextField
          disabled
          id="outlined-controlled"
          placeholder=""
          value={
            fillipFormData.extra.totalNumberOfPartners
              ? fillipFormData.extra.totalNumberOfPartners
              : ""
          }
          className="lnai-primary-form-input-field"
        />
      </div>

      {fillipFormData.extra.numberOfDesignatedPartners > 0 && (
        <div className="lnai-partners-main-form-items-container">
          <div>
            <FormLabel>
              <p>Details of designated partners</p>
            </FormLabel>
            <span style={{ display: "flex" }}>
              <Select
                labelId="details-of-designated-partners-select"
                id="details-of-designated-partners-select"
                disableUnderline
                value={
                  fillipFormData.extra.detailsOfDesignatedPartnersSelected
                    ? fillipFormData.extra.detailsOfDesignatedPartnersSelected
                    : "select"
                }
                label="Select an option"
                onChange={(event: SelectChangeEvent<any>) => {
                  const updateFillipFormData = {
                    ...fillipFormData,
                  };
                  updateFillipFormData.extra.detailsOfDesignatedPartnersSelected =
                    event.target.value;
                  setFillipFormData(updateFillipFormData);
                }}
                className="lnai-primary-form-select-field lnai-partner-main-form-select-field"
              >
                <MenuItem disabled value="select">
                  Select an Option
                </MenuItem>
                {Object.keys(
                  fillipFormData.extra.detailsOfDesignatedPartnersOptions
                )?.map((options: any, index: any) => (
                  <MenuItem key={index} value={options}>
                    {
                      fillipFormData.extra.detailsOfDesignatedPartnersOptions[
                        options
                      ]
                    }
                  </MenuItem>
                ))}
              </Select>
              <Button
                variant="LNAIPrimaryButtonDensed"
                disabled={
                  !fillipFormData.extra.detailsOfDesignatedPartnersSelected
                }
                onClick={() => {
                  if (
                    !fillipFormData.extra.detailsOfDesignatedPartnersSelectedArray.includes(
                      fillipFormData.extra.detailsOfDesignatedPartnersSelected
                    )
                  ) {
                    const updateFillipFormData = {
                      ...fillipFormData,
                    };

                    updateFillipFormData.extra.detailsOfDesignatedPartnersSelectedArray.push(
                      updateFillipFormData.extra
                        .detailsOfDesignatedPartnersSelected
                    );
                    setFillipFormData(updateFillipFormData);
                  }
                }}
                className="lnai-partners-main-form-add-button"
              >
                Add
              </Button>
            </span>
          </div>

          <div>
            {fillipFormData.extra.detailsOfDesignatedPartnersSelectedArray
              ?.length > 0 && (
              <TableContainer
                component={Paper}
                className="lnai-partners-main-form-table-container"
              >
                <Table aria-label="simple table" className="table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" className="tableCell">
                        Type
                      </TableCell>
                      <TableCell align="center" className="tableCell">
                        Number
                      </TableCell>
                      <TableCell align="center" className="tableCell">
                        Delete
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fillipFormData.extra.detailsOfDesignatedPartnersSelectedArray?.map(
                      (selectedPartnerType: any, index: any) => {
                        return (
                          <TableRow key={index}>
                            <TableCell align="center" className="tableCell">
                              {
                                fillipFormData.extra
                                  .detailsOfPartnersOtherThanDesignatedPartnersOptions?.[
                                  selectedPartnerType
                                ]
                              }
                            </TableCell>
                            <TableCell align="center" className="tableCell">
                              <div>
                                <input
                                  type="text"
                                  className="lnai-partners-main-formtable-input-field"
                                  value={
                                    fillipFormData.extra
                                      .detailsOfDesignatedPartnersSelectedArrayTableData?.[
                                      selectedPartnerType
                                    ]
                                      ? fillipFormData.extra
                                          .detailsOfDesignatedPartnersSelectedArrayTableData?.[
                                          selectedPartnerType
                                        ]
                                      : undefined
                                  }
                                  onChange={(event: any) => {
                                    const updatedFillipFormData = {
                                      ...fillipFormData,
                                    };
                                    updatedFillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
                                      selectedPartnerType
                                    ] = +event.target.value;

                                    setFillipFormData(updatedFillipFormData);
                                  }}
                                />
                              </div>
                            </TableCell>
                            <TableCell align="center" className="tableCell">
                              <IconButton
                                onClick={() => {
                                  clearPartnerTypeTableRowHandler(
                                    selectedPartnerType,
                                    true
                                  );
                                }}
                              >
                                <img
                                  src={Delete}
                                  alt="Delete"
                                  width={20}
                                  height={20}
                                />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>
      )}

      {fillipFormData.extra.numberOfPartnersOtherThanDesignatedPartners > 0 && (
        <div className="lnai-partners-main-form-items-container">
          <div>
            <FormLabel>
              <p>Details of partners other than designated partners</p>
            </FormLabel>
            <span style={{ display: "flex" }}>
              <Select
                labelId="details-of-partners-other-than-designated-partners-select"
                id="details-of-partners-other-than-designated-partners-select"
                disableUnderline
                value={
                  fillipFormData.extra
                    .detailsOfPartnersOtherThanDesignatedPartnersSelected
                    ? fillipFormData.extra
                        .detailsOfPartnersOtherThanDesignatedPartnersSelected
                    : "select"
                }
                label="Select an option"
                onChange={(event: SelectChangeEvent<any>) => {
                  const updateFillipFormData = {
                    ...fillipFormData,
                  };
                  updateFillipFormData.extra.detailsOfPartnersOtherThanDesignatedPartnersSelected =
                    event.target.value;
                  setFillipFormData(updateFillipFormData);
                }}
                className="lnai-primary-form-select-field lnai-partner-main-form-select-field"
              >
                <MenuItem disabled value="select">
                  Select an Option
                </MenuItem>
                {Object.keys(
                  fillipFormData.extra
                    .detailsOfPartnersOtherThanDesignatedPartnersOptions
                )?.map((options: any, index: any) => (
                  <MenuItem key={index} value={options}>
                    {
                      fillipFormData.extra
                        .detailsOfPartnersOtherThanDesignatedPartnersOptions[
                        options
                      ]
                    }
                  </MenuItem>
                ))}
              </Select>
              <Button
                variant="LNAIPrimaryButtonDensed"
                disabled={
                  !fillipFormData.extra
                    .detailsOfPartnersOtherThanDesignatedPartnersSelected
                }
                onClick={() => {
                  if (
                    !fillipFormData.extra.detailsOfPartnersOtherThanDesignatedPartnersSelectedArray.includes(
                      fillipFormData.extra
                        .detailsOfPartnersOtherThanDesignatedPartnersSelected
                    )
                  ) {
                    const updateFillipFormData = {
                      ...fillipFormData,
                    };

                    updateFillipFormData.extra.detailsOfPartnersOtherThanDesignatedPartnersSelectedArray.push(
                      updateFillipFormData.extra
                        .detailsOfPartnersOtherThanDesignatedPartnersSelected
                    );
                    setFillipFormData(updateFillipFormData);
                  }
                }}
                className="lnai-partners-main-form-add-button"
              >
                Add
              </Button>
            </span>
          </div>

          <div>
            {fillipFormData.extra
              .detailsOfPartnersOtherThanDesignatedPartnersSelectedArray
              ?.length > 0 && (
              <TableContainer
                component={Paper}
                className="lnai-partners-main-form-table-container"
              >
                <Table aria-label="simple table" className="table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" className="tableCell">
                        Type
                      </TableCell>
                      <TableCell align="center" className="tableCell">
                        Number
                      </TableCell>
                      <TableCell align="center" className="tableCell">
                        Delete
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fillipFormData.extra.detailsOfPartnersOtherThanDesignatedPartnersSelectedArray?.map(
                      (selectedPartnerType: any, index: any) => {
                        return (
                          <TableRow key={index}>
                            <TableCell align="center" className="tableCell">
                              {
                                fillipFormData.extra
                                  .detailsOfPartnersOtherThanDesignatedPartnersOptions?.[
                                  selectedPartnerType
                                ]
                              }
                            </TableCell>
                            <TableCell align="center" className="tableCell">
                              <div>
                                <input
                                  type="text"
                                  className="lnai-partners-main-formtable-input-field"
                                  value={
                                    fillipFormData.extra
                                      .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData?.[
                                      selectedPartnerType
                                    ]
                                      ? fillipFormData.extra
                                          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData?.[
                                          selectedPartnerType
                                        ]
                                      : undefined
                                  }
                                  onChange={(event: any) => {
                                    const updatedFillipFormData = {
                                      ...fillipFormData,
                                    };
                                    updatedFillipFormData.extra.detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
                                      selectedPartnerType
                                    ] = +event.target.value;

                                    setFillipFormData(updatedFillipFormData);
                                  }}
                                />
                              </div>
                            </TableCell>
                            <TableCell align="center" className="tableCell">
                              <IconButton
                                onClick={() => {
                                  clearPartnerTypeTableRowHandler(
                                    selectedPartnerType,
                                    false
                                  );
                                }}
                              >
                                {/* <MdClear /> */}
                                <img
                                  src={Delete}
                                  alt="Delete"
                                  width={20}
                                  height={20}
                                />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>
      )}

      {firstAccordationCount && (
        <div className="lnai-partners-main-form-accordation-main-container">
          {indHavingDpinNumArray.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"indHavingDpinNumArray"}
              personNumber={number}
              designated={false}
            />
          ))}
          {indNotHavingDpinNumArray.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"indNotHavingDpinNumArray"}
              personNumber={number}
              designated={false}
            />
          ))}
          {bodiesHavingDpinNumArray.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"bodiesHavingDpinNumArray"}
              personNumber={number}
              designated={false}
            />
          ))}
          {bodiesNotHavingDpinNumArray.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"bodiesNotHavingDpinNumArray"}
              personNumber={number}
              designated={false}
            />
          ))}
        </div>
      )}

      {nonDesignatedPartnersCount && (
        <div className="lnai-partners-main-form-accordation-main-container">
          {indHavingDpinNumArrayDesignated.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"indHavingDpinNumArray"}
              personNumber={number}
              designated={true}
            />
          ))}
          {indNotHavingDpinNumArrayDesignated.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"indNotHavingDpinNumArray"}
              personNumber={number}
              designated={true}
            />
          ))}
          {bodiesHavingDpinNumArrayDesignated.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"bodiesHavingDpinNumArray"}
              personNumber={number}
              designated={true}
            />
          ))}
          {bodiesNotHavingDpinNumArrayDesignated.map((number: number) => (
            <LNAIPartnersDetailsForm
              fillipFormData={fillipFormData}
              setFillipFormData={setFillipFormData}
              selectedType={"bodiesNotHavingDpinNumArray"}
              personNumber={number}
              designated={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LNAIPartnersMainForm;
