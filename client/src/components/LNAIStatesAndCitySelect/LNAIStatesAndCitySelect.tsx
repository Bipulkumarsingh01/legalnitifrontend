import { Autocomplete, Grid, TextField } from "@mui/material";
import {
  citiesListIndia,
  statesAndCityListIndiaDataType,
  statesListIndia,
} from "../../utils";

const LNAIStatesAndCitySelect = ({
  handleAutoCompleteStateChange,
  handleAutoCompleteCityChange,
  formValues,
}: any) => {
  return (
    <div>
      <Grid item>
        <Autocomplete
          options={statesListIndia}
          getOptionLabel={(option: statesAndCityListIndiaDataType) =>
            option.label
          }
          renderInput={(params) => <TextField {...params} label="State *" />}
          sx={{ width: "14rem" }}
          onChange={handleAutoCompleteStateChange}
          clearOnEscape
          value={formValues.state?.key ? formValues.state : null}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          disabled={
            formValues.state?.value ? formValues.state.value?.length <= 0 : true
          }
          options={citiesListIndia[formValues.state?.value]}
          getOptionLabel={(option: statesAndCityListIndiaDataType) =>
            option.label
          }
          renderInput={(params) => <TextField {...params} label="City *" />}
          sx={{ width: "14rem" }}
          clearOnEscape
          value={formValues.city?.key ? formValues.city : null}
          onChange={handleAutoCompleteCityChange}
        />
      </Grid>
    </div>
  );
};

export default LNAIStatesAndCitySelect;
