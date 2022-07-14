import { useContext } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavDrawerContext } from "../NavDrawer";

function Header() {
  const { openDrawer } = useContext(NavDrawerContext);
  return (
    <Box
      sx={{
        backgroundColor: "#393E8F",
        color: "white",
        py: 2,
        mb: 2,
      }}
    >
      <Container fixed>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
          edge="start"
          disableFocusRipple={true}
          disableRipple={true}
          sx={{ mr: 2 }}
        >
          <MenuIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h4" component="span" sx={{ fontWeight: "bold" }}>
            MCU Timeline
          </Typography>
        </IconButton>
      </Container>
    </Box>
  );
}

export { Header };
