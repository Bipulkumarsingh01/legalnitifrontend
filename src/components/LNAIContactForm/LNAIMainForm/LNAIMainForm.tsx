import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@mui/material";

import { LNAILoginGoole } from "../..";
import { saveUserLoginCred, saveUserToken } from "../../../actions";
import { postUserSignup } from "../../../axiosActions";

import "./LNAIMainForm.css";

const initialFormValues = {
  fstName: "",
  midName: "",
  lstName: "",
  email: "",
  details: "",
  phNum: undefined,
};

const LNAIMainForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialFormValues);

  const checkRequiredFields = () => {
    if (
      formValues.phNum !== null &&
      formValues.fstName.length > 0 &&
      formValues.lstName.length > 0 &&
      formValues.email.length > 0
    ) {
      return false;
    }
    return true;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const signupResponse = await postUserSignup(formValues);
    if (signupResponse.status === 201) {
      localStorage.setItem(
        "x-users-tokens",
        JSON.stringify(signupResponse.data["x-users-tokens"])
      );
      dispatch(saveUserToken(signupResponse.data["x-users-tokens"]));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <h1>Contact Us</h1>
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="fstName"
            label="First Name"
            type="text"
            value={formValues.fstName}
            onChange={handleInputChange}
            required
          />
          <TextField
            id="name-input"
            name="midName"
            label="Middle Name"
            type="text"
            value={formValues.midName}
            onChange={handleInputChange}
          />
          <TextField
            id="name-input"
            name="lstName"
            label="Last Name"
            type="text"
            value={formValues.lstName}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="text"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="phNum-input"
            name="phNum"
            label="Phone Number"
            type="number"
            value={formValues.phNum}
            onChange={handleInputChange}
            className="lnai-contact-form-component-phone-number-input-field"
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-textarea"
            label="Details"
            name="details"
            placeholder="Purpose for contacting ..."
            rows={4}
            value={formValues.details}
            onChange={handleInputChange}
            multiline
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
        <Grid item>
          <p>OR</p>
        </Grid>
        <Grid item>
          <LNAILoginGoole />
        </Grid>
      </Grid>
    </form>
  );
};
export default LNAIMainForm;
