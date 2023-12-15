import { Backdrop, CircularProgress } from "@mui/material";

const BackdropLoading = ({
  backdropLoadingState,
}: {
  backdropLoadingState: boolean;
}) => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropLoadingState}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default BackdropLoading;
