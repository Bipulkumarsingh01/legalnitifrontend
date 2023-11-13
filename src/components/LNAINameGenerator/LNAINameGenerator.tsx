import {
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  ListItem,
  Paper,
  RadioGroup,
  TextField,
} from "@mui/material";
import { MdCopyAll } from "react-icons/md";

import { BackdropLoading, StyledRadio } from "../../utils";
import { useState } from "react";
import { postGenerateNames } from "../../axiosActions";
import { LNAINotification } from "../../utils";

import "./LNAINameGenerator.css";

const initialNameGenFormValues = {
  companyType: "",
  companyDesc: "",
  formSubmit: false,
};

const LNAINameGenerator = () => {
  const [nameGenFormValues, setNameGenFormValues] = useState(
    initialNameGenFormValues
  );
  const [generatedNames, setGeneratedNames] = useState([]);
  const [copyNotificationState, setCopyNotificationState] = useState(false);

  const checkRequiredFields = () => {
    if (
      nameGenFormValues.companyType.length > 0 &&
      nameGenFormValues.companyDesc.length > 0
    ) {
      return false;
    }
    return true;
  };

  const companyTypeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNameGenFormValues((prevNameGenFormValues) => {
      return {
        ...prevNameGenFormValues,
        companyType: (event.target as HTMLInputElement).value,
      };
    });
  };

  const companyDescChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setNameGenFormValues((prevNameGenFormValues) => {
      return {
        ...prevNameGenFormValues,
        [name]: value,
      };
    });
  };

  const nameGenFormSubmitHandler = async (event: any) => {
    event.preventDefault();
    setNameGenFormValues((prevNameGenFormValues: any) => {
      return {
        ...prevNameGenFormValues,
        formSubmit: true,
      };
    });
    const nameGenRes = await postGenerateNames(
      nameGenFormValues?.companyType,
      nameGenFormValues?.companyDesc
    );

    if (nameGenRes.data?.available_names) {
      setGeneratedNames(nameGenRes.data.available_names);
      setNameGenFormValues((prevNameGenFormValues) => {
        return { ...prevNameGenFormValues, formSubmit: false };
      });
    }

    console.log(nameGenRes.data.available_names);
  };

  const copyGeneratedNameHandler = (event: any, name: string) => {
    navigator.clipboard.writeText(name);
    setCopyNotificationState(true);
  };

  return (
    <div>
      <form onSubmit={nameGenFormSubmitHandler}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <FormControl>
              <FormLabel id="demo-customized-radios">Company Type</FormLabel>
              <RadioGroup
                row
                defaultValue=""
                aria-labelledby="demo-customized-radios"
                name=""
                value={nameGenFormValues.companyType}
                onChange={companyTypeChangeHandler}
              >
                <FormControlLabel
                  value="1"
                  control={<StyledRadio />}
                  label="LLP"
                />
                <FormControlLabel
                  value="2"
                  control={<StyledRadio />}
                  label="Private Limited"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              placeholder="Enter company description"
              multiline
              rows={4}
              name="companyDesc"
              value={nameGenFormValues.companyDesc}
              onChange={companyDescChangeHandler}
            />
          </Grid>

          <Grid item>
            <Button
              disabled={checkRequiredFields()}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      <BackdropLoading backdropLoadingState={nameGenFormValues.formSubmit} />

      {generatedNames?.length > 0 && (
        <div className="lnai-name-generator-generated-names-parent-container">
          <Paper
            sx={{
              p: 0.5,
              m: 0,
            }}
            className="lnai-name-generator-generated-names-paper-wrapper-container"
          >
            <h3>Generated Labels</h3>
            <div className="lnai-name-generator-generated-names-container">
              {generatedNames.map((name, index) => {
                return (
                  <ListItem
                    key={index}
                    className="lnai-name-generator-generated-names-element-list-item"
                  >
                    <Chip
                      label={name}
                      onDelete={(event: any) =>
                        copyGeneratedNameHandler(event, name)
                      }
                      deleteIcon={<MdCopyAll />}
                    />
                  </ListItem>
                );
              })}
            </div>
          </Paper>
        </div>
      )}

      <LNAINotification
        notificationState={copyNotificationState}
        setNotificationState={setCopyNotificationState}
        notificationTitle="Coppied to clipboard"
        notificationMessage=""
        autoHideDuration={2000}
      />
    </div>
  );
};

export default LNAINameGenerator;
