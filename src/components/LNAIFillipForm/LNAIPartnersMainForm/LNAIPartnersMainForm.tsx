import {
  Button,
  FormLabel,
  IconButton,
  Input,
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
import { MdClear } from "react-icons/md";
import LNAIPartnersDetailsForm from "./LNAIPartnersDetailsForm";

const LNAIPartnersMainForm = ({ fillipFormData, setFillipFormData }: any) => {
  let indHavingDpinNumArrayDesignated = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "individualsHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let indNotHavingDpinNumArrayDesignated = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "individualsNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesHavingDpinNumArrayDesignated = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "bodiesHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesNotHavingDpinNumArrayDesignated = Array.from(
    {
      length:
        fillipFormData.extra.detailsOfDesignatedPartnersSelectedArrayTableData[
          "bodiesNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let indHavingDpinNumArray = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "individualsHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let indNotHavingDpinNumArray = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "individualsNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesHavingDpinNumArray = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "bodiesHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

  let bodiesNotHavingDpinNumArray = Array.from(
    {
      length:
        fillipFormData.extra
          .detailsOfPartnersOtherThanDesignatedPartnersSelectedArrayTableData[
          "bodiesNotHavingDpin"
        ],
    },
    (_, index) => index + 1
  );

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
    <div>
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
      />
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
      />
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
      />

      {fillipFormData.extra.numberOfDesignatedPartners > 0 && (
        <div>
          <FormLabel>
            <p>Details of designated partners</p>
          </FormLabel>
          <span>
            <Select
              labelId="details-of-designated-partners-select"
              id="details-of-designated-partners-select"
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
              variant="contained"
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
            >
              Add
            </Button>
          </span>

          {fillipFormData.extra.detailsOfDesignatedPartnersSelectedArray
            ?.length > 0 && (
            <TableContainer component={Paper} className="tableContainer">
              <Table aria-label="simple table" className="table">
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
                                className="full-width-input"
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
                            <IconButton>
                              <MdClear
                                onClick={() => {
                                  clearPartnerTypeTableRowHandler(
                                    selectedPartnerType,
                                    true
                                  );
                                }}
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
      )}

      {fillipFormData.extra.numberOfPartnersOtherThanDesignatedPartners > 0 && (
        <div>
          <FormLabel>
            <p>Details of partners other than designated partners</p>
          </FormLabel>
          <span>
            <Select
              labelId="details-of-partners-other-than-designated-partners-select"
              id="details-of-partners-other-than-designated-partners-select"
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
              variant="contained"
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
            >
              Add
            </Button>
          </span>

          {fillipFormData.extra
            .detailsOfPartnersOtherThanDesignatedPartnersSelectedArray?.length >
            0 && (
            <TableContainer component={Paper} className="tableContainer">
              <Table aria-label="simple table" className="table">
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
                                className="full-width-input"
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
                            <IconButton>
                              <MdClear
                                onClick={() => {
                                  clearPartnerTypeTableRowHandler(
                                    selectedPartnerType,
                                    false
                                  );
                                }}
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
      )}

      <div>
        {indHavingDpinNumArray.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"indHavingDpinNumArray"}
            personNumber={number}
            designated={false}
          />
        ))}
        {indNotHavingDpinNumArray.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"indNotHavingDpinNumArray"}
            personNumber={number}
            designated={false}
          />
        ))}
        {bodiesHavingDpinNumArray.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"bodiesHavingDpinNumArray"}
            personNumber={number}
            designated={false}
          />
        ))}
        {bodiesNotHavingDpinNumArray.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"bodiesNotHavingDpinNumArray"}
            personNumber={number}
            designated={false}
          />
        ))}
      </div>

      <div>
        {indHavingDpinNumArrayDesignated.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"indHavingDpinNumArray"}
            personNumber={number}
            designated={true}
          />
        ))}
        {indNotHavingDpinNumArrayDesignated.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"indNotHavingDpinNumArray"}
            personNumber={number}
            designated={true}
          />
        ))}
        {bodiesHavingDpinNumArrayDesignated.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"bodiesHavingDpinNumArray"}
            personNumber={number}
            designated={true}
          />
        ))}
        {bodiesNotHavingDpinNumArrayDesignated.map((number) => (
          <LNAIPartnersDetailsForm
            fillipFormData={fillipFormData}
            setFillipFormData={setFillipFormData}
            selectedType={"bodiesNotHavingDpinNumArray"}
            personNumber={number}
            designated={true}
          />
        ))}
      </div>
    </div>
  );
};

export default LNAIPartnersMainForm;
