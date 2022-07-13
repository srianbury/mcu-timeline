import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#42a5f5",
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
