import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#393E8F",
        color: "white",
        py: 2,
        mt: 2,
      }}
    >
      <Container fixed>
        <Typography variant="h4" component="span" sx={{ fontWeight: "bold" }}>
          MCU Timeline
        </Typography>
      </Container>
    </Box>
  );
}

export { Footer };
