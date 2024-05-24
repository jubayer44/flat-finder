import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          color: "red",
        }}
      >
        404!! PAGE NOT FOUND
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
