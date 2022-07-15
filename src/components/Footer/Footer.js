import { Box, Container, Typography } from "@mui/material";
import { marvelRed } from "../../../styles/colors";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: marvelRed,
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
