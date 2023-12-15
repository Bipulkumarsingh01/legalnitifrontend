import { Grid } from "@mui/material";

import "./LNAIThankYou.css";

const LNAIThankYou = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      sx={{ maxHeight: "100vh" }}
      alignItems={"center"}
    >
      <Grid
        xs={3}
        className="lnai-thank-you-contact-form-main-heading-grid-item"
        item
      >
        <h1>Thankyou !</h1>
      </Grid>
      <Grid
        xs={3}
        className="lnai-thank-you-contact-form-secondary-container-grid-item"
        item
      >
        <p>
          We are extremely appreciative since, without devoted consumers like
          you, we would not exist. We appreciate your business.
        </p>
      </Grid>
      <Grid
        xs={3}
        className="lnai-thank-you-contact-form-get-back-grid-item"
        item
      >
        <p>we will get back to you soon!</p>
      </Grid>
      <Grid
        xs={3}
        className="lnai-thank-you-contact-form-contact-us-grid-item"
        item
      >
        <p>For queries feel free to contact us.</p>
      </Grid>
    </Grid>
  );
};

export default LNAIThankYou;
