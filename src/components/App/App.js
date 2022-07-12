// https://nextjs.org/docs/advanced-features/custom-app
import NextHead from "next/head";
import { Container, CssBaseline } from "@mui/material";
import { NavDrawerContextProvider } from "../NavDrawer/NavDrawerContextProvider";
import { NavDrawer } from "../NavDrawer";
import { Header } from "../Header";

function App({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </NextHead>
      <CssBaseline />
      <NavDrawerContextProvider>
        <Header />
        <NavDrawer />
        <Container fixed>
          <Component {...pageProps} />
        </Container>
      </NavDrawerContextProvider>
    </>
  );
}

export { App };
